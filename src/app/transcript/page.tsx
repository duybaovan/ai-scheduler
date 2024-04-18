import React from "react";
import Breadcrumbs, { Page } from "../components/breadcrumbs";

// Mock data for demonstration
const mockTranscript: TranscriptEntry[] = [
  {
    speaker: "Automated Voice Agent",
    time: "00:00:05",
    text: "Hello, this is the automated assistant. Can you tell me more about the property you’re selling?",
  },
  {
    speaker: "Seller Agent",
    time: "00:00:10",
    text: "Certainly! The property is a four-bedroom house with a large garden.",
  },
  {
    speaker: "Automated Voice Agent",
    time: "00:00:15",
    text: "Great, does it have a garage?",
  },
  {
    speaker: "Seller Agent",
    time: "00:00:20",
    text: "Yes, there is a double garage and additional off-street parking.",
  },
  {
    speaker: "Automated Voice Agent",
    time: "00:00:25",
    text: "Sounds spacious. How recent are the renovations?",
  },
  {
    speaker: "Seller Agent",
    time: "00:00:30",
    text: "The kitchen and bathrooms were renovated last year with modern finishes.",
  },
  {
    speaker: "Automated Voice Agent",
    time: "00:00:35",
    text: "Excellent. Are there any amenities in the neighborhood?",
  },
  {
    speaker: "Seller Agent",
    time: "00:00:40",
    text: "The neighborhood has a community pool, a park, and it's walking distance to a top-rated elementary school.",
  },
  {
    speaker: "Automated Voice Agent",
    time: "00:00:45",
    text: "Great, that will be attractive to families. What's the asking price?",
  },
  {
    speaker: "Seller Agent",
    time: "00:00:50",
    text: "We're listing it at $2,450,000, which is competitive for the area.",
  },
  {
    speaker: "Automated Voice Agent",
    time: "00:00:55",
    text: "Understood. I'll compile this information for potential buyers. Is there anything else you'd like to add?",
  },
  {
    speaker: "Seller Agent",
    time: "00:01:00",
    text: "Just that the owners are looking for a quick sale, so we're open to negotiation.",
  },
];

const breadcrumbPages: Page[] = [
  { name: "Home", href: "/", current: false },
  { name: "Property", href: "/property", current: false },
  { name: "Transcript", href: "/transcript", current: true },
];

// Breadcrumbs component to navigate back to home or property page

const mockSummary: ConversationSummary = {
  startTime: "2023-04-01T10:00:00Z",
  endTime: "2023-04-01T10:05:00Z",
  participants: ["Automated Voice Agent", "Seller Agent"],
  property: "4-Bedroom House",
  keyPoints: [
    "Property is a four-bedroom house.",
    "Large garden area.",
    "Includes a double garage.",
    "Additional off-street parking available.",
    // ... more key points
  ],
};

// Existing interfaces and component
interface TranscriptEntry {
  speaker: string;
  time: string;
  text: string;
}

interface ConversationSummary {
  startTime: string;
  endTime: string;
  participants: string[];
  property: string;
  keyPoints: string[];
}

interface TranscriptPageProps {
  transcript: TranscriptEntry[];
  summary: ConversationSummary;
}

const TranscriptPage: React.FC<TranscriptPageProps> = ({
  transcript = mockTranscript,
  summary = mockSummary,
}) => {
  return (
    <div className="transcript-page mx-auto  max-w-4xl">
      <Breadcrumbs pages={breadcrumbPages} />
      <div className="transcript-metadata mb-6 ">
        <h1 className="mb-4 text-3xl font-bold">Conversation Transcript</h1>
        <p className="text-lg">
          <strong>Date:</strong>{" "}
          {new Date(summary.startTime).toLocaleDateString()}
        </p>
        <p className="text-lg">
          <strong>Participants:</strong> {summary.participants.join(", ")}
        </p>
        <p className="text-lg">
          <strong>Property:</strong> {summary.property}
        </p>
      </div>
      <div className="transcript-content rounded-lg bg-white p-4">
        {transcript.map((entry, index) => (
          <div
            key={index}
            className={`transcript-entry mb-4 flex items-start ${entry.speaker === "Automated Voice Agent" ? "bg-indigo-100" : "bg-green-100"} rounded-lg p-3`}
          >
            <div className="mr-4 w-14 flex-none pr-4 text-right">
              <span className="time  text-sm text-gray-600">{entry.time}</span>
            </div>
            <div className="flex-grow">
              <span className="speaker font-bold">{entry.speaker}:</span>
              <span className="text ml-2">{entry.text}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="transcript-summary mt-6 rounded-lg bg-indigo-100 p-4">
        <h2 className="mb-3 text-2xl font-bold">Conversation Summary</h2>
        <p className="text-lg">
          <strong>Start Time:</strong>{" "}
          {new Date(summary.startTime).toLocaleTimeString()}
        </p>
        <p className="text-lg">
          <strong>End Time:</strong>{" "}
          {new Date(summary.endTime).toLocaleTimeString()}
        </p>
        <ul className="list-inside list-disc">
          {summary.keyPoints.map((point, index) => (
            <li key={index} className="text-lg">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TranscriptPage;
