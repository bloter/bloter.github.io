jQuery(function($){
	$("#denim-global__drawer--menu").mmenu({	
		dragClose: {
			close: true
		},
		navbar: false,
		
	}, {
		transitionDuration: 0,
		dragOpen: {
			width: {
				max: 267
			}
		}
    });
    
    
    $('#denim-global__drawer--menu').bind('touchmove', function(e) {
    	//e.preventDefault();
    });
    
    var API = $("#denim-global__drawer--menu").data("mmenu");
    
    $('.denim-layout__drawer--closer').on('click', function(e){
		e.preventDefault();
		API.close();
    });
});