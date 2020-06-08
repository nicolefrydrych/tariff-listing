import React from 'react'
import styled from 'styled-components'

export default function FilterBar() {
  return (
    <FilterBarContainer>
      <FilterBarHeadline>Filterbar</FilterBarHeadline>
      <FilterBarGrid>
        <div>Versicherte Bereiche</div>
        <span>logo1</span>
        <section>
          <input type="checkbox" />
          <label>Rücktritt</label>
        </section>
        <span>logo2</span>
        <section>
          <input type="checkbox" />
          <label>Abbruch</label>
        </section>
        <span>logo3</span>
        <section>
          <input type="checkbox" />
          <label>Reisekranken</label>
        </section>
        <span>logo4</span>
        <section>
          <input type="checkbox" />
          <label>Gepäck</label>
        </section>
        <span>logo5</span>
      </FilterBarGrid>
    </FilterBarContainer>
  )
}

const FilterBarContainer = styled.div`
  background: #e5ecff;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  text-align: center;
`

const FilterBarHeadline = styled.h3`
  text-align: center;
  border-bottom: 1px solid black;
  padding: 20px 0;
`

const FilterBarGrid = styled.div`
  display: grid;
  column-gap: 20%;
  row-gap: 20px;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 60% auto;
  justify-items: start;
  margin: 10px;
  font-size: 16px;
`
