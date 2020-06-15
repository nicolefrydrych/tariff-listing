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
            <RiskCoverIcon src={upsItem.icon}></RiskCoverIcon>
            <RiskCover>{upsItem.riskCover}</RiskCover>
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
        <TariffDetailText>{tariff.TariffDetailText}</TariffDetailText>
      )}
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

const ResultEntry = styled.div`
  align-items: center;
  display: flex;
  font-size: 20px;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  justify-content: center;
`

const InsuranceName = styled.div`
  align-items: center;
  display: flex;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  justify-content: center;
`

const TariffDetails = styled.div`
  color: #005ea8;
  &:hover {
    text-decoration: underline;
  }
`

const ShowDetails = styled.span`
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  border-top: 5px solid #005ea8;
  bottom: 6px;
  left: 46px;
  margin-left: 5px;
  position: relative;
`

const ShowClickedDetails = styled.span`
  border-bottom: 5px solid #005ea8;
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  bottom: 32px;
  left: 46px;
  margin-left: 5px;
  position: relative;
`

const TariffDetailText = styled.div`
  align-self: flex-start;
  background: #f2f2f2;
  border-top: 1px solid lightgray;
  display: flex;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 4;
  grid-row-end: 5;
  padding: 10px 40px 20px;
`

const RiskCoverIcon = styled.img`
  left: 0;
  margin: 1px;
  max-width: 20px;
  max-height: 20px;
  position: absolute;
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

const RiskCover = styled.li`
  display: flex;
  margin-left: 25px;
`

const PriceButtonContainer = styled.div`
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

const PriceTag = styled.div`
  color: #005ea8;
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
`
const AdditionalPriceInformation = styled.p`
  background: white;
  border: 1px solid #005ea8;
  height: 140px;
  max-width: 220px;
  min-width: 200px;
  padding: 24px;
  position: absolute;
  right: 0;
  top: 40px;
  z-index: 1;
`
const CloseIconAdditionalPriceInformation = styled.img`
  height: 16px;
  position: absolute;
  right: 10px;
  top: 48px;
  width: 16px;
  z-index: 2;
`

const PriceInformationIcon = styled.img`
  bottom: 27px;
  cursor: help;
  left: 60px;
  max-height: 16px;
  max-width: 16px;
  position: relative;
`

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledButtonTop = styled.a`
  background: #d6d4d3;
  border: 1px solid lightgrey;
  border-radius: 4px;
  margin: 10px 0;
  padding: 4px 16px;
  text-decoration: none;
  &:hover {
    background: #c4c2c1;
  }
`

const StyledButtonBottom = styled.a`
  background: #4374c2;
  border: 1px solid lightgrey;
  border-radius: 4px;
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  &:hover {
    background: #3b63a3;
  }
`
