import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import tariffsData from '../tariffsData'
import ResultList from './ResultList'
import SortBar from './SortBar'
import FilterBar from './FilterBar'

export default function TariffPage() {
  const [state, setState] = useState(tariffsData)
  const [tariffCards, setTariffCards] = useState(tariffsData)
  const [sortCardsByPrice, setSortCardsByPrice] = useState()
  const [sortCardsByName, setSortCardsByName] = useState()

  return (
    <>
      <Header />
      <TariffPageGrid>
        <FilterBar
          tariffCards={tariffCards}
          onFilterByContent={handleFilterByContent}
          clearCheckboxes={clearCheckboxes}
        />
        <SortBar
          onSortCardsByPrice={handleSortCardsByPrice}
          onSortCardsByName={handleSortCardsByName}
        />
        <ResultList
          tariffCards={tariffCards}
          sortCardsByPrice={sortCardsByPrice}
          sortCardsByName={sortCardsByName}
        />
      </TariffPageGrid>
    </>
  )

  function handleSortCardsByPrice() {
    setSortCardsByPrice(!sortCardsByPrice)
    setSortCardsByName('')
  }

  function handleSortCardsByName(event) {
    setSortCardsByName(event.target.innerHTML)
  }

  function handleFilterByContent(clickedCheckbox, event) {
    event.currentTarget.checked === true
      ? setTariffCards(clickedCheckbox)
      : setTariffCards(tariffsData)
  }

  function clearCheckboxes() {
    setTariffCards(tariffsData)
  }
}

const TariffPageGrid = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-rows: 10% 30% 60%;
  grid-template-columns: 30% auto;
  padding: 20px;
  height: 100vh;
`
