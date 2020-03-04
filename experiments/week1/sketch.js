// counter so we don't overwrite pictures
var picCounter = 1;

var rot = 0;
var speed = 3.14 / 4;
count = 5

var cellsize = 10;
var gridsize = 10;
var size = 0;

function setup() {

	size = gridsize * cellsize;
	var padding = 30;
	var border = 50;

	var myCanvas = createCanvas((size * count) + ((count - 1) * padding) + border * 2, (size * count) + ((count - 1) * padding) + border * 2);
	myCanvas.parent('processing-container');
	noStroke();
	fill(51);
	rect(0,0,width,height,30);
	noLoop();

	strokeWeight(cellsize / 2);
	strokeCap(ROUND);
	frameRate(15);

	// let's make a box with rounded corners
	fill(90);
	stroke(51);

	// for every coordinate pair
	for (var y = 0; y < count; y++) {
		for (var x = 0; x < count; x++) {
			// the top left of each little box
			coordX = x * size + x * padding + border;
			coordY = y * size + y * padding + border;
			boxCenterX = coordX + size / 2
			boxCenterY = coordY + size / 2

			// the boxes themselves
			noStroke();
			rect(coordX, coordY, size, size, 30);

			// randomly join boxes along rows
			choice = random([0,1,2])
			console.log(choice)
			if (choice == 1 && x != 0 && x != count - 1) {
				rect(coordX, coordY, size * 2 + padding, size, 30);
			} else if (choice == 2 && x != 1 && y != count - 1 && x != count - 1) {
                rect(coordX, coordY, size * 2 + padding, size, 30);
                rect(coordX, coordY, size, size * 2 + padding, 30);
            }

			stroke(51);
			strokeWeight(cellsize / 3);
			
			// circlulating shapes
			for (var i = 0; i < 8; i++) {
				push();
				translate(boxCenterX, boxCenterY)
				circle(0, 0, 5)
				rotate((3.14 / 4) * i)
				strokeWeight(cellsize / 4);
				line(10, 0, 50, 0);

				pop();
				console.log(rot);
			}
		}
	}

}

function mouseClicked(){
	// save an image on click, and make sure
	// not to overwrite old ones.
	saveCanvas('rounded' + picCounter, 'png');
	picCounter += 1;
	return false;
}


function draw() {
}
