import React from 'react'
import styled from 'styled-components'
import ResultCard from './ResultCard'

export default function ResultList({
  tariffCards,
  sortCardsByPrice,
  sortCardsByName,
}) {
  return (
    <div>
      <ResultContainer>
        {sortMethod(sortCardsByPrice, sortCardsByName).map((tariff, name) => (
          <div key={name}>
            <ResultCard {...tariff} />
          </div>
        ))}
      </ResultContainer>
    </div>
  )

  function sortMethod(sortCardsByPrice, sortCardsByName) {
    if (sortCardsByName === 'Anbieter: A-Z') {
      return tariffCards.sort((a, b) => a.name.localeCompare(b.name))
    }

    if (sortCardsByName === 'Anbieter: Z-A') {
      return tariffCards.sort((a, b) => b.name.localeCompare(a.name))
    }

    if (sortCardsByPrice === true) {
      return tariffCards.sort((a, b) => a.priceTag - b.priceTag)
    }
    if (sortCardsByPrice === false) {
      return tariffCards.sort((a, b) => b.priceTag - a.priceTag)
    }
    return tariffCards
  }
}

const ResultContainer = styled.section`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
`
