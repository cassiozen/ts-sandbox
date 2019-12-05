// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 5 – React
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • Understand how you can use TypeScript with React

import React from "react";
import { renderToStaticMarkup } from "react-dom/server";

export default () => {
  // ======== Exercise 5.0 ========
  // Blah Blah
  // Instructions:
  // • Loren ipsum
  const Hello = () => <h1>Hello from a React Component!</h1>;

  console.log(`Hello component: ${renderToStaticMarkup(<Hello />)}`);

  // ======== Exercise 5.1 ========
  // Blah Blah
  // Instructions:
  // • Loren ipsum
  const Card = ({ title, subtitle, collapsed, text }) => {
    const classes = collapsed ? "card open" : "card collapsed";
    return (
      <div className={classes}>
        <h1>title</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <p>{text}</p>
      </div>
    );
  };

  Card.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    collapsed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  };

  console.log(
    `Card component: ${renderToStaticMarkup(<Card title="Sample Card" />)}`
  );
};
