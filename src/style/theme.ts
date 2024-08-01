type ColorKey = "primary" | "background" | "secondary" | "third";
export type ThemeName = "light" | "dark";

interface Theme {
  name: ThemeName;
  color: Record<ColorKey, string>;
  // {
  // primary: string;
  // background: string;
  // secondary?: string;
  // [key: string]: string;
  // [key in ColorKey] : string;
  // }
}

export const light: Theme = {
  name: "light",
  color: {
    primary: "brown",
    background: "lightgray",
    secondary: "blue",
    third: "green",
  },
};

export const dark: Theme = {
  name: "dark",
  color: {
    primary: "coral",
    background: "midnightblue",
    secondary: "darkblue",
    third: "darkgreen",
  },
};

export const getTheme = (themeName: ThemeName): Theme => {
  switch (themeName) {
    case "light":
      return light;
    case "dark":
      return dark;
  }
};
