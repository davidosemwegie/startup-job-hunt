import React from "react"
import styled from "styled-components"

const Container = styled.p`
  color: #327ce0;
  border-width: 1px;
  border-color: #327ce0;
  border-style: solid;
  border-radius: 5px;
  display: inline;
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 15px;
`

interface Props {
  title: string
}

const Tag: React.FC<Props> = ({ title }) => {
  return <Container>{title}</Container>
}

export default Tag
