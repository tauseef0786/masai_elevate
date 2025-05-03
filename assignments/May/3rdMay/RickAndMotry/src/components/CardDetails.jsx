
import { useParams } from "react-router-dom";
import { useApi } from "../hooks/useApi";

const CardDetails = () => {
  const { id } = useParams();
  const { data, loading, error } = useApi(`/character/${id}`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 border rounded shadow">
      <img src={data.image} alt={data.name} className="w-full rounded mb-4" />
      <h2 className="text-2xl font-bold">{data.name}</h2>
      <p>Species: {data.species}</p>
      <p>Status: {data.status}</p>
      <p>Gender: {data.gender}</p>
      <p>Origin: {data.origin?.name}</p>
      <p>Location: {data.location?.name}</p>
    </div>
  );
};

export default CardDetails;
