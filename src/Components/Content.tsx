interface Manga {
  id: string;
  attributes: {
    canonicalTitle: string;
    synopsis: string;
    posterImage: {
      original: string;
    };
  };
}

interface ContentProps {
  results: Manga[];
}

export default function Content({ results }: ContentProps) {
  return (
    <div className="p-4 container mx-auto">
      <h1 className="mb-10 mt-5 text-2xl font-semibold uppercase font-serif">Mangás</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
        {results.map((manga) => (
          <div key={manga.id} className="bg-gray-300 shadow rounded p-4 flex flex-col">
            <img
              src={manga.attributes.posterImage.original}
              alt={manga.attributes.canonicalTitle}
              className="mb-2 rounded object-cover"
            />
            <h2 className="text-lg font-semibold mb-1">
              {manga.attributes.canonicalTitle}
            </h2> 
            <p className="text-sm text-black line-clamp-4">
              {manga.attributes.synopsis}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
