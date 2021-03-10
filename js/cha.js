

function getUser()
{
	user.agent = window.navigator.userAgent;
	user.lang = window.navigator.language;

	return window.navigator;
}

function getDevice()
{
 device.resolution = screen.pixelDepth;
 device.height = screen.availHeight;
 device.width = screen.availWidth;
 device.availHeight = window.availHeight;
 device.availWidth = window.availWidth;
 device.orientation = window.screen.orientation.type;
  
  return device;
}


function setDevice()
{

	//GLOBAL TO CALL ON WINDOW RESIZE OR TAP
	var H = window.innerHeight;
	var W = window.innerWidth;

	var pixelratio = "π" ;
	var orientation = "square";
	var device; //= [ so = "" , browser = "" , orientation ];

	var square = H - W ;
	var device = "NODEVICE";

	//if ( H > W ) {portrait} else {landscape}

	if ( square < 0 ) { device = `lanscape` ; pixelratio = W/H; }
	if ( square > 0 ) { device = `portrait` ; pixelratio = H/W;}

	if (window.navigator) 	
	{
			device.so = window.navigator.platform ; 
			device.browser = window.navigator.product ; 
	}

		device.orientation = orientation;
		device.pixelRatio = pixelratio;
		device.height = H;
		device.width = W;

    console.log(device);
	//return device;
}
