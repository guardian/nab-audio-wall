// @flow
import React from 'react'

const createLink = (
  url: string,
  text: string,
  key: string,
  spaceBefore: number | boolean = true,
  spaceAfter: number | boolean = true
) => [
  spaceBefore && ' ',
  <span>{text}</span>,
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
      `is the National Sexual Assault Domestic Family Violence Counselling Service. It offers confidential online and telephone counselling, information and referral services.`
    ],
    url: 'https://www.1800respect.org.au/'
  },
  {
    title: 'Lifeline',
    text: [
      createLink('https://www.lifeline.org.au/', 'Lifeline', 'GETHELP_LINK_2'),
      `provides Australians experiencing a personal crisis with access to 24 hour crisis support and suicide prevention services.`
    ],
    url: 'https://www.lifeline.org.au/'
  },
  {
    title: 'Department of Human Services',
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
      `For anyone going through a relationship, break up is hard, emotional and confusing. You can take some practical steps to make this time easier for you. `,
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
      `A men’s family violence telephone counselling, information and referral service operating in Victoria, New South Wales and Tasmania for men taking responsibility for their violent behaviour. This service provides confidential counselling and a `,
      createLink(
        'http://www.ntvmrs.org.au/about-us/what-we-do/',
        'Live Chat',
        'GETHELP_LINK_5'
      ),
      `.`
    ],
    url: 'http://www.ntvmrs.org.au/get-help/live-chat/'
  },
  {
    title: 'NAB Domestic & Family Violence Support',
    text: [
      `For NAB customers, there are a number of support services available to help you stay safe, recognise the warning signs and access help in times of crisis. Find out how we can help, including more about keeping your banking safe.`
    ],
    url: 'http://nab.com.au/endtoviolence'
  }
]

export default copy
