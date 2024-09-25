import { ClientMessage } from "../actions";
import Image from "next/image";
import styles from "../page.module.css"; // Import the CSS file

const MessageComponent = (props: { message: ClientMessage }) => {
  const { message } = props;
  console.log("message", message);
  return (
    <div
      key={message.id}
      className={`border border-gray-200 bg-white w-full p-5 message flex flex-col items-start gap-4 ${
        message.role === "user" ? "self-end" : "self-start"
      }`}
      style={{
        borderRadius: "var(--Spacing-8, 8px)",
        background: "var(--Greyscale-Grayscale-0, #FFF)",
      }}
    >
      <div className="message-info flex justify-between w-full">
        <div className="flex items-center">
          {message.imgUrl && (
            <Image
              alt="avatar"
              className="rounded-full mr-2"
              width={24}
              height={24}
              src={message.imgUrl}
            />
          )}
          <span className="user-display-name text-sm font-medium">
            {message.display_name || "User"}
          </span>
        </div>
        <span
          className="text-[rgba(0,0,0,0.60)] font-normal text-[12px] leading-[20px]"
          style={{
            fontStyle: "normal",
            fontWeight: 400,
          }}
        >
          {message.createdAt.toLocaleString()}
        </span>
      </div>
      <div
        className="message-body self-stretch text-black text-sm font-normal"
        style={{
          fontWeight: 400,
        }}
      >
        {message.role === "assistant" && !message.content ? (
          <div className={styles.spinner}></div>
        ) : (
          message.content
        )}
      </div>
    </div>
  );
};
export default MessageComponent;
