const data = [30, 86, 168, 281, 303, 365];

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
};

const scale = (maxRange) => {
  return d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, maxRange])
};

const renderLinearScaleBarGraph = () => {
  const x = scale(300);
  return d3.select(".linear-scale")
    .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width", function(d) { return x(d) + "px"; })
    .style('padding', 0)
    .style('margin', '1px 0 1px 0')
    .text(function(d) { return d; });
};

const renderSVGBarGraph = () => {
  const width = 300;
  const barHeight = 20;
  const x = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, width]);

  const chart = d3.select('.svg-bar-graph')
                  .attr('width', width)
                  .attr('height', barHeight * data.length)

  const bar = chart.selectAll('g')
                  .data(data)
                  .enter()
                  .append('g')
                  .attr(
                    'transform',
                    function (d, i) {
                      return 'translate(0,' + i * barHeight + ')';
                  });

  bar.append('rect')
    .attr('width', x)
    .attr('height', barHeight - 1);

  bar.append('text')
    .attr('x', (d) => { return x(d) - 4; })
    .attr('y', (d) => { return (barHeight / 2) + 2; })
    .text((d) => { return d; })
};

const BarGraphModule = {
  renderBarGraph,
  renderLinearScaleBarGraph,
  renderSVGBarGraph
};

export default BarGraphModule;
