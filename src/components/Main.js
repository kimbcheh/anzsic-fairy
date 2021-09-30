import MainHeader from './MainHeader'
import SearchForm from './SearchForm'
import MainAccordion from './MainAccordion'
import MainFooter from './MainFooter'
import { useState } from 'react'

function Main() {
 const [searchTerm, setSearchTerm] = useState('')
 return (
  <div>
   <MainHeader />
   <SearchForm setSearchTerm={setSearchTerm} />
   <MainAccordion />
   <MainFooter />
  </div>
 )
}

export default Main
