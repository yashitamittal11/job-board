import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { addUserToLocalStorage, getUserFromLocalStorage, removeUserFromLocalStorage } from '../../utils/localStorage';

const initialState = {
    isLoading: false,
    isSidebarOpen: false,
    user: getUserFromLocalStorage(),
};

const registerUser = createAsyncThunk( 
    'user/registerUser', 
    async( user, thunkAPI ) => {
        try {
            const resp = await customFetch.post ('/auth/register', user );
            return resp.data;
        }
        catch( error) {
            return thunkAPI.rejectWithValue( error.response.data.msg );
        }
} );

const loginUser = createAsyncThunk( 
    'user/loginUser', 
    async( user, thunkAPI ) => {
        try {
            const resp = await customFetch.post ('/auth/login', user );
            return resp.data;
        }
        catch( error) {
            return thunkAPI.rejectWithValue( error.response.data.msg );
        }
} );

const userSlice = createSlice( {
    name: 'user',
    initialState,
    reducers: {
        toggleSidebar: ( state ) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        logoutUser: ( state ) => {
            state.user = null;
            state.isSidebarOpen = false;
            removeUserFromLocalStorage();
        }
    },
    extraReducers: {
        [ registerUser.pending ]: ( state ) => {
            state.isLoading = true;
        },
        [ registerUser.fulfilled ]: ( state, { payload } ) => {
            state.isLoading = false;
            const { user } = payload;
            state.user = user;
            addUserToLocalStorage( user );
            toast.success( `Hello there ${user.name}` );
        },
        [ registerUser.rejected ]: ( state, { payload } ) => {
            state.isLoading = false;
            toast.error( payload );
        },
        [ loginUser.pending ]: ( state ) => {
            state.isLoading = true;
        },
        [ loginUser.fulfilled ]: ( state, { payload } ) => {
            state.isLoading = false;
            const { user } = payload;
            state.user = user;
            addUserToLocalStorage( user );
            toast.success( `Welcome Back ${user.name}` );
        },
        [ loginUser.rejected ]: ( state, { payload } ) => {
            state.isLoading = false;
            toast.error( payload );
        }
    },
} );

export const { toggleSidebar, logoutUser } = userSlice.actions;
export default userSlice.reducer;
//Exporting the named exports
export { registerUser, loginUser };
