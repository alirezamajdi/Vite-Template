import { useEffect, useState } from 'react'

const getWindowWidth = () => {
	if (typeof window !== 'undefined') {
		return window.innerWidth
	}
}

export const useWidth = () => {
	const [width, setWidth] = useState(getWindowWidth())

	useEffect(() => {
		const handleResize = () => {
			setWidth(getWindowWidth())
		}
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return width
}
