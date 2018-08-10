var data = Array.from({length: 8}, () => Math.floor(Math.random() * 40));

d3.select(".chart")
  .selectAll("div")
  .data(data)
    .enter()
    .append("div")
    .style("width", function(d) { return d * 4 + "px"; })
    .text(function(d) { return '$ ' + d; });
