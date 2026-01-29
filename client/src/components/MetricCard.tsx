import { ReactNode } from "react";

export default function MetricCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: ReactNode;
}) {
  return (
    <div className="group bg-card hover:bg-muted/30 border border-border p-10 rounded-[2.5rem] transition-all duration-500 relative overflow-hidden min-h-[280px] flex flex-col justify-between">
      {/* Background Decorativo */}
      <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all duration-700" />

      <div className="relative z-10 flex justify-between items-start">
        <div className="p-4 rounded-2xl bg-background border border-border text-primary group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        {/* <div className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
          <span className="text-[9px] font-bold text-primary uppercase tracking-widest italic">
            Atualizado
          </span>
        </div> */}
      </div>

      <div className="relative z-10 mt-8">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.3em] mb-2">
          {title}
        </p>
        <h3 className="text-5xl font-black text-foreground mb-3 tracking-tighter italic leading-none">
          {value}
        </h3>
        <p className="text-xs text-primary/60 font-medium tracking-tight italic opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
