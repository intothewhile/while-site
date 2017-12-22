$(function () {
  var menuaction = document.querySelectorAll('.action-menu');
            var pageheader = document.querySelector('.page-header');


            [].slice.call(menuaction).forEach(function(el,i){
            el.addEventListener('click', function(e) {
              e.preventDefault();
              pageheader.classList.toggle('menu-opened');
              document.body.classList.toggle('overflowh');

            });
            });

  //$('[data-toggle="tooltip"]').tooltip()
})
