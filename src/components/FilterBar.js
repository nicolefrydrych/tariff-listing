import React from 'react'
import styled from 'styled-components'

export default function FilterBar({
  onFilterByContent,
  tariffCards,
  clearCheckboxes,
}) {
  return (
    <FilterBarContainer>
      <FilterBarHeadline>Filterbar</FilterBarHeadline>
      <FilterBarGrid>
        <div>Versicherte Bereiche</div>
        <span>logo1</span>
        <section>
          <input type="checkbox" onClick={handleRücktrittClick} />
          <label>Rücktritt</label>
        </section>
        <span>logo2</span>
        <section>
          <input type="checkbox" onClick={handleAbbruchClick} />
          <label>Abbruch</label>
        </section>
        <span>logo3</span>
        <section>
          <input type="checkbox" onClick={handleReisekrankenClick} />
          <label>Reisekranken</label>
        </section>
        <span>logo4</span>
        <section>
          <input type="checkbox" onChange={handleGepäckClick} />
          <label>Gepäck</label>
        </section>
        <span>logo5</span>
      </FilterBarGrid>
      <StyledButton onClick={onClear}>clear</StyledButton>
    </FilterBarContainer>
  )

  function handleRücktrittClick() {
    const filterForRücktritt = tariffCards.filter((rücktrittCard) =>
      rücktrittCard.uspList.includes('Rücktritt')
    )
    onFilterByContent(filterForRücktritt)
  }
  function handleAbbruchClick() {
    const filterForAbbruch = tariffCards.filter((abbruchCard) =>
      abbruchCard.uspList.includes('Abbruch')
    )
    onFilterByContent(filterForAbbruch)
  }
  function handleReisekrankenClick() {
    const filterForReisekranken = tariffCards.filter((reisekrankenCard) =>
      reisekrankenCard.uspList.includes('Reisekranken')
    )
    onFilterByContent(filterForReisekranken)
  }
  function handleGepäckClick() {
    const filterForGepäck = tariffCards.filter((gepäckCard) =>
      gepäckCard.uspList.includes('Gepäck')
    )
    onFilterByContent(filterForGepäck)
  }

  function onClear() {
    clearCheckboxes()
  }
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
  padding: 16px 0;
`

const FilterBarGrid = styled.div`
  display: grid;
  column-gap: 20%;
  row-gap: 15px;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 60% auto;
  justify-items: start;
  margin: 10px;
  white-space: nowrap;
`

const StyledButton = styled.button`
  background: #e5ecff;
  color: black;
  border: 0;
  outline: none;
`
