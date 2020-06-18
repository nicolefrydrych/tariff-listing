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
      <DD>
        <PriceTag>{priceTag},00€</PriceTag>
        <PriceInformationIcon
          onMouseEnter={() => setPriceInformationShown(true)}
          onMouseLeave={() => setPriceInformationShown(false)}
          src={priceIcon}
        ></PriceInformationIcon>
      </DD>
      {priceInformationShown && (
        <div
          onMouseEnter={() => setPriceInformationShown(true)}
          onMouseLeave={() => setPriceInformationShown(false)}
        >
          <CloseIconAdditionalPriceInformation
            onClick={() => setPriceInformationShown(false)}
            src={deleteIcon}
          ></CloseIconAdditionalPriceInformation>

          <AdditionalPriceInformation>
            {priceDetails}
          </AdditionalPriceInformation>
        </div>
      )}
    </div>
  )
}

const DD = styled.div`
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
  margin: 22px 0 0 6px;
  height: 16px;
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
  width: 220px;
  padding: 22px;
  position: absolute;
  right: -28px;
  top: 48px;
  z-index: 1;

  :before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid #005ea8;
    right: 26px;
    top: -20px;
  }

  :after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    border-bottom: 10px solid white;
    right: 26px;
    top: -18.6px;
  }
`
