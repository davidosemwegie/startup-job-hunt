import React, { useState, useEffect } from "react"
import { RouteComponentProps } from "react-router-dom"
import styled from "styled-components"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"

import { Job, JobsData } from "../interface"

// interface DetailsProps extends RouteComponentProps<{ slug: string }> {
//   match: {
//     params: {
//       companySlug: string
//       slug: string
//     }
//   }
// }

// interface JobVars {
//   companySlug: string
//   jobSlug: string
// }

// interface JobData {
//   job: any
// }

// const GET_JOB = gql`
//   query GetJob($companySlug: String!, $jobSlug: String!) {
//     job(input: { companySlug: $companySlug, jobSlug: $jobSlug }) {
//       id
//       title
//       slug
//       company {
//         id
//         name
//         logoUrl
//         slug
//       }
//       cities {
//         id
//         name
//         country {
//           isoCode
//         }
//       }
//       tags(last: 3) {
//         id
//         name
//         slug
//       }
//     }
//   }
// `

const JobDetails: React.SFC = () => {
  return (
    <div>
      <h1>Job Page</h1>
      {/* <h2>{jobData.title}</h2> */}
    </div>
  )
}

export default JobDetails
