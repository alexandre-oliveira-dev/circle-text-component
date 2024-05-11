import {PropsWithoutRef, SVGProps} from "react";
import "../../pages/home/styles.css";
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

type TagProps = {
  text: string;
  letterSpacing: number;
  fontSize: number;
  d: string;
  textColor: string;
} & PropsWithoutRef<SVGProps<any>>;

export default function CircleText({
  text,
  letterSpacing,
  fontSize,
  d,
  textColor,
  ...props
}: TagProps) {
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
        <text
          fill={textColor ?? "#000"}
          letterSpacing={letterSpacing || 2}
          fontSize={fontSize || 18}
        >
          <textPath href="#circlePath">{text}</textPath>
        </text>
      </svg>
    </>
  );
}
