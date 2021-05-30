import React from "react";

import Add from "./add";
import Apartment from "./apartment";
import Assembly from "./assembly";
import Calendar from "./calendar";
import Facebook from "./facebook";
import Instagram from "./instagram";
import Logo from "./logo";
import Message from "./message";
import Resident from "./resident";
import Room from "./room";
import Twitter from "./twitter";

import "./styles.css";

export class Icon extends React.PureComponent {
  render() {
    const { icon, width, height, className } = this.props;

    switch (icon) {
      case "add":
        return <Add width={width} height={height} className={className} />;
      case "apartment":
        return <Apartment width={width} height={height} className={className} />;
      case "assembly":
        return <Assembly width={width} height={height} className={className} />;
      case "calendar":
        return <Calendar width={width} height={height} className={className} />;
      case "facebook":
        return <Facebook width={width} height={height} className={className} />;
      case "instagram":
        return <Instagram width={width} height={height} className={className} />;
      case "logo":
        return <Logo width={width} height={height} className={className} />;
      case "message":
        return <Message width={width} height={height} className={className} />;
      case "resident":
        return <Resident width={width} height={height} className={className} />;
      case "room":
        return <Room width={width} height={height} className={className} />;
      case "twitter":
        return <Twitter width={width} height={height} className={className} />;
      default:
        return null;
    }
  }
}