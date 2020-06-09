import React from 'react'
import styled from 'styled-components'

export default function SortBar({ onSortCardsByPrice, onSortCardsByName }) {
  return (
    <div>
      <SortBarContainer>
        <ResultSortingText>
          <div>Anbieter </div>
          <SortResult></SortResult>
          <SortResultOnHover></SortResultOnHover>
          <DropdownList>
            <ListItem onClick={(event) => onSortCardsByName(event)}>
              Anbieter: A-Z
            </ListItem>
            <ListItem onClick={(event) => onSortCardsByName(event)}>
              Anbieter: Z-A
            </ListItem>
          </DropdownList>
        </ResultSortingText>
        <PriceButton onClick={() => onSortCardsByPrice()}>
          Niedrigster Preis
        </PriceButton>
      </SortBarContainer>
    </div>
  )
}

const SortBarContainer = styled.div`
  background: #e2ecf7;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  height: 100%;
`
const DropdownList = styled.ul`
  display: none;
  list-style: none;
  background: #f2f2f2;
  width: 100%;
  position: absolute;
  top: 74px;
  border: 1px solid gray;
  border-top: none;
`

const ListItem = styled.li`
  text-align: center;
  padding: 10px;
  &:hover {
    background: #939393;
  }
`

const SortResult = styled.span`
  border-left: 4.5px solid transparent;
  border-top: 5px solid #005ea8;
  border-right: 4.5px solid transparent;
  margin-left: 5px;
`

const SortResultOnHover = styled.span`
  border-left: 4.5px solid transparent;
  border-bottom: 5px solid #005ea8;
  border-right: 4.5px solid transparent;
  margin-left: 5px;
  display: none;
`

const ResultSortingText = styled.div`
  background: #e2ecf7;
  color: black;
  border: 0;
  outline: none;
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background-color: lightgray;
  }
  &:hover ${DropdownList} {
    display: block;
  }
  &:hover ${SortResult} {
    display: none;
  }
  &:hover ${SortResultOnHover} {
    display: block;
  }
`

const PriceButton = styled.button`
  background: #e2ecf7;
  color: black;
  border: 0;
  outline: none;
  width: 100%;
  height: 100%;
  &:hover {
    background-color: lightgray;
  }
`
