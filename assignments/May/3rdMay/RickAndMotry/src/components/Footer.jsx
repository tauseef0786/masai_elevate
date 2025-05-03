import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval); 
  }, []);

  const formatTime = (date) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const formattedDate = date.toLocaleDateString("en-US", options);

    return `${hours}:${minutes}:${seconds} ${formattedDate}`;
  };

  return (
    <footer className="text-center py-4 text-sm text-gray-500 border-t mt-4">
      {formatTime(time)}
    </footer>
  );
};

export default Footer;
