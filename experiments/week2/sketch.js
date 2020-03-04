// working in a state of business, seeking escape and
// an opportunity for tranquility. Digging a hole in the linework?
// exploiting a tool for actions I could never accomplish.


// counter so we don't overwrite pictures
var picCounter = 1;

function setup() {

		pixelDensity(4.0);
		var myCanvas = createCanvas(500,500);
		myCanvas.parent('processing-container');
		centerX = width/2;
		centerY = height/2;

		var b = 30;
		for (var a = 1; a < 30; a += 10) {
				var h = getRandomArbitrary(70,  120);
				var b = getRandomArbitrary(20,  40);
				console.log(h)
				for (var i = 1; i < 361; i += 1) {
						position = radians(i);
						outerPos = radians(i - 1);
						dia = a * position;
						outerDia = a * outerPos;

						outerXpos = (a-b)*cos(outerPos)+h*cos(outerDia);
						outerYpos = (a-b)*sin(outerPos)+h*sin(outerDia);

						xpos = (a-b)*cos(position)+h*cos(dia);
						ypos = (a-b)*sin(position)+h*sin(dia);

						line(centerX+outerXpos, centerY+outerYpos, centerX+xpos, centerY+ypos);
				}
		}

		for (var a = 1; a < 30; a += 10) {
				var h = getRandomArbitrary(10,  30);
				var b = getRandomArbitrary(1,  50);

				for (var i = 1; i < 361; i += 1) {
						position = radians(i);
						outerPos = radians(i - 1);
						dia = a * position;
						outerDia = a * outerPos;

						outerXpos = (a-b)*cos(outerPos)+h*cos(outerDia);
						outerYpos = (a-b)*sin(outerPos)+h*sin(outerDia);

						xpos = (a-b)*cos(position)+h*cos(dia);
						ypos = (a-b)*sin(position)+h*sin(dia);

						line(centerX+outerXpos, centerY+outerYpos, centerX+xpos, centerY+ypos);
				}
		}

		let s = 'So it goes.';
		fill(0);
		textSize(20);
		text(s, 20, 20, 120, 120); // Text wraps within text box
}

function mouseClicked(){
	// save an image on click, and make sure
	// not to overwrite old ones.
	saveCanvas('wk2' + picCounter, 'png');
	picCounter += 1;
	return false;
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function draw() {

}
