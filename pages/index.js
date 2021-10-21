import { Helmet } from 'react-helmet'

export function getServerSideProps() {
	return { props: {} }
}

export default function Home() {
	return (
		<div>
			<Helmet title="Hello next.js!" meta={[{ property: 'og:title', content: 'Home' }]} />
			<p>Hello World!</p>
			<p>
				Go to <a href="/about">about page</a>.
			</p>
		</div>
	)
}
