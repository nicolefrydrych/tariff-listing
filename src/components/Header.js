import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return <StyledHeader>Check24</StyledHeader>
}

const StyledHeader = styled.header`
  background: #3969a8;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 65px;
  font-size: 40px;
  width: 100%;
`
