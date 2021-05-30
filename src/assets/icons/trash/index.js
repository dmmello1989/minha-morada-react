import React from "react";
import classNames from "classnames";

class Add extends React.PureComponent {
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
        <path d="m46 15v33l.119.178 3.877 1.94 3.998-2 4.003 2 3.885-1.941.118-.177v-33z" fill="#f0bc5e"/>
        <path d="m27 6h12v9h-12z" fill="#f0bc5e"/>
        <path d="m54 1c-4.962 0-9 4.037-9 9v38.303l9 13.5 9-13.5v-38.303c0-4.963-4.038-9-9-9zm0 2c3.86 0 7 3.141 7 7v9h-14v-9c0-3.859 3.14-7 7-7zm-2.132 52h4.263l-2.131 3.197zm5.597-2h-6.93l-3.535-5.303v-26.697h6l-.001 2h2l.001-2h6v26.697z"/>
        <path d="m52.999 29h2v19h-2z"/>
        <path d="m52.998 25h2v2h-2z"/>
        <path d="m39 33.586-4.399 4.399c-2.46-1.925-5.475-2.985-8.601-2.985-7.72 0-14 6.28-14 14s6.28 14 14 14 14-6.28 14-14c0-2.131-.495-4.241-1.433-6.153l4.847-4.847zm1.586 4.414-16.586 16.586-4.586-4.586 1.586-1.586 3 3 15-15zm-2.586 11c0 6.617-5.383 12-12 12s-12-5.383-12-12 5.383-12 12-12c2.597 0 5.109.848 7.181 2.405l-9.181 9.181-3-3-4.414 4.414 7.414 7.414 13.052-13.052c.617 1.466.948 3.044.948 4.638z"/>
        <path d="m18.586 35c1.331 0 2.414-1.083 2.414-2.414v-3.586h17c2.757 0 5-2.243 5-5v-18c0-2.757-2.243-5-5-5h-32c-2.757 0-5 2.243-5 5v18c0 2.757 2.243 5 5 5h5.586l5.293 5.294c.45.448 1.072.706 1.707.706zm-12.586-8c-1.654 0-3-1.346-3-3v-18c0-1.654 1.346-3 3-3h32c1.654 0 3 1.346 3 3v18c0 1.654-1.346 3-3 3h-19v5.586c0 .338-.468.532-.707.293l-5.879-5.879z"/>
        <path d="m23 25v-11.319l1.375 1.1 1.249-1.562-10.624-8.499-10.625 8.499 1.249 1.562 1.376-1.1v11.319h4 8zm-14-2v-10.919l6-4.8 6 4.8v10.919h-2v-8h-8v8zm4 0v-6h4v6z"/>
        <path d="m27 5h12v2h-12z"/>
        <path d="m27 9h12v2h-12z"/>
        <path d="m27 13h8v2h-8z"/>
        <path d="m37 13h2v2h-2z"/>
        <path d="m39 17h-12v8h12zm-2 6h-8v-4h8z"/>
      </svg>
    )
  }
}

export default Add;