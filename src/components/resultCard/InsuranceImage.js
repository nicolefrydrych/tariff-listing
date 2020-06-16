import React from 'react'
import styled from 'styled-components'

export default function InsuranceImage({ logoUrl }) {
  return (
    <StyledInsuranceImage>
      <img src={logoUrl}></img>
    </StyledInsuranceImage>
  )
}

const StyledInsuranceImage = styled.div`
  align-items: center;
  display: flex;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-content: center;
`
