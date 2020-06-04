import React from 'react'
import styled from 'styled-components'

export default function ResultList() {
  return (
    <div>
      <ResultContainer>
        <ResultCard>
          <ResultlistHeader>Resultlist</ResultlistHeader>
          <CardGrid>
            <ResultEntry>Resultentry</ResultEntry>
            <StyledLogo>Logo</StyledLogo>
            <StyledUspList>UspList</StyledUspList>
            <StyledPriceTag>Pricetag</StyledPriceTag>
            <StyledCta>CTA</StyledCta>
          </CardGrid>
        </ResultCard>
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
  height: 100vh;
`
const ResultCard = styled.div`
  border: 1px black solid;
  margin: 20px;
`
const ResultlistHeader = styled.h4`
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
const StyledLogo = styled.div`
  background: lightgray;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 4;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledUspList = styled.div`
  background: lightgray;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  display: flex;
  justify-content: center;
  align-items: center;
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
