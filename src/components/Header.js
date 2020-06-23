import React from 'react'
import styled from 'styled-components'

export default function Header() {
  return <StyledHeader>Check24</StyledHeader>
}

const StyledHeader = styled.header`
  align-items: center;
  background: #3969a8;
  color: white;
  display: flex;
  font-size: 40px;
  height: 65px;
  justify-content: center;
`
