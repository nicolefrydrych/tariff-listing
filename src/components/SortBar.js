import React from 'react'
import styled from 'styled-components'

export default function SortBar() {
  const providers = [
    { name: 'A-Z', isSelected: false },
    { name: 'Z-A', isSelected: false },
  ]

  return (
    <div>
      <SortBarHeader>
        <DropDownMenu>
          <option value="">Anbieter</option>
          {providers.map((provider) => (
            <option key={provider.name} value={provider.name}>
              {provider.name}
            </option>
          ))}
        </DropDownMenu>
        <LowestPriceButton>Niedrigster Preis</LowestPriceButton>
      </SortBarHeader>
    </div>
  )
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
  font-size: 18px;
  margin-bottom: 20px;
  font-family: 'Gill Sans';
`

const LowestPriceButton = styled.button`
  background: #e2ecf7;
  color: black;
  border: 0;
  outline: none;
  padding: 12px 16px;
  font-size: 18px;
  margin-bottom: 20px;
  font-family: 'Gill Sans';
`
