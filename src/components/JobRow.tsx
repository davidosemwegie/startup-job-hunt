import React from "react"
import styled from "styled-components"
import data from "../data"
import Tag from "./Tag"
import ReactCountryFlag from "react-country-flag"
import { Link } from "react-router-dom"

const Container = styled.div`
  width: 80%;
  margin: 20px auto;
  display: grid;
  grid-template-columns: repeat(3, auto);

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, auto);
    width: 85%;
  }
`
const Left = styled.div`
  display: flexbox;
  flex-direction: row;
`

const Right = styled.div`
  display: flexbox;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;

  @media (max-width: 640px) {
    display: none;
  }
`

const CompanyLogoImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 20px;
  margin-right: 20px;

  @media (max-width: 640px) {
    height: 60px;
    width: 60px;
    border-radius: 10px;
    margin-right: 10px;
  }
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

  @media (max-width: 640px) {
    height: 60px;
    width: 60px;
    border-radius: 10px;
    margin-right: 10px;
  }
`
const CompanyNameLetter = styled.p`
  color: #919191;
  font-size: 30px;
  font-weight: 700;

  @media (max-width: 640px) {
    font-size: 20px;
  }
`
const TitleGroup = styled.div`
  display: flexbox;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
`
const TitleSubgroup = styled.div``

const JobTitle = styled.p`
  font-size: 25px;
  font-weight: 700;
  margin: 0;

  @media (max-width: 640px) {
    font-size: 18px;
    max-width: 220px;
  }
`

const CompanyName = styled.p`
  margin: 0;
  color: #d6d6d6;
  font-weight: 700;

  @media (max-width: 640px) {
    font-size: 12px;
  }
`

const CityName = styled.p``

const TagGroup = styled.div`
  display: flexbox;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0;
  @media (max-width: 1250px) {
    display: none;
  }
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
  slug: string
  companySlug: string
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
  city,
  slug,
  companySlug
}) => {
  return (
    <Container>
      <Left>
        <CompanyLogo logoUrl={logoUrl} companyName={companyName} />
        <TitleGroup>
          <TitleSubgroup>
            <JobTitle>
              <Link to={`/job/${companySlug}/${slug}`}>{title}</Link>
            </JobTitle>
            <CompanyName>{companyName}</CompanyName>
          </TitleSubgroup>
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
