import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import tariffsData from '../tariffsData'
import ResultList from './ResultList'
import SortBar from './SortBar'
import FilterBar from './FilterBar'

export default function TariffPage() {
  const [tariffCards, setTariffCards] = useState(tariffsData)
  const [sortCardsByPrice, setSortCardsByPrice] = useState(null)
  const [sortCardsByName, setSortCardsByName] = useState()

  return (
    <>
      <Header />
      <TariffPageGrid>
        <FilterBar />
        <SortBar sortData={sortData} sortCards={sortCards} />

        <ResultList
          tariffCards={tariffCards}
          sortCardsByPrice={sortCardsByPrice}
          sortCardsByName={sortCardsByName}
        />
      </TariffPageGrid>
    </>
  )

  function sortData() {
    setSortCardsByName('')
    setSortCardsByPrice(!sortCardsByPrice)
  }

  function sortCards(value) {
    setSortCardsByName(value)
  }
}

const TariffPageGrid = styled.div`
  display: grid;
  grid-gap: 45px;
  grid-template-rows: 10% 20% 70%;
  grid-template-columns: 30% auto;
  padding: 20px;
  height: 100vh;
`
