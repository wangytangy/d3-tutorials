var data = [30, 86, 168, 281, 303, 365];

const renderBarGraph = () => {
  return d3.select(".fixed-scale") // select graph container

    // selects the bars that WILL appear
    .selectAll("div")

    // join the data to the selected bars
    .data(data)

  // since bar elements don't exist, we need to call enter which represents new data
  .enter().append("div")

    // set styles and inner text for bar div's
    .style("width", function(d) { return d + "px"; })
    .text(function(d) { return d; });
}

const scale = d3.scaleLinear()
.domain([0, d3.max(data)])
.range([0, 300])

const renderLinearScaleBarGraph = () => {
  return d3.select(".linear-scale")
    .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return scale(d) + "px"; })
    .style('padding', 0)
    .style('margin', '1px 0 1px 0')
    .text(function(d) { return d; });
}

const BarGraphModule = {
  renderBarGraph,
  renderLinearScaleBarGraph
}

export default BarGraphModule;
