import React from "react";
import classNames from "classnames";

class Plus extends React.PureComponent {
  render() {
    const { width, height, className } = this.props;
    const classes = classNames("icon", className);

    return(
      <svg 
        width={width} 
        height={height}
        viewBox="0 0 24 24"
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="#FFFFFF" d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/>
      </svg>
    )
  }
}

export default Plus;