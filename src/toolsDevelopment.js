import React from "react";

function ToolsDevelopment(props) {
  
  return (
    <div className="m-1" data-aos="fade-down">
      <img src={props.product.src} alt={props.product.alt} />
    </div>
  );
}

export default ToolsDevelopment;
