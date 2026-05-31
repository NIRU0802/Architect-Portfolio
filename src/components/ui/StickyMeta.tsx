export default function StickyMeta({
    year,
    category,
    location,
  }: {
    year: string;
    category: string;
    location: string;
  }) {
    return (
      <aside className="hidden lg:block sticky top-32 h-fit w-[220px] space-y-6 text-sm text-neutral-600">
        <div>
          <p className="text-black font-medium">Year</p>
          <p>{year}</p>
        </div>
  
        <div>
          <p className="text-black font-medium">Category</p>
          <p>{category}</p>
        </div>
  
        <div>
          <p className="text-black font-medium">Location</p>
          <p>{location}</p>
        </div>
      </aside>
    );
  }