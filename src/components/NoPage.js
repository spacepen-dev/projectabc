import React from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ErrorNumber from "./Dashboard/svg/ErrorNumber";

const NoPage = () => {
  return (
    <Container fluid className="error-cont">
      <div>
        <ErrorNumber />
        <h2 className="error-oops">Oops!</h2>
        <p className="error-msg">
          Sorry, we are unable to find this page. I think something went wrong.
        </p>
        <Button className="error-btn">NEXT</Button>
      </div>
    </Container>
  );
};

export default NoPage;
