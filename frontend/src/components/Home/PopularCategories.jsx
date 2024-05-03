import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    
    {
      id: 2,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 3,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Postions",
      icon: <FaReact />,
    },
    {
      id: 4,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 5,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 6,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 7,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <IoGameController />,
    },
  ];
  return (
    <div className="categories">
      <h3>POPULAR CATEGORIES</h3>
      <div className="banner">
        {categories.map((element) => {
          return (
            <div className="card" key={element.id}>
              <div className="icon">{element.icon}</div>
              <div className="text">
                <p>{element.title}</p>
                <p>{element.subTitle}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularCategories;
