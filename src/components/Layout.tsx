import React from "react"
import styled from "styled-components"

interface Props {
  children: any
}

// const Container = styled.div``
const Hero = styled.div`
  background: linear-gradient(104deg, #02aab0 0%, #00cdac 100%);
  width: 100%;
  height: 450px;
  position: absolute;
  z-index: -1;
  margin: 0 auto;

  @media (max-width: 640px) {
    font-size: 30px;
  }
`

const Header = styled.div`
  /* background-color: pink; */
  height: 80px;
  width: 70%;
  margin: 0 auto;
  display: grid;
  align-content: center;
`

const HeaderTitle = styled.p`
  margin: 0;
  font-weight: 700;
`

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Hero>
      <Header>
        <HeaderTitle>StartUpJobHunt.com</HeaderTitle>
      </Header>
      {children}
    </Hero>
  )
}

export default Layout
