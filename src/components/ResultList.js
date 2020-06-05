import React from 'react'
import styled from 'styled-components'
import tariffsData from '../tariffsData'

export default function ResultList() {
  return (
    <div>
      <ResultContainer>
        <ResultListHeader>Resultlist</ResultListHeader>
        {tariffsData.map((tariff) => (
          <div>
            <CardGrid>
              <ResultEntry>{tariff.resultEntry}</ResultEntry>
              <ImageContainer>
                <img src={tariff.logoUrl}></img>
              </ImageContainer>
              <StyledUspList>
                {tariff.uspList.map((upsItem) => (
                  <StyledUspItem>{upsItem}</StyledUspItem>
                ))}
              </StyledUspList>
              <StyledPriceTag>{tariff.priceTag}</StyledPriceTag>

              <StyledCta>CTA</StyledCta>
            </CardGrid>
          </div>
        ))}
      </ResultContainer>
    </div>
  )
}

const ResultContainer = styled.section`
  background: #f6f4f7;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding-bottom: 40px;
`

const ResultListHeader = styled.h4`
  text-align: center;
  border-bottom: 1px solid black;
  padding: 20px;
`

const CardGrid = styled.div`
  display: grid;
  grid-gap: 2px;
  grid-template-rows: 25% auto 30%;
  grid-template-columns: 1fr 160px 1fr;
  height: 200px;
  margin: 40px 20px 0;
  border: 1px solid black;
`

const ResultEntry = styled.div`
  background: lightgray;
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageContainer = styled.div`
  background: lightgray;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledUspList = styled.ul`
  background: lightgray;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  list-style-type: none;
  padding-top: 20px;
`

const StyledUspItem = styled.li`
  display: flex;
  margin-left: 25px;
`

const StyledPriceTag = styled.div`
  background: lightgray;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledCta = styled.div`
  background: lightgray;
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`
