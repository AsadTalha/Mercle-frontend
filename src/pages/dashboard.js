import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import engagementHelper from "../helperMethods/engagementHelpers";
import messageCountList from "../data/messageCount.json";
import channels from "../data/chanels.json";
import { fetchChatdata, stateChatroomMemo } from "../store/features/chatroom";

const EngagementMessagesOverTime = () => {
    //Variables
    const dispatch = useDispatch();
    const chatData = useSelector(stateChatroomMemo);

    //To fetch chatroom data
    useEffect(() => {
        dispatch(fetchChatdata());
    }, [dispatch]);

    //Checking if the data is available
    console.log("-----------chatData", chatData);
    const options = engagementHelper.engagementMessageOverTimeChartOptions(
        messageCountList,
        channels
    );

    return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default EngagementMessagesOverTime;
