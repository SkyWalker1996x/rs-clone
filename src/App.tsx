import React from "react";
// components
import Timer from "./components/Timer/Timer";
import MainWrapper from "./components/Wrappers/MainWrapper";
// styles
import 'antd/dist/antd.css';

function App() {
  return (
    <MainWrapper>
      <Timer />
    </MainWrapper>
  );
}

export default App;
