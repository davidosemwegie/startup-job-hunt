import React from "react"
import { useQuery } from "@apollo/react-hooks"
import gql from "graphql-tag"
import styled from "styled-components"
import JobRow from "./JobRow"

interface Job {
  title: string
}

interface JobsData {
  jobs: Job[]
}

const JOBS_QUERY = gql`
  {
    jobs {
      title
    }
  }
`

const Container = styled.div`
  /* background-color: red;
  height: 400px; */
`

export default function JobList() {
  const { loading, data } = useQuery<JobsData>(JOBS_QUERY)

  return (
    <Container>
      <JobRow />
    </Container>
  )
}
