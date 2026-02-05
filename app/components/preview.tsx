"use client";

import { useImage } from "../components/ImageContext";

const Preview = () => {
  const { image } = useImage();

  if (!image) return <p>No image selected</p>;

  return ( <div className="h-screen w-[60%]">
    <img src={image}  />;
</div>
)};

export default Preview;
