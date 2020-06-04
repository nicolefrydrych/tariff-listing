import React from 'react'
import styled from 'styled-components'
import Header from './Header'

export default function Application() {
  return (
    <>
      <Header />
      <TariffPageGrid>
        <Sortbar>Sortbar</Sortbar>
        <Filterbar> Filterbar </Filterbar>
        <ResultList>Resultlist </ResultList>
      </TariffPageGrid>
    </>
  )
}

const TariffPageGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-gap: 15px;
  grid-template-rows: 10% 20% 70%;
  grid-template-columns: 30% auto;
  padding: 20px;
`

const Sortbar = styled.div`
  background: #e2ecf7;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Filterbar = styled.div`
  background: #e5ecff;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  text-align: center;
`

const ResultList = styled.section`
  background: #f6f4f7;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 4;
  text-align: center;
`
