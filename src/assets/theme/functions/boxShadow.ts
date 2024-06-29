import pxToRem from "@/assets/theme/functions/pxToRem";
import rgba from "@/assets/theme/functions/pxToRem";

function boxShadow(offset: any[] = [], radius: number[] = [], color: number, opacity: number, inset = "") {
  const [x, y] = offset;
  const [blur, spread] = radius;

  return `${inset} ${pxToRem(x)} ${pxToRem(y)} ${pxToRem(blur)} ${pxToRem(spread)} ${rgba(
    color,
    opacity
  )}`;
}

export default boxShadow;
