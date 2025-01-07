import  { createContext, useState } from 'react'
import PropTypes from 'prop-types'

// ----------------------------------------------------------------------
// This is a sample context to demonstrate how to create a custom context.

export const CustomStatesContext = createContext({
	isAuthButtonClicked: false,
	setIsAuthButtonClicked: () => {},
})

export const CustomStatesProvider = ({ children }) => {
	const [isAuthButtonClicked, setIsAuthButtonClicked] = useState(false)

	return (
		<CustomStatesContext.Provider
			value={{
				isAuthButtonClicked,
				setIsAuthButtonClicked,
			}}
		>
			{children}
		</CustomStatesContext.Provider>
	)
}

CustomStatesProvider.propTypes = {
	children: PropTypes.node,
}
