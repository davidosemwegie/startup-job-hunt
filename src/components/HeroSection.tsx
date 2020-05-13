import React from "react"
import styled from "styled-components"

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
`

const SearchForm = styled.form`
  background-color: pink;
`

const SearchInput = styled.input`
  border: none;
  width: 300px;
  height: 60px;
  border-radius: 20px;
`

const SearchButton = styled.button`
  text-transform: uppercase;
  background-color: black;
  width: 300px;
  height: 60px;
  border-radius: 20px;
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
        <SearchButton>search</SearchButton>
      </SearchForm>
    </Container>
  )
}

export default HeroSection
