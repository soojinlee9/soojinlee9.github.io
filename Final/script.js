var grid = document.querySelector('.grid');
var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  fitWidth: true
});

imagesLoaded( grid ).on( 'progress', function() {
  // layout Masonry after each image loads
  msnry.layout();
});
