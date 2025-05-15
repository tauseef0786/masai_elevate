const Loading = () => {
  return (
    <div className="loading mt-4 p-4 text-center">
      <div className="loader inline-block w-6 h-6 border-4 border-t-4 border-blue-500 rounded-full animate-spin"></div>
      <p className="mt-2">Fetching weather data, please wait...</p>
    </div>
  );
};

export default Loading;

