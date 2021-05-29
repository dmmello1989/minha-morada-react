import React from "react";

import Add from "./add";
import Facebook from "./facebook";
import Instagram from "./instagram";
import Twitter from "./twitter";

import "./styles.css";

export class Icon extends React.PureComponent {
  render() {
    const { icon, width, height, className } = this.props;

    switch (icon) {
      case "add":
        return <Add width={width} height={height} className={className} />;
      case "facebook":
        return <Facebook width={width} height={height} className={className} />;
      case "instagram":
        return <Instagram width={width} height={height} className={className} />;
      case "twitter":
        return <Twitter width={width} height={height} className={className} />;
      default:
        return null;
    }
  }
}