import { extendTheme } from "@chakra-ui/react";

import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from "./fonts";
import { colors } from "./colors";

// Customización de tema para Chackra UI
const breakpoints = {
  base: "0px",
  xs: "320px",
  sm: "490px",
  smd: "560px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
  "2xl": "1536px",
};

export const customTheme = extendTheme({
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
});
