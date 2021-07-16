import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  lightFailure : "#F9E7FF",
  primary: "#000000",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#7645D9",
  success: "rgba(35, 198, 139, 1)",
  warning: "#FFB237",
  yellow: "#FAFF13",
  white: "#FFFFFF",
  gray: "#C4C4C4",
  navbarBorderColor: "#4C4B65",
  lavender : "#BA06FB",
  lightBackground : "#f2f5fa",
  backgroundDropdownDark : "#181132",
  seeGreen : "#008A82",
  lightSeeGreen : "#00a69c2e",
  purple : "#515E90",
  modalBackground : '#1D2957',
  plumb : "#3B0051"
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "linear-gradient(326.71deg, #FFFFFF 20.5%, #E4EAFF 85.61%)",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "linear-gradient(326.71deg, #15011C 20.5%, #1D2957 85.61%)",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  primaryDark: "#0098A1",
};