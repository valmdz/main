import React from "react";
import { HomePresentation } from "../../components/HomePresentation/HomePresentation";
import "./Home.css";
import Hola from "../../assets/images/hola.svg";

export const Home = () => {
  return (
    <div className="home">
      <HomePresentation></HomePresentation>
      <img src={Hola} alt="hola" className="hola"></img>
    </div>
  );
};
