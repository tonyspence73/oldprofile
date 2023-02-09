// console.log(topojson)
const h = 800
const w = 1100

let padding = { top: 100, left: 40, bottom: 40, right: 40 }
let mapData
let educationData

let path = {
    path1: "./data/counties.json",
    path2: "./data/user-education.json"
}// set two paths, one for each json



const svg = d3.select('body')
    .append('svg')
    .attr('height', `${h}px`)
    .attr('width', `${w}px`)// set the size for my svg

const drawMap = () => {

    const counties = topojson.feature(mapData, mapData.objects.counties);
console.log(counties)
    counties.features.forEach(item => {

        educationData.forEach(data => {
            // console.log(data)
            if (item.id == data.fips) {
                item.percent = data.bachelorsOrHigher
                item.name = data.area_name
            }
        })
    })// this is a function that uses two for 



    console.log(counties.features)





    const pathGenerator = d3.geoPath()
    const g = svg.append("g")
        .attr("transform", `translate(${padding.left},${padding.top})`)
    // let graphWidth = 
    for (let i = 0, num = 3; i < 9; i++ , num += 9) {
        let height = 70
        d3.select("svg")
            .append("rect")
            .attr("height", height)
            .attr("width", 25)
            .attr("x", w - 50)
            .attr("y", height * i)
            .attr("stroke", "black")
            .attr('fill', (i === 8 ? "rgb(0,51,0"
                : i == 7 ? "darkgreen"
                    : i == 6 ? "#00b300"
                        : i == 5 ? "rgb(51,204,51"
                            : i == 4 ? "rgb(102,255,153"
                                : i == 3 ? "#99ff99"
                                    : i == 2 ? "#ccffcc"
                                        : i == 1 ? "#e6ffe6"
                                            : i == 0 ? "white"
                                                : null))
        d3.select("svg")
            .append("text")
            .attr("x", 1015)
            .attr('y', 78 + (i * height))
            .text(num + "%")



    }

    d3.select("svg")
        .append("text")
        .attr("x", 130)
        .attr("y", 50)
        .text("United States Educational Attainment")
        .attr("font-size", "50px")
        .style("text-shadow", "2px 2px 2px white")
        .style("font-color", "rgb(4, 38, 83")
    d3.select("svg")
        .append("text")
        .attr("x", 220)
        .attr("y", 80)
        .text("Percentage of adults age 25 or older with a bachelor degree or higher(2010-2014)")





    // console.log(states)
    g.selectAll("path")
        .data(counties.features)
        .enter()
        .append("path")
        .attr("d", pathGenerator)
        // .attr("fill", "white")
        .attr("stroke", "black")
        .attr("class", "states")


        .attr("fill", (d) => {
            //  console.log(d.percent)
            return d.percent < 3 ? 'white' :
                d.percent < 12 ? "#e6ffe6" :
                    d.percent < 21 ? "#ccffcc" :
                        d.percent < 39 ? "#99ff99" :
                            d.percent < 48 ? "rgb(102,255,153" :
                                d.percent < 57 ? "rgb(51,204,51" :
                                    d.percent < 66 ? "#00b300" :
                                        d.percent < 75 ? "darkgreen" : null

        })
        .append("title")
        .attr("id", "tooltip")
        .text((d) => `Name: ${d.name}, ${d.percent}%`)


}


for (let paths of Object.values(path)) {

    fetch(paths)

        .then(response => response.json())
        .then(item => {
            // console.log(item)
            if (!educationData) {
                educationData = item
            } else {
                mapData = item

            }

        })

    setTimeout(() => drawMap(), 1000)
}


