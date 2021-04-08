import { Fragment } from 'react';

import FeaturedPosts from '../components/home-page/featured-posts';
import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../lib/posts-util';
import Head from 'next/head';

function HomePage(props) {
	console.log(props);
	return (
		<Fragment>
			<Head>
				<title>Welcome to my blog</title>
				<meta name="description" content="I post about srinaths blog" />
			</Head>
			<Hero />
			<FeaturedPosts posts={props.posts} />
		</Fragment>
	);
}

export function getStaticProps() {
	const featuredPosts = getFeaturedPosts();
	console.log(featuredPosts);

	return {
		props: {
			posts: featuredPosts
		}
	};
}

export default HomePage;
