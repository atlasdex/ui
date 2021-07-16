import { MediaQueries, Breakpoints, Spacing, Fonts, Gradients } from "./types";

export const breakpointMap: { [key: string]: number } = {
  xs: 400,
  sm: 576,
  md: 768,
  lg: 968,
  xl: 1080,
  xxl : 1200,

};

const breakpoints: Breakpoints = Object.values(breakpointMap).map((breakpoint) => `${breakpoint}px`);

const mediaQueries: MediaQueries = {
  xs: `@media screen and (min-width: ${breakpointMap.xs}px)`,
  sm: `@media screen and (min-width: ${breakpointMap.sm}px)`,
  md: `@media screen and (min-width: ${breakpointMap.md}px)`,
  lg: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  xl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  xxl: `@media screen and (min-width: ${breakpointMap.xl}px)`,
  nav: `@media screen and (min-width: ${breakpointMap.lg}px)`,
  maxWidthXS: `@media (max-width: ${breakpointMap.xs}px)`,
  maxWidthSM: `@media (max-width: ${breakpointMap.sm}px)`,
  maxWidthMD: `@media (max-width: ${breakpointMap.md}px)`,
  maxWidthLG: `@media (max-width: ${breakpointMap.lg}px)`,
  maxWidthXL: `@media (max-width: ${breakpointMap.xl}px)`,
  maxWidthXXL: `@media (max-width: ${breakpointMap.xxl}px)`,



};

export const shadows = {
  level1: "-4px -2px 16px rgba(195, 200, 205, 0.04), 4px 4px 16px rgba(0, 0, 0, 0.1)",
  level2: "-4px -2px 16px rgba(195, 200, 205, 0.04), 4px 4px 16px rgba(0, 0, 0, 0.2)",
  level3: "-4px -2px 16px rgba(195, 200, 205, 0.04), 4px 4px 16px rgba(0, 0, 0, 0.3)",
  level4: "-4px -2px 16px rgba(195, 200, 205, 0.04), 4px 4px 16px rgba(0, 0, 0, 0.4)",
  level5: "-4px -2px 16px rgba(195, 200, 205, 0.04), 4px 4px 16px rgba(0, 0, 0, 0.5)",
  level6: "-4px -2px 16px rgba(195, 200, 205, 0.04), 4px 4px 16px rgba(0, 0, 0, 0.6)",
};

const spacing: Spacing = [0, 4, 8, 12, 16, 24, 32, 48, 64];

const radii = {
  small: "4px",
  default: "16px",
  card: "32px",
  circle: "50%",
};

const zIndices = {
  dropdown: 10,
  modal: 100,
};
const fonts: Fonts = {
  xs: 10,
  sm: 12,
  md: 14,
  lg: 18,
  xl: 60,
  fontSize13: 13,
  fontSize14: 14,
  fontSize15: 15,
  fontSize16: 16,
  fontSize18: 18,
  fontSize20: 20,
  fontSize21: 21,
  fontSize22: 22,
  fontSize24: 24,
  fontSize26 : 26,

};
const gradients : Gradients = {
  blue : "linear-gradient(326.71deg, #15011C 20.5%, #1D2957 85.61%)",
  multiColor : "linear-gradient(282.26deg , rgba(0, 255, 240, 0.91) -0.57%, rgba(0, 71, 255, 0.91) 51.8%, rgba(186, 6, 251, 0.91) 98.98%)",
  marketCard : "linear-gradient(272.14deg, #3B0051 -18.63%, rgba(8, 14, 39, 0) 98.28%)",
  multiColor2 : "linear-gradient(282.26deg, rgba(0, 255, 240, 0.3) -0.57%, rgba(0, 71, 255, 0.3) 51.8%, rgba(186, 6, 251, 0.3) 98.98%)",
  verticalLine : "linear-gradient(0deg, #C4C4C4, #C4C4C4)",
  multiColor3 : "linear-gradient(95.74deg, #00FFF0 -14%, #BA06FB 116.83%)",
  buttonBorderDark : "linear-gradient(282.26deg, rgba(0, 255, 240, 0.3) -0.57%, rgba(186, 6, 251, 0.3) 98.98%)",
  buttonBorderLight : "linear-gradient(282.26deg, rgba(0, 255, 240, 0.3) -0.57%, rgba(0, 71, 255, 0.3) 51.8%, rgba(186, 6, 251, 0.3) 98.98%)",
  buttonLight : "linear-gradient(283.71deg,rgb(255 255 255 / 82%) 0%,#FAEEFF 72.18%)",
  buttonDark : "linear-gradient(283.71deg, rgba(52, 3, 69, 0.13) 26.79%, #1D2957 72.18%)",
  whiteGrayGradient : "linear-gradient(283.71deg,#f3f5fb 26.79%,#F9FAFF 72.18%)",
  garyWhiteGradinet : "linear-gradient(283.71deg,#F9FAFF 26.79%, #f3f5fb  72.18%)"
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  siteWidth: 1200,
  breakpoints,
  mediaQueries,
  spacing,
  shadows,
  radii,
  fonts,
  zIndices,
  gradients
};