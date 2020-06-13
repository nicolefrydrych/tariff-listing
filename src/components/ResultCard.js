import React, { useState } from 'react'
import styled from 'styled-components'

export default function ResultCard({ tariff }) {
  const [showTariffDetails, setShowTariffDetails] = useState(false)
  const [priceInformationShown, setPriceInformationShown] = useState(false)

  return (
    <CardGrid>
      <ResultEntry>{tariff.resultEntry}</ResultEntry>
      <InsuranceName>
        <img src={tariff.logoUrl}></img>
      </InsuranceName>
      <div>
        <TariffDetails onClick={toggleTariffDetails}>
          Tarifdetails
        </TariffDetails>
        {!showTariffDetails && <ShowDetails></ShowDetails>}
        {showTariffDetails && <ShowClickedDetails></ShowClickedDetails>}
      </div>
      <UspList>
        {tariff.uspList.map((upsItem, index) => (
          <div key={index}>
            <StyledRiskCoverIcon src={upsItem.icon}></StyledRiskCoverIcon>
            <StyledRiskCover>{upsItem.riskCover}</StyledRiskCover>
          </div>
        ))}
      </UspList>
      <PriceButtonContainer>
        <PriceTag>{tariff.priceTag},00€</PriceTag>

        <PriceInformationIcon
          onMouseEnter={() => setPriceInformationShown(true)}
          onMouseLeave={() => setPriceInformationShown(false)}
          src={tariff.priceIcon}
        ></PriceInformationIcon>
        {priceInformationShown && (
          <div
            onMouseEnter={() => setPriceInformationShown(true)}
            onMouseLeave={() => setPriceInformationShown(false)}
          >
            <CloseIconAdditionalPriceInformation
              onClick={() => setPriceInformationShown(false)}
              src={tariff.deleteIcon}
            ></CloseIconAdditionalPriceInformation>

            <AdditionalPriceInformation>
              {tariff.priceInformation}
            </AdditionalPriceInformation>
          </div>
        )}
        <ButtonSection>
          <StyledButtonTop href="https://reiseversicherung.check24.de/desktop/offer/check24/contact/603d14744a8669881d634f84481d5353">
            Angebot »
          </StyledButtonTop>
          <StyledButtonBottom href="https://reiseversicherung.check24.de/desktop/closure/check24/login/5050623632f9f692a4578103b508f852">
            Online Antrag »
          </StyledButtonBottom>
        </ButtonSection>
      </PriceButtonContainer>
      {showTariffDetails && (
        <StyledTariffDetailText>
          {tariff.TariffDetailText}
        </StyledTariffDetailText>
      )}
    </CardGrid>
  )

  function toggleTariffDetails() {
    setShowTariffDetails(!showTariffDetails)
  }
}

const CardGrid = styled.div`
  background: #f2f2f2;
  display: grid;
  grid-gap: 2px;
  grid-template-rows: 50px 125px 25px auto;
  grid-template-columns: 45% auto 25%;
  min-width: 800px;
  margin-bottom: 24px;
  border: 1px solid lightgray;
`

const ResultEntry = styled.div`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

const InsuranceName = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TariffDetails = styled.div`
  color: #005ea8;
  &:hover {
    text-decoration: underline;
  }
`

const ShowDetails = styled.span`
  border-left: 4.5px solid transparent;
  border-top: 5px solid #005ea8;
  border-right: 4.5px solid transparent;
  margin-left: 5px;
  position: relative;
  left: 46px;
  bottom: 6px;
`

const ShowClickedDetails = styled.span`
  border-left: 4.5px solid transparent;
  border-bottom: 5px solid #005ea8;
  border-right: 4.5px solid transparent;
  margin-left: 5px;
  position: relative;
  left: 46px;
  bottom: 32px;
`

const StyledTariffDetailText = styled.div`
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  background: #f2f2f2;
  padding: 10px 40px 20px;
  display: flex;
  align-self: flex-start;
`

const StyledRiskCoverIcon = styled.img`
  max-width: 20px;
  max-height: 20px;
  margin: 1px;
  position: absolute;
  left: 0;
`

const UspList = styled.ul`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  list-style-type: none;
  margin: auto 0;
  position: relative;
`

const StyledRiskCover = styled.li`
  display: flex;
  margin-left: 25px;
`

const PriceButtonContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid lightgrey;
  margin: 20px 0;
  position: relative;
`

const PriceTag = styled.div`
  margin-top: 16px;
  color: #005ea8;
  font-size: 24px;
  font-weight: bold;
`
const AdditionalPriceInformation = styled.p`
  z-index: 1;
  position: absolute;
  top: 40px;
  right: 0;
  border: 1px solid #005ea8;
  background: white;
  min-width: 200px;
  max-width: 220px;
  height: 140px;
  padding: 24px;
`
const CloseIconAdditionalPriceInformation = styled.img`
  z-index: 2;
  position: absolute;
  top: 48px;
  right: 10px;
  width: 16px;
  height: 16px;
`

const PriceSection = styled.div``

const PriceInformationIcon = styled.img`
  max-width: 16px;
  max-height: 16px;
  position: relative;
  bottom: 27px;
  left: 60px;
`

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledButtonTop = styled.a`
  padding: 4px 16px;
  margin: 10px 0;
  background: #d6d4d3;
  border: 1px solid lightgrey;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background: #c4c2c1;
  }
`

const StyledButtonBottom = styled.a`
  padding: 8px 16px;
  background: #4374c2;
  color: white;
  border: 1px solid lightgrey;
  border-radius: 4px;
  text-decoration: none;
  &:hover {
    background: #3b63a3;
  }
`
