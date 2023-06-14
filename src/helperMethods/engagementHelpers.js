import highChartUIConfig from "../config/highChartUI";
function engagementMessageOverTimeChartOptions() {
    const data = [
        [1686498202, 6],
        [1683819776, 4],
        [1681227776, 3],
        [1678549376, 1],
        [1676130176, 3],
        [1673451776, 4],
    ];
    const options = highChartUIConfig(data);
    return options;
}

function otherMethod() {
    console.log("hello");
}
const engagementHelper = {
    otherMethod,
    engagementMessageOverTimeChartOptions,
};

export default engagementHelper;
