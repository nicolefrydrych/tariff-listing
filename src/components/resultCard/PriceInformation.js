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
      <PriceTag>{priceTag},00€</PriceTag>
      <PriceInformationIcon
        onMouseEnter={() => setPriceInformationShown(true)}
        onMouseLeave={() => setPriceInformationShown(false)}
        src={priceIcon}
      ></PriceInformationIcon>
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

const PriceTag = styled.div`
  color: #005ea8;
  font-size: 24px;
  font-weight: bold;
  margin-top: 16px;
`

const PriceInformationIcon = styled.img`
  bottom: 22px;
  cursor: help;
  left: 60px;
  max-height: 16px;
  max-width: 16px;
  position: relative;
`

const CloseIconAdditionalPriceInformation = styled.img`
  height: 16px;
  position: absolute;
  right: 10px;
  top: 48px;
  width: 16px;
  z-index: 2;
`

const AdditionalPriceInformation = styled.p`
  background: white;
  border: 1px solid #005ea8;
  height: 140px;
  max-width: 220px;
  min-width: 200px;
  padding: 24px;
  position: absolute;
  right: 0;
  top: 40px;
  z-index: 1;
`
