import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {},
    reducers: {
        setUser: (state, action) => {
            return action.payload
        },
        logout: state => {
            return {}
        },
        updateProfile: (state, action) => {
            return {...state, ...action.payload}
        }
    },
})

export const {setUser, logout} = userSlice.actions
export default userSlice.reducer