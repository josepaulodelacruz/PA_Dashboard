import hexToRgb from "@/assets/theme/functions/hexToRgb";

function rgba(color: string, opacity: number) {
  return `rgba(${hexToRgb(color)}, ${opacity})`;
}

export default rgba;
