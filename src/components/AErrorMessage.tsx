import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

interface ErrorComponentProps {
  message?: string;
  onRetry: () => void;
  className?: string;
}

export default function AErrorMessage({
  message = "Something went wrong. Please try again.",
  onRetry,
  className = "!bg-transparent",
}: ErrorComponentProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center p-6 !bg-background rounded-lg min-w-full ${className}`}
      style={{ backgroundColor: "#1a1a1a" }}
    >
      {/* Error Icon */}
      <AlertCircle className="h-12 w-12 text-destructive mb-4" />

      {/* Error Message */}
      <p className="text-center text-foreground mb-4">{message}</p>

      {/* Retry Button */}
      <Button
        onClick={onRetry}
        className="bg-primary hover:bg-primary/90 text-background rounded-lg"
      >
        Retry
      </Button>
    </div>
  );
}
