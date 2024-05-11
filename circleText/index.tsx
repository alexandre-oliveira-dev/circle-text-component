import {PropsWithoutRef, SVGProps} from "react";
import "../../pages/home/styles.css";
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

type TagProps = {} & PropsWithoutRef<SVGProps<any>>;

export default function CircleText({...props}: TagProps) {
  return (
    <>
      <svg
        style={{
          position: "absolute",
          left: "-75px",
          top: "-60px",
          zIndex: 100,
          width: 140,
        }}
        {...props}
      >
        <path
          id="circlePath"
          fill="none"
          stroke="none"
          d="M 30, 60
             a 40,40 0 1,1 90,0
             40,40 0 1,1 -90,0"
        />
        <text fill="#fff" letterSpacing={2} fontSize={18}>
          <textPath href="#circlePath">Download cv - Download cv -</textPath>
        </text>
      </svg>
    </>
  );
}
