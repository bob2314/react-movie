import React, { useState } from 'react'; // Import the 'useState' hook
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import SearchBar from './components/SearchBar';

function App() {
  const [query, setQuery] = useState("");

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <Router>
      <SearchBar onSearch={handleSearch} />
      <Routes>
        <Route path="/" exact component={MovieList} />
        <Route path="/movie/:id" component={MovieDetail} />
      </Routes>
    </Router>
  );
}

export default App;
