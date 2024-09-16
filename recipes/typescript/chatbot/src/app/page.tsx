'use client';
import { SyntheticEvent, useEffect, useRef, useState } from "react"
import ReactMarkdown from 'react-markdown'
import styles from "./page.module.css"
import { ScoutClient } from "scoutos"


const LLM_BLOCK_ID = null // TODO: update to the block id of the LLM block
const WORKFLOW_ID = null // TODO: update to the workflow id
const SCOUT_API_KEY = null // TODO: update to the scout api key (find in the scout dashboard https://www.scoutos.com/dashboard/settings > `API Keys`)


interface Message {
  [key: string]: string
}


export default function Home() {

  const scout = useRef<ScoutClient | null>(null);
  const streamedResponse = useRef();
  const [promptInput, setPromptInput] = useState('')
  const [userMessages, setUserMessages] = useState<Message>({})
  const [botMessages, setBotMessages] = useState<Message>({})

  useEffect(() => {
    if (!WORKFLOW_ID) throw new Error('WORKFLOW_ID is required')
    if (!LLM_BLOCK_ID) throw new Error('LLM_BLOCK_ID is required')
    if (!SCOUT_API_KEY) throw new Error('SCOUT_API_KEY is required')
    const client = new ScoutClient({ apiKey: SCOUT_API_KEY });
    scout.current = client;
  }, [])

  const parseStreamEvent = (chunk: any, key: string) => {
    const blockEvent = chunk.name
    const blockId = chunk?.data?.block_id
    const updateType = chunk?.data?.update_type
    if (
      blockId === LLM_BLOCK_ID && 
      blockEvent === 'block_state_updated' && 
      updateType === 'partial'
    ) {
      const output = chunk?.data?.update_data?.output as string
      const existingCurrentResponse = streamedResponse.current || ''
      // @ts-ignore
      streamedResponse.current = existingCurrentResponse + output
      const updatedChatHistory = { ...botMessages, [key]: streamedResponse.current }
      // @ts-ignore
      setBotMessages(updatedChatHistory)
    } else if (
      blockEvent === 'app_run_completed' || blockEvent === 'app_run_failed' // TODO: update to `workflow_run_...`
    ) {
      // @ts-ignore
      streamedResponse.current = ''
    }
  }

  const orderedByTimestamps = Object.keys({...userMessages, ...botMessages}).sort().map((timestamp: string) => {
    const userMessage = userMessages[timestamp]
    const botMessage = botMessages[timestamp]
    return {
      message: userMessage || botMessage,
      user: userMessage ? 'user' : 'bot'
    }
  })

  const handleButtonClick = async (e: SyntheticEvent) => {
    setPromptInput('')
    e.preventDefault()
    // @ts-ignore
    const userPrompt = e.target[0]?.value
    const userMessageTimestamp = String(new Date().getTime())
    setUserMessages({ ...userMessages, [userMessageTimestamp]: userPrompt })
    if (scout?.current) {
      // Passing the whole conversation can be taxing, so we will just remember the last few messages
      const lastFewMessages = orderedByTimestamps.map(({message}) => message).slice(-5) as string[]
      // @ts-ignore
      const stream = await scout.current.workflows.executeStream(WORKFLOW_ID, {
        input: { prompt: userPrompt, chat_history: lastFewMessages.toString() },
      });
      const timestamp = String(new Date().getTime() + 1)
      for await (const chunk of stream) {
        parseStreamEvent(chunk, timestamp)
      }
    }
  }

  return (
    <div className={styles.page}>
      <div>
        <h3 className={styles.header}>Chatbot</h3>
      </div>
      <div className={styles.belly}>
        {orderedByTimestamps.map(({user, message}) =>
          <ReactMarkdown skipHtml={false} className={`${styles.convoChunk} ${user === 'bot' ? styles.bot : styles.user}`}>
            {message}
          </ReactMarkdown>
        )}
      </div>
      <div className={styles.footer}>
        <form onSubmit={handleButtonClick}>
          <textarea
            rows={6}
            title="prompt"
            name="prompt"
            className={styles.prompt}
            value={promptInput}
            onChange={e => setPromptInput(e.target.value)}
          />
          <br />
          <input type="submit" name="Chat" className={styles.button} />
        </form>
      </div>
    </div>
  );
}

