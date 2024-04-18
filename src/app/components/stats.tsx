const stats = [
  { name: "Calls made", stat: "153" },
  { name: "Pickup Rate", stat: "28.16%" },
  { name: "Conversation rate", stat: "14.57%" },
];

export default function StatsHeader() {
  return (
    <div className="mb-8">
      <dl className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6"
          >
            <dt className="truncate text-sm font-medium text-gray-500">
              {item.name}
            </dt>
            <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">
              {item.stat}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
