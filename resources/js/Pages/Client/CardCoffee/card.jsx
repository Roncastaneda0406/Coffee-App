import React from "react";

const Card = ({ image, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-36 h-36 rounded-full overflow-hidden bg-emerald-900 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="mt-3 text-sm font-medium text-gray-800 text-center">{name}</h2>
    </div>
  );
};

export default Card;