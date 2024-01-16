import { CardSectionSimple } from "@carbon/ibmdotcom-react";
import React from "react";

/**
 * Setting the .html extension between local development and static deployment
 *
 * @type {string}
 * @private
 */
const _htmlExtension = process.env.NODE_ENV !== "production" ? "" : ".html";

/**
 * Homepage
 *
 * @returns {*} JSX for Homepage
 */
const Home = () => (
  <CardSectionSimple
    heading="Page Templates"
    theme="white"
    cards={[
      {
        heading: "White theme example page",
        copy: " ",
        cta: {
          href: `./white-theme-example${_htmlExtension}`,
        },
      },
    ]}
  />
);

export default Home;
