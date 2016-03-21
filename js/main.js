$(document).ready(function() { 

   

    var $app = $("#app");
    var $overlay = $("#overlay");
    var $page1Template = $("#page1Template").text();
    var $page2Template = $("#page2Template").text();
    var $page3Template = $("#page3Template").text();


    page1();

    $app.on('click', '.frontpage .thumb', function(e) {
      var albumTitle = $(this).find('.title').text().trim();
      getMagInfo(albumTitle);
    });

    $app.on('click', '.nav li', function(e) {
      var albumTitle = $(this).text().trim();
      getMagInfo(albumTitle);
    });

    $app.on('click', '.content .info', function(e) {
      var imageName = $(this).find('span').text().trim();
      var albumImage = $(this).find('img').attr('src');
      var albumName = $('.page2').text().trim();
      var overlayData = {
        name: imageName,
        albumName: albumName,
        img: albumImage
      }
      $overlay.html(Mustache.render($page3Template, overlayData));
      $overlay.show(); 
    });

    $overlay.on('click', function(e){
      if ($(e.target).is('div, button, img')) {
        $overlay.hide();
      }
    });


    function page1() {
       $app.html(Mustache.render($page1Template, data));
    }

    function getMagInfo(albumTitle) {
        var albumInfo = data.albums.filter(function(value) {
          return value.name === albumTitle ? true : false; 
        })[0];
        
        albumInfo.albums = data.albums.map(function(value) {
          return value.name;
        })
        
        $app.html(Mustache.render($page2Template, albumInfo));
    }

});
 
 