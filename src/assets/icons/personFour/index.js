import React from "react";
import classNames from "classnames";

class PersonFour extends React.PureComponent {
  render() {
    const { width, height, className } = this.props;
    const classes = classNames("icon", className);

    return(
      <svg 
        width={width} 
        height={height}
        viewBox="0 0 496 496"
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
      >
      <path d="m280 360-32-16-32 16 16 24-8 104h48l-8-104zm0 0" fill="#f0bc5e"/><path d="m332.167969 40.847656-7.03125-7.03125c-21.808594-21.808594-50.808594-33.816406-81.65625-33.816406-63.671875 0-115.480469 51.808594-115.480469 115.480469v60.519531h8c0-17.671875 14.328125-32 32-32h.726562c1.113282-8.382812 3.554688-16.566406 7.363282-24.175781 4.847656-9.695313 14.757812-15.824219 25.597656-15.824219 9.007812 0 17.496094 4.238281 22.898438 11.449219l10.613281 14.152343c3.023437 4.03125 7.761719 6.398438 12.800781 6.398438s9.777344-2.367188 12.800781-6.398438l10.613281-14.152343c5.402344-7.210938 13.890626-11.449219 22.898438-11.449219 10.839844 0 20.75 6.128906 25.597656 15.824219 3.808594 7.609375 6.25 15.792969 7.363282 24.175781h.726562c17.671875 0 32 14.328125 32 32h8v-87.015625c0-22.328125-14.625-41.800781-35.832031-48.136719zm0 0" fill="#f0bc5e"/><path d="m248 240c-8.824219 0-16-7.175781-16-16h-16c0 17.648438 14.351562 32 32 32s32-14.351562 32-32h-16c0 8.824219-7.175781 16-16 16zm0 0"/><path d="m216 176c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0"/><path d="m296 176c0 4.417969-3.582031 8-8 8s-8-3.582031-8-8 3.582031-8 8-8 8 3.582031 8 8zm0 0"/><path d="m248 0c-136.753906 0-248 111.246094-248 248s111.246094 248 248 248 248-111.246094 248-248-111.246094-248-248-248zm-88 296c0-4.414062 3.585938-8 8-8s8 3.585938 8 8c0 3.175781-1.886719 5.863281-4.574219 7.160156l-3.816406.761719c-4.226563-.21875-7.609375-3.648437-7.609375-7.921875zm160 0c0-4.414062 3.585938-8 8-8s8 3.585938 8 8c0 4.273438-3.382812 7.703125-7.609375 7.921875l-3.816406-.761719c-2.6875-1.296875-4.574219-3.984375-4.574219-7.160156zm80 127.046875c-9.976562 8.671875-20.648438 16.554687-32 23.441406v-2.136719c0-40.960937-6.472656-81.261718-19.222656-120.039062l19.0625 3.816406c18.640625 3.726563 32.160156 20.222656 32.160156 39.222656zm-80-74.519531v-29.976563l.265625.058594c1.957031.671875 4.015625 1.085937 6.160156 1.230469l4.125.824218c14.175781 39.816407 21.449219 81.375 21.449219 123.6875v10.9375c-19.921875 10.03125-41.457031 17.261719-64.128906 21.214844 21.058594-39.304687 32.128906-83.175781 32.128906-127.976562zm-16 0c0 4.777344-.230469 9.527344-.496094 14.273437l-41.992187-21 29.121093-29.121093 13.367188 2.671874zm-56-76.527344c-39.703125 0-72-32.296875-72-72v-45.910156c0-10.601563 2.503906-21.210938 7.238281-30.691406 3.523438-7.03125 10.59375-11.398438 18.449219-11.398438 6.457031 0 12.625 3.089844 16.496094 8.238281l10.617187 14.160157c4.503907 6.015624 11.6875 9.601562 19.199219 9.601562s14.695312-3.585938 19.191406-9.601562l10.617188-14.152344c3.878906-5.15625 10.046875-8.246094 16.503906-8.246094 7.855469 0 14.925781 4.367188 18.449219 11.398438 4.734375 9.472656 7.238281 20.089843 7.238281 30.691406v45.910156c0 39.703125-32.296875 72-72 72zm0 16c11.296875 0 22.0625-2.214844 32-6.113281v18.800781l-32 32-32-32v-18.800781c9.9375 3.898437 20.703125 6.113281 32 6.113281zm-42.632812 24.679688 29.121093 29.121093-41.992187 21c-.265625-4.746093-.496094-9.496093-.496094-14.273437v-33.175782zm-35.800782 7.160156c2.144532-.144532 4.210938-.558594 6.160156-1.230469l.273438-.058594v29.976563c0 44.800781 11.070312 88.671875 32.128906 127.96875-22.671875-3.945313-44.207031-11.175782-64.128906-21.214844v-10.9375c0-42.3125 7.273438-83.871094 21.441406-123.6875zm-41.566406 124.511718v2.136719c-11.351562-6.886719-22.023438-14.769531-32-23.441406v-55.695313c0-19 13.519531-35.496093 32.160156-39.222656l19.0625-3.816406c-12.75 38.777344-19.222656 79.070312-19.222656 120.039062zm100.089844 34.738282c-18.160156-30.464844-29.707032-64.1875-34.042969-99.167969l53.953125-26.96875 53.953125 26.976563c-4.328125 34.980468-15.882813 68.703124-34.042969 99.167968-6.566406.550782-13.199218.902344-19.910156.902344s-13.34375-.351562-19.910156-.910156zm187.910156-71.347656v-40.390626c0-26.589843-18.929688-49.695312-45.015625-54.910156l-22.3125-4.464844c2.0625-3.535156 3.328125-7.59375 3.328125-11.976562 0-13.230469-10.769531-24-24-24s-24 10.769531-24 24c0 1.0625.175781 2.078125.3125 3.105469l-8.3125-1.65625v-23.785157c19.960938-13.046874 34.265625-33.96875 38.574219-58.328124 18.921875-3.160157 33.425781-19.535157 33.425781-39.335938 0-19.976562-14.769531-36.433594-33.929688-39.382812-1.484374-7.050782-3.78125-13.9375-7-20.378907-6.246093-12.476562-18.796874-20.238281-32.757812-20.238281-11.464844 0-22.417969 5.480469-29.296875 14.648438l-10.617187 14.160156c-3 4-9.796876 4-12.796876 0l-10.617187-14.167969c-6.878906-9.167969-17.832031-14.640625-29.296875-14.640625-13.960938 0-26.503906 7.761719-32.757812 20.238281-3.21875 6.441407-5.515626 13.320313-7 20.371094-19.160157 2.957031-33.929688 19.414063-33.929688 39.390625 0 19.800781 14.503906 36.175781 33.425781 39.335938 4.300781 24.359374 18.613281 45.273437 38.574219 58.328124v23.785157l-8.3125 1.664062c.136719-1.035156.3125-2.050781.3125-3.113281 0-13.230469-10.769531-24-24-24s-24 10.769531-24 24c0 4.382812 1.265625 8.441406 3.328125 11.976562l-22.3125 4.464844c-26.085937 5.214844-45.015625 28.320313-45.015625 54.910156v40.390626c-39.609375-41.636719-64-97.878907-64-159.742188 0-127.921875 104.078125-232 232-232s232 104.078125 232 232c0 61.863281-24.390625 118.105469-64 159.742188zm-80.039062-254.277344c9.3125 3.304687 16.039062 12.101562 16.039062 22.535156 0 10.414062-6.710938 19.214844-16 22.527344v-44.4375c0-.210938-.03125-.417969-.039062-.625zm-175.960938.625v44.4375c-9.289062-3.3125-16-12.113282-16-22.527344 0-10.433594 6.726562-19.230469 16.039062-22.535156-.007812.207031-.039062.414062-.039062.625zm0 0"/></svg>
    )
  }
}

export default PersonFour;