import * as z from "zod";

export const createPlanSchema = z.object({
  planName: z.string().min(1, "Plan name is required"),
  billingCycle: z.string().min(1, "Billing cycle is required"),
  shortDescription: z.string().min(1, "Short description is required"),
  price: z
    .string({ required_error: "Price is required" })
    .min(1, "Price is required"),
});

export type CreatePlanFormValues = z.infer<typeof createPlanSchema>;