import React from "react";
import Routes from "./router";
import { Layout } from "@src/components";
import { useLocation } from "react-router-dom";
import "@src/assets/scss/base/normalize.css";

function App() {
  const location = useLocation();
  console.log(location, "location1");
  return (
    <Layout
      className="cms-layout-default"
      paddingTop="50px"
      mainMinHeight="calc(100vh - 50px)"
    >
      <Routes />
    </Layout>
  );
}

export default App;
