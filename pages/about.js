import { Helmet } from 'react-helmet'

export default function About() {
	return (
		<div>
			<Helmet>
				<title>About | Hello next.js!</title>
				<meta property="og:title" content="About" />
				<link rel="stylesheet" href="/css/style.css" />
			</Helmet>			
			{/* <Helmet title="About | Hello next.js!" meta={[{ property: 'og:title', content: 'About' }]} /> */}
			<div>
				<h1>About the World</h1>
				<p>
					<a href="/">Go home</a>
				</p>
			</div>
		</div>
	)
}
