import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
/**
 *
 * @returns
 * Header
 * - LOGO
 * - NavItem
 * Body
 * - Search bar
 * - RestaurentContainer
 * - RestaurentCard
 * Footer
 * - Links
 *
 */

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
