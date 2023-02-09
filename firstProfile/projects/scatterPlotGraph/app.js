const height = 600
const width = 980
const svg = d3
        .select('body')
        .append('svg')
        .attr('height', `${height}px`)
        .attr('width', `${width}px`)

const render = (arr) => {
        // console.log(arr)
        const xData = (d) => d.Year - 1
        // console.log(xData)
        const yData = (d) => d.Time
        // console.log(yData)
        const sourceData =
                'Source Data: "http://www.cyclingnews.com/news/doping-allegations/"';
 
        const formatter = "%M:%S"//User Story 9
        const timeArr = arr.map((d) => d3.timeParse(formatter)(d.Time))//User Story 9
        const plotRadius = 5;
        const margin = {
                left: 100,
                top: 50,
                right: 50,
                bottom: 50
        };
        const graphHeight = height - (margin.top + margin.bottom)
        const graphWidth = width - (margin.left + margin.right)
        // console.log(graphWidth, graphHeight)
        const xScale = d3
                .scaleTime()
                .domain(d3.extent(arr, xData))
                .range([0, graphWidth])
                .nice()
        const yScale = d3
                .scaleTime()
                .domain(d3.extent(timeArr))
                .range([0, graphHeight])
        // .nice()
        console.log('time', timeArr)
        const mainGraph = d3
                .select('svg')
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.bottom})`)
        const xAxis = d3.axisBottom(xScale).tickPadding(15)//user 10 & 11
        // console.log(xAxis)
        const yAxis = d3.axisLeft(yScale).tickFormat((d) => d3.timeFormat(formatter)(d));
        mainGraph.append('g')
                .call(xAxis)
                .attr('id', 'x-axis')
                .attr('transform', `translate(0,${graphHeight})`)
                .attr("class", "tick")
                .attr("id", "x-axis") // User Story #2

        mainGraph.append('g')
                .call(yAxis)
                .attr('id', 'y-axis')// User Story 3
                .attr("class", "tick")
                .append("text")

        mainGraph
                .selectAll("circle")
                .data(arr)
                .enter()
                .append("circle")
                .attr("class", (d) => (!d.Doping ? "noDope-Dot" : "Dope-Dot")) // User Story #4
                .attr("data-xvalue", (d) => xData(d)) // User Story #5 & #6 & #7
                .attr("data-yvalue", (d) => yData(d)) // User Story #5 & #6 & #8
                .attr("cx", (d) => xScale(xData(d)))
                .attr("cy", (d) => yScale(d3.timeParse(formatter)(d.Time)))
                // .attr("r", 110)
                .attr("r", plotRadius)
                .append("title")
                .attr("id", "tooltip") // User Story #14
                .text(
                        (d) =>
                                "Cyclist: " + d.Name + ",  Time: " + yData(d) + ",  Final Place: " + d.Place

                ); // User Story #15
        mainGraph.append("text")
                .attr("x", 230)
                .attr("y", -30)
                .attr("id", "title") // User Story #1
                .text("Doping in Professional Bicycling Racing")
                // .attr("id", "name")
        mainGraph.append("text")
                .attr("x", 330)
                .attr("y", -3)
                .text("35 Fastest Times up Alpe d'Huez")
                .attr("id", "subName")
        mainGraph.append("text")
                .attr("x", -135)
                .attr("y", -50)
                .text("Time in Minutes")
                .attr("id", "timeInMin")
        mainGraph.append("text")
                .attr("id", "legend")//User Story 13
                .attr("x", 695)
                .attr("y", 290)
                .text("No Doping Allegatons🟧")
                .att
        mainGraph.append("text")
                .attr("x", 640)
                .attr("y", 320)
                .text("Riders with Doping Allegatons🟦")
                .attr("id", "subLegend")
        // console.log(mainGraph)
}
fetch('./data/cyclist-data.json')
        .then(response => response.json())
        .then(item => {
                item.map(obj => {
                        const timeFormat = "%Y";
                        obj.Year = d3.timeParse(timeFormat)(obj.Year);
                })
                render(item)
                console.log(item)
        })