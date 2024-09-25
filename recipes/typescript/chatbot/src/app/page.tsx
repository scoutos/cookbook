"use client";

import { useSubmitMessage } from "./effects/use-submit-message";
import MessageComponent from "./components/Message";
import { MessageType } from "./models";
import Image from "next/image";
export default function Home() {
  const { promptInput, setUserMessage, handleSubmitMessage, aiState } =
    useSubmitMessage();

  return (
    <div
      className="grid grid-cols-12 items-center justify-center h-screen py-2 pr-2"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <aside className="col-span-3 h-full bg-white mt-4">
        <span
          className="text-black text-base font-medium leading-6 ml-6"
          style={{
            // fontFamily: "Switzer Variable",
            fontStyle: "normal",
          }}
        >
          Inbox
        </span>
        <div className="session-items flex justify-center items-center w-full mt-[20px]">
          <div
            className="flex flex-col session-container bg-[--grey] justify-center items-center w-11/12"
            style={{
              borderRadius: "var(--Spacing-8, 8px)",
              border: "1px solid rgba(0, 0, 0, 0.10)",
            }}
          >
            <div
              className="session-item-header flex items-center self-stretch"
              style={{
                padding: "var(--Spacing-12, 12px)",
                gap: "var(--Spacing-8, 8px)",
                flex: "1 0 0",
                borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
              }}
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center justify-between">
                  <Image
                    alt="session-img"
                    className="rounded-full mr-2"
                    height={16}
                    width={16}
                    src="https://ghexww3n55fveb5i.public.blob.vercel-storage.com/T04TMGM7A8L-U04T4GQ5LKH-59b3294503ef-512-9F6XxRVWgBPWYEev74Pg9JHWOGg8jJ.png"
                  />
                  <span
                    className="text-black text-xs font-medium leading-5"
                    style={{
                      // fontFamily: "Switzer Variable",
                      fontStyle: "normal",
                    }}
                  >
                    This is the ticket title
                  </span>
                </div>
                <span
                  className="text-[rgba(0,0,0,0.60)] text-xs font-normal leading-5"
                  style={{
                    // fontFamily: "Switzer Variable",
                    fontStyle: "normal",
                  }}
                >
                  12 hours ago
                </span>
              </div>
            </div>
            <div
              className="flex flex-col justify-center items-start self-stretch"
              style={{
                padding: "var(--Spacing-12, 12px)",
                gap: "var(--Spacing-8, 8px)",
              }}
            >
              <span
                className="text-black text-sm font-normal leading-5 overflow-hidden"
                style={{
                  // fontFamily: "Switzer Variable",
                  fontStyle: "normal",
                  textOverflow: "ellipsis",
                }}
              >
                How do I get started?
              </span>
            </div>
          </div>
        </div>
      </aside>
      <div
        className="col-span-9 h-full w-full flex flex-col session-container bg-[--grey] justify-center items-center"
        style={{
          borderRadius: "var(--Spacing-8, 8px)",
          border: "1px solid rgba(0, 0, 0, 0.10)",
        }}
      >
        <div
          className="container-header border-b w-full p-3"
          style={{
            color: "#000",
            // fontFamily: "Switzer Variable",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "20px",
            padding: "14px 24px",
            borderColor: "rgba(0, 0, 0, 0.10)",
          }}
        >
          Chat
        </div>
        <div className="flex-grow flex flex-col justify-end gap-4 w-11/12">
          {aiState.messages.map((message: MessageType) => (
            <MessageComponent key={message.id} message={message} />
          ))}
        </div>
        <form onSubmit={handleSubmitMessage} className="mt-4 flex w-11/12 mb-4">
          <textarea
            className="w-full p-2"
            value={promptInput}
            onChange={(e) => setUserMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmitMessage(e);
              }
            }}
            style={{
              borderRadius: "var(--Spacing-8, 8px)",
              border: "1px solid rgba(24, 24, 27, 0.10)",
              background: "var(--Greyscale-Grayscale-0, #FFF)",
              boxShadow:
                "0px 1px 1px 0px rgba(0, 0, 0, 0.02), 0px -1.5px 1px 0px rgba(0, 0, 0, 0.08) inset",
            }}
          />
        </form>
      </div>
    </div>
  );
}
