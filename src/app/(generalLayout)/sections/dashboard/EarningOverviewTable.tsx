"use client";

import { Eye, Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/useDebounce";
import { APagination } from "@/components/ui/APagination";
import { Input } from "@/components/ui/input";
import { AFilterSelect } from "@/components/form/AFilterSelect";
import { Button } from "@/components/ui/button";
import { EarningDetailsModal } from "@/components/modal/EarningDetailsModal";

// Dummy data for Earning Overview
const earningData = [
  {
    id: 1,
    serial: "01",
    user: "BuildForge",
    amount: 123,
    subscriptionType: "Pro Plan",
    purchaseDate: "May 10, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 2,
    serial: "02",
    user: "NexStructure",
    amount: 123,
    subscriptionType: "Premium Plan",
    purchaseDate: "May 10, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 3,
    serial: "03",
    user: "UrbanAix",
    amount: 123,
    subscriptionType: "Pro Plan",
    purchaseDate: "May 10, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 4,
    serial: "04",
    user: "NexStructure",
    amount: 123,
    subscriptionType: "Basic Plan",
    purchaseDate: "May 10, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 5,
    serial: "05",
    user: "Heritage Builders",
    amount: 123,
    subscriptionType: "Premium Plan",
    purchaseDate: "May 10, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 6,
    serial: "06",
    user: "BuildForge",
    amount: 123,
    subscriptionType: "Premium Plan",
    purchaseDate: "May 10, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 7,
    serial: "07",
    user: "Stone & Beam",
    amount: 123,
    subscriptionType: "Pro Plan",
    purchaseDate: "May 10, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 8,
    serial: "08",
    user: "Atlas Construction",
    amount: 123,
    subscriptionType: "Basic Plan",
    purchaseDate: "May 10, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 9,
    serial: "09",
    user: "Pinnacle Construction Co.",
    amount: 123,
    subscriptionType: "Pro Plan",
    purchaseDate: "May 10, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 10,
    serial: "10",
    user: "TechNova",
    amount: 123,
    subscriptionType: "Premium Plan",
    purchaseDate: "June 15, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 11,
    serial: "11",
    user: "InnoPeak",
    amount: 123,
    subscriptionType: "Basic Plan",
    purchaseDate: "July 1, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 12,
    serial: "12",
    user: "SkyRise Solutions",
    amount: 123,
    subscriptionType: "Pro Plan",
    purchaseDate: "April 20, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 13,
    serial: "13",
    user: "GreenTech",
    amount: 123,
    subscriptionType: "Premium Plan",
    purchaseDate: "August 10, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 14,
    serial: "14",
    user: "CoreMatrix",
    amount: 123,
    subscriptionType: "Basic Plan",
    purchaseDate: "March 5, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 15,
    serial: "15",
    user: "BlueHorizon",
    amount: 123,
    subscriptionType: "Pro Plan",
    purchaseDate: "September 30, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 16,
    serial: "16",
    user: "PeakPulse",
    amount: 123,
    subscriptionType: "Premium Plan",
    purchaseDate: "June 25, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 17,
    serial: "17",
    user: "SwiftWave",
    amount: 123,
    subscriptionType: "Basic Plan",
    purchaseDate: "May 18, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 18,
    serial: "18",
    user: "ZenithCorp",
    amount: 123,
    subscriptionType: "Pro Plan",
    purchaseDate: "July 12, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 19,
    serial: "19",
    user: "AeroDyne",
    amount: 123,
    subscriptionType: "Premium Plan",
    purchaseDate: "April 8, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
  {
    id: 20,
    serial: "20",
    user: "FusionTech",
    amount: 123,
    subscriptionType: "Basic Plan",
    purchaseDate: "October 5, 2025",
    transaction_id: "Tnx_7fj4d0943d333"
  },
];

const subscriptionTypeOptions = [
  { value: "all", label: "All" },
  ...Array.from(
    new Set(earningData.map((earning) => earning.subscriptionType))
  ).map((type) => ({
    value: type,
    label: type,
  })),
];

const EarningOverviewTable = ({
  pagination = false,
  limit = 10,
}: {
  pagination?: boolean;
  limit?: number;
}) => {
  const [detailedData, setDetailedData] = useState<object | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const debouncedSearchText = useDebounce(searchText, 500);
  const [currentPage, setCurrentPage] = useState(1);
  const [subscriptionFilter, setSubscriptionFilter] = useState<string>("all");

  // Filter earnings based on debounced search text and subscription type filter
  const filteredEarnings = earningData.filter(
    (earning) =>
      earning.user.toLowerCase().includes(debouncedSearchText.toLowerCase()) &&
      (subscriptionFilter === "all" ||
        earning.subscriptionType === subscriptionFilter)
  );

  // Calculate paginated earnings based on limit
  const totalItems = filteredEarnings.length;
  const startIndex = (currentPage - 1) * limit;
  const paginatedEarnings = filteredEarnings.slice(
    startIndex,
    startIndex + limit
  );

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleSubscriptionChange = (value: string) => {
    setSubscriptionFilter(value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  useEffect(() => {
    console.log("Debounced search text:", debouncedSearchText);
  }, [debouncedSearchText]);

  const handleSetDetailedData = (data: object[]) => {
    setDetailedData(data);
  };

  const closeModal = () => {
    setDetailedData(null);
  };
  return (
    <div className="space-y-6 bg-card p-6 px-8 rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary-foreground">
          Subscription Earning
        </h1>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-foreground h-4 w-4" />
            <Input
              placeholder="Search"
              className="pl-10 w-64 border-border"
              value={searchText}
              onChange={handleSearch}
            />
          </div>
          <div className="relative">
            <AFilterSelect
              value={subscriptionFilter}
              onChange={handleSubscriptionChange}
              className="w-[100px]"
              placeholder="Type"
              options={subscriptionTypeOptions}
            />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg overflow-hidden">
        {/* Header Row */}
        <div className="bg-primary px-4 py-4">
          <div className="grid grid-cols-6 gap-4 items-center text-card">
            <div className=" font-semibold">Serial</div>
            <div className=" font-semibold">User</div>
            <div className=" font-semibold">Subscription Type</div>
            <div className=" font-semibold">Amount</div>
            <div className=" font-semibold">Purchase Date</div>
            <div className=" font-semibold">Action</div>
          </div>
        </div>

        {/* Data Rows */}
        <div className="divide-y divide-border">
          {paginatedEarnings.length > 0 ? (
            paginatedEarnings.map((earning) => (
              <div
                key={earning.id}
                className="px-4 py-4 hover:bg-accent transition-colors rounded"
              >
                <div className="grid grid-cols-6 gap-4 items-center">
                  {/* Serial Column */}
                  <div>
                    <span className="text-primary-foreground">
                      {earning.serial}
                    </span>
                  </div>

                  {/* Company Name Column */}
                  <div>
                    <span className="text-primary-foreground truncate font-semibold">
                      {earning.user}
                    </span>
                  </div>
                  {/* Subscription Type Column */}
                  <div>
                    <span className="text-primary-foreground truncate">
                      {earning.subscriptionType}
                    </span>
                  </div>
                  {/* Expire Date Column */}
                  <div>
                    <span className="text-primary-foreground">
                      ${earning.amount}
                    </span>
                  </div>
                  {/* Purchase Date Column */}
                  <div>
                    <span className="text-primary-foreground">
                      {new Date(earning.purchaseDate).toLocaleDateString(
                        "en-US",
                        {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        }
                      )}
                    </span>
                  </div>
                  {/* Expire Date Column */}
                  <div>
                    <Button
                      onClick={() => handleSetDetailedData(earning as any)}
                      size="icon"
                      variant="outline"
                      className="h-8 w-8 rounded-full border-border hover:bg-card"
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="px-4 py-44 text-center text-muted-foreground">
              No earnings found.
            </div>
          )}
        </div>

        {/* Pagination */}
        {pagination && totalItems > limit && (
          <div className="p-4 flex">
            <APagination
              totalItems={totalItems}
              itemsPerPage={limit}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              maxVisiblePages={5}
            />
          </div>
        )}
      </div>
      <EarningDetailsModal
        isOpen={detailedData}
        data={detailedData}
        onClose={closeModal}
      />
    </div>
  );
};

export default EarningOverviewTable;
