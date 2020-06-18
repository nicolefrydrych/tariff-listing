import React, { useState } from 'react'
import styled from 'styled-components'
import CoveredRiskInformtion from './CoveredRiskInformtion'

export default function FilterBar({ onFilterCardsByContent, tariffCards }) {
  const [isChecked, setIsChecked] = useState()

  return (
    <CoveredRisksContainer>
      <CoveredRisksHeadline>Gewählter Schutz</CoveredRisksHeadline>
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
  background: #e5ecff;
  border: 1px solid grey;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  min-width: 240px;
  position: relative;
  text-align: center;
`

const CoveredRisksHeadline = styled.h3`
  border-bottom: 1px solid grey;
  padding: 16px 0;
  text-align: center;
`

const CoveredRisksTitel = styled.div`
  display: flex;
  margin: 20px 10px;
`

const CancellationType = styled.label`
  &:hover {
    color: black;
  }
`

const InputRiskGroup = styled.div`
  display: flex;
  margin: 20px 10px;
`
const CoveredRiskIcon = styled.img`
  background-color: #e5ecff;
  height: 22px;
  margin-left: auto;
  width: 22px;
`
