import React from "react";

import Add from "./add";
import Apartment from "./apartment";
import Assembly from "./assembly";
import Schedule from "./schedule";
import Delete from "./delete";
import Edit from "./edit";
import Facebook from "./facebook";
import Instagram from "./instagram";
import Logo from "./logo";
import Message from "./message";
import PersonOne from "./personOne";
import PersonTwo from "./personTwo";
import PersonThree from "./personThree";
import PersonFour from "./personFour";
import Plus from "./plus";
import Resident from "./resident";
import Room from "./room";
import Search from "./search";
import Twitter from "./twitter";

import "./styles.css";

export const Icon = ({ icon, width, height, className }) => {
  switch (icon) {
    case "add":
      return <Add width={width} height={height} className={className} />;
    case "apartment":
      return <Apartment width={width} height={height} className={className} />;
    case "assembly":
      return <Assembly width={width} height={height} className={className} />;
    case "schedule":
      return <Schedule width={width} height={height} className={className} />;
    case "edit":
      return <Edit width={width} height={height} className={className} />;
    case "facebook":
      return <Facebook width={width} height={height} className={className} />;
    case "instagram":
      return <Instagram width={width} height={height} className={className} />;
    case "logo":
      return <Logo width={width} height={height} className={className} />;
    case "message":
      return <Message width={width} height={height} className={className} />;
    case "personOne":
      return <PersonOne width={width} height={height} className={className} />;
    case "personTwo":
      return <PersonTwo width={width} height={height} className={className} />;
    case "personThree":
      return <PersonThree width={width} height={height} className={className} />;
    case "personFour":
      return <PersonFour width={width} height={height} className={className} />;
    case "plus":
      return <Plus width={width} height={height} className={className} />;
    case "resident":
      return <Resident width={width} height={height} className={className} />;
    case "room":
      return <Room width={width} height={height} className={className} />;
    case "search":
      return <Search width={width} height={height} className={className} />;
    case "delete":
      return <Delete width={width} height={height} className={className} />;
    case "twitter":
      return <Twitter width={width} height={height} className={className} />;
    default:
      return null;
  }
}