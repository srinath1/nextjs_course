import React from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../lib/posts-util';
import { Fragment } from 'react';
import Head from 'next/head';

const AllPostsPage = (props) => {
	return (
		<Fragment>
			<Head>
				<title>All Posts</title>
				<meta name="description" content="A list of all programming tutorials" />
			</Head>
			<AllPosts posts={props.posts} />
		</Fragment>
	);
};
export function getStaticProps() {
	const allPosts = getAllPosts();
	return {
		props: {
			posts: allPosts
		}
	};
}
export default AllPostsPage;
