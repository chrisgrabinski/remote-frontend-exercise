import React from "react";

import User from "./User";

import { Wrapper, Container } from "./Header.styles";

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <User
          image="https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
          internalRole="Admin"
          name="Julie Howard"
        />
      </Container>
    </Wrapper>
  );
}
