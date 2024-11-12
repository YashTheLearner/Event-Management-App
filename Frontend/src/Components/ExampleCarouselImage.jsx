// components/ExampleCarouselImage.js
import React from 'react';

function ExampleCarouselImage({ text }) {
  return (
    <div className="carousel-image h-[50vh]">
      <img
        className="d-block w-100"
        src={`https://via.placeholder.com/800x400?text=${text}`}  // Correct way to concatenate
        alt={text}
      />
    </div>
  );
}

export default ExampleCarouselImage;
