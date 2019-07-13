var svg = d3.select("body")
  .append("svg")
  .attr("width", 200)
  .attr("height", 200);

svg.append('rect')
  .attr('x', 10)
  .attr('y', 10)
  .attr("width", 50)
  .attr("height", 100);