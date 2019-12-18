import React, { Component, ReactChild, MouseEvent } from "react";
import { renderToStaticMarkup } from "react-dom/server";

// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Solution 5 – React
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • Understand how you can use TypeScript with React
// • Replacing propTypes with type aliases
// • Functional and class components
// • React specific types

export default () => {
  // ======== Solution 5.1 ========
  // Instructions:
  // • Replace the card PropTypes for a Type Alias
  // • As a good practice, declare the type alias before the component

  type CardProps = {
    title: string;
    subtitle?: string;
    collapsed: boolean;
    theme: "active" | "default" | "frozen";
    text: string;
  };

  const Card = ({ title, subtitle, collapsed, theme, text }: CardProps) => {
    const collapsedClass = collapsed ? "open" : "collapsed";
    return (
      <div className={`card ${collapsedClass} ${theme}`}>
        <h1>{title}</h1>
        {subtitle && <h2>{subtitle}</h2>}
        <p>{text}</p>
      </div>
    );
  };

  console.log(
    "[Exercise 5.1]",
    `Card component: ${renderToStaticMarkup(
      <Card
        title="Sample Card"
        collapsed={false}
        text="This is a sample card"
        theme="active"
      />
    )}`
  );

  // ======== Exercise 5.2 ========
  // Notice that in `package.json`, we have "@types/react" as a dev dependency
  // This exposes type definitions for common React structures (such as `props.children`) and events
  // Instructions:
  // • Created a type alias for the props
  // • Declare a function type for `handleClick` accepting one parameter
  //   of type `MouseEvent` (imported in the beggining of this file) and with no return value (`void`)

  type ButtonProps = {
    handleClick(e: MouseEvent): void;
    label: string;
  };

  const Button = ({ handleClick, label }: ButtonProps) => (
    <button className="custom-button" onClick={handleClick}>
      {label}
    </button>
  );

  console.log(
    "[Exercise 5.2]",
    `PictureFrame: ${renderToStaticMarkup(
      <Button label="Click me" handleClick={e => console.log(e.target)} />
    )}`
  );

  // ======== Exercise 5.3 ========
  // Instructions:
  // • Created a type alias for the props
  // • Use `ReactChild` (imported in the beggining of this file) for `children`

  type PictureProps = {
    children: ReactChild;
    legend: string;
  };

  const PictureFrame = ({ children, legend }: PictureProps) => (
    <div className="picture-frame">
      {children}
      <p className="legend">{legend}</p>
    </div>
  );

  console.log(
    "[Exercise 5.3]",
    `PictureFrame: ${renderToStaticMarkup(
      <PictureFrame legend="Random Picture">
        <img src="https://picsum.photos/200" role="presentation" />
      </PictureFrame>
    )}`
  );

  // ======== Exercise 5.5 ========
  // Class components with props and state need have their types declared
  // Instructions:
  // • Declare the component State and Props types using the <> notation:
  // <Props, State>

  type Props = { initialCount?: number };
  type State = { count: number };

  class Counter extends Component<Props, State> {
    state = {
      count: this.props.initialCount || 0
    };
    render() {
      return (
        <>
          <h1>{this.state.count}</h1>
          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increase
          </button>
        </>
      );
    }
  }

  console.log(
    "[Exercise 5.5]",
    `Counter component: ${renderToStaticMarkup(<Counter initialCount={10} />)}`
  );
};
