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

  console.log(`Here's your component: ${renderToStaticMarkup(<Hello />)}`);

  // ======== Exercise 5.1 ========
  // Blah Blah
  // Instructions:
  // • Loren ipsum

  type CardProps = {
    title: string;
    subtitle?: string;
    collapsed: boolean;
    text: string;
  };

  const Card = ({ title, subtitle, collapsed, text }: CardProps) => {
    const classes = collapsed ? "card open" : "card collapsed";
    return (
      <div className={classes}>
        <h1>title</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <p>{text}</p>
      </div>
    );
  };

  console.log(
    `Card component: ${renderToStaticMarkup(
      <Card
        title="Sample Card"
        collapsed={false}
        text="This is a sample card"
      />
    )}`
  );
};
