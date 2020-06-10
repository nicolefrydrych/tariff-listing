import React from 'react'
import styled from 'styled-components'

export default function ResultCard({
  resultEntry,
  logoUrl,
  uspList,
  priceTag,
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
            <StyledIcon src={upsItem.image}></StyledIcon>
            <StyledUspItem>{upsItem.riskCover}</StyledUspItem>
          </div>
        ))}
      </StyledUspList>
      <StyledContent>
        <div>{priceTag} </div>
        <div>CTA</div>
      </StyledContent>
    </CardGrid>
  )
}

const CardGrid = styled.div`
  background: #e7e9eb;
  display: grid;
  grid-gap: 2px;
  grid-template-rows: 25% auto;
  grid-template-columns: 45% auto 20%;
  height: 200px;
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
const StyledIcon = styled.img`
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

const StyledUspItem = styled.li`
  display: flex;
  margin-left: 25px;
`
const StyledContent = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  border-left: 1px solid lightgrey;
  margin: 10px 0;
`
