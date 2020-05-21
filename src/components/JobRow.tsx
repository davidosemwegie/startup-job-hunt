import React from "react"
import styled from "styled-components"
import data from "../data"

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

interface Props {
  title: string
  tags: [Object]
  isoCode: string
  companyName: string
}

const JobRow: React.FC<Props> = ({ title, companyName, isoCode }) => {
  return (
    <Container>
      <Left>
        {/* <CompanyLogoImage src={image} alt="image" /> */}
        <JobTitle>{title}</JobTitle>
        <CompanyName>{isoCode}</CompanyName>
      </Left>
      <Right></Right>
    </Container>
  )
}

export default JobRow
