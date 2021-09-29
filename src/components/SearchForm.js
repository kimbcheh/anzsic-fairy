import { Box, Button, Form, FormField, TextInput } from 'grommet'

function SearchForm() {
 return (
  <Box
   margin='medium'
   direction='row-responsive'
   justify='center'
   align='center'
  >
   <Form
    onSubmit={(e) => {
     console.log(e.target.search.value.trim())
    }}
   >
    <FormField
     label="What's your primary business activity?"
     name='search'
     htmlFor='search'
     required
    >
     <TextInput
      id='search'
      name='search'
      placeholder='e.g. fishing'
     ></TextInput>
    </FormField>
    <Box direction='row' justify='between'>
     <Button type='reset' label='Reset' />
     <Button type='submit' label='Find your code!' primary />
    </Box>
   </Form>
  </Box>
 )
}

export default SearchForm
