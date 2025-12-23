import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
  iconBgClass?: string;
}

export const FeatureCard = ({ title, description, icon: Icon, to, iconBgClass = "bg-primary/10" }: FeatureCardProps) => {
  return (
    <Link
      to={to}
      className="group block p-6 rounded-xl border border-border bg-card hover:shadow-card hover:border-primary/30 transition-all duration-300"
    >
      <div className={`w-14 h-14 rounded-xl ${iconBgClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
        <Icon className="w-7 h-7 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Link>
  );
};
