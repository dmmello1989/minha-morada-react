import React from "react";
import classNames from "classnames";

class Calendar extends React.PureComponent {
  render() {
    const { width, height, className } = this.props;
    const classes = classNames("icon", className);

    return(
      <svg 
        width={width} 
        height={height}
        viewBox="0 0 290.626 290.626"
        className={classes}
        style="enable-background:new 0 0 290.626 290.626;" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <g>
            <path style="fill:#333333;" d="M257.813,243.75c0,2.587-2.1,4.688-4.688,4.688H14.063c-2.588,0-4.688-2.1-4.688-4.688V107.813
              h248.438v60.937h9.375V75c0-7.753-6.309-14.063-14.063-14.063h-18.75V46.875c0-7.753-6.309-14.063-14.063-14.063
              c-7.753,0-14.063,6.309-14.063,14.063v14.063H60.938V46.875c0-7.753-6.309-14.063-14.063-14.063s-14.063,6.309-14.063,14.063
              v14.063h-18.75C6.309,60.938,0,67.247,0,75v168.75c0,7.753,6.309,14.063,14.063,14.063h239.063
              c7.753,0,14.063-6.309,14.063-14.063v-9.375h-9.375v9.375H257.813z M215.625,46.875c0-2.583,2.1-4.688,4.688-4.688
              S225,44.292,225,46.875v18.75c0,2.583-2.1,4.688-4.688,4.688s-4.688-2.105-4.688-4.688v-18.75H215.625z M42.188,46.875
              c0-2.583,2.1-4.688,4.688-4.688s4.688,2.105,4.688,4.688v18.75c0,2.583-2.1,4.688-4.688,4.688s-4.688-2.105-4.688-4.688V46.875z
              M14.063,70.313h19.613c1.941,5.442,7.097,9.375,13.2,9.375s11.259-3.933,13.2-9.375h147.042c1.941,5.442,7.097,9.375,13.2,9.375
              s11.259-3.933,13.2-9.375h19.608c2.587,0,4.688,2.105,4.688,4.688V98.44H9.375V75C9.375,72.417,11.475,70.313,14.063,70.313z"/>
            <path style="fill:#F9BA48;" d="M250.782,239.063c-21.97,0-39.844-17.873-39.844-39.844s17.873-39.844,39.844-39.844
              s39.844,17.873,39.844,39.844S272.752,239.063,250.782,239.063z"/>
            <polygon style="fill:#333333;" points="232.289,197.663 227.086,205.463 244.688,217.196 289.566,162.342 282.31,156.408 
              242.813,204.68 		"/>
            <path style="fill:#333333;" d="M56.25,121.875H23.438V150H56.25V121.875z M46.875,140.625H32.813v-9.375h14.063L46.875,140.625
              L46.875,140.625z"/>
            <path style="fill:#333333;" d="M103.125,121.875H70.313V150h32.813v-28.125H103.125z M93.75,140.625H79.688v-9.375H93.75V140.625z
              "/>
            <path style="fill:#333333;" d="M150,121.875h-32.813V150H150V121.875z M140.625,140.625h-14.063v-9.375h14.063V140.625z"/>
            <path style="fill:#333333;" d="M196.875,121.875h-32.813V150h32.813V121.875z M187.5,140.625h-14.063v-9.375H187.5V140.625z"/>
            <path style="fill:#333333;" d="M243.75,121.875h-32.813V150h32.813V121.875z M234.375,140.625h-14.063v-9.375h14.063V140.625z"/>
            <path style="fill:#333333;" d="M56.25,164.063H23.438v28.125H56.25V164.063z M46.875,182.813H32.813v-9.375h14.063L46.875,182.813
              L46.875,182.813z"/>
            <path style="fill:#333333;" d="M103.125,164.063H70.313v28.125h32.813v-28.125H103.125z M93.75,182.813H79.688v-9.375H93.75
              V182.813z"/>
            <path style="fill:#333333;" d="M150,164.063h-32.813v28.125H150V164.063z M140.625,182.813h-14.063v-9.375h14.063V182.813z"/>
            <path style="fill:#333333;" d="M196.875,164.063h-32.813v28.125h32.813V164.063z M187.5,182.813h-14.063v-9.375H187.5V182.813z"/>
            <path style="fill:#333333;" d="M23.438,234.375H56.25V206.25H23.438V234.375z M32.813,215.625h14.063V225H32.813V215.625z"/>
            <path style="fill:#333333;" d="M70.313,234.375h32.813V206.25H70.313V234.375z M79.688,215.625H93.75V225H79.688V215.625z"/>
            <path style="fill:#333333;" d="M117.188,234.375H150V206.25h-32.813v28.125H117.188z M126.563,215.625h14.063V225h-14.063V215.625
              z"/>
            <path style="fill:#333333;" d="M164.063,234.375h32.813V206.25h-32.813V234.375z M173.438,215.625H187.5V225h-14.063v-9.375
              H173.438z"/>
          </g>
        </g>
      </svg>
    )
  }
}

export default Calendar;