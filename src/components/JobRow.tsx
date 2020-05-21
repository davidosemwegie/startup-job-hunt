import React from "react"
import styled from "styled-components"
import data from "../data"
import Tag from "./Tag"
import ReactCountryFlag from "react-country-flag"

console.log(data[0])

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, auto);
`
const Left = styled.div`
  display: flexbox;
  flex-direction: row;
  background-color: pink;
`

const Right = styled.div`
  display: flexbox;
  flex-direction: row;
  background-color: brown;
`

const CompanyLogoImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 20px;
  margin-right: 20px;
`

const NoCompanyLogo = styled.div`
  width: 100px;
  height: 100px;
  background-color: #d6d6d6;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin-right: 20px;
`
const CompanyNameLetter = styled.p`
  color: #919191;
  font-size: 30px;
  font-weight: 700;
`
const TitleGroup = styled.div``

const JobTitle = styled.p`
  font-size: 30;
  font-weight: 700;
`

const CompanyName = styled.p``

const CityName = styled.p``

const TagGroup = styled.div`
  display: flexbox;
  flex-direction: row;
`

interface Props {
  title: string
  tag1: string
  tag2: string
  tag3: string
  isoCode: string
  companyName: string
  logoUrl: string
  city: string
}

interface LogoProps {
  logoUrl: string
  companyName: string
}

const CompanyLogo: React.FC<LogoProps> = ({ logoUrl, companyName }) => {
  const firstLetter = companyName[0].toUpperCase()

  if (logoUrl) {
    return <CompanyLogoImage src={logoUrl ? logoUrl : ""} />
  } else {
    return (
      <NoCompanyLogo>
        <CompanyNameLetter>{firstLetter}</CompanyNameLetter>
      </NoCompanyLogo>
    )
  }
}

const JobRow: React.FC<Props> = ({
  title,
  companyName,
  isoCode,
  tag1,
  tag2,
  tag3,
  logoUrl,
  city
}) => {
  return (
    <Container>
      <Left>
        <CompanyLogo logoUrl={logoUrl} companyName={companyName} />
        <TitleGroup>
          <JobTitle>{title}</JobTitle>
          <CompanyName>{companyName}</CompanyName>
        </TitleGroup>
      </Left>
      <TagGroup>
        <Tag title={tag1} />
        <Tag title={tag2} />
        <Tag title={tag3} />
      </TagGroup>
      <Right>
        <ReactCountryFlag countryCode={`${isoCode}`} />
        <CityName>{city}</CityName>
      </Right>
    </Container>
  )
}

export default JobRow
