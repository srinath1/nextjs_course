import classes from './all-posts.module.css';
import React from 'react';
import PostsGrid from './posts-grid';

const AllPosts = (props) => {
	return (
		<section>
			<h1>All POsts</h1>
			<PostsGrid posts={props.posts} />
		</section>
	);
};

export default AllPosts;
