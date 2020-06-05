import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import tariffsData from '../tariffsData'
import ResultList from './ResultList'
import SortBar from './SortBar'

export default function TariffPage() {
  const [tariffCards, setTariffCards] = useState(tariffsData)
  const [sortCards, setSortCards] = useState(null)

  return (
    <>
      <Header />
      <TariffPageGrid>
        <SortBar sortData={sortData} />
        <Filterbar> Filterbar </Filterbar>
        <ResultList tariffCards={tariffCards} sortCards={sortCards} />
      </TariffPageGrid>
    </>
  )

  function sortData() {
    setSortCards(!sortCards)
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

const Filterbar = styled.div`
  background: #e5ecff;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  text-align: center;
`
