import React, { useState } from 'react'
import styled from 'styled-components'

export default function PriceInformation({
  priceTag,
  priceIcon,
  deleteIcon,
  priceDetails,
}) {
  const [priceInformationShown, setPriceInformationShown] = useState(false)

  return (
    <div>
      <TariffTitlePriceTag>
        <PriceTag>{priceTag},00€</PriceTag>
        <PriceInformationIcon
          onMouseEnter={() => setPriceInformationShown(true)}
          onMouseLeave={() => setPriceInformationShown(false)}
          src={priceIcon}
        ></PriceInformationIcon>
      </TariffTitlePriceTag>
      {priceInformationShown && (
        <div
          onMouseEnter={() => setPriceInformationShown(true)}
          onMouseLeave={() => setPriceInformationShown(false)}
        >
          <CloseIconAdditionalPriceInformation
            onClick={() => setPriceInformationShown(false)}
            src={deleteIcon}
          ></CloseIconAdditionalPriceInformation>

          <AdditionalPriceInformation
            onClick={() => setPriceInformationShown(false)}
          >
            {priceDetails}
          </AdditionalPriceInformation>
        </div>
      )}
    </div>
  )
}

const TariffTitlePriceTag = styled.div`
  display: flex;
  position: relative;
`

const PriceTag = styled.div`
  color: #005ea8;
  font-size: 28px;
  font-weight: bold;
  margin-top: 16px;
`

const PriceInformationIcon = styled.img`
  cursor: help;
  height: 16px;
  margin: 22px 0 0 6px;
  width: 16px;
`

const CloseIconAdditionalPriceInformation = styled.img`
  height: 16px;
  position: absolute;
  right: -20px;
  top: 56px;
  width: 16px;
  z-index: 2;
`

const AdditionalPriceInformation = styled.p`
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
    content: '';
    border-bottom: 10px solid #005ea8;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    height: 0px;
    position: absolute;
    right: 26px;
    top: -20px;
    width: 0px;
  }

  :after {
    content: '';
    border-bottom: 10px solid white;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    height: 0px;
    position: absolute;
    right: 26px;
    top: -18.6px;
    width: 0px;
  }
`
