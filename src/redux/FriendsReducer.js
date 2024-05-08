import { createSlice } from '@reduxjs/toolkit'

function removeItemFromArray(arr, item) {
    // Find the index of the item in the array
    const index = arr.indexOf(item);
  
    // If the item is found, remove it from the array
    if (index!== -1) {
      arr.splice(index, 1);
    }
  
    // Return the modified array
    return arr;
  }
export const counterSlice = createSlice({
  name: 'friends',
  initialState: {
    friends: [],
    sentRequest: [],
    receivedRequest: [],
  },
  reducers: {
    
    updateFriendsDetails: (state, action) => {
      try{   
        console.log("reduced friend state" ,action.payload);
        if(action.payload.type === "sentRequest"){
            state.sentRequest = [...state.sentRequest,action.payload.toUser];
            
        }
        if(action.payload.type === "receivedRequest"){
            state.receivedRequest = [...state.receivedRequest,action.payload.fromUser];
            
        }
        if(action.payload.type === "removeReceivedRequest"){
            let newArr = removeItemFromArray(state,action.payload.fromUserId);
            state.receivedRequest = newArr;
            
        }
        if(action.payload.type === "friends"){
            state.friends = [...state.friends,action.payload.added];
        }
        if(action.payload.type === "loginData"){
            state.friends = action.payload.bulkFriendData.friends;
            state.receivedRequest = action.payload.bulkFriendData.receivedRequest;
            state.sentRequest = action.payload.bulkFriendData.sentRequest;
        }
      }catch(error){
        console.log("User reducer catched ",error)
        //return false;
      }
      //
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateFriendsDetails } = counterSlice.actions

export default counterSlice.reducer