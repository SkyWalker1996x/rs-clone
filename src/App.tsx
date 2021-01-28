import React from "react";
// components
import Timer from "./components/Timer/Timer";
import MainWrapper from "./components/Wrappers/MainWrapper";
import Table from './components/Table/Table';
// styles
import 'antd/dist/antd.css';

function App() {
  return (
    <MainWrapper>
      <Timer />
      <Table />
    </MainWrapper>
  );
}

export default App;
