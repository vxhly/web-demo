$(function() {
  allHome();
});

function allHome() {
  $('a').focus(function() {
    $(this).blur();
  });
  changeImages(5);
  $('#small_imgs a.item:first').find('div.img').addClass('active');
  var allimg = $('#small_imgs .img');
  var big_img = $('#big_img');
  var big_a = $('#big_a');
  var small_next = $('#small_next');
  var stop2 = false;
  allimg.mouseover(function() {
    if ($(this).hasClass('active')) return;
    allimg.removeClass('active');
    $(this).addClass('active');
    var img = $(this).attr('b');
    var link = $(this).attr('l');
    var theid = $(this).attr('theid');
    if (big_img.queue('fx').length != 0) {
      big_img.stop(true);
    }
    big_img.animate({
      'opacity': '0.2'
    }, 400, function() {
      big_img.css('background-image', 'url(' + img + ')');
      if (link == '') {
        big_a.attr('href', 'javascript:;').attr('onClick', "pgvSendClick({hottag:'HRTENCENT.HOME.BANNER.BANNER" + theid + "'});").addClass('cdefault');
      } else {
        big_a.attr('href', link).attr('onClick', "pgvSendClick({hottag:'HRTENCENT.HOME.BANNER.BANNER" + theid + "'});").removeClass('cdefault');
      }
      big_img.animate({
        'opacity': '1'
      }, 700);
    });
  });
  allimg.eq(0).removeClass('active');
  allimg.eq(0).mouseover();
  $('#home_banner').mouseover(function() {
    stop2 = true;
  }).mouseout(function() {
    stop2 = false;
  });

  var marquee2 = autoSwitchHomeBanner(allimg);
  MyMar2 = setInterval(marquee2, 6000);

  function autoSwitchHomeBanner(allimg) {
    return (function() {
      if (stop2) return;
      var index = 0;
      $('#small_imgs .img').each(function(i) {
        if ($(this).hasClass('active')) {
          index = i;
          return false;
        }
      });
      if (index >= 4) {
        small_next.click();
      }
      var next = $('#small_imgs .img.active:first').parent().next().find('.img');
      if (next.length == 0) {
        next = allimg.eq(0);
      }
      next.mouseover();
      stop2 = false;
    });
  }

}

function changeImages(allowl) {
  var itemall = $('#small_imgs .item');
  iteml = itemall.length;
  if (iteml <= allowl) {
    $('#small_pre,#small_next').css('background', 'none');
    return;
  }
  iteml = ((iteml - allowl) > allowl) ? allowl : (iteml - allowl);
  imagesSwitch33('#small_pre', '#small_next', itemall, 900, iteml);
}

function imagesSwitch33(left, right, items, movetime, num) {
  movetime = (parseInt(movetime)) ? movetime : 400;
  items.parent().css({
    position: 'relative',
    overflow: 'hidden'
  });
  items.parent().wrapInner('<div></div>');
  items.parent().css('position', 'absolute');
  items.parent().css('left', '0');
  var offw = items.eq(0).outerWidth(true);
  var allw = items.outerWidth(true) * (items.length);
  var movew = offw * num;
  items.parent().width(allw + 'px');
  var len = items.length;
  var isclick = false;

  jQuery(left).click(function() {
    if (items.parent().queue('fx').length != 0)
      return;
    isclick = true;
    items.parent().prepend(items.parent().children().slice(len - num, len));
    items.parent().css('left', '-' + movew + 'px');
    items.parent().animate({
      left: '+=' + movew + 'px'
    }, movetime, function() {
      items.parent().css('left', 0);
    });
  });
  jQuery(right).click(function() {
    if (items.parent().queue('fx').length != 0)
      return;
    isclick = true;
    items.parent().animate({
      left: '-=' + movew + 'px'
    }, movetime, function() {
      items.parent().append(items.parent().children().slice(0, num));
      items.parent().css('left', 0);
    });
  });
}
