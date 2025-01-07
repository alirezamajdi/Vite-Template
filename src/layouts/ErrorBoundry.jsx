/* eslint-disable react/prop-types */
import React from 'react'

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props)
		this.state = { hasError: false }
	}
	static getDerivedStateFromError() {
		return { hasError: true }
	}
	componentDidCatch(error, errorInfo) {
		// eslint-disable-next-line no-console
		console.warn({ error, errorInfo })
	}
	render() {
		if (this.state.hasError) {
			return (
				<div className='container'>
					<div className='flex h-screen flex-col items-center text-center'>
						<h2 className='font-bold'>A Client Side Error has Occured</h2>
					</div>
				</div>
			)
		}

		return this.props.children
	}
}

export default ErrorBoundary
