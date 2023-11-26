import { DefaultTheme } from "styled-components"

export const breakpoint = {
  xs: "768px",
  sm: "1024px",
  md: "1280px",
  lg: "1600px",
}

export const zIndices = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
}

export const fontSizes = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "18px",
  xl: "20px",
  title: "36px",
  titleMobile: "30px",
  "2md": "32px",
  "2xl": "24px",
  "3xl": "28px",
  "4xl": "36px",
  "4.5xl": "42px",
  "5xl": "48px",
  "6xl": "64px",
  "9xl": "96px",
}

export const fonts = {
  primary: '"Nunito Sans", sans-serif',
  secondary: '"Lato", sans-serif',
  tertiary: '"Lato", sans-serif',
  foutiary: '"Open Sans", sans-serif'
}

export const darkTheme: DefaultTheme = {
  name: "darkmode",
  bodyColor: "#082e42",
  textColor: "#fff",
  palette: {
    black: "#212121",
    white: "#fff",
    gray: "#39393A",
    red: "#ae3c43",
    primary: {
      main: "#164863",
      contrastBorder: "#868686",
      contrastBg: "#164863",
      contrastButton: '#d8dde6',
      contrastText: "#081B26",
    },
    secondary: {
      main: "",
      contrastBorder: "",
      contrastBg: "",
      contrastButton: '',
      contrastText: "",
    },
  },
  breakpoint,
  zIndices,
  fontSizes,
  fonts
}
