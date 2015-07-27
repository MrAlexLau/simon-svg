var initGame = function (domSelector) {
  var svg,
      yellowSquare,
      blueSquare,
      redSquare,
      greenSquare,
      gameOver = false,
      SQUARE_WIDTH = 40,
      GUTTER = 5,
      sequence = [],
      tilesClicked = 0,
      ANIMATION_DURATION = 500, // in milliseconds
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

  squares = svg.selectAll('rect.square')
      .data(colorData)
      .enter()
      .append('rect')
      .attr('class', function(d) { return "square square-" + d.id; })
      .attr('y', function(d) { return d.y; })
      .attr('x', function(d) { return d.x; })
      .attr('data-color-id', function(d) { return d.id; })
      .attr('width', function(d) { return d.width; })
      .attr('height', function(d) { return d.height; })
      .attr("stroke-width", '1')
      .attr("stroke", 'black')
      .style('fill', function(d) { return d.color; });

  var animateSquare = function (el, delay) {
    setTimeout(function () {
      if (!gameOver) {
        el.style('opacity', 0.5);
      }
    }, delay);

    setTimeout(function () {
      el.style('opacity', 1);
    }, delay + ANIMATION_DURATION);
  };


  var playSequence = function () {
    var squares = svg.selectAll('rect.square'),
        nextSquare = _.sample(squares[0]);
    sequence = sequence.concat(nextSquare);

    var timer = ANIMATION_DURATION;

    for(var i = 0; i < sequence.length; i++) {
      var el = d3.select(sequence[i]);
      animateSquare(el, timer);
      var TIME_BETWEEN_ANIMATIONS = 500;
      timer += (ANIMATION_DURATION + TIME_BETWEEN_ANIMATIONS);
    }
  };

  squares.on('click', function(squareData) {
    var el = d3.select(this);

    // clear out previous animations
    svg.selectAll('rect.square').style('opacity', 1);

    animateSquare(el, 0);
    tilesClicked += 1;

    sequenceComplete = (tilesClicked == sequence.length);

    // check if the tile clicked was the right one
    if (squareData.id !== $(sequence[tilesClicked - 1]).data('color-id')) {
      $('.game-over').show();
      $('.start-trigger').show();
      gameOver = true;
    }
    else if (sequenceComplete) {
      // animate the next sequence
      setTimeout(playSequence, ANIMATION_DURATION);
      tilesClicked = 0;
    }
  });

  $('.start-trigger').on('click', function() {
    $('.start-trigger').hide();
    sequence = [];
    tilesClicked = 0;
    gameOver = false;

    $('.game-over').hide();

    playSequence();
  });
};

