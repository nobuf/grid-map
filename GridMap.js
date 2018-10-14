
class GridMap {
  constructor(container, x, y, data, valueKey) {
    this.container = container
      .selectAll('rect')
      .data(data)
      .enter().append('g')
        .attr('data-id', (d) => d.id)
        .attr('transform', (d) => `translate(${x(d.x)},${y(d.y)})`);
    this.x = x;
    this.y = y;
    this.valueKey = valueKey;
    this.color = () => 'lightgray';
    this.titleColor = () => 'black';
  }

  setColor(color) {
    this.color = color;

    return this;
  }

  setTitleColor(titleColor) {
    this.titleColor = titleColor;

    return this;
  }

  renderMap() {
    this.container.append('rect')
      .attr('width', (d) => this.x(d.width))
      .attr('height', (d) => this.y(d.height))
      .attr('fill', (d) => this.color(d[this.valueKey]));

    return this;
  }

  setTitleKey(titleKey) {
    this.titleKey = titleKey;

    return this;
  }

  renderTitles() {
    this.container.append('svg')
      .attr('class', 'title')
      .attr('width', (d) => this.x(d.width))
      .attr('height', (d) => this.y(d.height))
      .append('text')
        .attr('x', '50%')
        .attr('y', '55%')
        .attr('alignment-baseline', 'middle')
        .attr('text-anchor', 'middle')
        .attr('fill', (d) => this.titleColor(d[this.valueKey]))
        .text((d) => d[this.titleKey]);

    return this;
  }
}
