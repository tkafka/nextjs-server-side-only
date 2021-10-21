import { Helmet } from 'react-helmet'

export default function About() {
	return (
		<div>
			<Helmet title="About | Hello next.js!" meta={[{ property: 'og:title', content: 'About' }]} />
			<div>
				<p>
					<a href="/">Go home</a>
				</p>
				<p>About the World</p>
			</div>
		</div>
	)
}
