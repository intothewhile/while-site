

(function(document) {
        var toggle = document.querySelector('.sidebar-toggle');
        var sidebar = document.querySelector('#sidebar');
        var checkbox = document.querySelector('#sidebar-checkbox');

        /* sticky header */
        window.addEventListener('scroll', function() {
          if( window.pageYOffset > 200 ) {
            document.querySelector('#mainNav').classList.add('is-visible');
          } else {
            document.querySelector('#mainNav').classList.remove('is-visible');
          }
        });

        document.addEventListener('click', function(e) {
          var target = e.target;

          if(!checkbox.checked ||
             sidebar.contains(target) ||
             (target === checkbox || target === toggle)) return;

          checkbox.checked = false;
        }, false);

      })(document);
