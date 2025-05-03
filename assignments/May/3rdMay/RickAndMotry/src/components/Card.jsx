const Card = ({ character }) => {
    if (!character) return null;

    const { id, image, name, species, status } = character;

    return (
        <a
            href={`/character/${id}`}
            rel="noopener noreferrer"
            className="border rounded-lg shadow p-3 hover:scale-105 transition"
        >
            <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{name}</h2>
            <p>{species}</p>
            <p
                className={`text-sm ${status === "Alive" ? "text-green-500" :status === "Dead" ? "text-red-500" :status==="unknow" ? "text-gray-500":""
                    }`}
            >
                {status}
            </p>
        </a>
    );
};

export default Card;
