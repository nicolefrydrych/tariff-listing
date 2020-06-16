import React from 'react'
import styled from 'styled-components'

export default function CardHeadline({ insuranceName }) {
  return <StyledInsuranceName> {insuranceName}</StyledInsuranceName>
}

const StyledInsuranceName = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-content: center;
`
