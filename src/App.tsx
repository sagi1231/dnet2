import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeflex/primeflex.css";
import "./App.css";
import "./prime.override.css";
import "primeicons/primeicons.css";
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import routes from "./routes";
import PageWrapper from "./components/core/PageWrapper";
import { RecoilRoot } from "recoil";
import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wrapper = styled.div`
  height: 100vh;
  padding: 0em;
`;

function App() {
  return (
    <Wrapper>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => {
              return (
                <Route
                  element={<PageWrapper Route={route}></PageWrapper>}
                  key={route.path}
                  path={route.path}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
        <ToastContainer />
      </RecoilRoot>
    </Wrapper>
  );
}

export default App;
