// JavaScript Document

const PrintButton1 = new Image
const PrintButton2 = new Image
const logo1 = new Image
const logo2 = new Image
if (document.images && logo1 && logo2) {
	PrintButton1.src = "./images/print1.png"
	PrintButton2.src = "./images/print2.png"
	logo1.src = "./images/logo1.png"
	logo2.src = "./images/logo2.png"
}


const imgArray = new Array(
	'./images/cookingfs/Chef2Lg.jpg',
	'./images/cookingfs/Food1Lg.jpg',
	'./images/cookingfs/ForkKnifeLg.jpg',
	'./images/cookingfs/Chef4Lg.jpg'
	);


const titleArray = new Array(
	'Master Chef Pierre DeBois',
	'Food Basket',
	'Fork and Knife on a plate with a napkin',
	'Master Chef Pierre DeBois'
	);
			
const imgPath = "./images/cookingfs/";
		
function swapImage(imgID) {
	const theImage = document.getElementById('theImage');
	const textDiv = document.getElementById('bottomText');

	let newImg;
	let textTitle;

	newImg = imgArray[imgID];
	theImage.src = imgPath + newImg;

	textTitle=titleArray[imgID];
	textDiv.innerHTML = textTitle;
}
			
function preloadImages() {	
	for(var i = 0; i < imgArray.length; i++) {
		var tmpImg = new Image;
			tmpImg.src = imgPath + imgArray[i];
	}
}
		
