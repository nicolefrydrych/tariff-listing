import React, { useState } from 'react'
import styled from 'styled-components'

export default function CoveredRiskInformtion() {
  const [
    coveredRiskInformationShown,
    setCoveredRiskInformationShown,
  ] = useState(false)
  return (
    <CoveredRiskInformationContainer>
      <CoveredRiskHelpIcon
        onMouseEnter={() => setCoveredRiskInformationShown(true)}
        onMouseLeave={() => setCoveredRiskInformationShown(false)}
        src="icons/questionMark-icon.png"
      ></CoveredRiskHelpIcon>
      {coveredRiskInformationShown && (
        <AdditionalCoveredRiskInformation
          onMouseEnter={() => setCoveredRiskInformationShown(true)}
          onMouseLeave={() => setCoveredRiskInformationShown(false)}
        >
          <CloseIconAdditionalCoveredRiskInformation
            onClick={() => setCoveredRiskInformationShown(false)}
            src="icons/delete-icon.png"
          ></CloseIconAdditionalCoveredRiskInformation>
          <AdditionalCoveredRiskInformationTitel>
            Insgesamt können Sie bis zu vier Bereiche versichern:
          </AdditionalCoveredRiskInformationTitel>
          <AdditionalCoveredRiskSection>
            <AdditionalCoveredRiskType>Rücktritt</AdditionalCoveredRiskType>
            Erstattet die Kosten, wenn man die Reise nicht antreten kann.
          </AdditionalCoveredRiskSection>
          <AdditionalCoveredRiskSection>
            <AdditionalCoveredRiskType>Reiseabbruch</AdditionalCoveredRiskType>
            Erstattet die Kosten, wenn man die Reise abbrechen muss.
          </AdditionalCoveredRiskSection>
          <AdditionalCoveredRiskSection>
            <AdditionalCoveredRiskType>Reisekranken</AdditionalCoveredRiskType>
            Erstattet die Kosten, wenn man während der Reise behandelt werden
            muss.
          </AdditionalCoveredRiskSection>
          <AdditionalCoveredRiskSection>
            <AdditionalCoveredRiskType>Gepäck</AdditionalCoveredRiskType>
            Erstattet die Kosten bei Verlust des Gepäcks.
          </AdditionalCoveredRiskSection>
        </AdditionalCoveredRiskInformation>
      )}
    </CoveredRiskInformationContainer>
  )
}

const CoveredRiskInformationContainer = styled.div`
  margin-left: auto;
`

const CoveredRiskHelpIcon = styled.img`
  background-color: #e5ecff;
  cursor: help;
  height: 22px;
  width: 22px;
  position: relative;
`

const AdditionalCoveredRiskInformation = styled.div`
  background: white;
  border: 1px solid #005ea8;
  font-size: 16px;
  height: auto;
  padding: 16px;
  position: absolute;
  right: -530px;
  text-align: left;
  top: 70px;
  width: 520px;
  z-index: 1;

  :before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid #005ea8;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    left: -20px;
    top: 63px;
  }

  :after {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid transparent;
    border-right: 10px solid white;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    left: -19px;
    top: 63px;
  }
`

const CloseIconAdditionalCoveredRiskInformation = styled.img`
  height: 16px;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 16px;
  z-index: 2;
`

const AdditionalCoveredRiskInformationTitel = styled.div`
  font-size: 16px;
  font-weight: 700;
`

const AdditionalCoveredRiskType = styled.div`
  font-size: 16px;
  font-weight: 600;
`
const AdditionalCoveredRiskSection = styled.div`
  margin: 10px 0;
`
