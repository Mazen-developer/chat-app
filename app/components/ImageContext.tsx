"use client";

import { createContext, useContext, useState } from "react";

type ImageContextType = {
  image: string | null;
  setImage: (img: string) => void;
};

const ImageContext = createContext<ImageContextType | null>(null);

export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <ImageContext.Provider value={{ image, setImage }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error("useImage must be used inside ImageProvider");
  }
  return context;
};