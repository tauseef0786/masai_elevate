import Card from "./Card";

const Grid = ({ characters, page, setPage, totalPages }) => {
  const charactersPerPage = 6;

  // Calculate the start and end indexes for pagination
  const startIndex = (page - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  const charactersToDisplay = characters.slice(startIndex, endIndex);

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {charactersToDisplay.map((character) => (
          <Card key={character.id} character={character} />
        ))}
      </div>

      <div className="flex justify-center items-center gap-4 mt-6">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-semibold">{page}</span>
        <button
          onClick={handleNext}
          disabled={page === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Grid;
