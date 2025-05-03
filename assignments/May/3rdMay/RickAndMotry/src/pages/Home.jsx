import { useState } from "react";
import { useApi } from "../hooks/useApi";
import Grid from "../components/Grid";
import Footer from "../components/Footer";

const Home = () => {
  const [page, setPage] = useState(1);

  const { data, loading, error } = useApi(`/character?page=${page}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  if (data?.results) {
    return (
      <div className="p-4 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Rick and Morty Characters</h1>

        <Grid
          characters={data.results} 
          page={page}               
          setPage={setPage}         
          totalPages={data.info.pages}
        />

        <Footer />
      </div>
    );
  }

  return null;
};

export default Home;
