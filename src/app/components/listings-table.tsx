import { useLayoutEffect, useRef, useState } from "react";
import { classNames } from "../helpers";
import EditDropdownButton from "./edit_button";
import { StartCallsModal } from "./start_calls_dialog";
type Listing = {
  property_name: string;
  buyer_name: string;
  agent_name: string;
  stage: string;
  call_status: string;
};

export const listings: Listing[] = [
  {
    property_name: "1234 Maple St",
    buyer_name: "Alice Johnson",
    agent_name: "John Doe",
    stage: "Interest",
    call_status: "Standby",
  },
  {
    property_name: "5678 Oak Dr",
    buyer_name: "Bob Smith",
    agent_name: "Jane Smith",
    stage: "Shown",
    call_status: "Standby",
  },
  {
    property_name: "9101 Pine Ave",
    buyer_name: "Charlie Brown",
    agent_name: "Emily Davis",
    stage: "Offer made",
    call_status: "Standby",
  },
  {
    property_name: "1123 Elm St",
    buyer_name: "Alice Johnson",
    agent_name: "Michael Green",
    stage: "Offer accepted",
    call_status: "Standby",
  },
  {
    property_name: "1415 Cedar Ln",
    buyer_name: "Daniel Lee",
    agent_name: "Chloe Kim",
    stage: "Interest",
    call_status: "Standby",
  },
  {
    property_name: "1617 Birch Pl",
    buyer_name: "Eva White",
    agent_name: "Lucas Brown",
    stage: "Shown",
    call_status: "Standby",
  },
  {
    property_name: "1819 Walnut St",
    buyer_name: "Frank Garcia",
    agent_name: "Olivia Jones",
    stage: "Offer made",
    call_status: "Standby",
  },
  {
    property_name: "2021 Chestnut Rd",
    buyer_name: "Grace Hall",
    agent_name: "Noah Lee",
    stage: "Offer accepted",
    call_status: "Standby",
  },
  {
    property_name: "2223 Redwood Blvd",
    buyer_name: "Henry Martinez",
    agent_name: "Sophia Wilson",
    stage: "Interest",
    call_status: "Standby",
  },
  {
    property_name: "2425 Spruce Cir",
    buyer_name: "Isabella Young",
    agent_name: "James Johnson",
    stage: "Shown",
    call_status: "Standby",
  },
  {
    property_name: "2627 Fir Ct",
    buyer_name: "Jack King",
    agent_name: "Amelia Brown",
    stage: "Offer made",
    call_status: "Standby",
  },
  {
    property_name: "2829 Cedar Ave",
    buyer_name: "Alice Johnson",
    agent_name: "William Davis",
    stage: "Offer accepted",
    call_status: "Standby",
  },
  {
    property_name: "3031 Aspen Way",
    buyer_name: "Liam Wilson",
    agent_name: "Emma Garcia",
    stage: "Interest",
    call_status: "Standby",
  },
  {
    property_name: "3233 Magnolia St",
    buyer_name: "Mia Harris",
    agent_name: "Oliver Martinez",
    stage: "Shown",
    call_status: "Standby",
  },
  {
    property_name: "3435 Poplar Ln",
    buyer_name: "Noah Lee",
    agent_name: "Ava Smith",
    stage: "Offer made",
    call_status: "Calling...",
  },
];

export default function PeopleTable() {
  const checkbox = useRef<HTMLInputElement>(null);
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedListings, setSelectedListings] = useState<Listing[]>([]);
  const [allListings, setAllListings] = useState<Listing[]>(listings);

  const startCalls = () => {
    setAllListings(
      allListings.map((listing, index) => {
        if (index < 5 && listing.call_status === "Standby") {
          return { ...listing, call_status: "Calling..." };
        }
        return listing;
      }),
    );
  };

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedListings.length > 0 && selectedListings.length < listings.length;
    setChecked(selectedListings.length === listings.length);
    setIndeterminate(isIndeterminate);
    if (checkbox.current) {
      checkbox.current.indeterminate = isIndeterminate;
    }
  }, [selectedListings]);

  function toggleAll() {
    setSelectedListings(checked || indeterminate ? [] : allListings);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-base font-semibold leading-6 text-gray-900">
            Listings
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all your current active listings. Use check-box to
            activate multiple calls at once.
          </p>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <button
            type="button"
            className="block rounded-md bg-indigo-600 px-3 py-1.5 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add listing
          </button>
        </div>
      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="relative">
              {selectedListings.length > 0 && (
                <div className="absolute left-14 top-2 flex h-12 items-center space-x-3 sm:left-12">
                  <StartCallsModal onStartCalls={startCalls} />
                </div>
              )}
              <table className="min-w-full table-fixed divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th scope="col" className="relative px-7 sm:w-12 sm:px-6">
                      <input
                        type="checkbox"
                        className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className="min-w-[12rem] py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
                    >
                      Property
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Buyer
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Agent
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Stage
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Call status
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {allListings.map((listing) => (
                    <tr
                      key={listing.property_name}
                      className={
                        selectedListings.includes(listing)
                          ? "bg-gray-50"
                          : undefined
                      }
                    >
                      <td className="relative px-7 sm:w-12 sm:px-6">
                        {selectedListings.includes(listing) && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600" />
                        )}
                        <input
                          type="checkbox"
                          className="absolute left-4 top-1/2 -mt-2 h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          value={listing.buyer_name}
                          checked={selectedListings.includes(listing)}
                          onChange={(e) =>
                            setSelectedListings(
                              e.target.checked
                                ? [...selectedListings, listing]
                                : selectedListings.filter((p) => p !== listing),
                            )
                          }
                        />
                      </td>
                      <td
                        className={classNames(
                          "whitespace-nowrap py-4 pr-3 text-sm font-medium",
                          selectedListings.includes(listing)
                            ? "text-indigo-600"
                            : "text-gray-900",
                        )}
                      >
                        <a
                          href="/property"
                          className="underline hover:text-indigo-500"
                        >
                          {" "}
                          {listing.property_name}
                        </a>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {listing.buyer_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {listing.agent_name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {listing.stage}
                      </td>
                      <td
                        className={classNames(
                          "whitespace-nowrap px-3 py-4 text-sm",
                          listing.call_status == "Calling..."
                            ? "text-yellow-500"
                            : "text-green-500",
                        )}
                      >
                        {listing.call_status}
                      </td>
                      <td className="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                        <EditDropdownButton />
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
