"use client";

import { useImage } from "../components/ImageContext";
 const Menu = () => {
  const { setImage } = useImage();

  return (
    <div className="h-screen w-[40%] bg-gray-300 flex flex-col">
      <button onClick={() => setImage("/cat.png")}>cat</button>
      <button onClick={() => setImage("/dog.png")}>dog</button>
    </div>
  );
};

export default Menu