import React from 'react';

// search Form
function SearchForm(props) {
	// destructure the props
	const { handleSubmit, handleChange, searchString } = props;

	// show the Form and set values on submit
	return (
		<form onSubmit={handleSubmit}>
			<input
				placeholder='Search'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
				className='search-input'
			/>
			<button type='submit'>Search</button>
		</form>
	);
}

export default SearchForm;
