/* eslint-disable react/react-in-jsx-scope */
import { createContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { routes } from 'src/constants/routes'

import Loader from 'src/components/Loader'

import PropTypes from 'prop-types'
import { parseCookies } from 'nookies'

import { useQuery } from '@tanstack/react-query'
import { getUserInfo } from 'src/services/users.services'

import { ACCESS_TOKEN } from "src/constants";

// ----------------------------------------------------------------------
// This is the required context for authentication (with react-query) - change this based on the project's needs
// Remove this if the project does not require authentication

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false)
	const [isRouting, setIsRouting] = useState(false)
	const [unAuthorized, setUnAuthorized] = useState(false)

	const { isReady, pathname, replace } = useRouter()

	const {
		data: userInfo,
		refetch: fetchUserInfo,
		isLoading: isFirstLoading,
	} = useQuery({
		queryKey: ['userInfo'],
		queryFn: getUserInfo,
		enabled: false,
	})

	// Runs on first load
	useEffect(() => {
		if (isReady) {
			// Check if the tokens are available
			const cookies = parseCookies()
			let token = cookies[ACCESS_TOKEN]
			if (!token) {
				// Redirect to the login page on private pages
				if (Object.values({ ...routes.private, ...routes.admin }).includes(pathname)) {
					replace(routes.auth.login).then(() => setIsAuthenticated(true))
					return
				}
				setIsAuthenticated(true)
				return
			}
			// Fetch the user info if the tokens are valid
			fetchUserInfo().then((res) => handleRoutes(res.user))
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isReady])

	// Runs on every route change
	useEffect(() => {
		if (isReady) {
			// This condition is only happens when there are some GSSR requests or somehow the store cache clears
			if (!userInfo) {
				const cookies = parseCookies()
				let token = cookies[ACCESS_TOKEN]
				if (token) {
					fetchUserInfo()
				}
			}
			handleRoutes(userInfo, true)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isReady, userInfo, pathname])

	const handleRoutes = (user, isAuth) => {
		if (user) {
			// Close access to auth pages if the user is already authenticated
			if (Object.values(routes.auth).includes(pathname)) {
				if (isAuth) {
					setIsRouting(true)
				}
				replace(routes.public.home).then(() => {
					setIsRouting(false)
					setIsAuthenticated(true)
				})
				return
			}
			setIsAuthenticated(true)

			// Check user accesses based on his role
			const { role } = user // ['user', 'admin']
			if (Object.values(routes.admin).includes(pathname) && role === 'user') {
				setUnAuthorized(true)
			} else {
				setUnAuthorized(false)
			}
		} else {
			if (Object.values({ ...routes.private, ...routes.admin }).includes(pathname)) {
				if (isAuth) {
					setIsRouting(true)
				}
				replace(routes.auth.login).then(() => {
					setIsRouting(false)
					setIsAuthenticated(true)
				})
				return
			}
			setIsAuthenticated(true)
		}
	}

	// Loading screen
	if (!isReady || isRouting || isFirstLoading || !isAuthenticated) {
		return (
			<div className='flex h-screen w-screen items-center justify-center'>
				<Loader />
			</div>
		)
	}

	// Unauthorized screen
	if (unAuthorized) {
		return (
			<div className='flex h-screen w-screen items-center justify-center'>
				<h5 className='fw-bold'>You does not have the right access for this page !</h5>
			</div>
		)
	}

	// If the user is authenticated and authorized
	return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
	children: PropTypes.node,
}
