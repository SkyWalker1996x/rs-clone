import React from "react";
// components
import Timer from "./components/Timer/Timer";
import MainWrapper from "./components/Wrappers/MainWrapper";
import TableTimer from './components/Table/TableTimer';
// styles
import 'antd/dist/antd.css';

function App() {
  return (
    <MainWrapper>
      <Timer />
      <TableTimer />
    </MainWrapper>
  );
}

export default App;
