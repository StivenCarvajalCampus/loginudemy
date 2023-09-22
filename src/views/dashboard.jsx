import React from "react";
import './dashboard.css';
import background from "../assets/images/fondo-general.jpg";
export default function FullPage({ title }) {
  return(
  <div className="image">
    {title}
    </div>
  )
}
FullPage.defaultProps = {
  title: <title>Login react + vite + nodejs</title>
};
