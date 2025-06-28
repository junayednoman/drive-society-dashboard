"use client";

import AForm from "@/components/form/AForm";
import { AInput } from "@/components/form/AInput";
import { ASelect } from "@/components/form/ASelect";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  CreatePlanFormValues,
  createPlanSchema,
} from "@/validations/plan.validation";

const EditPlanModal = ({ children }: { children: React.ReactNode }) => {
  const billingCycleOptions = [
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  const handleSubmit = (data: CreatePlanFormValues) => {
    console.log("Submitted data:", data);
  };

  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="bg-card">
        <DialogHeader>
          <DialogTitle>Edit Subscription Plan</DialogTitle>
        </DialogHeader>
        <AForm<CreatePlanFormValues>
          schema={createPlanSchema}
          onSubmit={handleSubmit}
          defaultValues={{
            planName: "Basic Plan",
            billingCycle: "monthly",
            shortDescription: "Basic Plan Description",
            price: "0",
          }}
          className="mt-5"
        >
          <AInput
            name="planName"
            label="Subscription Name"
            placeholder="Subscription Name"
            required
          />
          <ASelect
            name="billingCycle"
            label="Billing Cycle"
            options={billingCycleOptions}
            placeholder="Select billing cycle"
            required
          />
          <AInput
            name="shortDescription"
            label="Short Description"
            placeholder="Write Short Description"
            required
          />
          <AInput name="price" label="Price" placeholder="0" required />
          <Button type="submit" className="h-12 w-full">
            Save
          </Button>
        </AForm>
      </DialogContent>
    </Dialog>
  );
};

export default EditPlanModal;
