import React from "react";
import Header from "./Header";
import CheckBox from "./CheckBox";
import Display from "./Display";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="home__row">
        <CheckBox />
        <Display />
      </div>
    </div>
  );
}

export default App;
