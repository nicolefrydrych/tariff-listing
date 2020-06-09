import React, { useState } from 'react'
import styled from 'styled-components'

export default function FilterBar({
  onFilterByContent,
  tariffCards,
  clearCheckboxes,
}) {
  const [isChecked, setIsChecked] = useState(true)

  return (
    <FilterBarContainer>
      <FilterBarHeadline>Gewählter Schutz</FilterBarHeadline>
      <FilterBarGrid>
        <div>Versicherte Bereiche</div>
        <span>logo1</span>
        <section>
          <input
            type="checkbox"
            onChange={(event) => setIsChecked(event.currentTarget.checked)}
            onClick={handleRücktrittClick}
            unchecked={isChecked}
          />

          <label>Rücktritt</label>
        </section>
        <span>logo2</span>
        <section>
          <input
            type="checkbox"
            onChange={(event) => setIsChecked(event.currentTarget.checked)}
            onClick={handleAbbruchClick}
            unchecked={isChecked}
          />
          <label>Abbruch</label>
        </section>
        <span>logo3</span>
        <section>
          <input
            type="checkbox"
            onChange={(event) => setIsChecked(event.currentTarget.checked)}
            onClick={handleReisekrankenClick}
            unchecked={isChecked}
          />
          <label>Reisekranken</label>
        </section>
        <span>logo4</span>
        <section>
          <input
            type="checkbox"
            onChange={(event) => setIsChecked(event.currentTarget.checked)}
            onChange={handleGepäckClick}
            unchecked={isChecked}
          />
          <label>Gepäck</label>
        </section>
        <span>logo5</span>
      </FilterBarGrid>
    </FilterBarContainer>
  )

  function handleRücktrittClick(event) {
    const filterForRücktritt = tariffCards.filter((tariffCard) =>
      tariffCard.uspList.includes('Rücktritt')
    )
    onFilterByContent(filterForRücktritt, event)
    setIsChecked(!isChecked)
  }

  function handleAbbruchClick(event) {
    const filterForAbbruch = tariffCards.filter((tariffCard) =>
      tariffCard.uspList.includes('Abbruch')
    )
    onFilterByContent(filterForAbbruch, event)
    setIsChecked(!isChecked)
  }
  function handleReisekrankenClick(event) {
    const filterForReisekranken = tariffCards.filter((tariffCard) =>
      tariffCard.uspList.includes('Reisekranken')
    )
    onFilterByContent(filterForReisekranken, event)
    setIsChecked(!isChecked)
  }
  function handleGepäckClick(event) {
    const filterForGepäck = tariffCards.filter((tariffCard) =>
      tariffCard.uspList.includes('Gepäck')
    )
    onFilterByContent(filterForGepäck, event)
    setIsChecked(!isChecked)
  }
}

const FilterBarContainer = styled.div`
  background: #e5ecff;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  text-align: center;
  border: 1px solid grey;
`

const FilterBarHeadline = styled.h3`
  text-align: center;
  border-bottom: 1px solid grey;
  padding: 16px 0;
`

const FilterBarGrid = styled.div`
  display: grid;
  column-gap: 20%;
  row-gap: 20px;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-template-columns: 60% auto;
  justify-items: start;
  margin: 20px;
  white-space: nowrap;
`

const StyledButton = styled.button`
  background: #e5ecff;
  color: black;
  border: 0;
  outline: none;
`
