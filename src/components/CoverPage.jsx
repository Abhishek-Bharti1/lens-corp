import React from "react";
import "../styles/navbar.css";

const CoverPage = () => {
  return (
    <div className="coverPage-cont">
      <div
        style={{
          width: "55%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 className="fore-front-text">We are at the forefront of AI</h1>
        <h3 className="fore-font-sub-text">
          From Conserving Wildlife to Automatically Generating Caricatures– We
          Do It All
        </h3>

        <div class="button_cont" align="center">
          <a class="coverpage-btn" href="add-website-here" target="_blank">
           Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoverPage;
