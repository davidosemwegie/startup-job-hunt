import React from "react"
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  useQuery
} from "@apollo/client"
import gql from "graphql-tag"
import "./App.css"
import styled from "styled-components"
import Layout from "./components/Layout"
import HeroSection from "./components/HeroSection"
import Button from "./components/Button"
import JobList from "./components/JobList"
import SearchingList from "./components/JobList"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.graphql.jobs/"
  })
})

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
const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <HeroSection>
          {/* <SearchForm>
            <SearchInput type="text" placeholder="Location" />
            <Button
              title="Search"
              onClick={() => console.log("The button was clicked")}
            />
          </SearchForm> */}
        </HeroSection>
        <SearchingList />
      </Layout>
    </ApolloProvider>
  )
}

export default App
