import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-color: salmon;
`
const Left = styled.div``

const Right = styled.div``

interface Props {}

const JobRow: React.FC<Props> = () => {
  return (
    <Container>
      <Left></Left>
      <Right></Right>
    </Container>
  )
}

export default JobRow
