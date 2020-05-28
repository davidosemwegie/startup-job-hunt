import React from "react"
import { useState, useEffect } from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import styled from "styled-components"
import JobRow from "./JobRow"
import Button from "./Button"

//Interfaces
import { City, Tag, Job } from "../interface"

let jobData: JobsData

interface JobsData {
  jobs: Job[]
}

const JOBS_QUERY = gql`
  {
    jobs {
      id
      title
      slug
      company {
        id
        name
        logoUrl
        slug
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
  margin: 20px auto;
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
const SearchError = styled.h1`
  align-self: center;
  color: red;
`

interface Props {}

const JobList: React.FC<Props> = () => {
  const { loading, data } = useQuery<JobsData>(JOBS_QUERY)

  jobData = data ? data : undefined

  if (loading) {
    return <h1>Loading...</h1>
  }

  return (
    <Container>
      {data &&
        data.jobs &&
        data.jobs.map(job => {
          return (
            <JobRow
              slug={typeof job.slug != "undefined" ? job.slug : "slug"}
              companySlug={
                typeof job.company.slug !== "undefined"
                  ? job.company.slug
                  : "slug"
              }
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
              city={
                typeof job.cities[0] !== "undefined" ? job.cities[0].name : "NA"
              }
            />
          )
        })}
    </Container>
  )
}

interface JobListProps {}

interface IState {
  searching: boolean
  searchValue: string | null
  data: any
}

class SearchingList extends React.Component<JobListProps, IState, JobsData> {
  constructor(props: any) {
    super(props)

    this.state = {
      searching: false,
      searchValue: "",
      data: []
    }

    this.handleInputChage = this.handleInputChage.bind(this)
  }

  handleInputChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    this.setState({
      ...this.state,
      [e.currentTarget.name]: value
    })
    this.setState({ searching: true })
    console.log(value)

    const res = []

    jobData.jobs.forEach(job => {
      if (job.title.toLowerCase().search(value.toLowerCase()) !== -1) {
        res.push(job)
      }
    })

    this.setState({
      data: res
    })
    // console.log(res)
  }

  render() {
    const { searchValue, searching, data } = this.state

    if (!searching || searchValue == "") {
      return (
        <div>
          <SearchForm>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchValue}
              name="searchValue"
              onChange={this.handleInputChage}
            />
            {/* <Button
              title="Search"
              onClick={() => console.log("The button was clicked")}
            /> */}
          </SearchForm>
          <JobList />
        </div>
      )
    } else if (data.length == 0) {
      return (
        <div>
          <SearchForm>
            <SearchInput
              type="text"
              placeholder="Search..."
              value={searchValue}
              name="searchValue"
              onChange={this.handleInputChage}
            />
            {/* <Button
              title="Search"
              onClick={() => console.log("The button was clicked")}
            /> */}
            <SearchError>No Matches</SearchError>
          </SearchForm>
        </div>
      )
    } else {
      return (
        <div>
          <SearchForm>
            <SearchInput
              type="text"
              placeholder="Location"
              value={searchValue}
              name="searchValue"
              onChange={this.handleInputChage}
            />
            <Button
              title="Search"
              onClick={() => console.log("The button was clicked")}
            />
          </SearchForm>
          {data.map(job => {
            return (
              <JobRow
                companySlug={
                  typeof job.company.slug !== "undefined"
                    ? job.company.slug
                    : "slug"
                }
                slug={typeof job.slug != "undefined" ? job.slug : "slug"}
                title={
                  typeof job.title !== "undefined" ? job.title : "Job Title"
                }
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
                city={
                  typeof job.cities[0] !== "undefined"
                    ? job.cities[0].name
                    : "NA"
                }
              />
            )
          })}
        </div>
      )
    }
  }
}

export default SearchingList
