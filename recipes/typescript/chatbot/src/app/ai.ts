import { createAI } from "ai/rsc";
import {
  ServerMessage,
  ClientMessage,
  continueConversation,
  AIState,
} from "./actions";

export const AI = createAI<ServerMessage[], AIState>({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: {
    messages: [],
  },
});

// [
//   {
//     id: "1",
//     role: "assistant",
//     display_name: "AI Assistant",
//     content: "Hello! I'm an AI assistant. How can I help you today?",
//     createdAt: new Date().toLocaleString(),
//     imgUrl:
//       "https://ghexww3n55fveb5i.public.blob.vercel-storage.com/T04TMGM7A8L-U04T4GQ5LKH-59b3294503ef-512-9F6XxRVWgBPWYEev74Pg9JHWOGg8jJ.png",
//   },
// ],
