$(document).ready(() => {
  const cont = d3.select("#my-container");

  cont.append("div").attr("id", "not-red-square");

  cont
    .data([1])
    .enter()
    .append("div")
    .attr("id", "not-red-square");

  cont
    .data([...Array(100).keys()])
    .enter()
    .append("div")
    .attr("class", "red-square")
    .text(n => n)
    .style({
      left: n => `${(n % 10 + 1) * 34 + 100}px`,
      top: n => `${(Math.floor(n / 10) + 1) * 34 + 100}px`
    });
});
