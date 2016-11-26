$(document).ready(function () {
	// get URL query params if available
	// VALID PARAMS (so far): streamers

	var url = new URL(location);
	var params = new URLSearchParams(url.search);
	var streamers = params.get('streamers');

	// populate streamer names to couch if available
	if (streamers) {
		streamers = streamers.split(',');
		$('.streamer-header').text("Streamers");
		streamers.forEach(function(streamer) {
			$('.streamers').append(streamer + " ");
		})
	}

	// test quotes from Fantastic Beasts and Where to Find Them
	var testQuotes = [
	"\"Imperfect understanding is often more dangerous than ignorance.\"",
	"\"My philosophy is that worrying means you suffer twice.\"",
	"\"I ain't got the brains to make this up.\"",
	"\"See, they're currently in alien terrain, surrounded by millions of the most vicious creatures on the planet. Humans.\"",
	"\"Hey, Mr English guy! I think your egg is hatching.\""
	]

	// randomizer for the quote array so it's a different order each time
	function randomize(arr) {
		var temp = arr.slice();
		var randomized = [];
		for (var i = arr.length; i > 0; i--) {
			var randomPosition = Math.floor(Math.random() * i);
			randomized.push(temp[randomPosition]);
			temp.splice(randomPosition, 1);
		}
		return randomized;
	}

	// display randomized quotes in ticker area
	$('.ticker').append('<marquee scrollamount="6" class="ticker-text">' + randomize(testQuotes).join(" ... ") + '</marquee>');

});