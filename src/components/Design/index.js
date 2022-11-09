import React from "react";
import "./index.css";
import Typical from "react-typical";

export default function Design() {
  return (
    <div className="design">
      <Typical
        className="typical"
        steps={[
          "Welcome to",
          2000,
          "Gi Plus",
          2000,
          "The best app",
          2000,
          "to manage your company",
          2000,
        ]}
        loop={Infinity}
        wrapper="span"
      />
    </div>
  );
}
