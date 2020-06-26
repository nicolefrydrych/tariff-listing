import React, { useState } from 'react'
import styled from 'styled-components'
import CardHeadline from './resultCard/CardHeadline'
import InsuranceImage from './resultCard/InsuranceImage'
import TariffDetailsButton from './resultCard/TariffDetailsButton'
import RiskCoverList from './resultCard/RiskCoverList'
import PriceTag from './resultCard/PriceTag'
import CTAButton from './resultCard/CTAButton'
import TariffDetails from './resultCard/TariffDetails'
import StarRating from './resultCard/StarRating'

export default function ResultCard({
  insuranceName,
  logoUrl,
  starRating,
  averageRating,
  ratingCount,
  uspList,
  priceTag,
  priceDetails,
  tariffDetailsText,
}) {
  const [showTariffDetails, setShowTariffDetails] = useState(false)

  return (
    <ResultCardContainer>
      <CardHeadline insuranceName={insuranceName} />
      <InsuranceImage logoUrl={logoUrl} />
      <TariffDetailsButton
        showTariffDetails={showTariffDetails}
        toggleTariffDetails={toggleTariffDetails}
      />
      <RiskCoverList uspList={uspList} />
      <PriceButtonSection>
        <PriceTag priceTag={priceTag} priceDetails={priceDetails} />
        <CTAButton />
      </PriceButtonSection>
      <TariffDetails
        showTariffDetails={showTariffDetails}
        tariffDetailsText={tariffDetailsText}
      />
      <StarRating
        starRating={starRating}
        averageRating={averageRating}
        ratingCount={ratingCount}
      />
    </ResultCardContainer>
  )
  function toggleTariffDetails() {
    setShowTariffDetails(!showTariffDetails)
  }
}

const ResultCardContainer = styled.div`
  background: #f2f2f2;
  border: 1px solid lightgray;
  display: grid;
  grid-gap: 2px;
  grid-template-columns: 45% auto 28%;
  grid-template-rows: 50px 125px 25px auto;
  height: 100%;
  margin-bottom: 24px;
  min-width: 800px;
  &:hover {
    border-color: gray;
    box-shadow: 0px 0px 3px -1px rgba(0, 0, 0, 1);
  }
`

const PriceButtonSection = styled.div`
  align-items: flex-end;
  border-left: 1px solid lightgrey;
  display: flex;
  flex-direction: column;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  justify-content: space-between;
  margin: 20px 10px;
  position: relative;
`
