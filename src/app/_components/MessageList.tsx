import Image from "next/image";
import React from "react";
import { Message } from "ai";
import { RiRobot2Fill } from "react-icons/ri";

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
            m.role === "assistant" ? "" : "ml-12 justify-end"
          }`}
        >
          <div
            className={`${isMobileMode ? "" : ""} relative flex items-start`}
          >
            {m.role === "assistant" && (
              <div className="absolute top-2">
                <RiRobot2Fill size={16} />
              </div>
            )}
            <div
              className={`rounded-lg p-2 text-sm ${
                m.role === "user"
                  ? "bg-primary text-white"
                  : m.role === "assistant"
                    ? "ml-6 bg-gray-200 text-gray-700"
                    : " bg-purple-100 text-gray-700"
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
