import React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import styled from "styled-components"
import JobRow from "./JobRow"
import { async } from "q"
import { join } from "path"

interface City {
  id: string
  name: string
  country: {
    isoCode: string
  }
}

interface Tag {
  id: string
  name: string
  slug: string
}

interface Job {
  id: number
  title: string
  company: {
    id: string
    name: string
    logoUrl: string
  }
  cities: Array<{
    id: string
    name: string
    country: {
      isoCode: string
    }
  }>
  tags: Tag[]
}

interface JobsData {
  jobs: Job[]
}

const JOBS_QUERY = gql`
  {
    jobs {
      id
      title
      company {
        id
        name
        logoUrl
      }
      cities {
        id
        name
        country {
          isoCode
        }
      }
      tags(last: 3) {
        id
        name
        slug
      }
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
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data &&
        data.jobs &&
        data.jobs.map(job => {
          return (
            <JobRow
              title={typeof job.title !== "undefined" ? job.title : "Job Title"}
              companyName={
                typeof job.company.name !== "undefined"
                  ? job.company.name
                  : "Company Name"
              }
              logoUrl={
                typeof job.company.logoUrl !== "undefined"
                  ? job.company.logoUrl
                  : "Company Name"
              }
              isoCode={
                typeof job.cities[0] !== "undefined"
                  ? job.cities[0].country.isoCode
                  : "NA"
              }
              tag1={
                typeof job.tags[0] !== "undefined" ? job.tags[0].name : "Tag"
              }
              tag2={
                typeof job.tags[1] !== "undefined" ? job.tags[1].name : "Tag"
              }
              tag3={
                typeof job.tags[2] !== "undefined" ? job.tags[2].name : "Tag"
              }
            />
          )
        })
      )}
    </Container>
  )
}
