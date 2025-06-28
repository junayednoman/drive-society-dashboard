import AContainer from "@/components/AContainer";
import { Metadata } from "next";
import Plans from "./plans/Plans";

export const metadata: Metadata = {
  title: "Subscription Plans",
};

const SubscriptionPlans = () => {
  return (
    <main>
      <AContainer>
        <Plans />
      </AContainer>
    </main>
  );
};

export default SubscriptionPlans;
