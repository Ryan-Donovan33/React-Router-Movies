import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Movie from './Movies/Movie';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

const App = () => {
	const [ savedList, setSavedList ] = useState([]);

	const addToSavedList = (movie) => {
		setSavedList([ ...savedList, movie ]);
	};

	return (
		<div>
			<SavedList list={savedList} />

			<Link exact path="/">
				Home
			</Link>

			<Link path="/movies-list">Movie List</Link>

			<Route exact path="/" component={MovieList} />
			<Route path="/movies/:id" component={Movie} />
		</div>
	);
};

export default App;
