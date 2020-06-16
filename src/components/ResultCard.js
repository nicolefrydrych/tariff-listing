import React, { useState } from 'react'
import styled from 'styled-components'
import CardHeadline from './resultCard/CardHeadline'
import InsuranceImage from './resultCard/InsuranceImage'
import TariffDetailsButton from './resultCard/TariffDetailsButton'
import RiskCoverList from './resultCard/RiskCoverList'
import PriceInformation from './resultCard/PriceInformation'
import Button from './resultCard/Button'
import TariffDetails from './resultCard/TariffDetails'

export default function ResultCard({
  insuranceName,
  logoUrl,
  uspList,
  priceTag,
  priceIcon,
  deleteIcon,
  priceDetails,
  tariffDetailsText,
}) {
  const [showTariffDetails, setShowTariffDetails] = useState(false)

  return (
    <CardGrid>
      <CardHeadline insuranceName={insuranceName} />
      <InsuranceImage logoUrl={logoUrl} />

      <TariffDetailsButton
        showTariffDetails={showTariffDetails}
        toggleTariffDetails={toggleTariffDetails}
      />
      <RiskCoverList uspList={uspList} />

      <PriceButtonSection>
        <PriceInformation
          priceTag={priceTag}
          priceIcon={priceIcon}
          deleteIcon={deleteIcon}
          priceDetails={priceDetails}
        />
        <Button />
      </PriceButtonSection>

      <TariffDetails
        showTariffDetails={showTariffDetails}
        tariffDetailsText={tariffDetailsText}
      />
    </CardGrid>
  )
  function toggleTariffDetails() {
    setShowTariffDetails(!showTariffDetails)
  }
}

const CardGrid = styled.div`
  background: #f2f2f2;
  border: 1px solid lightgray;
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 45% auto 25%;
  grid-template-rows: 50px 125px 25px auto;
  margin-bottom: 24px;
  min-width: 800px;
  &:hover {
    border-color: gray;
  }
`

const PriceButtonSection = styled.div`
  align-items: center;
  border-left: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  margin: 20px 0;
  position: relative;
`
