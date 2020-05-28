import React from "react"
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  useQuery
} from "@apollo/client"
import "./App.css"
import styled from "styled-components"
import Layout from "./components/Layout"
import HeroSection from "./components/HeroSection"
import Button from "./components/Button"
import JobList from "./components/JobList"
import SearchingList from "./components/JobList"
import JobDetails from "./components/JobDetails"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.graphql.jobs/"
  })
})

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
    <Router>
      <ApolloProvider client={client}>
        <Switch>
          <Route exact path="/">
            <Layout>
              <HeroSection />
              <SearchingList />
            </Layout>
          </Route>
          <Route exact path="/job/:companySlug/:slug" component={JobDetails} />
        </Switch>
      </ApolloProvider>
    </Router>
  )
}

export default App
