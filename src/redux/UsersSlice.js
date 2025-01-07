import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from 'src/utils/axios'
import { setCookie, destroyCookie } from 'nookies'

import { ACCESS_TOKEN,REFRESH_TOKEN } from 'src/constants'

export const loginUser = createAsyncThunk('loginUser', async (values, { rejectWithValue }) => {
	try {
		destroyCookie({}, ACCESS_TOKEN, { path: '/' })
		destroyCookie({}, REFRESH_TOKEN, { path: '/' })
		const { data } = await axiosInstance.post('/api/v1/users/login', values)
		setCookie(null, ACCESS_TOKEN, data?.access, {
			maxAge: 30 * 24 * 60 * 60,
			path: '/',
		})
		setCookie(null, REFRESH_TOKEN, data?.refresh, {
			maxAge: 30 * 24 * 60 * 60,
			path: '/',
		})
		return data
	} catch (err) {
		if (!err.response) {
			throw err
		}
		throw rejectWithValue(err.response.data)
	}
})

export const registerUser = createAsyncThunk(
	'registerUser',
	async (values, { rejectWithValue }) => {
		try {
			const { data } = await axiosInstance.post('/api/v1/users/register', values)
			return data
		} catch (err) {
			if (!err.response) {
				throw err
			}
			throw rejectWithValue(err.response.data)
		}
	}
)

export const getUserInfo = createAsyncThunk('getUserInfo', async (_, { rejectWithValue }) => {
	try {
		const { data } = await axiosInstance.get('/api/v1/users/current_user')
		return data
	} catch (err) {
		if (!err.response) {
			throw err
		}
		throw rejectWithValue(err.response.data)
	}
})

const UsersSlice = createSlice({
	name: 'users',
	initialState: {
		loading: false,
		userInfo: null,
	},
	reducers: {
		userLogout() {
			destroyCookie({}, ACCESS_TOKEN, { path: '/' })
			destroyCookie({}, REFRESH_TOKEN, { path: '/' })
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginUser.pending, (state) => {
				state.loading = true
			})
			.addCase(loginUser.fulfilled, (state) => {
				state.loading = false
			})
			.addCase(loginUser.rejected, (state) => {
				state.loading = false
			})

		// ---------------------------------------------------------------------

		builder
			.addCase(registerUser.pending, (state) => {
				state.loading = true
			})
			.addCase(registerUser.fulfilled, (state) => {
				state.loading = false
			})
			.addCase(registerUser.rejected, (state) => {
				state.loading = false
			})

		// ---------------------------------------------------------------------

		builder
			.addCase(getUserInfo.pending, (state) => {
				state.loading = true
			})
			.addCase(getUserInfo.fulfilled, (state, action) => {
				state.loading = false
				state.userInfo = action.payload.user
			})
			.addCase(getUserInfo.rejected, (state) => {
				state.loading = false
			})

		// ---------------------------------------------------------------------
	},
})

export const { userLogout } = UsersSlice.actions
export default UsersSlice.reducer
