(function(document) {
        var toggle = document.querySelector('.sidebar-toggle');
        var sidebar = document.querySelector('#sidebar');
        var checkbox = document.querySelector('#sidebar-checkbox');

        document.addEventListener('click', function(e) {
          var target = e.target;

          if(!checkbox.checked ||
             sidebar.contains(target) ||
             (target === checkbox || target === toggle)) return;

          checkbox.checked = false;
        }, false);
      })(document);

      $(function () {
  /*var menuaction = document.querySelectorAll('.action-menu');
            var pageheader = document.querySelector('.page-header');


            [].slice.call(menuaction).forEach(function(el,i){
            el.addEventListener('click', function(e) {
              e.preventDefault();
              pageheader.classList.toggle('menu-opened');
              document.body.classList.toggle('overflowh');

            });
          });*/

  //$('[data-toggle="tooltip"]').tooltip()
})
