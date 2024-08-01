import { ThemeProvider } from "styled-components";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeName, getTheme, light } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {
  return (
    <BookStoreThemeProvider>
        <ThemeSwitcher />
        <Layout>
          <Home />
        </Layout>
    </BookStoreThemeProvider>
  );
}

export default App;
