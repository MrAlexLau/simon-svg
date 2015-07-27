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
      },
      colorData = [
        {
          color: 'yellow',
          id: 'yellow',
          x: 0,
          y: 0,
          width: SQUARE_WIDTH,
          height: SQUARE_WIDTH,
        },
        {
          color: 'blue',
          id: 'blue',
          x: SQUARE_WIDTH + GUTTER,
          y: 0,
          width: SQUARE_WIDTH,
          height: SQUARE_WIDTH,
        },
        {
          color: 'red',
          id: 'red',
          x: 0,
          y: SQUARE_WIDTH + GUTTER,
          width: SQUARE_WIDTH,
          height: SQUARE_WIDTH,
        },
        {
          color: 'green',
          id: 'green',
          x: SQUARE_WIDTH + GUTTER,
          y: SQUARE_WIDTH + GUTTER,
          width: SQUARE_WIDTH,
          height: SQUARE_WIDTH,
        }
      ];

  svg = d3.select(domSelector)
    .append('svg')
    .attr('height', options.outerRadius * 2)
    .attr('width', options.outerRadius * 2);

  squares = svg.selectAll('rect.color')
      .data(colorData)
      .enter()
      .append('rect')
      .attr('y', function(d) { return d.y; })
      .attr('x', function(d) { return d.x; })
      .attr('data-color', function(d) { return d.id; })
      .attr('width', function(d) { return d.width; })
      .attr('height', function(d) { return d.height; })
      .attr("stroke-width", '1')
      .attr("stroke", 'black')
      .style('fill', function(d) { return d.color; });

  squares.on('click', function(squareData) {
    console.log(squareData.id);
  });

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

