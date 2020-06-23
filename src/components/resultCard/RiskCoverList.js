import React from 'react'
import styled from 'styled-components'

export default function RiskCoverList({ uspList }) {
  return (
    <RiskCoverContainer>
      <StyledList>
        {uspList.map((upsItem, index) => (
          <div key={index}>
            <RiskCoverIcon src={upsItem.icon}></RiskCoverIcon>
            <RiskCoverItem>{upsItem.riskCover}</RiskCoverItem>
          </div>
        ))}
      </StyledList>
    </RiskCoverContainer>
  )
}

const RiskCoverContainer = styled.ul`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  list-style-type: none;
  margin: auto 0;
`
const StyledList = styled.div`
  height: 100%;
  margin: auto 0;
  position: relative;
`

const RiskCoverIcon = styled.img`
  left: 0;
  margin: 1px;
  max-width: 20px;
  max-height: 20px;
  position: absolute;
`

const RiskCoverItem = styled.li`
  display: flex;
  margin-left: 25px;
`
