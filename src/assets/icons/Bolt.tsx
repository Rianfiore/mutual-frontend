import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    id="Camada_1"
    data-name="Camada 1"
    viewBox="0 0 141.35 141.35"
  >
    <defs>
      <style>
        {".cls-1,.cls-2{fill:#ffed00;stroke-width:0}.cls-2{fill:#eed800}"}
      </style>
    </defs>
    <path
      d="M91.84 15.65 59.59 57.52l12.31-.05 19.94-41.82z"
      className="cls-1"
    />
    <path
      d="M75.9 57.47h-4l19.94-41.82-13.63 41.87-2.31-.05z"
      className="cls-2"
    />
    <path
      d="m47.23 115.79 32.25-41.87-12.31.05-19.94 41.82z"
      className="cls-1"
    />
    <path
      d="M63.17 73.97h4l-19.94 41.82 13.63-41.87 2.31.05z"
      className="cls-2"
    />
    <path
      d="M57.58 59.81H88.3l-8.51 11.81h-31.3l9.09-11.81z"
      className="cls-1"
    />
  </svg>
);
export { SvgComponent as Bolt };
