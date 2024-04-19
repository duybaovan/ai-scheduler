import Image from "next/image";
import React from "react";
import { Message } from "ai";

interface MessageListProps {
  messages: Message[];
  isMobileMode: boolean;
}

const MessageList: React.FC<MessageListProps> = ({
  messages,
  isMobileMode,
}) => {
  return (
    <>
      {messages?.map((m, index) => (
        <div
          key={index}
          className={`mb-4 flex items-start whitespace-pre-wrap ${
            m.role === "assistant" ? "justify-end" : ""
          }`}
        >
          <div
            className={`${
              isMobileMode ? "" : "max-w-[20vw]"
            } relative flex items-start`}
          >
            {/* {m.role === "assistant" && (
              <div className="absolute left-0 top-1">ICON</div>
            )} */}
            <div
              className={`rounded-lg p-2 text-sm ${
                m.role === "user"
                  ? "bg-primary text-white"
                  : m.role === "assistant"
                    ? "ml-[44px] bg-gray-200 text-gray-700"
                    : "max-w-[100%] bg-purple-100 text-gray-700"
              }`}
              style={{ wordWrap: "break-word" }}
            >
              {m.content}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MessageList;
