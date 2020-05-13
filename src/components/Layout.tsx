import React from "react"
import styled from "styled-components"

interface Props {
  children: any
}

const Container = styled.div``
const Hero = styled.div`
  background: linear-gradient(104deg, #02aab0 0%, #00cdac 100%);
  width: 100%;
  height: 450px;
  position: absolute;
  z-index: -1;
  margin: 0;
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Hero />
      {children}
    </Container>
  )
}

export default Layout
