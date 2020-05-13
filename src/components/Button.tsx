import React from "react"
import styled from "styled-components"

interface Props {
  title: string
  onClick: () => any
}

const Container = styled.button`
  text-transform: uppercase;
  color: white;
  background-color: black;
  max-width: 200px;
  height: 60px;
  border: none;
  border-radius: 20px;
  font-weight: 700;
  font-size: 30px;
  padding: 5px 25px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);
  margin: 0 auto;

  &:hover {
    background-color: white;
    color: black;
  }

  /* @media (max-width: 640px) {
    align-self: center;
  } */
`

const Button: React.FC<Props> = ({ title, onClick }) => {
  return <Container onClick={onClick}>{title}</Container>
}

export default Button
