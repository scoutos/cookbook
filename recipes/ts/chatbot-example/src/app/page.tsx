'use client';
import { SyntheticEvent, useEffect, useRef, useState } from "react"
import ReactMarkdown from 'react-markdown'
import styles from "./page.module.css"
import { ScoutClient } from "scoutos"

export default function Home() {

  const scout = useRef<ScoutClient | null>(null);
  const streamedResponse = useRef<string[]>([]);
  const [chatHistory, setChat] = useState([] as string[])

  useEffect(() => {
    const token = 'secret_qb0nXpme6gZ5MLwOeoEvAa7Xuqf0o4s7pT-RiSu2xSw'
    const client = new ScoutClient({ apiKey: token });
    scout.current = client;
  }, [])

  const parseStreamEvent = (chunk: any, chatResponseIndex: number) => {
    console.log('chunk!', chunk)
    const LLM_BLOCK_ID = 'llm_gjdajp'
    const blockEvent = chunk.name
    const blockId = chunk?.data?.block_id
    const updateType = chunk?.data?.update_type
    if (blockEvent === 'app_run_started') {
      console.log("App Started")
    } else if (
      blockId === LLM_BLOCK_ID && 
      blockEvent === 'block_state_updated' && 
      updateType === 'partial'
    ) {
      const output = chunk?.data?.update_data?.output
      streamedResponse.current[chatResponseIndex] += output
      setChat(streamedResponse.current)
      console.log("setChat done")
    } else if (blockEvent === 'app_run_completed') {
      console.log('completed', streamedResponse.current)
      setChat(streamedResponse.current)
    }
  }

  const handleButtonClick = async (e: SyntheticEvent) => {
    e.preventDefault()
    const userPrompt = e.target[0]?.value
    streamedResponse.current = streamedResponse.current.concat([userPrompt, ''])
    setChat(streamedResponse.current)
    if (scout?.current) {
      const workflowId = 'app_cm0x0jews000108s6n4axqb8h'
      const chatResponseIndex = streamedResponse.current.length - 1
      const stream = await scout.current.workflows.executeStream(workflowId, {
        input: { prompt: userPrompt },
      });
      for await (const chunk of stream) {
        parseStreamEvent(chunk, chatResponseIndex)
      }
    }
  }
  return (
    <div className={styles.page}>
      <div>
        <h3 className={styles.header}>Chatbot</h3>
      </div>
      <div className={styles.belly}>
        {chatHistory.map((chat: string) =>
          <ReactMarkdown skipHtml={false} className={styles.convoChunk}>
            {chat}
          </ReactMarkdown>
        )}
      </div>
      <div className={styles.footer}>
        <form onSubmit={handleButtonClick}>
          <textarea rows={6} title="prompt" name="prompt" className={styles.prompt} />
          <br />
          <input type="submit" name="Chat" className={styles.button} />
        </form>
      </div>
    </div>
  );
}
