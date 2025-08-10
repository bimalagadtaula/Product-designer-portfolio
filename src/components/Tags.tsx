const tags = ["UI/UX Design", "App Design", "Dashboard", "Wireframe", "User Research"];

const Tags = () => {
  return (
    <section id="tags" className="py-10 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
          {tags.map((t) => (
            <span key={t} className="shrink-0 px-4 py-2 rounded-full border bg-card text-sm text-foreground/80 hover:bg-muted/30 transition-colors">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tags;