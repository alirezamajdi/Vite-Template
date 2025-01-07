// Keep all the helper functions throughout the app here

export const timeFormater = (value) => {
	const hour = new Date(value).getHours().toString().padStart(2, 0)
	const min = new Date(value).getMinutes().toString().padStart(2, 0)
	const sec = new Date(value).getSeconds().toString().padStart(2, 0)
	return `${hour}:${min}:${sec}`
}

export const parseJwt = (token) => {
	const base64Url = token.split('.')[1]
	const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
	const jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
			})
			.join('')
	)

	return JSON.parse(jsonPayload)
}
