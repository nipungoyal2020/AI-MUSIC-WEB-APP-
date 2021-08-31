var song = "";

var leftWristX = "" ;
var leftWristY = "" ;

var scoreLeftWrist = 0 ;
var scoreRightWrist = 0 ;

var rightWristX = "" ;
var rightWristY = "" ;

function preload() {
    
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.posenet(video, model_loaded());
    posenet.on("pose", gotPoses);
}

function model_loaded() {
    console.log("Posenet Model Is Loaded");
}

function gotPoses(results) {
    console.log(results);

    scoreRightWrist = results[0].pose.keypoints[10].score;
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
    
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("Left Wrist X = " + leftWristX + "Left Wrist Y = " + leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("Right Wrist X = " + rightWristX + "Right Wrist Y = " + rightWristY);
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill();
    stroke();
    scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist = " + scoreRightWrist + " scoreLeftWrist = " + scoreLeftWrist);
}

function play() {
    
}
  