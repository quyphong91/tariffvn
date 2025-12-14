import { cn } from "@/lib/utils";

interface HSCodeBadgeProps {
  code: string;
  level: number;
  className?: string;
}

export function HSCodeBadge({ code, level, className }: HSCodeBadgeProps) {
  const isHeading = level === 0;

  return (
    <span
      className={cn(
        "inline-flex items-center font-mono text-sm font-medium px-3 py-1 rounded-md transition-colors",
        isHeading
          ? "bg-primary text-primary-foreground"
          : "bg-code-bg text-code-foreground",
        className
      )}
    >
      {code}
    </span>
  );
}
