// https://observablehq.com/@mmattozzi/bubble-chart-gdp-by-country@228
export default function define(runtime, observer) {
  const main = runtime.module();
  main.variable(observer()).define(["md"], function(md){return(
md`# Bubble Chart: GDP by Country
*Source*: World Bank, http://api.worldbank.org/v2/en/indicator/NY.GDP.MKTP.CD?downloadformat=excel`
)});
  main.variable(observer("height")).define("height", function(){return(
500
)});
  main.variable(observer()).define(["chart","d3","transformToGenericObjectList","data"], function(chart,d3,transformToGenericObjectList,data){return(
chart(d3.hierarchy(transformToGenericObjectList(data))
      .sum(function(d) { return d.value; })
      .sort(function(a, b) { return b.value - a.value }))
)});
  main.variable(observer()).define(["d3","transformToGenericObjectList","data"], function(d3,transformToGenericObjectList,data){return(
d3.hierarchy(transformToGenericObjectList(data))
      .sum(function(d) { return d.value; })
      .sort(function(a, b) { a.group < b.group ? -1 : 1 })
)});
  main.variable(observer("chart")).define("chart", ["d3","DOM","width","height"], function(d3,DOM,width,height){return(
function chart(root) {
  const svg = d3.select(DOM.svg(width, height));

  var format = d3.format(",d"),
      color = d3.scaleOrdinal(d3.schemeSet3)

  var tooltip = d3.select("body").append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("color", "white")
    .style("padding", "8px")
    .style("background-color", "rgba(0, 0, 0, 0.75)")
    .style("border-radius", "6px")
    .style("font", "12px sans-serif")
    .text("tooltip");

  var bubble = d3.pack()
    .size([width, height])
    .padding(1.5);

  bubble(root);
  var node = svg.selectAll(".node")
      .data(root.children)
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });

  node.append("circle")
      .attr("r", function(d) { return d.r; })
      .style("fill", function(d) {
          return color(d.data.group);
      })
      .on("mouseover", function(d) {
          tooltip.text(d.data.name + ": " + format(d.value));
          tooltip.style("visibility", "visible");
          d3.select(this).style("stroke", "black");
      })
      .on("mousemove", function() {
          return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
      })
      .on("mouseout", function() {
        d3.select(this).style("stroke", "none");
        return tooltip.style("visibility", "hidden");
      });

  node.append("text")
      .attr("dy", ".3em")
      .style("text-anchor", "middle")
      .style("font", "10px sans-serif")
      .style("pointer-events", "none")
      .text(function(d) { return d.data.name.substring(0, d.r / 3); });

   return svg.node();
}
)});
  main.variable(observer("transformToGenericObjectList")).define("transformToGenericObjectList", function(){return(
function transformToGenericObjectList(flatData) {
  var container = {};
  container.children = [];
  var regionToCountry = {};
  flatData.forEach(entry => {
    if (entry["2016"] !== "") {
      container.children.push({group: entry["Region"], value: parseFloat(entry["2016"]), name: entry["Country Name"]});
    }
  });

  return container;
}
)});
  main.variable(observer("data")).define("data", ["d3"], function(d3){return(
d3.csv("https://raw.githubusercontent.com/geunhee-mit/scollytellingPage/master/data/bubble-chart-gdp-by-country_test/FLOOD_1_2.csv")
)});
//Data uploaded and worked: https://raw.githubusercontent.com/geunhee-mit/scollytellingPage/master/data/csv/Capital_Budget_final.csv
//Fake data to use: https://raw.githubusercontent.com/geunhee-mit/scollytellingPage/master/data/bubble-chart-gdp-by-country_test/FLOOD_1.csv

  main.variable(observer("d3")).define("d3", ["require"], function(require){return(
require("https://d3js.org/d3.v5.min.js")
)});
  return main;
}
