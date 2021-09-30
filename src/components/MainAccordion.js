import { Accordion, AccordionPanel, Anchor, Box, Text } from 'grommet'

function MainAccordion() {
 return (
  <Box margin='medium' direction='column' justify='center' align='center'>
   <Text size='xlarge'>Frequently Asked Questions</Text>
   <Accordion fill='true'>
    <AccordionPanel label='Is ANZSIC Fairy an official tool?'>
     <Box pad='small'>
      <Text>
       No! ANZSIC Fairy is a personal coding project by Kimberly Cheh using the
       ANZSIC code search API. For official information about ANZSIC codes
       please check out:
       <ul>
        <li>
         <Anchor
          href='https://www.abs.gov.au/ausstats/abs@.nsf/mf/1292.0'
          label='Australian Bureau of Statistics website'
         />
        </li>
        <li>
         <Anchor
          href='https://www.ato.gov.au/calculators-and-tools/business-industry-code-tool/anzsiccoder.aspx'
          label='Australian Taxation Office website'
         />
        </li>
       </ul>{' '}
      </Text>
     </Box>
    </AccordionPanel>
    <AccordionPanel label='What does ANZSIC stand for?'>
     <Box pad='small'>
      <Text>
       ANZSIC stands for the 'Australia and New Zealand Standard Industrial
       Classification' system.
      </Text>
     </Box>
    </AccordionPanel>
    <AccordionPanel label='What are ANZSIC codes used for?'>
     <Box pad='small'>
      <Text>
       The ANZSIC system classifies entities based on their main business
       activty and is used to collect and analyse data across industries. The
       system has four levels with increasing detail at each level:
       <ul>
        <li>broad industry classification denoted by a letter</li>
        <li>industry subdivision denoted by a two-digit code</li>
        <li>industry group denoted by a three-digit code</li>
        <li>industry class denoted by a four-digit code</li>
       </ul>
      </Text>
     </Box>
    </AccordionPanel>
    <AccordionPanel label='How do I decide which ANZSIC code to use?'>
     <Box pad='small'>
      <Text>
       Your primary ANZSIC code is pre-populated from your business' records on
       the Australian Business Register (ABR). You should ensure this is the
       four-digit industry class that best describes your main business
       activity, especially if your business works in multiple industries. For
       example, if 60% of your employees work in one section of the business,
       the day-to-day duties of this section would be your main activity.
      </Text>
     </Box>
    </AccordionPanel>
   </Accordion>
  </Box>
 )
}

export default MainAccordion
