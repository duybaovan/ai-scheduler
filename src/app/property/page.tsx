import Breadcrumbs, { Page } from "../components/breadcrumbs";
import CallsTable from "../components/calls-table";

export default function HomePage() {
  const breadcrumbPages: Page[] = [
    { name: "Home", href: "/", current: false },
    { name: "Property", href: "/property", current: true },
  ];

  // Mock data for the home details
  const homeDetails = {
    imageUrl: "https://ssl.cdn-redfin.com/photo/9/bigphoto/187/424022187_1.jpg", // Replace with actual image path
    address: "1234 Mock St, Mocksville, MO 12345",
    listingPrice: "$2,350,000",
    buyer: "Bao Van",
    interestLevel: "High",
    aiSummary: `This charming residence is nestled in a desirably tranquil cul-de-sac location. The house comes complete with a welcoming kitchen/dining area, two bathrooms, three bedrooms, a laundry, and retains the value of peaceful living while being conveniently close to shops, school and transport. The neighborhood is well-established and friendly, offering a great sense of community. From recent agent voice calls with the seller, we've gathered that the property has been meticulously maintained and features a landscaped backyard perfect for family gatherings and outdoor activities.`,
    recentCalls: [
      {
        title: "Initial Inquiry",
        contact: "Agent Smith",
        transcriptLink: "/transcripts/call1.html",
      },
      {
        title: "Follow-up Discussion",
        contact: "Agent Johnson",
        transcriptLink: "/transcripts/call2.html",
      },
      {
        title: "Final Confirmation",
        contact: "Agent Brown",
        transcriptLink: "/transcripts/call3.html",
      },
    ],
  };
  return (
    <main className="flex min-h-screen flex-col space-y-2">
      <Breadcrumbs pages={breadcrumbPages} />

      <img
        src={homeDetails.imageUrl}
        alt="Home"
        className="my-4 h-32 w-full rounded-lg object-cover"
      />
      <h1 className="text-xl font-semibold text-gray-900">
        {homeDetails.address}
      </h1>
      <p className="text-lg text-gray-700">{homeDetails.listingPrice}</p>
      <p className="text-sm font-medium text-gray-500">
        Buyer: <span className="text-indigo-700">{homeDetails.buyer}</span>
      </p>
      <p className="text-sm font-medium text-gray-500">
        Interest Level:{" "}
        <span className=" text-red-700">{homeDetails.interestLevel}</span>
      </p>
      <p className="mb-8 mt-2 text-sm text-gray-700">{homeDetails.aiSummary}</p>
      <section>
        <CallsTable />
      </section>
    </main>
  );
}
