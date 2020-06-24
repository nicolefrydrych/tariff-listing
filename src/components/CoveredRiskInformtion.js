import React, { useState } from 'react'
import styled from 'styled-components'

export default function CoveredRiskInformtion() {
  const [
    coveredRiskInformationShown,
    setCoveredRiskInformationShown,
  ] = useState(false)
  return (
    <CoveredRiskInformationContainer
      onClick={() => setCoveredRiskInformationShown(false)}
    >
      <CoveredRiskHelpIcon
        onMouseEnter={() => setCoveredRiskInformationShown(true)}
        onMouseLeave={() => setCoveredRiskInformationShown(false)}
        src="icons/questionMark-icon.png"
      ></CoveredRiskHelpIcon>
      {coveredRiskInformationShown && (
        <CoveredRiskInformation
          onMouseEnter={() => setCoveredRiskInformationShown(true)}
          onMouseLeave={() => setCoveredRiskInformationShown(false)}
        >
          <CloseIconCoveredRiskInformation
            onClick={() => setCoveredRiskInformationShown(false)}
            src="icons/delete-icon.png"
          ></CloseIconCoveredRiskInformation>
          <CoveredRiskTitel>
            Insgesamt können Sie bis zu vier Bereiche versichern:
          </CoveredRiskTitel>
          <CoveredRiskGroup>
            <CoveredRiskType>Rücktritt</CoveredRiskType>
            Erstattet die Kosten, wenn man die Reise nicht antreten kann.
          </CoveredRiskGroup>
          <CoveredRiskGroup>
            <CoveredRiskType>Reiseabbruch</CoveredRiskType>
            Erstattet die Kosten, wenn man die Reise abbrechen muss.
          </CoveredRiskGroup>
          <CoveredRiskGroup>
            <CoveredRiskType>Reisekranken</CoveredRiskType>
            Erstattet die Kosten, wenn man während der Reise behandelt werden
            muss.
          </CoveredRiskGroup>
          <CoveredRiskGroup>
            <CoveredRiskType>Gepäck</CoveredRiskType>
            Erstattet die Kosten bei Verlust des Gepäcks.
          </CoveredRiskGroup>
        </CoveredRiskInformation>
      )}
    </CoveredRiskInformationContainer>
  )
}

const CoveredRiskInformationContainer = styled.div`
  margin-left: auto;
`

const CoveredRiskHelpIcon = styled.img`
  cursor: help;
  height: 22px;
  width: 22px;
`

const CoveredRiskInformation = styled.div`
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
    border-bottom: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid #005ea8;
    border-top: 10px solid transparent;
    content: '';
    height: 0px;
    left: -20px;
    position: absolute;
    top: 63px;
    width: 0px;
  }

  :after {
    border-bottom: 10px solid transparent;
    border-left: 10px solid transparent;
    border-right: 10px solid white;
    border-top: 10px solid transparent;
    content: '';
    height: 0px;
    left: -19px;
    position: absolute;
    top: 63px;
    width: 0px;
  }
`

const CloseIconCoveredRiskInformation = styled.img`
  height: 16px;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 16px;
  z-index: 2;
`

const CoveredRiskTitel = styled.div`
  font-size: 16px;
  font-weight: 700;
`

const CoveredRiskType = styled.div`
  font-size: 16px;
  font-weight: 600;
`
const CoveredRiskGroup = styled.div`
  margin: 10px 0;
`
