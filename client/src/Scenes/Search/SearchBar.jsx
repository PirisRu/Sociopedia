import { useTheme } from '@emotion/react';
import { Search } from '@mui/icons-material';
import { IconButton, InputBase } from '@mui/material';
import FlexBetween from 'Components/FlexBetween';
import { useState } from 'react';

function SearchBar() {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([])
  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;

  const fetchData = (value) => {
    //fetch(`https://jsonplaceholder.typicode.com/users`)
    fetch('http://localhost:3001/users')
      .then((res) => res.json())
      .then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };
  return (
    <>
      <FlexBetween backgroundColor={neutralLight}>
        <InputBase
          placeholder="Search..."
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
        <IconButton id="search-icon">
          <Search />
        </IconButton>
        <div className='results-list'>
          {results.map((result,id) => {
            return <div key={id}>{result.name}</div>
          })}
        </div>
      </FlexBetween>
    </>
  );
}

export default SearchBar;
