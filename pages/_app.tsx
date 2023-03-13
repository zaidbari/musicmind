import Layout from '@/layout'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import '../styles/globals.css'

export const reportWebVitals = (metric: NextWebVitalsMetric) => {
	console.log(metric)
}

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Layout.Navbar />
			<Component {...pageProps} />
			<Layout.Footer />
		</>
	)
}

export default App