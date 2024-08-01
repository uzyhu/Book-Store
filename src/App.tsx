import { ThemeProvider } from "styled-components";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeName, getTheme, light } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {
  const { themeName, setThemeName } = useContext(ThemeContext);

  return (
    <BookStoreThemeProvider>
      <ThemeProvider theme={getTheme(themeName)}>
        {/* <Layout children={<Home />}></Layout> //1. children을 프롭스로 쓰는 방법 */}
        <GlobalStyle themeName={themeName} />
        <ThemeSwitcher themeName={themeName} setThemeName={setThemeName} />
        <Layout>
          <Home />
        </Layout>
        {/* 2.사이에 children 노드를 넣는 방법 */}
      </ThemeProvider>
    </BookStoreThemeProvider>
  );
}

export default App;
