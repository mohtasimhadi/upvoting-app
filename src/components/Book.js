import React, { useState } from "react";
import { Card } from "react-bootstrap";

export default function Book({ book }) {
  const { imageUrl, title, description, submitterUrl } = book;
  return (
    <Card>
      <Card.Img variant='top' src={imageUrl} style={{height: "250px"}} />
      <Card.Title>{title}</Card.Title>
      <Card.Body>{description}</Card.Body>
      <Card.Footer>Submitted By: <img src={submitterUrl} width="50" height="auto" /></Card.Footer>
    </Card>
  );
}