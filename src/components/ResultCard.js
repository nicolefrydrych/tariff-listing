import React from 'react'
import styled from 'styled-components'

export default function ResultCard({
  resultEntry,
  logoUrl,
  uspList,
  priceTag,
  priceIcon,
  deleteIcon,
  priceInformation,
}) {
  return (
    <CardGrid>
      <ResultEntry>{resultEntry}</ResultEntry>
      <StyledImage>
        <img src={logoUrl}></img>
      </StyledImage>
      <StyledUspList>
        {uspList.map((upsItem, index) => (
          <div key={index}>
            <StyledRiskCoverIcon src={upsItem.icon}></StyledRiskCoverIcon>
            <StyledRiskCover>{upsItem.riskCover}</StyledRiskCover>
          </div>
        ))}
      </StyledUspList>
      <PriceAndButtonContent>
        <StyledPriceTag>{priceTag},00€</StyledPriceTag>
        <PriceSection>
          <StyledPriceInformationIcon
            src={priceIcon}
          ></StyledPriceInformationIcon>
          <RemoveInformation src={deleteIcon}></RemoveInformation>
          <StyledPriceInformationOnHover>
            {priceInformation}
          </StyledPriceInformationOnHover>
        </PriceSection>
        <ButtonSection>
          <StyledButtonAngebot href="https://reiseversicherung.check24.de/desktop/offer/check24/contact/603d14744a8669881d634f84481d5353">
            Angebot »
          </StyledButtonAngebot>
          <StyledButtonAntrag href="https://reiseversicherung.check24.de/desktop/closure/check24/login/5050623632f9f692a4578103b508f852">
            Online Antrag »
          </StyledButtonAntrag>
        </ButtonSection>
      </PriceAndButtonContent>
    </CardGrid>
  )
}

const CardGrid = styled.div`
  background: #f2f2f2;
  display: grid;
  grid-gap: 2px;
  grid-template-rows: 25% auto;
  grid-template-columns: 45% auto 25%;
  height: 200px;
  min-width: 800px;
  margin: 16px 0;
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

const StyledImage = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledRiskCoverIcon = styled.img`
  max-width: 20px;
  max-height: 20px;
  margin: 1px;
  position: absolute;
  left: 0;
`

const StyledUspList = styled.ul`
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

const PriceAndButtonContent = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid lightgrey;
  margin: 20px 0;
  position: relative;
`

const StyledPriceTag = styled.div`
  margin-top: 16px;
  color: #005ea8;
  font-size: 24px;
  font-weight: bold;
`
const StyledPriceInformationOnHover = styled.p`
  display: none;
`
const RemoveInformation = styled.img`
  display: none;
`

const PriceSection = styled.div`
  &:hover ${StyledPriceInformationOnHover} {
    display: block;
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
  }
  &:hover ${RemoveInformation} {
    display: block;
    z-index: 2;
    position: absolute;
    top: 48px;
    right: 10px;
    width: 16px;
    height: 16px;
  }
`

const StyledPriceInformationIcon = styled.img`
  max-width: 16px;
  max-height: 16px;
  position: relative;
  bottom: 23px;
  left: 60px;
`

const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledButtonAngebot = styled.a`
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

const StyledButtonAntrag = styled.a`
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
