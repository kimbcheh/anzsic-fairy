import { Accordion, AccordionPanel, Box, Text } from 'grommet'

function MainAccordion() {
 return (
  <Box margin='medium' direction='column' justify='center' align='center'>
   <Text size='xlarge'>Frequently Asked Questions</Text>
   <Accordion fill='true'>
    <AccordionPanel label='Is ANZSIC Fairy an official tool?'>
     <Box pad='small'>
      <Text>X</Text>
     </Box>
    </AccordionPanel>
    <AccordionPanel label='What does ANZSIC even stand for?'>
     <Box pad='small'>
      <Text>X</Text>
     </Box>
    </AccordionPanel>
    <AccordionPanel label='Why does ANZSIC exist?'>
     <Box pad='small'>
      <Text>X</Text>
     </Box>
    </AccordionPanel>
    <AccordionPanel label='How do I decide which ANZSIC to use?'>
     <Box pad='small'>
      <Text>X</Text>
     </Box>
    </AccordionPanel>
   </Accordion>
  </Box>
 )
}

export default MainAccordion
