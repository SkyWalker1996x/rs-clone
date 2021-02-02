import Header from "../../components/Header/Header";
import MainWrapper from "../../components/Wrappers/MainWrapper";
import Timer from "../../components/Timer/Timer";
import Footer from "../../components/Footer/Footer";
import React from "react";
import { TabsComponent } from "../../components/Tabs/TabsComponent";

const Main = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Timer />
        <TabsComponent />
      </MainWrapper>
      <Footer />
    </>
  );
};

export default Main;
