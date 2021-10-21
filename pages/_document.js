import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Helmet } from 'react-helmet'
import { isdev } from '../lib/isdev'

export default class MyDocument extends Document {
	static async getInitialProps(...args) {
		const documentProps = await super.getInitialProps(...args)
		// see https://github.com/nfl/react-helmet#server-usage for more information
		// 'head' was occupied by 'renderPage().head', we cannot use it
		return { ...documentProps, helmet: Helmet.renderStatic() }
	}

	// should render on <html>
	get helmetHtmlAttrComponents() {
		return this.props.helmet.htmlAttributes.toComponent()
	}

	// should render on <body>
	get helmetBodyAttrComponents() {
		return this.props.helmet.bodyAttributes.toComponent()
	}

	// should render on <head>
	get helmetHeadComponents() {
		// this.props.helmet['link'].push({})
		return Object.keys(this.props.helmet)
			.filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
			.map((el) => {
				return el
			})
			.map((el) => this.props.helmet[el].toComponent())
	}

	render() {
		if (isdev) {
			return (
				<Html {...this.helmetHtmlAttrComponents}>
					<Head>{this.helmetHeadComponents}</Head>
					<body {...this.helmetBodyAttrComponents}>
						<Main />
						<NextScript />
					</body>
				</Html>
			)
		} else {
			// Note that we’re using a basic lowercase <head> tag instead of importing NextJS’s <Head> tag, which would prevent NextJS from injecting all sorts of interesting stuff while still allowing us to customize head tag in any pages we create. Also we’re omitting the <NextScript />.
			return (
				<html {...this.helmetHtmlAttrComponents}>
					<head>{this.helmetHeadComponents}</head>
					<body {...this.helmetBodyAttrComponents}>
						<Main />
					</body>
				</html>
			)
		}
	}
}
