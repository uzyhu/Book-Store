import { ThemeProvider } from "styled-components";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import { GlobalStyle } from "./style/global";
import { ThemeName, getTheme, light } from "./style/theme";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./components/common/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
    errorElement: <Error /> //루트 하위 모든 페이지에 적용됨
  },
  {
    path: "/books",
    element: <Layout><div>도서 목록</div></Layout>
  }
]);

function App() {
  return (
    <BookStoreThemeProvider>
      {/* <ThemeSwitcher /> */}
        <RouterProvider router={router} />
    </BookStoreThemeProvider>
  );
}

export default App;
