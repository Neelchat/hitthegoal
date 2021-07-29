
// Create canvas variable
var canvas = document.getElementById("myCanvas")

//Set initial positions for ball and hole images.
ball_x = 10
ball_y = 10

block_image_width = 5;
block_image_height = 5;
var ball_Img = "ball.png"
var golf_hole = "golf-h.png"
var hole_x = 700
var hole_y = 400

function load_img(){
	fabric.Image.fromURL(golf_hole, function (Img){
		var hole_object = Img
		hole_object.scaleToWidth(50)
		hole_object.scaleToHeight(50)
		hole_object.set({
			top:hole_y,
			left:hole_x

		});
		canvas.add(hole_object);
	});

	new_image();
}

function new_image()
{
	fabric.Image.fromURL(ball_Img, function (Img){
		var ball_object = Img
		ball_object.scaleToWidth(50)
		ball_object.scaleToHeight(50)
		ball_object.set({
			top:ball_y,
			left:ball_x

		});
		canvas.add(ball_object);
	});
	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
	if (ball_x== hole_x && ball_y == hole_y){
		document.getElementById("hd3").innerHTML = "You have Scored"
		canvas.remove(ball_object)
	}
	
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (ball_y >= 0){ 
		ball_y = ball_y - block_image_height
		canvas.remove(ball_object)
		new_image();
		}
	}

	function down()
	{
		if (ball_y <= 550){ 
			ball_y = ball_y + block_image_height
			canvas.remove(ball_object)
			new_image(); 
			}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x - block_image_width
			canvas.remove(ball_object)
			new_image(); 
		}
	}

	function right()
	{
		if(ball_x <=750)
		{
			ball_x = ball_x + block_image_width
			canvas.remove(ball_object)
			new_image(); 
		}
	}
	
}

