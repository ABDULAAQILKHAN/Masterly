import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    userId: '',
    name: '',
    uniqueId: '',
    mobile: 'Enter mobile number',
    altEmail: 'Enter alternate email',
    profileImage: '',
    profession: "Enter Your profession",
    token: null,
  },
  reducers: {
    updateUserDetails: (state, action) => {
      //console.log("reduced state",action.payload.user);
      state.name = action.payload.user.name;
      state.userId = action.payload.user._id;
      state.uniqueId = action.payload.user.uniqueId;
      state.mobile = action.payload.user?.mobile;
      state.altEmail = action.payload.user?.altEmail;
      state.profileImage = action.payload.user.profileImage;
      state.profession = action.payload.user.profession;
      state.token = action.payload.token;
      //return true;
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateUserDetails } = counterSlice.actions

export default counterSlice.reducer