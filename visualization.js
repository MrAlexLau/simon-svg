var drawCircles = function (domSelector) {
  var svg,
      whitespaceCircle,
      yellowSquare,
      blueSquare,
      redSquare,
      greenSquare,
      isLocked,
      SQUARE_WIDTH = 40,
      GUTTER = 5,
      options = {
        defaultColor: '#303030', // dark gray
        lockedColor: '#2BAD30', // green
        startingRadius: 15,
        outerRadius: 45,
      };

  svg = d3.select(domSelector)
    .append('svg')
    .attr('height', options.outerRadius * 2)
    .attr('width', options.outerRadius * 2);

  yellowSquare = svg.append('rect')
      .attr('y', 0)
      .attr('x', 0)
      .attr('width', SQUARE_WIDTH)
      .attr('height', SQUARE_WIDTH)
      .attr("stroke-width", '1')
      .attr("stroke", 'black')
      .style('fill', 'yellow');

  blueSquare = svg.append('rect')
      .attr('y', 0)
      .attr('x', SQUARE_WIDTH + GUTTER)
      .attr('width', SQUARE_WIDTH)
      .attr('height', SQUARE_WIDTH)
      .attr("stroke-width", '1')
      .attr("stroke", 'black')
      .style('fill', 'blue');

  redSquare = svg.append('rect')
      .attr('y', SQUARE_WIDTH + GUTTER)
      .attr('x', 0)
      .attr('width', SQUARE_WIDTH)
      .attr('height', SQUARE_WIDTH)
      .attr("stroke-width", '1')
      .attr("stroke", 'black')
      .style('fill', 'red');

  greenSquare = svg.append('rect')
      .attr('y', SQUARE_WIDTH + GUTTER)
      .attr('x', SQUARE_WIDTH + GUTTER)
      .attr('width', SQUARE_WIDTH)
      .attr('height', SQUARE_WIDTH)
      .attr("stroke-width", '1')
      .attr("stroke", 'black')
      .style('fill', 'green');

  // whitespaceCircle = svg.append('circle')
  //     .attr('class', 'locked-on-circle')
  //     .attr('cy', options.outerRadius)
  //     .attr('cx', options.outerRadius)
  //     .attr('r', options.outerRadius - 5)
  //     .style('fill', '#FFFFFF');

  // loadingCircle = svg.append('circle')
  //   .attr('r', options.startingRadius)
  //   .attr('cy', options.outerRadius)
  //   .attr('cx', options.outerRadius)
  //   .attr('fill', options.defaultColor);

  // svg.on('mouseenter', function () {
  //   if (isLocked) {
  //     return;
  //   }

  //   isLocked = false;

  //   loadingCircle
  //     .transition()
  //     .attr('fill', options.lockedColor)
  //     .attr('r', options.outerRadius - 10)
  //     .ease('back')
  //     .duration(1500)
  //     .each('end', function () {
  //       isLocked = true;

  //       outerCircle
  //         .style('fill', options.lockedColor);

  //       $('.notification').fadeIn(500);
  //     });

  //   loadingCircle
  //     .transition()
  //     .delay(1550)
  //     .attr('fill', options.lockedColor)
  //     .duration(10);
  // });

  // svg.on('mouseleave', function () {
  //   if (!isLocked) {
  //     isLocked = false;

  //     loadingCircle
  //       .transition()
  //       .attr('r', 15)
  //       .attr('fill', options.defaultColor);
  //   }
  // });

  // $('.reset').click(function () {
  //   isLocked = false;
  //   outerCircle
  //     .style('fill', options.defaultColor);

  //   loadingCircle
  //     .attr('r', 15)
  //     .attr('fill', options.defaultColor);

  //   $('.notification').hide();
  // });
};

