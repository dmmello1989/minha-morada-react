import React from "react";
import classNames from "classnames";

class Message extends React.PureComponent {
  render() {
    const { width, height, className } = this.props;
    const classes = classNames("icon", className);

    return(
      <svg
        width={width} 
        height={height}
        viewBox="0 0 64 64"
        className={classes}
        enableBackground="new 0 0 64 64" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m17.029 7.373h33.941v45.255h-33.941z" fill="#f0bc5e" transform="matrix(.707 -.707 .707 .707 -11.255 32.828)"/>
        <path d="m30 .586-25.414 25.414 33.414 33.414 25.414-25.414zm-1 24.414h-20.586l20.586-20.586zm0 2v1c0 3.86 3.141 7 7 7h1v20.586l-28.586-28.586zm10 8h20.586l-20.586 20.586zm-3-2c-2.757 0-5-2.243-5-5v-23.586l28.586 28.586z"/>
        <path d="m4.606 51.791h19.207v2h-19.207z" transform="matrix(.707 -.707 .707 .707 -33.167 25.51)"/>
        <path d="m4.739 60.371h1.779v2h-1.779z" transform="matrix(.707 -.707 .707 .707 -41.747 21.955)"/>
        <path d="m-1.314 50h22.627v2h-22.627z" transform="matrix(.707 -.707 .707 .707 -33.134 22.009)"/>
        <path d="m14.929 56h14.142v2h-14.142z" transform="matrix(.707 -.707 .707 .707 -33.861 32.251)"/>
        <path d="m13.738 57.368h1.787v2h-1.787z" transform="matrix(.707 -.707 .707 .707 -36.987 27.442)"/>
        <path d="m14.937 51.754h10.618v2h-10.618z" transform="matrix(.707 -.707 .707 .707 -31.373 29.767)"/>
        <path d="m2.929 44h14.142v2h-14.142z" transform="matrix(.707 -.707 .707 .707 -28.891 20.251)"/>
        <path d="m-.071 41h14.142v2h-14.142z" transform="matrix(.707 -.707 .707 .707 -27.648 17.251)"/>
        <path d="m33 9.586h2v2.828h-2z" transform="matrix(.707 -.707 .707 .707 2.18 27.264)"/>
        <path d="m45.5 15.722h2v15.556h-2z" transform="matrix(.707 -.707 .707 .707 -2.998 39.764)"/>
        <path d="m37 13.586h2v2.828h-2z" transform="matrix(.707 -.707 .707 .707 .523 31.264)"/>
        <path d="m40.586 48h2.828v2h-2.828z" transform="matrix(.707 -.707 .707 .707 -22.347 44.05)"/>
        <path d="m44.586 44h2.828v2h-2.828z" transform="matrix(.707 -.707 .707 .707 -18.347 45.707)"/>
        <path d="m48.586 40h2.828v2h-2.828z" transform="matrix(.707 -.707 .707 .707 -14.347 47.364)"/>
      </svg>
    )
  }
}

export default Message;