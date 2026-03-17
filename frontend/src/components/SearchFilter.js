import React from 'react';

const categories = ['All', 'Beach', 'Mountain', 'City', 'Heritage', 'Nature', 'Adventure'];
const regions    = ['All', 'Asia', 'Europe', 'Americas', 'Africa', 'Oceania', 'Middle East'];
const sortOptions = [
  { value: 'rating', label: 'Sort by Rating' },
  { value: 'name',   label: 'Sort by Name' },
];

function SearchFilter({ search, setSearch, onSearch, category, setCategory, region, setRegion, sortBy, setSortBy }) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onSearch();
  };

  return (
    <div className="search-filter">
      <div className="search-input-wrapper">
        <input
          type="text"
          placeholder="Search by name or country..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="search-icon-btn" onClick={onSearch} title="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
        </button>
      </div>
      <select value={category} onChange={e => setCategory(e.target.value)}>
        {categories.map(c => <option key={c}>{c}</option>)}
      </select>
      <select value={region} onChange={e => setRegion(e.target.value)}>
        {regions.map(r => <option key={r}>{r}</option>)}
      </select>
      <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
        {sortOptions.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
    </div>
  );
}

export default SearchFilter;
