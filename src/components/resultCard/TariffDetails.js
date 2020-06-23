import React from 'react'
import styled from 'styled-components'

export default function TariffDetails({
  tariffDetailsText,
  showTariffDetails,
}) {
  return (
    <TariffDetailsContainer>
      {showTariffDetails && (
        <TariffDetailsText>{tariffDetailsText}</TariffDetailsText>
      )}
    </TariffDetailsContainer>
  )
}

const TariffDetailsContainer = styled.div`
  background: #f2f2f2;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
`

const TariffDetailsText = styled.div`
  border-top: 1px solid lightgray;
  padding: 10px 40px 20px;
`
