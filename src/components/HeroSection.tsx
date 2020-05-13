import React from "react"
import styled from "styled-components"
import Button from "./Button"

interface Props {}

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  height: 450px;
  display: grid;
  justify-content: center;
  align-content: center;
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

const SearchForm = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 20px;
  justify-content: center;
  padding: 20px;

  @media (max-width: 640px) {
    grid-template-columns: auto;
    /* grid-template-columns: repeat(1, auto); */
  }
`

const SearchInput = styled.input`
  border: none;
  width: 300px;
  height: 60px;
  border-radius: 20px;
  font-size: 30px;
  font-weight: 700;
  padding-left: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
`

const HeroSection: React.FC<Props> = () => {
  return (
    <Container>
      <HeroMessage>
        Find your dream job as a <code>{`{developer}`}</code> in a modern start
        up.
      </HeroMessage>
      <SearchForm>
        <SearchInput type="text" placeholder="Location" />
        <Button
          title="Search"
          onClick={() => console.log("The button was clicked")}
        />
      </SearchForm>
    </Container>
  )
}

export default HeroSection
