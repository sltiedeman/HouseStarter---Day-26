function Houses(title, image, image_width, street_address, city_state_zip, for_sale, price, zestimate, type_of_deal, mortgage){
	this.title = title;
	this.image = image;
	this.image_width = image_width;
	this.street_address = street_address;
	this.city_state_zip = city_state_zip;
	this.for_sale = for_sale;
	this.price = price;
	this.zestimate = zestimate,
	this.type_of_deal = type_of_deal;
	this.mortgage = mortgage;
}

houses = [];

houses.push(new Houses('The Villa', 'http://photos3.zillowstatic.com/p_h/IShf3c5r7s3xw60000000000.jpg','300', '4747 Northside Dr', 'Atlanta, GA 30327', 'For Sale', '$2,999,000', '$4,031,664', 'A Good Deal! (25% Off!)', '$11,179/mo'));
houses.push(new Houses('The Pool House', 'http://photos2.zillowstatic.com/p_h/IS1n6j1pnfqv2b1000000000.jpg', '300', '1101 Garmon Dr NW', 'Atlanta, GA 30327', 'For Sale', '$2,399,000', '$2,684,662', 'Average Deal!', '$8,943/mo'));
houses.push(new Houses('The Awesome', 'http://ak.t1.tiles.virtualearth.net/tiles/cmd/ObliqueHybrid?a=03200231131-48125-20-101&g=4510', '200','914 Davis Dr', 'Atlanta, GA 30327', 'Not For Sale', '-', '$2,134,055', '-', '-'));
houses.push(new Houses('Versailles', 'http://photos3.zillowstatic.com/p_h/ISx35uo0fixyhb0000000000.jpg', '200', '5115 Northside Dr', 'Atlanta, GA 30327', 'For Sale', '$8,000,000', '12,360,014', 'A crazy deal!! (30% Off!)', '$29,821/mo'));



angular.module('myApp', []).controller('myController', housesListCtrl);


	function housesListCtrl($scope){

		$scope.houses = [];

		var index = 0;

		$scope.addHouse = function(){
			$scope.houses.push(houses[index++])
		}

		$scope.enableAdd = function(){
			return index < houses.length;
		}

		$scope.removeHouses = function(){
			$scope.houses=[];
			index = 0;
		}
	}

	
