import React from "react";
import { Route, Switch } from "react-router-dom";
// components
import Main from "./pages/Main";
// styles
import "antd/dist/antd.css";
import TaskPage from "./pages/TaskPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Switch>
      <Route exact path={["/", "/tasks_chart"]} component={Main} />
      <Route
        path="/task/:number"
        render={({ match }) => {
          const { number } = match.params;

          return <TaskPage number={number} />;
        }}
      />

      <Route render={() => <NotFoundPage />} />
    </Switch>
  );
}

export default App;
