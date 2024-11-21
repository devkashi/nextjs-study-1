"use client";
import React from "react";
import Image from "next/image";
import image1 from "../../../public/image/1Webinar.jpg";
import image2 from "../../../public/image/2Hackathon.jpg";
import image3 from "../../../public/image/3HiringEvent.jpg";
import image4 from "../../../public/image/Company Logo.png";
import image5 from "../../../public/image/ID_Profilepic.jpeg";
import image6 from "../../../public/image/kasi.jpeg";
import "./style.css";
const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      {/* <img className="w-full h-64 object-cover" src={imageUrl} alt={title} /> */}
      <Image
        src={imageUrl}
        className="w-full h-64 object-cover"
        alt={title}
        width={500}
        height={500}
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

const rootPath = process.env.NEXT_PUBLIC_ROOT_PATH;

const HomePage = () => {
  const cardData = [
    {
      title: "Card 1",
      description: "This is the description for card 1.",
      imageUrl: image1,
    },
    {
      title: "Card 2",
      description: "This is the description for card 2.",
      imageUrl: image2,
    },
    {
      title: "Card 3",
      description: "This is the description for card 3.",
      imageUrl: image3,
    },
    {
      title: "Card 4",
      description: "This is the description for card 4.",
      imageUrl: image4,
    },
    {
      title: "Card 5",
      description: "This is the description for card 5.",
      imageUrl: image5,
    },
    {
      title: "Card 6",
      description: "This is the description for card 6.",
      imageUrl: image6,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default HomePage;
