import React from 'react'
import styled from 'styled-components'

export default function TariffDetailsButton({
  toggleTariffDetails,
  showTariffDetails,
}) {
  return (
    <div>
      <TariffDetails onClick={toggleTariffDetails}>Tarifdetails</TariffDetails>
      {!showTariffDetails && <TariffDetailsHidden></TariffDetailsHidden>}
      {showTariffDetails && <TariffDetailsVisible></TariffDetailsVisible>}
    </div>
  )
}

const TariffDetails = styled.div`
  color: #005ea8;
  &:hover {
    text-decoration: underline;
  }
`
const TariffDetailsHidden = styled.span`
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  border-top: 5px solid #005ea8;
  bottom: 6px;
  left: 46px;
  margin-left: 5px;
  position: relative;
`

const TariffDetailsVisible = styled.span`
  border-bottom: 5px solid #005ea8;
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  bottom: 32px;
  left: 46px;
  margin-left: 5px;
  position: relative;
`
