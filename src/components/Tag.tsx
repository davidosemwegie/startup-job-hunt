import React from "react"
import styled from "styled-components"

const Container = styled.div``

interface Props {
  title: string
}

const Tag: React.FC<Props> = ({ title }) => {
  return <Container>{title}</Container>
}

export default Tag
