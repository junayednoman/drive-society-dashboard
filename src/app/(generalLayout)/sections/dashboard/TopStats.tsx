"use client";
// import AErrorMessage from "@/components/AErrorMessage";
// import { useGetMetaQuery } from "@/redux/api/dashboardApi";
// import StatCardSkeleton from "@/skeletons/StatCardSkeleton";
import UsersIcon from "@/assets/users.svg";
import EarningIcon from "@/assets/earning.svg";
import SubsIcon from "@/assets/subs.svg";
import StatCard from "@/components/others/StatCard";

const TopStats = () => {
  // const { data, isLoading, isError, error, refetch } = useGetMetaQuery("");
  // const meta = data?.data;

  return (
    <section>
      {/* {isLoading ? (
        <div className="grid grid-cols-3 gap-6">
          <StatCardSkeleton />
          <StatCardSkeleton />
          <StatCardSkeleton />
        </div>
      ) : isError ? (
        <AErrorMessage
          className="!bg-card"
          message={(error as any)?.data?.message}
          onRetry={refetch}
        />
      ) : ( */}
      <div className="grid grid-cols-3 gap-6">
        <StatCard title="Total Users" icon={UsersIcon} value="342" />
        <StatCard title="Total Earnings" icon={EarningIcon} value="$2345" />
        <StatCard title="Active Subscriptions" icon={SubsIcon} value="92" />
      </div>
      {/* )} */}
    </section>
  );
};

export default TopStats;
