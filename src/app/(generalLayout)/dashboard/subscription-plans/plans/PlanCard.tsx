"use client";

import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import EditPlanModal from "./EditPlanModal";
import { AAlertDialog } from "@/components/modal/AAlertDialog";

export default function PlanCard() {
  const handleDelete = () => {};
  return (
    <div className="w-full rounded-lg p-6 border border-gray-200 bg-white">
      <div>
        <h4 className="text-2xl font-semibold text-gray-900">Basic Plan</h4>
      </div>
      <div className="space-y-4 mt-8">
        <div className="text-4xl font-bold text-gray-900">
          $49.99
          <span className="text-base font-normal text-card-foreground">
            /month
          </span>
        </div>
        <div className="text-sm text-card-foreground">1-10 users</div>
        <div className="grid grid-cols-2 gap-2 mt-8">
          <EditPlanModal>
            <Button className="bg-primary/10 hover:bg-primary/20 shadow-none text-primary h-[42px] w-full">
              <Pencil /> Edit Price
            </Button>
          </EditPlanModal>
          <AAlertDialog onAction={handleDelete}>
            <Button className="bg-destructive/10 text-destructive shadow-none hover:bg-destructive/20 h-[42px] w-full">
              <Trash2 /> Remove Plan
            </Button>
          </AAlertDialog>
        </div>
      </div>
    </div>
  );
}
