import { createSlice } from '@reduxjs/toolkit'


export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    userId: '',
    name: '',
    uniqueId: '',
    mobile: '',
    altEmail: '',
    profileImage: '',
    profession: '',
    friends: [],
    sentRequest: [],
    receivedRequest: [],
    token: null,
    loginState: false,
  },
  reducers: {
    updateUserDetails: (state, action) => {
      try{   
        console.log("reduced state" ,action.payload.user);
        state.name = action.payload.user.name;
        state.userId = action.payload.user._id;
        state.friends = action.payload.user.friends;
        state.sentRequest = action.payload.user.sentRequest;
        state.receivedRequest = action.payload.user.receivedRequest;
        state.uniqueId = action.payload.user.uniqueId;
        state.mobile = action.payload.user?.mobile;
        state.altEmail = action.payload.user?.altEmail;
        state.profileImage = action.payload.user.profileImage;
        state.profession = action.payload.user.profession;
        state.token = action.payload.token;
      }catch(error){
        console.log("User reducer catched ",error)
      }
      //return true;
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateUserDetails } = counterSlice.actions

export default counterSlice.reducer