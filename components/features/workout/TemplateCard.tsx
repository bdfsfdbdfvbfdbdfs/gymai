import type { WorkoutTemplate } from "@/types/workout";

type TemplateCardProps = {
  template: WorkoutTemplate;
};

export const TemplateCard = ({ template }: TemplateCardProps) => {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 className="text-lg font-bold">{template.name}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
        {template.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {template.exercises.map((exercise) => (
          <span
            key={exercise.id}
            className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300"
          >
            {exercise.name}
          </span>
        ))}
      </div>
    </article>
  );
};
