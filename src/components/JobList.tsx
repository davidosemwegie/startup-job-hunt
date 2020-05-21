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
    logoURL: string
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

const simple = gql`
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

  // if (data) {
  //   console.log(data.jobs[0].cities[0].country.isoCode)
  // }

  return (
    <Container>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        data &&
        data.jobs &&
        data.jobs.map(job => {
          const cityname =
            typeof job.cities[0] !== "undefined"
              ? job.cities[0].name
              : "Fuck this shit I am going to bed"

          const isoCode =
            typeof job.cities[0] !== "undefined"
              ? job.cities[0].country.isoCode
              : "Nothing to see here fam"

          const tagName =
            typeof job.tags[1] !== "undefined"
              ? job.tags[1].name
              : "Tears this still doesnt work"

          // const title = job.title
          // const companyName = job.company.name
          // const tags = job.tags
          // const isoCode = job.cities[0].id

          return (
            <div>
              <p>{isoCode}</p>
              <p>{cityname}</p>
              <p>{tagName}</p>
            </div>
          )
        })
      )}

      {/* <JobRow /> */}
    </Container>
  )
}
