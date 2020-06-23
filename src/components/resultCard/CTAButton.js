import React from 'react'
import styled from 'styled-components'

export default function CTAButton() {
  return (
    <CTAButtonContainer>
      <StyledButtonTop href="https://reiseversicherung.check24.de/desktop/offer/check24/contact/603d14744a8669881d634f84481d5353">
        Angebot »
      </StyledButtonTop>
      <StyledButtonBottom href="https://reiseversicherung.check24.de/desktop/closure/check24/login/5050623632f9f692a4578103b508f852">
        Online Antrag »
      </StyledButtonBottom>
    </CTAButtonContainer>
  )
}

const CTAButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledButtonTop = styled.a`
  background: #d6d4d3;
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin: 10px 0;
  padding: 4px 36px;
  text-decoration: none;
  width: 100%;
  &:hover {
    background: #c4c2c1;
  }
`

const StyledButtonBottom = styled.a`
  background: #4374c2;
  border: 1px solid lightgrey;
  border-radius: 4px;
  color: white;
  padding: 12px 36px;
  text-decoration: none;
  width: 100%;
  &:hover {
    background: #3b63a3;
  }
`
