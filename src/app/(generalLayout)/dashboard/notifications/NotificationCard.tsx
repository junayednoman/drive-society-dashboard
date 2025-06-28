"use client";

import { Button } from "@/components/ui/button";
import { Eye, Trash2 } from "lucide-react";

// Define the props interface
interface NotificationCardProps {
  title: string;
  message: string;
  timestamp: string;
  onView?: () => void;
  onDelete?: () => void;
}

const NotificationCard = ({
  title,
  message,
  timestamp,
  onView,
  onDelete,
}: NotificationCardProps) => {
  return (
    <div className="p-4 bg-card rounded-xl w-[50%]">
      <div className="flex items-center justify-between gap-8">
        <div>
          <h6 className="font-bold text-lg text-primary-foreground">{title}</h6>
          <p className="text-primary-foreground font-medium m-1 -ml-[1px]">
            {message}
          </p>
          <p className="mt-4 text-sm text-card-foreground">{timestamp}</p>
        </div>
        <div className="flex items-center gap-2">
          <Button size="icon" onClick={onView}>
            <Eye className="w-4 h-4 text-accent" />
          </Button>
          <Button
            className="bg-destructive hover:bg-destructive/80"
            size="icon"
            onClick={onDelete}
          >
            <Trash2 className="w-4 h-4 text-accent" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotificationCard;
