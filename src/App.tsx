import React from "react";
// components
import Header from "./components/Header/Header";
import Timer from "./components/Timer/Timer";
import MainWrapper from "./components/Wrappers/MainWrapper";
import TableTimer from './components/Table/TableTimer';
import Footer from "./components/Footer/Footer";
// styles
import "antd/dist/antd.css";

function App() {
  return (
    <>
      <Header />
      <MainWrapper>
        <Timer />
        <TableTimer />
      </MainWrapper>
      <Footer />
    </>
  );
}

export default App;
