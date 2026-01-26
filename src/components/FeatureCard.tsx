import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  iconBgClass?: string;
  variant?: "default" | "compact";
  badge?: string;
}

export const FeatureCard = ({ 
  title, 
  description, 
  icon: Icon, 
  to, 
  iconBgClass = "bg-primary/10",
  variant = "default",
  badge
}: FeatureCardProps) => {
  const isCompact = variant === "compact";
  
  return (
    <Link
      to={to}
      className={cn(
        "group block rounded-xl border border-border bg-card hover:shadow-card hover:border-primary/30 transition-all duration-300",
        isCompact ? "p-4" : "p-6"
      )}
    >
      <div className={cn(
        "flex",
        isCompact ? "flex-row items-start gap-3" : "flex-col"
      )}>
        <div className={cn(
          "rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0",
          iconBgClass,
          isCompact ? "w-10 h-10" : "w-14 h-14 mb-4"
        )}>
          <Icon className={cn(
            "text-primary",
            isCompact ? "w-5 h-5" : "w-7 h-7"
          )} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className={cn(
              "font-semibold text-foreground group-hover:text-primary transition-colors",
              isCompact ? "text-sm" : "text-lg mb-2"
            )}>
              {title}
            </h3>
            {badge && (
              <span className="px-1.5 py-0.5 text-[10px] font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 rounded">
                {badge}
              </span>
            )}
          </div>
          <p className={cn(
            "text-muted-foreground leading-relaxed",
            isCompact ? "text-xs mt-1 line-clamp-2" : "text-sm"
          )}>
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
