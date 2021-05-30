import React from "react";
import classNames from "classnames";

class Edit extends React.PureComponent {
  render() {
    const { width, height, className } = this.props;
    const classes = classNames("icon", className);

    return(
      <svg 
        width={width} 
        height={height}
        viewBox="0 0 496 496"
        className={classes}
        enableBackground="new 0 0 64 64" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m208 40v64h-176v192h64v-88h256v-168zm0 0" fill="#f0bc5e"/>
        <path d="m256 464h-224v-144h224zm0 0" fill="#f0bc5e"/>
        <path d="m456 224h-72v-224h-315.3125l-68.6875 68.6875v427.3125h384v-160h40c13.230469 0 24-10.769531 24-24 0-2.816406-.574219-5.488281-1.472656-8h9.472656c22.054688 0 40-17.945312 40-40s-17.945312-40-40-40zm-248 64v-48h192v48zm-16-2.753906-62.039062-18.613282c-1.167969-.351562-1.960938-1.410156-1.960938-2.632812s.792969-2.28125 1.960938-2.632812l62.039062-18.613282zm-128-257.933594v36.6875h-36.6875zm368 284.6875c0 4.40625-3.585938 8-8 8h-128v16h72v144h-352v-400h64v-64h288v208h-168l-74.632812 22.039062c-7.992188 2.402344-13.367188 9.617188-13.367188 17.960938s5.375 15.558594 13.367188 17.960938l73.464843 22.039062h225.167969c4.414062 0 8 3.59375 8 8zm24-24h-40v-48h40c13.230469 0 24 10.769531 24 24s-10.769531 24-24 24zm0 0"/>
        <path d="m208 32h144v16h-144zm0 0"/>
        <path d="m208 64h144v16h-144zm0 0"/>
        <path d="m32 288h64v16h-64zm0 0"/>
        <path d="m32 256h64v16h-64zm0 0"/>
        <path d="m32 96h320v16h-320zm0 0"/>
        <path d="m32 128h320v16h-320zm0 0"/>
        <path d="m32 160h320v16h-320zm0 0"/>
        <path d="m32 192h288v16h-288zm0 0"/>
        <path d="m336 192h16v16h-16zm0 0"/>
        <path d="m32 224h64v16h-64zm0 0"/>
      </svg>
    )
  }
}

export default Edit;