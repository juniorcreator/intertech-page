

class App {
  constructor() {
    console.log('constructor');
  }

  cut_eny_text(selector, condition,neededlength) {
    let text  = document.querySelectorAll(`.${selector}`);
    for (let i =0; i < text.length; i++) {
      let getText = text[i].textContent;


      text[i].textContent = getText.length > condition    ?
          text[i].textContent.slice(0, neededlength) + '...' :
          text[i].textContent;
    }
  };
  mobile_menu() {
    let open = $('.js-menu-open');
    let close = $('.js-menu-close');
    let menu = $('.nav');

    open.on('click', function () {
      menu.removeClass('close');
      menu.addClass('open');
    });
    close.on('click', function () {
      menu.addClass('close');
      menu.removeClass('open');

    });

    $(document).on('mouseup', (e) =>{
      let p = $(".nav");
      if (!p.is(e.target) && p.has(e.target).length === 0) {
        menu.addClass('close');
        menu.removeClass('open');
      }
    });
  };

  open_menu() {
    let btn = $('.js-menu');
    let menu = $('.menu-hidden');
    let close = $('.js_close_menu');
    btn.on('click', function () {
      $(this).toggleClass('open');
      menu.addClass('open');
    });
    close.on('click', function (e) {
      menu.removeClass('open');
      btn.removeClass('open');
    });
  }

  burger() {

      $('a.target-burger').click(function(e){
        $('body, .nav__wrap, .nav').toggleClass('toggled');
        e.preventDefault();
      });

      $('.nav__close').on('click', function () {
        $('body, .nav__wrap, .nav').removeClass('toggled');
      })

  }
  init () {
    this.cut_eny_text();
    this.mobile_menu();
    this.open_menu();
    this.burger();
  }
}

let app = new  App();
app.init();
