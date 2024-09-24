import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AI } from "./ai";
import { AIState, ClientMessage } from "./actions";
import { getWorkflow } from "./actions";
import { generateId } from "ai";
import { Message } from "./models";
const WORKFLOW_ID = "wf_cm18jvw3z000109s6vsrvzsgc"; // TODO: update to the workflow id
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Scout Example Chatbot",
  description: "Example Chatbot using Scout",
};

const getInitialUIState = async (): Promise<AIState> => {
  const agent = await getWorkflow(WORKFLOW_ID);

  const SEED_MESSAGE = Message.parse({
    id: generateId(),
    role: "assistant",
    content: "Hello! I'm an AI assistant. How can I help you today?",
    createdAt: new Date(),
    displayName: agent.workflow_config.workflow_display_name,
    imgUrl: agent.workflow_config.workflow_img_url || null,
  });

  return {
    agent,
    user: {
      display_name: "You",
      imgUrl:
        "https://ghexww3n55fveb5i.public.blob.vercel-storage.com/T04TMGM7A8L-U04T4GQ5LKH-59b3294503ef-512-9F6XxRVWgBPWYEev74Pg9JHWOGg8jJ.png",
    },
    messages: [SEED_MESSAGE],
  };
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialUIState = await getInitialUIState();

  return (
    <html lang="en">
      <AI initialUIState={initialUIState}>
        <body className={`${geistSans.variable} ${geistMono.variable}`}>
          {children}
        </body>
      </AI>
    </html>
  );
}
