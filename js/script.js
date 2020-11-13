document.addEventListener("DOMContentLoaded", function () {
  $(document).ready(function () {
    $(function () {
      $('.boutonn').on('click touch', function (e) {
        $('.blockXp').slideToggle();
      });
    });
  });


  $('.carousel').carousel({
    padding: 200,
    fullWidth: false,
    width: 30
  });
  autoplay()

  function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 2000);
  }
  $(document).ready(function () {
    $('.tooltipped').tooltip();
  })
});