type Call = {
  title: string;
  contact: string;
  transcriptLink: string;
  questionAsked: string;
  answer: string;
};

export const recentCalls: Call[] = [
  {
    title: "Inquiry",
    contact: "Agent Smith",
    transcriptLink: "/transcript",
    questionAsked: "What is the current rent price?",
    answer: "$3800",
  },
  {
    title: "Follow-up Discussion",
    contact: "Agent Johnson",
    transcriptLink: "/transcripts/call2.html",
    questionAsked: "Are there any pending maintenance issues?",
    answer: "No pending issues at the moment.",
  },
  {
    title: "Inquiry",
    contact: "Agent Brown",
    transcriptLink: "/transcripts/call3.html",
    questionAsked: "Is the property still available?",
    answer: "Yes, the property is still on the market.",
  },
  {
    title: " Negotiation",
    contact: "Agent Davis",
    transcriptLink: "/transcripts/call4.html",
    questionAsked: "Can the price be negotiated?",
    answer: "The seller is open to reasonable offers.",
  },
];

export default function CallsTable() {
  return (
    <div>
      <div className="sm:flex sm:items-center">
        <div>
          <h1 className="text-base font-semibold text-gray-900">
            Recent Calls
          </h1>
        </div>
      </div>
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Question
                    </th>
                    <th
                      scope="col"
                      className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Answer
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Transcript
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {recentCalls.map((call) => (
                    <tr key={call.title} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap py-4 pr-3 text-sm font-medium text-gray-900">
                        {call.title}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {call.questionAsked}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {call.answer}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm">
                        <a
                          href={call.transcriptLink}
                          className="text-indigo-600 hover:text-indigo-500"
                        >
                          View Transcript
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
