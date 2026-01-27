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
  
  if (!isCompact) {
    // Primary cards with gradient border effect
    return (
      <Link
        to={to}
        className="group block relative rounded-xl p-[2px] bg-gradient-to-br from-border via-border to-border hover:from-primary hover:via-primary/50 hover:to-amber transition-all duration-500"
      >
        <div className="relative rounded-[10px] bg-card p-6 h-full overflow-hidden transition-all duration-300 group-hover:shadow-soft">
          {/* Subtle gradient overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-amber/0 group-hover:from-primary/5 group-hover:to-amber/5 transition-all duration-500 rounded-[10px]" />
          
          <div className="relative flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className={cn(
                "rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow flex-shrink-0",
                iconBgClass,
                "w-12 h-12"
              )}>
                <Icon className="w-6 h-6 text-primary transition-colors duration-300" />
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                {badge && (
                  <span className="px-1.5 py-0.5 text-[10px] font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 rounded">
                    {badge}
                  </span>
                )}
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Link>
    );
  }

  // Compact variant for reference materials
  return (
    <Link
      to={to}
      className="group block rounded-xl border border-border bg-card hover:shadow-card hover:border-primary/30 transition-all duration-300 p-4"
    >
      <div className="flex flex-row items-start gap-3">
        <div className={cn(
          "rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0",
          iconBgClass,
          "w-10 h-10"
        )}>
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            {badge && (
              <span className="px-1.5 py-0.5 text-[10px] font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/50 dark:text-purple-200 rounded">
                {badge}
              </span>
            )}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed mt-1 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};
