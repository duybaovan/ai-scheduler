"use client";
import React, { useEffect } from "react";
import MessageList from "./_components/MessageList";
import ChatTextInput from "./_components/ChatTextInput";
import { Message } from "ai";

export default function Home() {
  const userMessages: Message[] = [
    {
      id: "2id",
      role: "user",
      content: "I need to update the schedule for Nurse #2.",
    },
    {
      id: "4id",
      role: "user",
      content: "John C. will be available from 10am to 5pm on Monday.",
    },
    {
      id: "5id",
      role: "user",
      content: "John C. will be available from 10am to 5pm on Monday.",
    },
  ];
  const assistantMessages: Message[] = [
    {
      id: "1ida",
      role: "assistant",
      content: "Hello, how can I assist you with the scheduling today?",
    },
    { id: "3ida", role: "assistant", content: "Sure, what is the update?" },
    { id: "4ida", role: "assistant", content: "Sure, what is the update?" },
  ];

  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1id",
      role: "assistant",
      content: "Hello, how can I assist you with the scheduling today?",
    },
  ]);

  const [input, setInput] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  type Shift = { name: string; time: string } | null;

  const calendar2 = React.useState<Record<string, Record<string, Shift>>>({
    Physician: {
      Monday: { name: "Marcus A.", time: "8am-2pm" },
      Tuesday: { name: "John K. (Internal)", time: "8am-2pm" },
      Wednesday: { name: "Chris W. (Locums)", time: "8am-2pm" },
    },
    "Nurse #1": {
      Monday: null,
      Tuesday: { name: "Linda B.", time: "2am-8pm" },
      Wednesday: null,
    },
    "Nurse #2": {
      Monday: { name: "John C.", time: "10am-4pm" },
      Tuesday: null,
      Wednesday: null,
    },
    "Nurse #3": {
      Monday: null,
      Tuesday: null,
      Wednesday: { name: "Emily D.", time: "11am-5pm" },
    },
  });

  const calendar3 = React.useState<Record<string, Record<string, Shift>>>({
    Physician: {
      Monday: { name: "Marcus A.", time: "8am-2pm" },
      Tuesday: { name: "John K. (Internal)", time: "8am-2pm" },
      Wednesday: { name: "Chris W. (Locums)", time: "8am-2pm" },
    },
    "Nurse #1": {
      Monday: { name: "Emily D.", time: "2am-8pm" },
      Tuesday: { name: "Linda B.", time: "2am-8pm" },
      Wednesday: { name: "Emily D.", time: "2am-8pm" },
    },
    "Nurse #2": {
      Monday: { name: "John C.", time: "10am-4pm" },
      Tuesday: { name: "Linda B.", time: "9am-3pm" },
      Wednesday: { name: "Linda B.", time: "9am-3pm" },
    },
    "Nurse #3": {
      Monday: { name: "Linda B.", time: "9am-3pm" },
      Tuesday: { name: "John V. (internal)", time: "9am-3pm" },
      Wednesday: { name: "Emily D.", time: "11am-5pm" },
    },
  });

  const [calendarData, setCalendarData] = React.useState<
    Record<string, Record<string, Shift>>
  >({
    Physician: {
      Monday: { name: "Marcus A.", time: "8am-2pm" },
      Tuesday: null,
      Wednesday: null,
    },
    "Nurse #1": {
      Monday: null,
      Tuesday: { name: "Linda B.", time: "9am-3pm" },
      Wednesday: null,
    },
    "Nurse #2": {
      Monday: { name: "John C.", time: "10am-4pm" },
      Tuesday: null,
      Wednesday: null,
    },
    "Nurse #3": {
      Monday: null,
      Tuesday: null,
      Wednesday: { name: "Emily D.", time: "11am-5pm" },
    },
  });

  const handleInputSubmit = () => {
    if (input.trim() !== "") {
      // Find the next user message that hasn't been added to messages yet
      const nextUserMessage = userMessages.find(
        (userMsg) => !messages.some((msg) => msg.id === userMsg.id),
      );

      // Find the next assistant message that hasn't been added to messages yet
      const nextAssistantMessage = assistantMessages.find(
        (assistantMsg) => !messages.some((msg) => msg.id === assistantMsg.id),
      );

      if (nextUserMessage) {
        // Add the next user message to the messages
        setMessages((prevMessages) => [...prevMessages, nextUserMessage]);

        // Set loading to true
        setIsLoading(true);

        // Wait for 2 seconds before adding the assistant message
        setTimeout(() => {
          if (nextAssistantMessage) {
            setMessages((prevMessages) => [
              ...prevMessages,
              nextAssistantMessage,
            ]);
            setCalendarData((prevCalendarData) => {
              // Toggle between calendar2 and calendar3 based on the current state
              if (
                JSON.stringify(prevCalendarData) ===
                JSON.stringify(calendar2[0])
              ) {
                return calendar3[0];
              } else {
                return calendar2[0];
              }
            });
          }
          setIsLoading(false);
        }, 1500);
      }

      // Clear the input field
      setInput("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  return (
    <main className="flex h-full bg-gray-200">
      <div className="flex h-full w-full">
        {/* Chat interface */}
        <div className="overflow-aut flex w-1/4 flex-col bg-white p-4">
          <div className="flex-grow overflow-auto">
            <MessageList messages={messages} isMobileMode={false} />
          </div>
          <ChatTextInput
            input={input}
            handleInputChange={handleInputChange}
            handleInputSubmit={handleInputSubmit}
            isLoading={isLoading}
            isMobileMode={false}
          />
        </div>

        {/* Calendar table view */}
        <div className="h-full w-3/4 bg-white p-4">
          <table className="h-full w-full table-fixed border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="w-1/4 rounded-tl-lg bg-gray-100 p-4 text-center font-bold"></th>
                <th className="w-1/4 border border-gray-300 bg-white p-4 text-center">
                  Monday
                </th>
                <th className="w-1/4 border border-gray-300 bg-gray-100 p-4 text-center">
                  Tuesday
                </th>
                <th className="w-1/4 rounded-tr-lg border border-gray-300 bg-white p-4 text-center">
                  Wednesday
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(calendarData).map(([role, days]) => (
                <tr key={role}>
                  <td className="border border-gray-300 bg-gray-100 p-4 text-center font-bold">
                    {role}
                  </td>
                  {Object.entries(days).map(([day, shift], index) => (
                    <td
                      key={day}
                      className={`border border-gray-300 p-4 text-center ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
                    >
                      {typeof shift === "object" && shift ? (
                        <div className="h-16 rounded-md border-2 border-blue-500 bg-white p-2 shadow-sm">
                          <div>{shift.name}</div>
                          <div>{shift.time}</div>
                        </div>
                      ) : (
                        <div className="h-16 rounded-md  border-gray-300 p-2 shadow-sm"></div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
