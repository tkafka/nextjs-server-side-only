import { Helmet } from 'react-helmet'

export function getServerSideProps() {
	return { props: {} }
}

export default function Home() {
	return (
		<div>
			<Helmet>
				<title>Hello next.js!</title>
				<meta property="og:title" content="Home" />
				<link rel="stylesheet" href="/css/style.css" />
			</Helmet>
			{/* <Helmet title="Hello next.js!" meta={[{ property: 'og:title', content: 'Home' }]} link={[{ rel: 'stylesheet', href: '/public/css/style.less' }]} /> */}
			<h1>Hello World!</h1>
			<p>
				Go to <a href="/about">about page</a>.
			</p>
		</div>
	)
}
