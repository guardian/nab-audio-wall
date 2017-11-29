// @flow
import React from 'react'
import styled from 'styled-components'

type Props = {
  icon?: string,
  text: string,
  outboundUrl: string,
  width: number,
  iconSize: number
}

const Button = styled.a`
  display: flex;
  flex-direction: row;
  min-height: 50px;
  text-decoration: none;
  color: white;
  background-color: #be0d00;
  padding: 2px 20px;
  border-radius: 34px;
  font-size: 16px;
  align-items: center;
  text-align: left;
  margin: 2em auto;
  max-width: ${({ width = 180 }) => width}px;
`

const Copy = styled.p`
  padding-left: 6px;
  font-weight: bold;
`

const Icon = styled.img`
  width: ${({ iconSize = 22 }) => iconSize}px;
  padding: 2px 2px 2px 2px;
`

const CalloutButton = ({ icon, text, outboundUrl, width, iconSize }: Props) => (
  <div style={{ display: 'inline-block' }}>
    <Button
      href={outboundUrl}
      target="_blank"
      rel="noopener noreferrer"
      width={width}
    >
      {icon && <Icon src={icon} alt="icon" iconSize={iconSize} />}
      <Copy>{text}</Copy>
    </Button>
  </div>
)

export default CalloutButton
