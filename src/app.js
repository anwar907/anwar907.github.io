import React from "react";
import techTools from "./assets/assets";
import ToolsDevelopment from "./toolsDevelopment";

function App() {
  const toolsItems = techTools.map((item, index) => (
    <ToolsDevelopment key={index} product={item} />
  ));
  return (
    <div class="col-10" data-aos="fade-down">
      <div
        class="project label-content aos-init aos-animate"
        data-aos="fade-down"
      >
        <h2>My Development Tools </h2>
      </div>
      <div class="row">{toolsItems}</div>
    </div>
  );
}

export default App

