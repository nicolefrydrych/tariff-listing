import React, { useState } from 'react'
import styled from 'styled-components'

export default function PriceTag({ priceTag, priceDetails }) {
  const [priceInformationShown, setPriceInformationShown] = useState(false)

  return (
    <div>
      <TariffTitlePriceTag>
        <StyledPriceTag>{priceTag},00€</StyledPriceTag>
        <PriceInformationHelpIcon
          onMouseEnter={() => setPriceInformationShown(true)}
          onMouseLeave={() => setPriceInformationShown(false)}
          src="icons/preisInformation-icon.png"
        ></PriceInformationHelpIcon>
      </TariffTitlePriceTag>
      {priceInformationShown && (
        <div
          onMouseEnter={() => setPriceInformationShown(true)}
          onMouseLeave={() => setPriceInformationShown(false)}
        >
          <CloseIconPriceInformation
            onClick={() => setPriceInformationShown(false)}
            src="icons/delete-icon.png"
          ></CloseIconPriceInformation>

          <PriceInformation onClick={() => setPriceInformationShown(false)}>
            {priceDetails}
          </PriceInformation>
        </div>
      )}
    </div>
  )
}

const TariffTitlePriceTag = styled.div`
  display: flex;
  position: relative;
`

const StyledPriceTag = styled.div`
  color: #005ea8;
  font-size: 28px;
  font-weight: bold;
  margin-top: 16px;
`

const PriceInformationHelpIcon = styled.img`
  cursor: help;
  height: 16px;
  margin: 22px 0 0 6px;
  width: 16px;
`

const CloseIconPriceInformation = styled.img`
  height: 16px;
  position: absolute;
  right: -20px;
  top: 56px;
  width: 16px;
  z-index: 2;
`

const PriceInformation = styled.p`
  background: white;
  border: 1px solid #005ea8;
  height: auto;
  padding: 22px;
  position: absolute;
  right: -28px;
  top: 48px;
  width: 220px;
  z-index: 1;

  :before {
    border-bottom: 10px solid #005ea8;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    content: '';
    height: 0px;
    position: absolute;
    right: 26px;
    top: -20px;
    width: 0px;
  }

  :after {
    border-bottom: 10px solid white;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    content: '';
    height: 0px;
    position: absolute;
    right: 26px;
    top: -18.6px;
    width: 0px;
  }
`
