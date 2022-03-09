import React from 'react';
import BSPagination from 'react-bootstrap/Pagination';

function Pagination({ postsPerPage, totalPosts }) {
	const active = 1;
	const items = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
		items.push(
			<BSPagination.Item key={i} active={i === active}>
				{i}
			</BSPagination.Item>
		);
	}

	return <BSPagination>{items}</BSPagination>;
}

export default Pagination;
