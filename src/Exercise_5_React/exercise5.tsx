import React, { Component, ReactChild } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import PropTypes from "prop-types";

// ⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇⏇
//   Exercise 5 – React
// ⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈⏈

// Objectives:
// • Understand how you can use TypeScript with React
// • Replacing propTypes with type aliases
// • Functional and class components
// • React specific types

export default () => {
  // ======== Exercise 5.0 ========
  // The purpose of this exercise is simply to illustrate a that functional Components
  // have no different between JavaScript and TypeScript

  const Hello = () => <h1>Hello from a React Component!</h1>;

  console.log(
    "[Exercise 5.0]",
    `Hello component: ${renderToStaticMarkup(<Hello />)}`
  );

  // ======== Exercise 5.1 ========
  // Instructions:
  // • Replace the card PropTypes for a Type Alias
  // • As a good practice, declare the type alias before the component

  const Card = ({ title, subtitle, collapsed, theme, text }) => {
    const collapsedClass = collapsed ? "open" : "collapsed";
    return (
      <div className={`card ${collapsedClass} ${theme}`}>
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
    theme: PropTypes.oneOf(["active", "default", "frozen"]),
    text: PropTypes.string.isRequired
  };

  console.log(
    "[Exercise 5.1]",
    `Card component: ${renderToStaticMarkup(
      <Card title="Sample Card" theme="active" />
    )}`
  );

  // ======== Exercise 5.2 ========
  // Notice that in `package.json`, we have "@types/react" as a dev dependency
  // This exposes type definitions for common React structures (such as `props.children`)
  // Instructions:
  // • Created a type alias for the props
  // • Use `ReactChild` (imported in the beggining of this file) for `children`

  const PictureFrame = ({ children, legend }) => (
    <div className="picture-frame">
      {children}
      <p className="legend">{legend}</p>
    </div>
  );

  console.log(
    "[Exercise 5.2]",
    `PictureFrame: ${renderToStaticMarkup(
      <PictureFrame legend="Random Picture">
        <img src="https://picsum.photos/200" role="presentation" />
      </PictureFrame>
    )}`
  );

  // ======== Exercise 5.3 ========
  // Class components with no props and no state don't need any type annotation.
  // have no different between JavaScript and TypeScript.
  // Nothing to do on this exercise, just observe.

  class Menu extends Component {
    render() {
      return (
        <menu>
          <a href="/home">Home</a>
          <a href="/about">About</a>
        </menu>
      );
    }
  }

  console.log(
    "[Exercise 5.3]",
    `Menu component: ${renderToStaticMarkup(<Menu />)}`
  );

  // ======== Exercise 5.4 ========
  // Class components with props and state need have their types declared
  // Instructions:
  // • Declare the component State and Props types using the <> notation:
  // <Props, State>

  type Props = { initialCount?: number };
  type State = { count: number };

  class Counter extends Component {
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
    "[Exercise 5.4]",
    `Counter component: ${renderToStaticMarkup(<Counter initialCount={10} />)}`
  );
};
