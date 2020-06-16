import React, { useState } from 'react'
import styled from 'styled-components'

export default function SortBar({ onSortCardsByPrice, onSortCardsByName }) {
  const [azActive, setAzActive] = useState(false)
  const [priceActive, setpriceActive] = useState(false)

  return (
    <div>
      <SortBarContainer>
        <SortByName background={azActive} onClick={handleAzActive}>
          <ResultSortingItem>
            <SortByNameText>Anbieter</SortByNameText>
            <SortResultBefore></SortResultBefore>
            <SortResultAfter></SortResultAfter>
          </ResultSortingItem>
          <DropdownList>
            <ListItem onClick={(event) => onSortCardsByName(event)}>
              Anbieter: A-Z
            </ListItem>
            <ListItem onClick={(event) => onSortCardsByName(event)}>
              Anbieter: Z-A
            </ListItem>
          </DropdownList>
        </SortByName>
        <SortByPriceText
          background={priceActive}
          onClick={() => {
            onSortCardsByPrice()
            handlePriceActive()
          }}
        >
          Niedrigster Preis
        </SortByPriceText>
      </SortBarContainer>
    </div>
  )
  function handleAzActive() {
    setAzActive(!azActive)
    setpriceActive(false)
  }

  function handlePriceActive() {
    setpriceActive(!priceActive)
    setAzActive(false)
  }
}

const SortBarContainer = styled.div`
  border: 1px solid lightgray;
  display: grid;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  grid-template-columns: 1fr 1fr;
  line-height: 60px;
  min-width: 800px;
`
const DropdownList = styled.ul`
  background: white;
  border: 1px solid lightgrey;
  border-top: none;
  cursor: pointer;
  display: none;
  list-style: none;
  position: absolute;
  top: 61px;
  width: 100.5%;
`

const ListItem = styled.li`
  line-height: 45px;
  text-align: center;
  &:hover {
    background: #d1cfce;
  }
`

const ResultSortingItem = styled.div`
  position: relative;
`

const SortResultBefore = styled.span`
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  border-top: 5px solid #005ea8;
  margin-left: 5px;
  position: absolute;
  right: -15px;
  top: 30px;
`

const SortResultAfter = styled.span`
  border-bottom: 5px solid #005ea8;
  border-left: 4.5px solid transparent;
  border-right: 4.5px solid transparent;
  display: none;
  margin-left: 5px;
  position: absolute;
  right: -15px;
  top: 30px;
`

const SortByName = styled.div`
  background: ${(props) => (props.background ? '#d5d9e0' : '#e2ecf7')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  &:hover {
    background-color: #d9e2eb;
  }
  &:hover ${DropdownList} {
    display: block;
  }
  &:hover ${SortResultBefore} {
    display: none;
  }
  &:hover ${SortResultAfter} {
    display: block;
  }
`
const SortByNameText = styled.div`
  color: #005ea8;
`

const SortByPriceText = styled.div`
  background: ${(props) => (props.background ? '#d5d9e0' : '#e2ecf7')};
  border-left: 1px solid lightgrey;
  color: #005ea8;
  cursor: pointer;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #d9e2eb;
  }
`
