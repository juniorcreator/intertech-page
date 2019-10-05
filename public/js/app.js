'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    console.log('constructor');
  }

  _createClass(App, [{
    key: 'cut_eny_text',
    value: function cut_eny_text(selector, condition, neededlength) {
      var text = document.querySelectorAll('.' + selector);
      for (var i = 0; i < text.length; i++) {
        var getText = text[i].textContent;

        text[i].textContent = getText.length > condition ? text[i].textContent.slice(0, neededlength) + '...' : text[i].textContent;
      }
    }
  }, {
    key: 'mobile_menu',
    value: function mobile_menu() {
      var open = $('.js-menu-open');
      var close = $('.js-menu-close');
      var menu = $('.nav');

      open.on('click', function () {
        menu.removeClass('close');
        menu.addClass('open');
      });
      close.on('click', function () {
        menu.addClass('close');
        menu.removeClass('open');
      });

      $(document).on('mouseup', function (e) {
        var p = $(".nav");
        if (!p.is(e.target) && p.has(e.target).length === 0) {
          menu.addClass('close');
          menu.removeClass('open');
        }
      });
    }
  }, {
    key: 'open_menu',
    value: function open_menu() {
      var btn = $('.js-menu');
      var menu = $('.menu-hidden');
      var close = $('.js_close_menu');
      btn.on('click', function () {
        $(this).toggleClass('open');
        menu.addClass('open');
      });
      close.on('click', function (e) {
        menu.removeClass('open');
        btn.removeClass('open');
      });
    }
  }, {
    key: 'burger',
    value: function burger() {

      $('a.target-burger').click(function (e) {
        $('body, .nav__wrap, .nav').toggleClass('toggled');
        e.preventDefault();
      });

      $('.nav__close').on('click', function () {
        $('body, .nav__wrap, .nav').removeClass('toggled');
      });
    }
  }, {
    key: 'init',
    value: function init() {
      this.cut_eny_text();
      this.mobile_menu();
      this.open_menu();
      this.burger();
    }
  }]);

  return App;
}();

var app = new App();
app.init();