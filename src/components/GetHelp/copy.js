// @flow
import React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`

const createLink = (
  url: string,
  text: string,
  key: string,
  spaceBefore: number | boolean = true,
  spaceAfter: number | boolean = true
) => [
  spaceBefore && ' ',
  <Link href={url} target="_blank" rel="noopener noreferrer" key={key}>
    {text}
  </Link>,
  spaceAfter && ' '
]

const copy = [
  {
    title: '1800RESPECT',
    text: [
      createLink(
        'https://www.1800respect.org.au/ ',
        '1800RESPECT',
        'GETHELP_LINK_1'
      ),
      `is the National Sexual Assault Domestic Family Violence Counselling Service. It offers confidential online and telephone counselling, information and referral services. For further support or information call 1800 737 732, 24 hours a day, 7 days a week.`
    ],
    url: 'https://www.1800respect.org.au/'
  },
  {
    title: 'Lifeline',
    text: [
      createLink('https://www.lifeline.org.au/', 'Lifeline', 'GETHELP_LINK_2'),
      `provides Australians experiencing a personal crisis with access to 24 hour crisis support and suicide prevention services. For further support or information please call them on 13 11 14.`
    ],
    url: 'https://www.lifeline.org.au/'
  },
  {
    title: 'Family or domestic violence - Department of Human Services',
    text: [
      'The ',
      createLink(
        'https://www.humanservices.gov.au/individuals/subjects/family-and-domestic-violence',
        'Australian Department of Human Services',
        'GETHELP_LINK_3'
      ),
      `supports people affected by family and domestic violence by providing information, resources and referrals.`
    ],
    url: 'https://www.humanservices.gov.au/individuals/subjects/family-and-domestic-violence'
  },
  {
    title: 'Divorce or separation',
    text: [
      `For anyone going through a relationship, break up is hard, emotional and confusing. You can take some practical steps to make this time easier for you and get ready for your next chapter. `,
      createLink(
        'https://www.moneysmart.gov.au/life-events-and-you/life-events/divorce-or-separation',
        'Money Smart - divorce or separation',
        'GETHELP_LINK_4'
      ),
      `can help you on your way.`
    ],
    url:
      'https://www.moneysmart.gov.au/life-events-and-you/life-events/divorce-or-separation'
  },
  {
    title: 'No to Violence’s Men’s Referral Service',
    text: [
      createLink(
        'http://www.ntvmrs.org.au/about-us/what-we-do/',
        'The Men’s Referral Service',
        'GETHELP_LINK_5'
      ),
      `A men’s family violence telephone counselling, information and referral service operating in Victoria, New South Wales and Tasmania for men taking responsibility for their violent behaviour. This service provides confidential counselling on 1300 766 491 or via `,
      createLink(
        'http://www.ntvmrs.org.au/about-us/what-we-do/',
        'Live Chat',
        'GETHELP_LINK_5'
      ),
      `. Live Chat operating hours are 8am – 9pm Monday to Friday (AEST/ADST).`
    ],
    url: 'http://www.ntvmrs.org.au/get-help/live-chat/'
  },
  {
    title: 'NAB Domestic & Family Violence Support',
    text: [
      `For NAB customers, there are a number of support services available to help you stay safe, recognise the warning signs and access help in times of crisis. Find out how we can help, including more about keeping your banking safe, at `,
      createLink(
        'http://nab.com.au/endtoviolence',
        'nab.com.au/endtoviolence',
        'GETHELP_LINK_5'
      ),
      `.`
    ],
    url:
      'http://nab.com.au/endtoviolence'
  }
]

export default copy
