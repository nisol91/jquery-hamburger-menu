// Creare un hamburger menu con l’utilizzo di Html,
// Css e JavaScript.

$('.menu-h').hide();
$('.h-m').click(function () {
  $('.menu-h').show()
  $('.nav-bar').hide()
});
$('.x-x').click(function () {
  $('.menu-h').hide()
  $('.nav-bar').show()
});
