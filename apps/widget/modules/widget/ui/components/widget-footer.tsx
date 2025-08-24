import { Button } from "@workspace/ui/components/button";
import { cn } from "@workspace/ui/lib/utils";
import { HomeIcon, InboxIcon } from "lucide-react";

export const WidgetFooter = () => {
  const screen = "selection";
  return (
    <footer className="flex items-center justify-center bg-backgroundborder-t">
      <Button
        variant="ghost"
        size="icon"
        className="h-14 flex-1 rounded-none"
        onClick={() => {}}
      >
        <HomeIcon
          className={cn("size-5", screen === "selection" && "text-primary")}
        />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-14 flex-1 rounded-none"
        onClick={() => {}}
      >
        <InboxIcon
          className={cn("size-5", screen === "inbox" && "text-primary")}
        />
      </Button>
    </footer>
  );
};
