var DashboardCtrl = function($scope, $moment, threat_timelapse, threat_sentiment) {

	var trending_threats = ['DDoSANZ', 'ANZChelmer', 'LoremIpsum', 'ThisIsBatCountry', 'ClarenceTheCameleon'];

	this.$moment = moment;
	this.trending_threats = trending_threats;
	this.threat_timelapse = threat_timelapse;
	this.threat_sentiment = parseFloat(threat_sentiment);

	setTimeout(function() {
		this.drawNumberOfThreats();
		this.drawThreatLocations();
		this.drawOverallSentiment();
	}.bind(this), 500);
	
};

DashboardCtrl.prototype = {
	
	drawNumberOfThreats: function() {
		var data = [];
		data.push(['Date', 'Number of Threats']);

		angular.forEach(this.threat_timelapse, function(timelapse) {
			for (var date in timelapse) {
				var date_moment = this.$moment(date, 'YYYY-MM-DD');
				data.push([date_moment.format('MMM'), timelapse[date]]);
			}
		}.bind(this));

		data = google.visualization.arrayToDataTable(data);

		var options = {
			curveType: 'function',
			backgroundColor: { fill:'transparent' },
			legend: 'none'
		};

		var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

		chart.draw(data, options);
	},

	drawThreatLocations: function() {
		var mapOptions = {
			zoom: 8,
			center: new google.maps.LatLng(-27.467391, 152.997219)
		};
		var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	},

	drawOverallSentiment: function() {
		var negative = this.threat_sentiment,
			positive = (1 - negative) / 4,
			neutral = 1 - negative - positive;

		var data = google.visualization.arrayToDataTable([
			['Approval', 'Percentage'],
			['Positive', positive],
			['Negative', negative],
			['Neutral', neutral]
        ]);

        var options = {
          pieHole: 0.3,
		  backgroundColor: { fill:'transparent' },
          legend: 'none'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
	}

};

angular.module('app.controllers').controller('DashboardCtrl', DashboardCtrl);