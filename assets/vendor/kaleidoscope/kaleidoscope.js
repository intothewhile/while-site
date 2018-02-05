$( document ).ready( function () {

  var parameters = ( function ( src ) {
    var params = {}, qryStr = src.split( '?' )[ 1 ];
    if( qryStr ) {
      $.each( qryStr.split( '&' ), function ( i, p ) {
        var ps = p.replace( /\/$/, '' ).split( '=' );
        var k = ps[ 0 ].replace( /^\?/, '' );
        params[ k ] = ps[ 1 ] || true;
      });
    }
    return params;
  })( location.search );

  var x = 0;
  var y = 0;

  var auto;
  var auto_x = 0;
  var auto_y = 0;
  var auto_throttle;

  // PARAMETER: *s* is the speed of the automatic timeout animation.
  var s = parameters.s || 3;

  // PARAMETER: *n* is the number of segments.
  var n = ~~parameters.n || 7;
  var tiles = '';
  if ( n ) {
    for ( var i = 0; i <= n * 2; i++ ) {
      tiles += [ '<div class="tile t', i, '"><div class="image"></div></div>' ].join( '' );
    }
  }

  var $kaleidescope = $( '.kaleidoscope' )
    .addClass( 'n' + n )
    .append( tiles );

  var $image = $kaleidescope.find( '.image' );

  var $fullscreen = $( '#fullscreen' );
  var k = $kaleidescope[ 0 ];

  // PARAMETER: *src* is the URL for an alternate image.
  var src = parameters.src;
  if ( src ) {
    $image.css( 'background-image', [ 'url(', decodeURIComponent( src ), ')' ].join( '' ) );
  }

  // PARAMETER: *clean* hides the Github and fullscreen links.
  var clean = parameters.clean;
  if ( clean ) {
    $( 'body' ).addClass('clean');
  }

  // PARAMETER: *opacity* sets opacity (0.0 -> 1.0).
  var opacity = parseFloat( parameters.opacity );
  if ( opacity ) {
    $kaleidescope.css('opacity', 0).fadeTo( 3000, opacity );
  }


  // PARAMETER (undocumented): *mode* changes the animation style.
  var mode = ~~parameters.mode || 2;


  function readFile( file ) {
    var r = new FileReader();
    if ( !file.type.match('image\/.*') ) {
      return false;
    }

    r.onload = function( e ) {
      $image.css( 'background-image', [ 'url(', e.target.result, ')' ].join( '' ) );
    };

    r.readAsDataURL( file );
  }

  // Animate all the things!
  window.requestAnimFrame = ( function( window ) {
    var suffix = "equestAnimationFrame",
      rAF = [ "r", "webkitR", "mozR" ].filter( function( val ) {
        return val + suffix in window;
      })[ 0 ] + suffix;

    return window[ rAF ]  || function( callback ) {
      window.setTimeout( function() {
        callback( +new Date() );
      }, 1000 / 60 );
    };
  })( window );

  function animate() {
    var time = new Date().getTime() * [ '.0000', s ].join( '' );
    auto_x = Math.sin( time ) * document.body.clientWidth;
    auto_y++;

    move( auto_x, auto_y );
    if ( auto ) requestAnimFrame( animate );
  }

  function move( x, y ) {
    $image.css( 'background-position', [ x + "px", y + "px" ].join( ' ' ) );
  }
  auto = true;
  animate();
  auto_throttle = true;
});
