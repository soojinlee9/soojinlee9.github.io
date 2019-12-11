var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, { //creates masonry object to access
  itemSelector: '.grid-item',
  fitWidth: true //for centering masonry
});

imagesLoaded( grid ).on( 'progress', function() { // layout Masonry after each image loads (helps to not make images overlap as they are loading)
  msnry.layout();
});

$('[data-fancybox="images"]').fancybox({ //to add clickable link to yelp inside caption
  caption : function( instance, item ) {
    var caption = $(this).data('caption') || '';

    if ( item.type === 'image' ) {
      caption = (caption.length ? caption + '<br />' : '') + '<a target="_blank" href="' + 'https://www.yelp.com/' + '"><i class="fa fa-yelp"></i> Yelp</a>' ;
    }

    return caption;
  }
});
