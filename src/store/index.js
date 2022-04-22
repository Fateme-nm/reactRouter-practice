import {configureStore} from '@reduxjs/toolkit'
import userReduser from './userSlice'

export const store = configureStore({
    devTools: true,
    reducer: {
        user: userReduser
    },
})