type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/70 bg-white/80 px-4 py-4 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-md items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-500">
            GymAI
          </p>
          <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        </div>
        <div className="rounded-full bg-indigo-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-indigo-500/30">
          Recomp
        </div>
      </div>
    </header>
  );
};
