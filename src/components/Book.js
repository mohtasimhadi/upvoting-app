import React, { useState } from "react";

export default function Book({ book }) {
  const { imageUrl, title, description, submitterUrl } = book;
  return (
    <>
      <img src={imageUrl} width="auto" height="250" />,<p>{title}</p>
      <p>{description}</p>
      <p>
        <font size="4">
          {" "}
          Submitted By: <img src={submitterUrl} width="50" height="auto" />
        </font>
      </p>
    </>
  );
}