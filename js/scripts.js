var hoverOutTimer = null;

jQuery(document).ready(function($) {
  $(".menulink a").click(function() {
      $("#navigation").stop(true, true).fadeToggle('fast');
  });
  $("a.close").click(function() {
      $("#navigation").stop(true, true).fadeToggle('fast');
  });
  $("a.play").click(function() {
      $(".video").stop(true, true).fadeToggle('fast');
  });
  resize_intro();
});

jQuery(window).resize(function () {
  resize_intro();
});

function resize_intro(){
  page_height =  jQuery(window).height();
  content_height =  jQuery('#content').height();
   if(jQuery('#top').height() < (page_height)) {
  top_margin = (page_height - jQuery('#top').height()) / 2;
    if(jQuery(window).width() > 770) {
      jQuery("#top").css('margin-top',(top_margin+15)+'px');
      jQuery("#top").css('margin-bottom',(top_margin)+'px');
      jQuery(".flexslider .slides > li").css('height',(content_height)+'px');
    }
  } else {
    jQuery("#top").css('margin-top','0px');
    jQuery("#top").css('margin-bottom','0px');
      jQuery(".flexslider .slides > li").css('height','300px');
  }
}

  // ****** GOOGLE MAP *******
  var map;

  var MY_MAPTYPE_ID = 'custom_style';

  function initialize() {

    var featureOpts = [
      {
        stylers: [
          { saturation: -20 },
          { lightness: 40 },
          { visibility: 'simplified' },
          { gamma: 0.8 },
          { weight: 0.4 }
        ]
      },
      {
        elementType: 'labels',
        stylers: [
          { visibility: 'on' }
        ]
      },
      {
        featureType: 'water',
        stylers: [
          { color: '#dee8ff' }
        ]
      }
    ];

    var mapOptions = {
      zoom: 18,
      scrollwheel: false,
      panControl: false,
      mapTypeControl: false,
        streetViewControl: false,
      center: new google.maps.LatLng(-36.846358, 174.764797),
      mapTypeControlOptions: {
        mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
      },
      mapTypeId: MY_MAPTYPE_ID
    };

    map = new google.maps.Map(document.getElementById('canvas-map'),mapOptions);
    var image = 'images/pointer.png';
    var myLatLng = new google.maps.LatLng(-36.846358, 174.764797);
    var beachMarker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });
    var styledMapOptions = {
      name: 'Custom Style'
    };

    var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

    map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
  }

  google.maps.event.addDomListener(window, 'load', initialize);
