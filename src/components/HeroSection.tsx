import React, { Children } from "react"
import styled from "styled-components"
import Button from "./Button"

interface Props {
  children: any
}

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 450px;
  display: grid;
  justify-content: center;
  align-content: center;

  @media (max-width: 640px) {
    height: 380px;
  }
`
const HeroMessage = styled.p`
  margin: 0;
  font-size: 50px;
  font-weight: 900;
  -webkit-font-smoothing: antialiased;
  text-align: center;

  @media (max-width: 640px) {
    font-size: 30px;
  }
`

const HeroSection: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <HeroMessage>
        Find your dream job as a <code>{`{developer}`}</code> in a modern start
        up.
      </HeroMessage>
      {children}
    </Container>
  )
}

export default HeroSection
