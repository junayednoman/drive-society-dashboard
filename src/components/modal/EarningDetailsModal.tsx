"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { defaultImg } from "@/data/global.data";

interface EarningDetailsModalProps {
  isOpen: boolean | any;
  onClose?: () => void;
  data?: any;
}

export function EarningDetailsModal({
  isOpen,
  onClose,
  data,
}: EarningDetailsModalProps) {
  if (!data) return null;

  const companyImg = data.companyImage || defaultImg;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card border-border p-6 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-primary-foreground">
            Earning Details
          </DialogTitle>
        </DialogHeader>

        {/* User Section */}
        <div className="flex flex-col items-center space-y-3 mt-4">
          <div
            className="w-24 h-24 rounded-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${companyImg})` }}
          ></div>
          <div className="text-center space-y-1">
            <p className="text-base font-semibold text-primary-foreground">
              {data.user}
            </p>
          </div>
        </div>

        {/* Earning Section */}
        <div className="space-y-2 mt-6">
          <p className="text-sm text-foreground">
            <span className="font-medium">Subscription Plan:</span>{" "}
            {data.subscriptionType}
          </p>
          <p className="text-sm text-foreground border-t pt-3">
            <span className="font-medium">Amount:</span> ${data.amount}
          </p>
          <p className="text-sm text-foreground border-t pt-3">
            <span className="font-medium">Transaction ID:</span> $
            {data.transaction_id}
          </p>
          <p className="text-sm text-foreground border-t pt-3">
            <span className="font-medium">Purchase Date:</span>{" "}
            {new Date(data.purchaseDate).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
