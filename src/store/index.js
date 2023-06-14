import { configureStore } from "@reduxjs/toolkit";

import chatroomReducer from "./features/chatroom";

export const store = configureStore({
    reducer: {
        chatroom: chatroomReducer,
    },
});
