var data = [30, 86, 168, 281, 303, 365];

const renderBarGraph = () => {
  return d3.select(".chart")
    .selectAll("div")
    .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return d; });
}

const BarGraphModule = {
  renderBarGraph
}

export default BarGraphModule;
