// JavaScript Document

const PrintButton1 = new Image
const PrintButton2 = new Image
const logo1 = new Image
const logo2 = new Image
if (document.images) {
	PrintButton1.src = "./images/print1.png"
	PrintButton2.src = "./images/print2.png"
	logo1.src = "./images/logo1.png"
	logo2.src = "./images/logo2.png"
}


		var imgArray = new Array(
			'Chef2Lg.jpg',
			'Food1Lg.jpg',
			'ForkKnifeLg.jpg',
			'Chef4Lg.jpg'
			

		);


		var titleArray = new Array(
			'Master Chef Pierre DeBois',
			'Food Basket',
			'Fork and Knife on a plate with a napkin',
			'Master Chef Pierre DeBois'
			
		);
			
		var imgPath = "./Images/CookingFS/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

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
		
