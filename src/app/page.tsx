"use client";
import StatsHeader from "./components/stats";
import PeopleTable from "./components/listings-table";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col ">
      <StatsHeader />
      <PeopleTable />
    </main>
  );
}
