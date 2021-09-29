import MainHeader from './MainHeader'
import SearchForm from './SearchForm'
import MainFooter from './MainFooter'
import { useState } from 'react'

function Main() {
 const [searchTerm, setSearchTerm] = useState('')
 return (
  <div>
   <MainHeader />
   <SearchForm setSearchTerm={setSearchTerm} />
   <MainFooter />
  </div>
 )
}

export default Main
