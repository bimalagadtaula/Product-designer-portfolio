import { FadeIn } from "@/components/motion";

const tags = [
  "UI/UX Design",
  "App Design", 
  "Dashboard",
  "Wireframe",
  "User Research"
];

const TagList = () => {
  return (
    <section className="py-12 px-4">
      <div className="container max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {tags.map((tag) => (
              <div
                key={tag}
                className="flex-shrink-0 px-6 py-3 bg-white border border-gray-200 rounded-full text-gray-700 hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                {tag}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default TagList;