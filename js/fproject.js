/* fproject.js */

function AlterGallery(x)
{
	for(var i = 0; i < 3; i++)
	{
		var rez = "img/flickr/img" + (i + x) + ".jpg";
		document.getElementById("flckr" + i).src = rez;
		document.getElementById("flk" + i).href= rez;
	}
}

function AlterRand(){
	var y = (parseInt(100*Math.random()))%13; /*there are only 15 'flickr' pictures */
	AlterGallery(y);
}