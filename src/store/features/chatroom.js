import {
    createSlice,
    createAsyncThunk,
    createSelector,
} from "@reduxjs/toolkit";

import messageCountList from "../../data/messageCount.json";
import channels from "../../data/chanels.json";

//Action
export const fetchChatdata = createAsyncThunk("fetchTracker", async (a, b) => {
    const result = { messageCountList, channels };
    return result;
});

//Initial state
const initialState = {
    isLoading: false,
    data: null,
    isError: false,
};

//Helper function
const normalizeChatData = (data) => {
    const { channels, messageCountList } = data;
    const normalized = {};
    if (channels) {
        channels.forEach((element) => {
            normalized[element.id] = {
                id: element.id,
                createdTimestamp: element.createdTimestamp,
            };
        });
    }
    if (messageCountList) {
        messageCountList.forEach((element) => {
            if (normalized[element.channelId]) {
                normalized[element.id] = {
                    count: element.count,
                    timeBucket: element.timeBucket,
                };
            } else {
                console.log("missed", element.channelId);
            }
        });
    }
    // CHECKING IF THE CHANNEL ELEMENTS CORRESPOND TO MESSAGECOUNTLIST
    // const string = JSON.stringify(channels);
    // messageCountList.forEach((element) => {
    //     console.log(
    //         `Checking for ${element.channelId} presence:: ${string.includes(
    //             element.channelId
    //         )}`
    //     );
    // });
    return normalized;
};

//Reducer
const chatroomSlice = createSlice({
    name: "chatroom",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchChatdata.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchChatdata.fulfilled, (state, action) => {
            state.isLoading = false;
            const data = normalizeChatData(action.payload);
            state.data = data;
        });
        builder.addCase(fetchChatdata.rejected, (state, action) => {
            state.isError = true;
            console.log("error");
        });
    },
});

export const stateChatroom = (state) => {
    return state.chatroom;
};

export const stateChatroomMemo = createSelector([stateChatroom], (chatroom) => {
    return { ...chatroom };
});

export default chatroomSlice.reducer;
