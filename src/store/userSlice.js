// redux
import { createSlice } from '@reduxjs/toolkit'

// 1.
const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {

        }
    },
    reducers: {
        loggedUserAction: (state, action) => {
            // console.log(action.payload)
            
            // {user: 'xxx', token = 'yyy'}
            state.user = action.payload;

            localStorage.setItem('redux_user', JSON.stringify(action.payload))
        },
        restoreUserAction: (state, action) => {
            // console.log(action.payload);
            
            state.user = action.payload;
        },
        logoutUserAction: (state, action) => {
            console.log(action.payload);
            
            state.user = {}
            localStorage.removeItem('redux_user')
        }
    }
})

export const { loggedUserAction, restoreUserAction, logoutUserAction } = userSlice.actions;
export default userSlice.reducer;