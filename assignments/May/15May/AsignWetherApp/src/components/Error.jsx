const Error = ({ message }) => {
  return (
    <div className="error mt-4 p-4 text-red-500 text-center border border-red-500 rounded">
      <p>Error: {message}</p>
    </div>
  );
};

export default Error;

