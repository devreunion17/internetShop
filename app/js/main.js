$(function () {

  $('.product-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.product-tabs__top-item').removeClass('product-tabs__top-item--active');
    $(this).addClass('product-tabs__top-item--active');
    $('.product-tabs__content-item').removeClass('product-tabs__content-item--active');
    $($(this).attr('href')).addClass('product-tabs__content-item--active');
  })


  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });
  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.blog-page__slider').slick({
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 10 20" version="1.1"><g><path d="M 7.5 17.5 C 7.179688 17.5 6.859375 17.378906 6.617188 17.132812 L 0.367188 10.882812 C -0.121094 10.394531 -0.121094 9.605469 0.367188 9.117188 L 6.617188 2.867188 C 7.105469 2.378906 7.894531 2.378906 8.382812 2.867188 C 8.871094 3.355469 8.871094 4.144531 8.382812 4.632812 L 3.015625 10 L 8.382812 15.367188 C 8.875 15.855469 8.875 16.648438 8.382812 17.132812 C 8.140625 17.378906 7.820312 17.5 7.5 17.5 Z M 7.5 17.5 "/></g></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="10px" height="15px" viewBox="0 0 10 20" version="1.1"><g><path  d="M 2.5 17.5 C 2.179688 17.5 1.859375 17.378906 1.617188 17.132812 C 1.128906 16.644531 1.128906 15.855469 1.617188 15.367188 L 6.984375 10 L 1.617188 4.632812 C 1.128906 4.144531 1.128906 3.351562 1.617188 2.867188 C 2.105469 2.375 2.894531 2.375 3.382812 2.867188 L 9.632812 9.117188 C 10.121094 9.601562 10.121094 10.394531 9.632812 10.882812 L 3.382812 17.132812 C 3.140625 17.378906 2.820312 17.5 2.5 17.5 Z M 2.5 17.5"/></g></svg></button>',
    infinite: false
  });


  $('.shop-content__btn').on('click', function () {
    $('.shop-content__btn').removeClass('shop-content__btn--active');
    $(this).addClass('shop-content__btn--active');
  });

  $('.button-list').on('click', function () {
    $('.product').addClass('product--list');
  });

  $('.button-grid').on('click', function () {
    $('.product').removeClass('product--list');
  });



  $('.select-style, .product-info__item-number').styler();

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
  })

  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $(".product__rating").rateYo({
    rating: 3.6,
    starWidth: "16px",
    normalFill: "#ccccce",
    ratedFill: "#ffc35b",
    readOnly: true,
    starSvg: '<svg xmlns="http://www.w3.org/2000/svg" xmlns: xlink = "http://www.w3.org/1999/xlink" width = "18px" height = "16px" viewBox = "0 0 18 16" version = "1.1" >< g id = "surface1"><path style = " stroke:none;"d = "M 11.914062 4.695312 L 16.402344 5.359375 C 16.773438 5.414062 17.085938 5.675781 17.207031 6.035156 C 17.324219 6.398438 17.226562 6.789062 16.960938 7.058594 L 13.703125 10.253906 L 14.472656 14.835938 C 14.535156 15.210938 14.382812 15.589844 14.070312 15.8125 C 13.757812 16.035156 13.351562 16.0625 13.015625 15.882812 L 9.003906 13.742188 L 4.992188 15.882812 C 4.65625 16.0625 4.246094 16.035156 3.9375 15.8125 C 3.628906 15.589844 3.472656 15.210938 3.539062 14.835938 L 4.304688 10.253906 L 1.050781 7.058594 C 0.78125 6.789062 0.683594 6.398438 0.804688 6.035156 C 0.921875 5.675781 1.230469 5.414062 1.605469 5.359375 L 6.09375 4.695312 L 8.105469 0.5625 C 8.273438 0.21875 8.621094 0 9.003906 0 C 9.386719 0 9.738281 0.21875 9.902344 0.5625 Z M 11.914062 4.695312 "/></g></svg>'
  });

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__clock');
    const daysSpan = clock.querySelector('.promo__days');
    const hoursSpan = clock.querySelector('.promo__hours');
    const minutesSpan = clock.querySelector('.promo__minutes');
    const secondsSpan = clock.querySelector('.promo__seconds');

    function updateClock() {
      const t = getTimeRemaining(endtime);

      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }

  const deadline = $('.promo__clock').attr('data-time');
  initializeClock('promo__clock', deadline);






});