import React from 'react';
import BSPagination from 'react-bootstrap/Pagination';

function Pagination({ recipesPerPage, totalRecipes, paginate, active }) {
	const items = [];

	for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++) {
		items.push(
			<span onClick={() => paginate(i)}>
				<BSPagination.Item key={i} active={i === active}>
					{i}
				</BSPagination.Item>
			</span>
		);
	}

	return <BSPagination>{items}</BSPagination>;
}

export default Pagination;
