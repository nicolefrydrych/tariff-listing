import React, { useState } from 'react'
import styled from 'styled-components'
import CoveredRiskInformtion from './CoveredRiskInformtion'
import CoveredPeriodInformtion from './CoveredPeriodInformtion'

export default function FilterBar({ onFilterCardsByContent, tariffCards }) {
  const [isChecked, setIsChecked] = useState()

  return (
    <CoveredRisksContainer>
      <CoveredRisksSection>
        <CoveredRisksHeadline>Gewählter Schutz</CoveredRisksHeadline>
        <CoveredPeriodSection>
          <CoveredPeriodButton
            background={'#e5f3d4'}
            border={'#74b51d'}
            backgroundOnHover={'#dce6c8'}
          >
            <CoveredPeriodText color={'#74b51d'}>
              Jahresschutz
            </CoveredPeriodText>
            <CheapestYearlyCoveredPrice>ab 29,00€</CheapestYearlyCoveredPrice>
          </CoveredPeriodButton>
          <CoveredPeriodButton>
            <CoveredPeriodText>Einmalschutz</CoveredPeriodText>
            <CoveredPeriodInformtion />
          </CoveredPeriodButton>
        </CoveredPeriodSection>
        <CoveredRisksTitel>
          <div>Versicherte Bereiche</div>

          <CoveredRiskInformtion />
        </CoveredRisksTitel>
        <InputRiskGroup>
          <section>
            <input
              type="checkbox"
              onChange={(event) => setIsChecked(event.currentTarget.checked)}
              onClick={handleRücktrittClick}
            />

            <CancellationType>Rücktritt</CancellationType>
          </section>
          <CoveredRiskIcon src="icons/plane-icon.png"></CoveredRiskIcon>
        </InputRiskGroup>
        <InputRiskGroup>
          <section>
            <input
              type="checkbox"
              onChange={(event) => setIsChecked(event.currentTarget.checked)}
              onClick={handleAbbruchClick}
            />
            <CancellationType>Abbruch</CancellationType>
          </section>
          <CoveredRiskIcon src="icons/island-icon.png"></CoveredRiskIcon>
        </InputRiskGroup>
        <InputRiskGroup>
          <section>
            <input
              type="checkbox"
              onChange={(event) => setIsChecked(event.currentTarget.checked)}
              onClick={handleReisekrankenClick}
            />
            <CancellationType>Reisekranken</CancellationType>
          </section>
          <CoveredRiskIcon src="icons/heart-icon.png"></CoveredRiskIcon>
        </InputRiskGroup>
        <InputRiskGroup>
          <section>
            <input
              type="checkbox"
              onChange={(event) => setIsChecked(event.currentTarget.checked)}
              onChange={handleGepäckClick}
            />
            <CancellationType>Gepäck</CancellationType>
          </section>
          <CoveredRiskIcon src="icons/suitcase-icon.png"></CoveredRiskIcon>
        </InputRiskGroup>
      </CoveredRisksSection>
    </CoveredRisksContainer>
  )

  function handleRücktrittClick(event) {
    const filterForRücktritt = tariffCards.filter((tariffCard) =>
      tariffCard.uspList.some((uspItem) => uspItem.riskCover === 'Rücktritt')
    )
    onFilterCardsByContent(filterForRücktritt, event)
    setIsChecked(isChecked)
  }

  function handleAbbruchClick(event) {
    const filterForAbbruch = tariffCards.filter((tariffCard) =>
      tariffCard.uspList.some((uspItem) => uspItem.riskCover === 'Abbruch')
    )
    onFilterCardsByContent(filterForAbbruch, event)
    setIsChecked(isChecked)
  }

  function handleReisekrankenClick(event) {
    const filterForReisekranken = tariffCards.filter((tariffCard) =>
      tariffCard.uspList.some((uspItem) => uspItem.riskCover === 'Reisekranken')
    )
    onFilterCardsByContent(filterForReisekranken, event)
    setIsChecked(isChecked)
  }

  function handleGepäckClick(event) {
    const filterForGepäck = tariffCards.filter((tariffCard) =>
      tariffCard.uspList.some((uspItem) => uspItem.riskCover === 'Gepäck')
    )
    onFilterCardsByContent(filterForGepäck, event)
    setIsChecked(isChecked)
  }
}

const CoveredRisksContainer = styled.div`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  min-width: 240px;
  z-index: 1;
`

const CoveredRisksSection = styled.div`
  background: #e5ecff;
  border: 1px solid lightgrey;
  padding: 10px;
  position: sticky;
  top: 0;
`

const CoveredRisksHeadline = styled.h3`
  border-bottom: 1px solid lightgrey;
  margin-bottom: 16px;
  padding: 12px 0;
  text-align: center;
`

const CoveredPeriodSection = styled.section`
  display: flex;
  justify-content: space-between;
`
const CoveredPeriodButton = styled.div`
  background-color: ${(props) => props.background || '#fafafa'};
  border-color: ${(props) => props.border || 'lightgrey'};
  border-radius: 5px;
  border-style: solid;
  border-width: 1px 1px 2px 1px;
  cursor: pointer;
  height: 44px;
  line-height: 20px;
  margin: 0 8px;
  text-align: center;
  width: 100%;

  &:hover {
    background: ${(props) => props.backgroundOnHover || '#f0f0f0'};
  }
`

const CoveredPeriodText = styled.div`
  color: ${(props) => props.color || '#4d4e4f'};
  font-size: 14px;
`

const CheapestYearlyCoveredPrice = styled.span`
  color: #74b51d;
  font-size: 12px;
`

const CoveredRisksTitel = styled.div`
  display: flex;
  margin: 20px 0px;
`

const CancellationType = styled.label`
  &:hover {
    color: black;
  }
`

const InputRiskGroup = styled.div`
  display: flex;
  margin: 20px 0px;
`
const CoveredRiskIcon = styled.img`
  height: 22px;
  margin-left: auto;
  width: 22px;
`
