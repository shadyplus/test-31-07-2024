var s = 60; /* seconds between tick*/
var count = 20; /* 1-99 */
var rand = 1; /* 1-9 */

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
count > 99 ? count = 99 : count;
rand > 9 ? rand = 9 : rand;
var id = 100 - count;

function ticker() {
  var n = count.toString().split('');
  var n1 = id.toString().split('');
  var r = getRandom(1, rand);
  var idf = $('.oid-first').find("ul");
  var ids = $('.oid-second').find("ul");
  var idfli = idf.children();
  var idsli = ids.children();
  var f = $('.first').find("ul");
  var s = $('.second').find("ul");
  var fli = f.children();
  var sli = s.children();
  $('.oid').html(id);
  s.addClass("transition");
  s.css({
    top: 0
  });
  f.addClass("transition");
  f.css({
    top: 0
  });
  fli.eq(0).html(n[0]);
  sli.eq(0).html(n[1]);

  ids.addClass("transition");
  ids.css({
    top: 0
  });
  idf.addClass("transition");
  idf.css({
    top: 0
  });
  idfli.eq(0).html(n1[0]);
  idsli.eq(0).html(n1[1]);
  setTimeout(function () {
    s.removeClass("transition");
    sli.eq(1).html(n[1]);
    s.css({
      top: "-28px"
    });
    f.removeClass("transition");
    fli.eq(1).html(n[0]);
    f.css({
      top: "-28px"
    });
    ids.removeClass("transition");
    idsli.eq(1).html(n1[1]);
    ids.css({
      top: "-28px"
    });
    idf.removeClass("transition");
    idfli.eq(1).html(n1[0]);
    idf.css({
      top: "-28px"
    });
  }, 410)
  if (id < 10) {
    $('.oid').text('0' + id);
    ids.addClass("transition");
    ids.css({
      top: 0
    });
    idf.addClass("transition");
    idf.css({
      top: 0
    });
    idfli.eq(0).html(0);
    idsli.eq(0).html(n1[0]);

    setTimeout(function () {
      ids.removeClass("transition");
      idsli.eq(1).html(n1[0]);
      ids.css({
        top: "-28px"
      });
      idf.removeClass("transition");
      idfli.eq(1).html(0);
      idf.css({
        top: "-28px"
      });
    }, 410)
  }
  if (count < 10) {
    s.addClass("transition");
    s.css({
      top: 0
    });
    f.addClass("transition");
    f.css({
      top: 0
    });
    fli.eq(0).html(0);
    sli.eq(0).html(n[0]);

    $('.first').addClass("timeTo-alert");
    $('.second').addClass("timeTo-alert");

    setTimeout(function () {
      s.removeClass("transition");
      sli.eq(1).html(n[0]);
      s.css({
        top: "-28px"
      });
      f.removeClass("transition");
      fli.eq(1).html(0);
      f.css({
        top: "-28px"
      });
    }, 410)
  }
  count = count - r;
  id = id + r;
};

setTimeout(function t() {
  ticker();
  if (count <= 0) {
    count = 1; id = 99;
    ticker();
    return clearTimeout(this);
  };
  setTimeout(t, s * 1e3);
}, 100);