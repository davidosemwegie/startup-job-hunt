import React from "react"
import styled from "styled-components"
import data from "../data"
import Tag from "./Tag"
import ReactCountryFlag from "react-country-flag"

console.log(data[0])

const Container = styled.div`
  background-color: salmon;
  width: 80%;
  margin: 0 auto;
`
const Left = styled.div``

const Right = styled.div``

const CompanyLogoImage = styled.img`
  height: 100px;
  width: 100px;
`
const JobTitle = styled.p``

const CompanyName = styled.p``

const TagGroup = styled.div``

interface Props {
  title: string
  tag1: string
  tag2: string
  tag3: string
  isoCode: string
  companyName: string
}

const JobRow: React.FC<Props> = ({
  title,
  companyName,
  isoCode,
  tag1,
  tag2,
  tag3
}) => {
  return (
    <Container>
      <Left>
        {/* <CompanyLogoImage src={image} alt="image" /> */}
        <JobTitle>{title}</JobTitle>
        <CompanyName>{companyName}</CompanyName>
        <TagGroup>
          <Tag title={tag1} />
          <Tag title={tag2} />
          <Tag title={tag3} />
        </TagGroup>
        <ReactCountryFlag countryCode="US" />
      </Left>
      <Right></Right>
    </Container>
  )
}

export default JobRow
