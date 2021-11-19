import React from "react";
import Lines from "./Lines";
import Logo from "./Logo";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <Container>
      <header className='d-flex justify-content-center align-items-end mx-auto'>
        <div>
          <Logo />
        </div>
        <div className='ms-auto  position-absolute top-25 end-0 d-none d-md-block'>
          <Lines />
        </div>
      </header>
    </Container>
  );
};

export default Header;
