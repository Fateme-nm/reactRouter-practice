import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: 'fateme',
        password: '123'
    },
    reducers: {
        setUser: (state, action) => {
            return action.payload
        },
        logout: state => {
            return {}
        }
    },
})

export const {setUser, logout} = userSlice.actions
export default userSlice.reducer