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
  <a href={url} target="_blank" rel="noopener noreferrer" key={key}>
    {text}
  </a>,
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
      `is the National Sexual Assault Domestic Family
    Violence Counselling Service. It offers confidential online and telephone
    counselling, information and referral services. For further support or
    information call 1800 737 732.`
    ],
    url: 'https://www.1800respect.org.au/'
  },
  {
    title: 'Lifeline',
    text: [
      createLink('https://www.lifeline.org.au/', 'Lifeline', 'GETHELP_LINK_2'),
      `provides Australians experiencing a personal crisis with access to 24
      hour crisis support and suicide prevention services. For further support
      or information please call them on 13 11 14. `
    ],
    url: 'https://www.lifeline.org.au/'
  },
  {
    title: 'Family or domestic violence - Department of Human Services',
    text: [
      'The ',
      createLink(
        'https://services.dhhs.vic.gov.au/',
        'Department of Human Services',
        'GETHELP_LINK_3'
      ),
      `provides a fact sheet with information and assistance available.`
    ],
    url: 'https://services.dhhs.vic.gov.au/'
  },
  {
    title: 'Divorce or separation',
    text: [
      `For anyone going through a relationship, break up is hard, emotional and
      confusing. You can take some practical steps to make this time easier for
      you and get ready for your next chapter.`,
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
    title: 'The Men’s Referral Service',
    text: [
      createLink(
        'http://www.ntvmrs.org.au/about-us/what-we-do/',
        'The Men’s Referral Service',
        'GETHELP_LINK_5'
      ),
      `is a men’s family violence telephone counselling, information and
      referral service operating in Victoria, New South Wales and Tasmania for
      men taking responsibility for their violent behaviour. For further support
      or information please call them on 1300 766 491. `
    ],
    url: 'http://www.ntvmrs.org.au/about-us/what-we-do/'
  },
  {
    title: 'NAB Domestic & Family Violence Support',
    text: [
      `For NAB customers, there are a number of support services available to
      help you stay safe, recognise the warning signs and access help in times
      of crisis. For more information on services available please visit
      nab.com.au/domesticandfamilyviolence`
    ],
    url:
      'https://www.nab.com.au/about-us/corporate-responsibility/customers/domestic-and-family-violence'
  }
]

export default copy
