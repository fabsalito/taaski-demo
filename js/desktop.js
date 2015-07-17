// var gridster;

// $(function(){ //DOM Ready
 	
//     gridster = $(".gridster ul").gridster({
//         widget_margins: [10, 10],
//         widget_base_dimensions: [140, 140]
//     }).data('gridster');

//     // resize widgets on hover
//     gridster.$el
//       .on('mouseenter', '> li', function() {
//           gridster.resize_widget($(this), 2, 2);
//           $(this).find("div.task-container-little").hide();
//           $(this).find("div.task-container-big").show();
//       })
//       .on('mouseleave', '> li', function() {
//           gridster.resize_widget($(this), 1, 1);
//           $(this).find("div.task-container-big").hide();
//           $(this).find("div.task-container-little").show();
//       });
 
// });

var fixtures = {};

fixtures.DEMO = [
  {w: 1, h: 1, x: 0, y: 0},
  {w: 1, h: 1, x: 0, y: 1},
  {w: 1, h: 1, x: 0, y: 2},
  {w: 1, h: 1, x: 1, y: 0},
  {w: 1, h: 1, x: 1, y: 1},
  {w: 1, h: 1, x: 1, y: 2},
  {w: 1, h: 1, x: 2, y: 0},
  {w: 1, h: 1, x: 2, y: 1},
  {w: 1, h: 1, x: 2, y: 2},
  {w: 1, h: 1, x: 3, y: 0},
  {w: 1, h: 1, x: 3, y: 1},
  {w: 1, h: 1, x: 3, y: 2},
  {w: 1, h: 1, x: 4, y: 0},
  {w: 1, h: 1, x: 4, y: 1},
  {w: 1, h: 1, x: 4, y: 2}
];

var DemoGrid = {
  currentSize: 3,
  buildElements: function($gridContainer, items) {
    var item, i;
    for (i = 0; i < items.length; i++) {
      item = items[i];
      $item = $(
        '<li>' +
          '<div class="inner">' +
            '<div class="controls">' +
              '<a href="#zoom1" class="resize" data-w="1" data-h="1">1x1</a>' +
              '<a href="#zoom2" class="resize" data-w="2" data-h="1">2x1</a>' +
              '<a href="#zoom3" class="resize" data-w="3" data-h="1">3x1</a>' +
              '<a href="#zoom1" class="resize" data-w="1" data-h="2">1x2</a>' +
              '<a href="#zoom2" class="resize" data-w="2" data-h="2">2x2</a>' +
            '</div>' +
            i +
          '</div>' +
        '</li>'
      );
      $item.attr({
        'data-w': item.w,
        'data-h': item.h,
        'data-x': item.x,
        'data-y': item.y
      });
      $gridContainer.append($item);
    }
  },
  resize: function(size) {
    if (size) {
      this.currentSize = size;
    }
    $('#grid').gridList('resize', this.currentSize * 2);
  },
  flashItems: function(items) {
    // Hack to flash changed items visually
    for (var i = 0; i < items.length; i++) {
      (function($element) {
        $element.addClass('changed')
        setTimeout(function() {
          $element.removeClass('changed');
        }, 0);
      })(items[i].$element);
    }
  }
};

$(window).resize(function() {
  DemoGrid.resize();
});

$(function() {
  DemoGrid.buildElements($('#grid'), fixtures.DEMO);

  $('#grid').gridList({
    rows: DemoGrid.currentSize,
    widthHeightRatio: 264 / 294,
    heightToFontSizeRatio: 0.25,
    onChange: function(changedItems) {
      DemoGrid.flashItems(changedItems);
    }
  });
  $('#grid li .resize').click(function(e) {
    e.preventDefault();
    var itemElement = $(e.currentTarget).closest('li'),
        itemWidth = $(e.currentTarget).data('w'),
        itemHeight = $(e.currentTarget).data('h');

    $('#grid').gridList('resizeItem', itemElement, {
      w: itemWidth,
      h: itemHeight
    });
  });
  $('.add-row').click(function(e) {
    e.preventDefault();
    DemoGrid.resize(DemoGrid.currentSize + 1);
  });
  $('.remove-row').click(function(e) {
    e.preventDefault();
    DemoGrid.resize(Math.max(1, DemoGrid.currentSize - 1));
  });
});