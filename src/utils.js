import * as d3 from "d3";
const constructHeatmap = (data, domId, toColor = "#4eff03") => {
  // set the dimensions and margins of the graph
  var margin = { top: 30, right: 30, bottom: 30, left: 30 },
    width = 450 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

  // append the svg object to the body of the page
  var svg = d3
    .select(`#${domId}`)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Labels of row and columns
  var columns = data.map((i, index) => `${index}`);
  var rows = data[0].map((i, index) => `${index}`);

  // Build X scales and axis:
  var x = d3.scaleBand().range([0, width]).domain(columns).padding(0.01);
  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Build X scales and axis:
  var y = d3.scaleBand().range([height, 0]).domain(rows).padding(0.01);
  svg.append("g").call(d3.axisLeft(y));

  // Build color scale
  var myColor = d3.scaleLinear().range(["white", toColor]).domain([-100, 100]);

  //Read the data

  const finalHeatmapData = [];

  data.forEach((column, columnIndex) => {
    column.forEach((item, rowIndex) =>
      finalHeatmapData.push({ column: columnIndex, row: rowIndex, data: item })
    );
  });

  svg
    .selectAll()
    .data(finalHeatmapData)
    .enter()
    .append("rect")
    .attr("x", function (d) {
      return x(d.column);
    })
    .attr("y", function (d) {
      return y(d.row);
    })
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth())
    .style("fill", function (d) {
      return myColor(d.data);
    });
};


export default { constructHeatmap };
