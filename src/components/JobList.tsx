import React from "react"
import { useQuery } from "@apollo/client"
import gql from "graphql-tag"
import styled from "styled-components"
import JobRow from "./JobRow"
import Button from "./Button"

let jobData: JobsData | Boolean

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
interface Props {}

const JobList: React.FC<Props> = () => {
  const { loading, data } = useQuery<JobsData>(JOBS_QUERY)

  jobData = data ? data : false

  return (
    <Container>
      {data &&
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
}

class SearchingList extends React.Component<JobListProps, IState> {
  constructor(props: any) {
    super(props)

    this.state = {
      searching: false,
      searchValue: ""
    }

    this.handleInputChage = this.handleInputChage.bind(this)
  }

  handleInputChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      ...this.state,
      [e.currentTarget.name]: e.currentTarget.value
    })
    console.log(e.currentTarget.value)
  }

  render() {
    const { searchValue } = this.state

    if (!this.state.searching) {
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
          <JobList />
        </div>
      )
    } else {
      return (
        <div>
          <SearchForm>
            <SearchInput
              type="text"
              placeholder="Location"
              name="value"
              onChange={() => this.handleInputChage}
            />
            <Button
              title="Search"
              onClick={() => console.log("The button was clicked")}
            />
          </SearchForm>
        </div>
      )
    }
  }
}

export default SearchingList
