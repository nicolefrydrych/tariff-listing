import React, { useState } from 'react'
import styled from 'styled-components'

export default function CoveredPeriodInformtion() {
  const [
    coveredPeriodInformationShown,
    setCoveredPeriodInformationShown,
  ] = useState(false)

  return (
    <CoveredPeriodInformtionContainer>
      <IconSection
        onMouseEnter={() => setCoveredPeriodInformationShown(true)}
        onMouseLeave={() => setCoveredPeriodInformationShown(false)}
      >
        <CoveredPeriodHelpIcon src="icons/preisInformation-icon.png"></CoveredPeriodHelpIcon>
      </IconSection>

      {coveredPeriodInformationShown && (
        <CoveredPeriodInformation>
          <CoveredPeriodTitel>Einmalschutz</CoveredPeriodTitel>
          <CoveredPeriodText>
            Für die Berechnung einer einmaligen Versicherung sind die genauen
            Reisedaten notwendig.
          </CoveredPeriodText>
        </CoveredPeriodInformation>
      )}
    </CoveredPeriodInformtionContainer>
  )
}

const CoveredPeriodInformtionContainer = styled.div`
  z-index: 1;
`

const IconSection = styled.div`
  display: inline-flex;
`

const CoveredPeriodHelpIcon = styled.img`
  height: 12px;
  margin: 4px 20px;
  position: relative;
  top: 2px;
  width: 12px;
`

const CoveredPeriodInformation = styled.div`
  background: rgba(10, 50, 120, 0.9);
  padding: 15px 20px 20px 15px;
  position: absolute;
  right: -40px;
  text-align: left;
  top: 125px;
  width: 270px;
`
const CoveredPeriodTitel = styled.div`
  color: white;
  margin-bottom: 8px;
`
const CoveredPeriodText = styled.div`
  color: white;
  font-size: 16px;
`
