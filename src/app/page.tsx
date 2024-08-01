"use client";
import React, { useEffect } from "react";
import MessageList from "./_components/MessageList";
import ChatTextInput from "./_components/ChatTextInput";
import { Message } from "ai";
import SummaryScreen from "./_components/SummaryScreen";
import { CSSTransition } from "react-transition-group";

export default function Home() {
  const [showSummary, setShowSummary] = React.useState(true);

  const handleCreateScheduleTap = (path: string) => {
    // Here you can handle the routing logic if needed
    setShowSummary(false);
  };

  const userMessages: Message[] = [
    {
      id: "2id",
      role: "user",
      content: "I need to staff doctors for Tuesday and Wednesday.",
    },
    {
      id: "4id",
      role: "user",
      content: "Looks good, can we have Emily and John work together more?",
    },
    {
      id: "xid",
      role: "user",
      content: "This looks fine - send it out.",
    },
  ];
  const assistantMessages: Message[] = [
    {
      id: "1ida",
      role: "assistant",
      content:
        "Sure thing - I found a doctor from our float pool and one from a locums firm. Anything else?",
    },
    {
      id: "3ida",
      role: "assistant",
      content: "Of course, swapping Emily and Linda' shift.",
    },
    {
      id: "5ida",
      role: "assistant",
      content: "Sending schedule out...",
    },
  ];

  const [messages, setMessages] = React.useState<Message[]>([
    {
      id: "1id",
      role: "assistant",
      content: "Hi, I've created an initial schedule for you. Any changes?",
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
      Tuesday: { name: "John C.", time: "10am-4pm" },
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
      Monday: null,
      Tuesday: { name: "Emily D.", time: "11am-5pm" },
      Wednesday: null,
    },
    "Nurse #2": {
      Monday: { name: "John C.", time: "10am-4pm" },
      Tuesday: null,
      Wednesday: null,
    },
    "Nurse #3": {
      Monday: null,
      Tuesday: { name: "John C.", time: "10am-4pm" },
      Wednesday: { name: "Linda B.", time: "2am-8pm" },
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
      Tuesday: { name: "John C.", time: "10am-4pm" },
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
        }, 750);
      }

      // Clear the input field
      setInput("");
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(event.target.value);
  };

  return (
    <main className="flex h-full">
      {showSummary ? (
        <SummaryScreen onCreateScheduleTap={handleCreateScheduleTap} />
      ) : (
        <div className="flex h-full w-full">
          {/* Chat interface */}
          <div className="flex w-1/4 flex-col p-4">
            {/* MessageList with scroll */}
            <div className="flex h-full flex-col">
              <div className="h-96 overflow-auto">
                <MessageList messages={messages} isMobileMode={false} />
              </div>

              {/* Fixed ChatTextInput at the bottom */}
              <div className="">
                <ChatTextInput
                  input={input}
                  handleInputChange={handleInputChange}
                  handleInputSubmit={handleInputSubmit}
                  isLoading={isLoading}
                  isMobileMode={false}
                />
              </div>
            </div>
          </div>

          {/* Calendar table view */}
          <CSSTransition
            in={!isLoading} // Assuming isLoading is true when the calendar is changing
            timeout={250}
            classNames="fade"
            unmountOnExit
          >
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
          </CSSTransition>
        </div>
      )}
    </main>
  );
}
