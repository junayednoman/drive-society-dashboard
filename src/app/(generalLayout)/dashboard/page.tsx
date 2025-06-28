import AContainer from "@/components/AContainer";
import TopStats from "../sections/dashboard/TopStats";
import { Metadata } from "next";
import { EarningOverview } from "../sections/dashboard/EarningOverview";
import UserTable from "@/components/tables/UserTable";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Home() {
  return (
    <main>
      <AContainer>
        <TopStats />
        <div className="mt-6">
          <EarningOverview />
        </div>
        <div className="mt-6">
          <UserTable title="Recent Users" limit={6} />
        </div>
      </AContainer>
    </main>
  );
}
