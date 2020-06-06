import React from 'react'
import styled from 'styled-components'

export default function SortBar({ sortData, sortCards }) {
  const providers = [{ name: 'A-Z' }, { name: 'Z-A' }]

  return (
    <div>
      <SortBarHeader>
        <DropDownMenu onChange={handleChange}>
          <option value="">Anbieter</option>
          {providers.map((provider) => (
            <option key={provider.name} value={provider.name}>
              {provider.name}
            </option>
          ))}
        </DropDownMenu>
        <LowestPriceButton onClick={() => sortData()}>
          Niedrigster Preis
        </LowestPriceButton>
      </SortBarHeader>
    </div>
  )

  function handleChange(event) {
    sortCards(event.target.value)
  }
}

const SortBarHeader = styled.div`
  background: #e2ecf7;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px 0;
`

const DropDownMenu = styled.select`
  background: #e2ecf7;
  color: black;
  border: 0;
  outline: none;
  padding: 12px 16px;
`

const LowestPriceButton = styled.button`
  background: #e2ecf7;
  color: black;
  border: 0;
  outline: none;
  padding: 12px 16px;
`
