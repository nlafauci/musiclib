import { useEffect, useState, Suspense } from 'react'
import Gallery from './components/Gallery';
import SearchBar from './components/SearchBar';
import { createResource as fetchData } from './helper';


function App() {
  let [message, setMessage] = useState('Seach for music')
  let [search, setSearch] = useState('')
  let [data, setData] = useState(null)
  const API_URL = 'https://itunes.apple.com/search?term='

  useEffect(() => {
    if (searchTerm) {
        setData(fetchData(searchTerm))
    }
}, [searchTerm])

  const handleSearch = (e, term) => {
    e.preventDefault();
    setSearch(term)
  }
  const renderGallery = () => {
    if(data){
        return (
            <Suspense fallback={<h1>Loading...</h1>} />
                <Gallery data={data} />
            </Suspense>
        )
    }
}
  return (
    <div className="App">
        <SearchBar handleSearch={handleSearch} />
        {message}
        {renderGallery()}
    </div>
)


}
export default App;
