// Creare un hamburger menu con l’utilizzo di Html,
// Css e JavaScript.

// $('.menu-h').hide();
// $('.h-m').click(function () {
//   $('.menu-h').show()
//   $('.nav-bar').hide()
// });
// $('.x-x').click(function () {
//   $('.menu-h').hide()
//   $('.nav-bar').show()
// });


//in alternativa (che in realta e la scelta piu utilizzata) mi creavo una
//classe nel css con display flex per il menu dell hamburger e tramite jquery
//gliela aggiungevo/toglievo per mostrarlo/nasconderlo.


$('.h-m').click(function () {
  $('.menu-h').addClass('attivo')
  $('.nav-bar').addClass('disattivo')
});
$('.x-x').click(function () {
  $('.menu-h').removeClass('attivo')
  $('.nav-bar').removeClass('disattivo')
});
