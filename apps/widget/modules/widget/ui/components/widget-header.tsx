import { cn } from "@workspace/ui/lib/utils";

interface Props {
  className?: string;
  children: React.ReactNode;
}
export const WidgetHeader = ({ className, children }: Props) => {
  return (
    <header
      className={cn(
        "bg-gradient-to-b from-primary to-[#0b63f3] p-4 text-primary-foreground",
        className
      )}
    >
      {children}
    </header>
  );
};
