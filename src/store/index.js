import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    }
})

const initialProfileState = { isProfile: false};

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfileState,
    reducers: {
        setProfile(state) {
            state.isProfile = true;
        },

    }
})


const store = configureStore({
    reducer: { auth: authSlice.reducer, profile: profileSlice.reducer},
});


export const authActions = authSlice.actions;
export const profileActions = profileSlice.actions;

export default store;

