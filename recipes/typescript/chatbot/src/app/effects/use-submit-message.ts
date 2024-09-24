import { SyntheticEvent, useState } from "react";
import { runWorkflow } from "../actions";
import { Message } from "../models";
import { readStreamableValue, useUIState } from "ai/rsc";
import { AIState, ClientMessage } from "@/app/actions";
import { generateId } from "ai";
import { z } from "zod";

export const useSubmitMessage = () => {
  const [promptInput, setUserMessage] = useState("");
  const [aiState, setAIState] = useUIState();

  const handleSubmitMessage = async (e: SyntheticEvent) => {
    e.preventDefault();
    const userPrompt = promptInput;
    setUserMessage("");

    const userMessage = Message.parse({
      id: generateId(),
      role: "user",
      content: userPrompt,
      createdAt: new Date(),
      displayName: "User",
    });

    console.log("userMessage", userMessage);

    setAIState((prevState: AIState) => ({
      ...prevState,
      messages: [...prevState.messages, userMessage],
    }));

    const { output } = await runWorkflow(userPrompt);

    const aiMessageId = generateId();

    // const aiMessage: ClientMessage = {
    //   id: aiMessageId,
    //   role: "assistant",
    //   display_name: aiState.agent.workflow_config.workflow_display_name,
    //   imgUrl: aiState.agent.workflow_config.workflow_img_url || null,
    //   content: "",
    //   createdAt: new Date().toLocaleString(),
    // };

    const aiMessage = Message.parse({
      id: aiMessageId,
      role: "assistant",
      displayName: aiState.agent.workflow_config.workflow_display_name,
      imgUrl: aiState.agent.workflow_config.workflow_img_url || null,
      content: "",
      createdAt: new Date(),
    });

    setAIState((prevState: AIState) => ({
      ...prevState,
      messages: [...prevState.messages, aiMessage],
    }));

    for await (const delta of readStreamableValue(output)) {
      setAIState((prevState: AIState) => {
        const newMessages = prevState.messages.map((message: ClientMessage) =>
          message.id === aiMessageId
            ? { ...message, content: message.content + delta }
            : message
        );
        return { ...prevState, messages: newMessages };
      });
    }
  };

  return {
    promptInput,
    setUserMessage,
    handleSubmitMessage,
    aiState,
  };
};
