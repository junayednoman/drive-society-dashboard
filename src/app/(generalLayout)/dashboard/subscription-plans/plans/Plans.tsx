import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import PlanCard from "./PlanCard";
import CreatePlanModal from "./CreatePlanModal";

const Plans = () => {
  return (
    <section>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-primary-foreground">
          Subscription Plans
        </h1>
        <CreatePlanModal>
          <Button size={"lg"}>
            <Plus className="!w-5 !h-5" />
            Create New Plan
          </Button>
        </CreatePlanModal>
      </div>

      <div className="grid grid-cols-3 gap-6 mt-6">
        <PlanCard />
        <PlanCard />
        <PlanCard />
      </div>
    </section>
  );
};

export default Plans;
