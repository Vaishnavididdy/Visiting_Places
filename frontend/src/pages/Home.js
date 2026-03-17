import React, { useEffect, useState, useCallback } from 'react';
import SearchFilter from '../components/SearchFilter';
import PlaceCard from '../components/PlaceCard';

const API = 'http://localhost:8000';

function Home() {
  const [places, setPlaces]       = useState([]);
  const [search, setSearch]       = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [category, setCategory]   = useState('All');
  const [region, setRegion]       = useState('All');
  const [sortBy, setSortBy]       = useState('rating');
  const [loading, setLoading]     = useState(true);

  const fetchPlaces = useCallback(() => {
    const params = new URLSearchParams();
    if (appliedSearch) params.append('search', appliedSearch);
    if (category !== 'All') params.append('category', category);
    if (region !== 'All')   params.append('region', region);
    params.append('sort_by', sortBy);

    setLoading(true);
    fetch(`${API}/places?${params}`)
      .then(r => r.json())
      .then(d => { setPlaces(d); setLoading(false); })
      .catch(() => setLoading(false));
  }, [appliedSearch, category, region, sortBy]);

  useEffect(() => { fetchPlaces(); }, [fetchPlaces]);

  const handleSearch = () => setAppliedSearch(search);

  return (
    <div>
      <h1 className="page-title">Explore the World</h1>
      <p className="page-subtitle">Discover amazing destinations from around the globe</p>
      <SearchFilter
        search={search} setSearch={setSearch}
        onSearch={handleSearch}
        category={category} setCategory={setCategory}
        region={region} setRegion={setRegion}
        sortBy={sortBy} setSortBy={setSortBy}
      />
      <p className="results-count">{places.length} destinations found</p>
      {loading ? (
        <p>Loading...</p>
      ) : places.length === 0 ? (
        <p style={{color:'#888', marginTop:'20px'}}>No destinations found. Try a different search.</p>
      ) : (
        <div className="places-grid">
          {places.map(p => <PlaceCard key={p.id} place={p} />)}
        </div>
      )}
    </div>
  );
}

export default Home;