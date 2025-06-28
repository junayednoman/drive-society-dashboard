"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { defaultImg } from "@/data/global.data";

interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UserDetailsModal({ isOpen, onClose }: UserDetailsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md bg-card border-border p-6 rounded-lg shadow-lg">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-primary-foreground">
            User Details
          </DialogTitle>
          <DialogDescription className="sr-only">
            User and company details modal
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center space-y-4 mt-4">
          <div
            className="w-32 h-32 bg-cover bg-center bg-no-repeat rounded-full"
            style={{
              backgroundImage: `url(${defaultImg})`,
            }}
          ></div>
          <div className="w-full space-y-2 mt-3">
            <h4 className="text-lg font-semibold text-primary-foreground">
              Company Details
            </h4>
            <div>
              <p className="text-sm text-foreground py-3">
                Company Name: Diw Constructions
              </p>
              <p className="text-sm text-foreground border-t py-3">
                Company Email: company@dw.com
              </p>
              <p className="text-sm text-foreground border-t py-3">
                Admin Name: Eric
              </p>
              <p className="text-sm text-foreground border-t pt-3">
                Subscription Plan: Premium
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
