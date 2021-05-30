import React from "react";
import classNames from "classnames";

class Logo extends React.PureComponent {
  render() {
    const { width, height, className } = this.props;
    const classes = classNames("icon", className);

    return(
      <svg 
        width={width} 
        height={height}
        viewBox="0 0 157 76"
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(0.000000,76.000000) scale(0.100000,-0.100000)"
        fill="#000000" stroke="none">
          <path fill="#F9BA48"  d="M407 744 c-4 -4 -7 -164 -7 -354 0 -286 2 -350 14 -359 9 -8 45 -11
          98 -9 l83 3 0 30 c0 30 0 30 -62 33 l-63 3 0 299 0 299 63 3 c59 3 62 4 62 28
          0 25 -1 25 -90 28 -50 1 -94 0 -98 -4z"/>
          <path fill="#F9BA48" d="M944 735 c-14 -34 3 -45 71 -45 l65 0 0 -300 0 -300 -65 0 c-70 0
          -90 -14 -68 -49 8 -13 28 -16 99 -16 l89 0 0 360 0 360 -93 3 c-76 2 -93 0
          -98 -13z"/>
          <path d="M154 555 c-12 -29 7 -35 122 -35 l114 0 0 25 0 25 -115 0 c-92 0
          -117 -3 -121 -15z"/>
          <path d="M1150 545 l0 -26 123 3 c114 3 122 4 122 23 0 19 -8 20 -122 23
          l-123 3 0 -26z"/>
          <path d="M634 537 c-2 -7 -3 -76 -2 -152 3 -132 4 -140 23 -140 18 0 20 8 25
          98 l5 97 40 -65 c22 -36 43 -65 47 -65 4 0 24 30 45 66 l38 66 5 -99 c5 -90 7
          -98 25 -98 19 0 20 8 23 153 2 144 1 152 -16 152 -14 0 -34 -26 -69 -86 l-50
          -86 -52 86 c-49 81 -75 103 -87 73z"/>
          <path d="M20 405 l0 -25 185 0 185 0 0 25 0 25 -185 0 -185 0 0 -25z"/>
          <path d="M1150 405 l0 -25 190 0 190 0 0 25 0 25 -190 0 -190 0 0 -25z"/>
          <path d="M154 275 c-15 -39 1 -45 121 -45 l115 0 0 30 0 30 -115 0 c-94 0
          -117 -3 -121 -15z"/>
          <path d="M1150 260 l0 -31 123 3 122 3 0 25 0 25 -122 3 -123 3 0 -31z"/>
        </g>
      </svg>
    )
  }
}

export default Logo;