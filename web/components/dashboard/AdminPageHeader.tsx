interface AdminPageHeaderProps {
  title: string;
  description?: string;
}

export function AdminPageHeader({ title, description }: AdminPageHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-page-title mb-2 text-balance">{title}</h1>
      {description ? (
        <p className="max-w-2xl text-[15px] leading-relaxed text-on-surface-variant">
          {description}
        </p>
      ) : null}
    </div>
  );
}
