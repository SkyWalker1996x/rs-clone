import Header from "../../components/Header/Header";
import MainWrapper from "../../components/Wrappers/MainWrapper";
import Timer from "../../components/Timer/Timer";
import TableTimer from "../../components/Table/TableTimer";
import Footer from "../../components/Footer/Footer";
import React from "react";

const Main = () => {
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
};

export default Main;
