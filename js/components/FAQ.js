import React from "react";

import "styles/faq.css";



const content = [

  {

    title: "What is an NFT",

    content:

      "blahblahblah",

  },

  {

    title: "some qestion",

    content:

      "some answer",

  },

  {

    title: "When is the Official Launch?",

    content:

      "good question",

  },

  {

    title: "?",

    content:

      "another really good question",

  },

  {

    title: "?",

    content:

      "Yes. ",

  },

  {

    title: "?",

    content: "ok",

  },

];



export default function FAQ() {

  return (

    <div

      className="maxWidthContainer"

      id="scrollFAQ"

      style={{ padding: "50px 25px", paddingBottom: "0px" }}

    >

      <h3 className="coloredText">Still have questions?</h3>

      <h1 style={{ marginBottom: "40px" }}>FAQ</h1>

      {content.map((indContent, index) => {

        return (

          <div

            className="container containerHighlight FAQContainer"

            id={"FAQContainer" + index}

            style={{ cursor: "pointer" }}

            onClick={() => {

              document

                .getElementById("FAQContainer" + index)

                .classList.toggle("expanded");

              document

                .getElementById("FAQArrow" + index)

                .classList.toggle("expanded");

            }}

          >

            <div

              className="flex FAQContent"

              style={{ justifyContent: "space-between", paddingBottom: "20px" }}

            >

              <h2 className="FAQTitle">{indContent.title}</h2>

              <div id={"FAQArrow" + index} className="FAQArrow">

                <svg viewBox="0 0 448 512" style={{ width: "25px" }}>

                  <path

                    fill="white"

                    d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"

                    class=""

                  ></path>

                </svg>

              </div>

            </div>

            <p>

              {indContent.content.split("~n").map((paragraph) => {

                return (

                  <>

                    {paragraph} <br />

                  </>

                );

              })}

            </p>

          </div>

        );

      })}

    </div>

  );

}

