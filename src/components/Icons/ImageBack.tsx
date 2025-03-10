import { memo, SVGProps } from "react";

const ImageBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.0002 7.92893L10.586 9.34315L16.2429 15L10.586 20.6569L12.0002 22.0711L19.0713 15L12.0002 7.92893Z"
      fill="black"
    />
  </svg>
);

const Memo = memo(ImageBack);
export { Memo as ImageBack };
