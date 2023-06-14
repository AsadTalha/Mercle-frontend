import Highcharts from "highcharts";

function formatTooltip(
    tooltip,
    y = this.y,
    series = this.series,
    x = this.x,
    points = this.points
) {
    return `
    <b>
      ${series.name}
    </b>
    <br/>
    ${y} message on </n>${Highcharts.dateFormat("%e %b", new Date(this.x))}
    `;
}

const highChartUIConfig = (data) => {
    return {
        chart: {
            //backgroundColor of the entire chart
            backgroundColor: "#22222c",
        },
        //Represents title of the chart, in this case we've disabled it
        title: {
            text: "",
        },
        //Represents sub-title of the chart, in this case we've disabled it
        subtitle: {},
        xAxis: {
            tickColor: "#fff",
            lineColor: "#fff",
            labels: {
                format: "{value:%e %b}",
                style: {
                    fontFamily: "monospace",
                    color: "#fff",
                },
            },
        },
        legend: {
            style: {
                fontFamily: "monospace",
                color: "#fff",
            },
            itemStyle: {
                color: "#FFF",
            },
            backgroundColor: "#000",
        },
        yAxis: {
            //Removes grid line associated with value
            gridLineWidth: 0,
            //Represents the width of the marker after the value range
            tickWidth: 1,
            tickColor: "#fff",
            labels: {
                style: {
                    fontFamily: "monospace",
                    color: "#fff",
                },
            },
            title: {
                text: "",
            },
        },
        tooltip: {
            //Takes a function that returns the markup with
            formatter: formatTooltip,
            backgroundColor: "#000",
            style: {
                color: "#fff",
            },
        },

        series: [
            {
                type: "spline",
                name: "general",
                //Changes color of the plot point
                //color: "#fff",
                marker: { enabled: false },
                data: data,
            },
        ],
    };
};

export default highChartUIConfig;
