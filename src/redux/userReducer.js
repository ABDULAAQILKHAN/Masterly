import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    userId: '',
    name: '',
    uniqueId: '',
    token: null,
  },
  reducers: {
    updateUserDetails: (state, action) => {
      console.log(action.payload.user,action.payload.token);
      state.name = action.payload.user.name;
      state.userId = action.payload.user._id;
      state.uniqueId = action.payload.user.uniqueId;
      state.token = action.payload.token;
      //return true;
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateUserDetails } = counterSlice.actions

export default counterSlice.reducer