import React from 'react';

import './search-box.styles.css';

// Paramaeters of placeholder text and how you want to gray user data
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className='search'
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
)