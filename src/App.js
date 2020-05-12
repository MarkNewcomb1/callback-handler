import React, { useState } from 'react';
import { styled } from 'styletron-react';
import Search from './Search';
import List from './List';

const App = () => {

  const Div = styled('div', {
    textAlign: 'center',
  });

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  }

  const [searchTerm, setSearchTerm] = useState('');

  const stories = [
    {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
    },
    {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
    },
    ];

    const searchedStories = stories.filter(story =>
      story.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <Div>
      <h1>My Hacker Stories</h1>
      <Search onSearch={handleSearch} term={searchTerm} />

      <List list={searchedStories} />
    </Div>
  );
}

export default App;
