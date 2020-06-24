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
        <CoveredPeriodInformation
          onClick={() => setCoveredPeriodInformationShown(false)}
          onMouseEnter={() => setCoveredPeriodInformationShown(true)}
          onMouseLeave={() => setCoveredPeriodInformationShown(false)}
        >
          <CoveredPeriodTitel>Einmalschutz</CoveredPeriodTitel>
          <CoveredPeriodText>
            Für die Berechnung einer einmaligen Versicherung sind die genauen
            Reisedaten notwendig.
          </CoveredPeriodText>
          <CloseIconCoveredRiskInformation
            onClick={() => setCoveredPeriodInformationShown(false)}
            src="icons/delete-icon-white.png"
          ></CloseIconCoveredRiskInformation>
        </CoveredPeriodInformation>
      )}
    </CoveredPeriodInformtionContainer>
  )
}

const CoveredPeriodInformtionContainer = styled.div`
  position: relative;
`

const IconSection = styled.div`
  display: inline-flex;
`

const CoveredPeriodHelpIcon = styled.img`
  height: 12px;
  margin: 4px 20px;
`

const CoveredPeriodInformation = styled.div`
  background: rgba(10, 50, 120, 0.9);
  padding: 15px 20px 20px 15px;
  position: absolute;
  right: -60px;
  text-align: left;
  top: 30px;
  width: 270px;

  :before {
    border-bottom: 10px solid rgba(10, 50, 120, 0.9);
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid transparent;
    content: '';
    height: 0px;
    position: absolute;
    right: 99px;
    top: -20px;
  }
`
const CoveredPeriodTitel = styled.div`
  color: white;
  margin-bottom: 8px;
`
const CoveredPeriodText = styled.div`
  color: white;
  font-size: 16px;
`

const CloseIconCoveredRiskInformation = styled.img`
  height: 16px;
  position: absolute;
  right: 6px;
  top: 6px;
  width: 16px;
`
