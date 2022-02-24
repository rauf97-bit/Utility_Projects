import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import SearchImage from "./SearchImage";

const Main = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState("");
  const [images, setImages] = useState([]);

  useEffect(() => {
    const getImages = async () => {
      const data = await fetch(
        `https://pixabay.com/api/?key=25747926-b6d323f0fceb9de662fdc80a4&q=${text}&image_type=photo&pretty=true`
      );
      const imageData = await data.json();
      const newImage = imageData.hits;
      // console.log(newImage)
      setImages(newImage);
      setIsLoading(false);
    };
    getImages();
  }, [text]);

  return (
    <div className="container mx-auto">
      <SearchImage searchText={(textz) => setText(textz)} />
      {!isLoading && images.length === 0 && (
        <h1 className="text-5xl mt-7 mx-auto text-center">Nothing to Show</h1>
      )}
      <div className="grid grid-cols-3 gap-4">
        {isLoading ? (
          <h1 className="text-5xl mt-7 mx-auto text-center">Loading.....</h1>
        ) : (
          images.map((image) => <ImageCard key={image.id} image={image} />)
        )}
      </div>
    </div>
  );
};

export default Main;
