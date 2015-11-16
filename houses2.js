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
var indexValue = 0;


angular.module('myApp', []).controller('myController', housesListCtrl);

	function housesListCtrl($scope){
		$scope.houses = houses;
		$scope.view = 'list';

		$scope.listView = function(){
			$scope.view = 'list';
		}

		$scope.deleteListing = function(index){
			$scope.houses.splice(index,1);
			console.log($scope.houses);
		}

		$scope.editListing = function(index){
			$scope.view = 'edit';
			$scope.home = houses[index];
			indexValue = index;
		}

		$scope.updateListing = function(index){
			if($scope.title!=null){
				houses[indexValue].title = $scope.title;
			}
			if($scope.street_address!=null){
				houses[indexValue].street_address = $scope.street_address;
			}
			if($scope.city_state_zip!=null){
				houses[indexValue].city_state_zip = $scope.city_state_zip;
			}
			if($scope.for_sale!=null){
				houses[indexValue].for_sale = $scope.for_sale;
			}
			if($scope.price!=null){
				houses[indexValue].price = $scope.price;
			}
			if($scope.zestimate!=null){
				houses[indexValue].zestimate = $scope.zestimate;
			}
			if($scope.type_of_deal!=null){
				houses[indexValue].type_of_deal = $scope.type_of_deal;
			}
			if($scope.mortgage!=null){
				houses[indexValue].mortgage = $scope.mortgage;
			}
			$scope.view = 'list';
		}

		$scope.addListing = function(){
			$scope.view = 'add';
		}

		$scope.addNewListing = function(){
			houses.push(new Houses($scope.title, '-', '-', $scope.street_address, $scope.for_sale, $scope.price, $scope.zestimate, $scope.type_of_deal, $scope.mortgage));
			$scope.view = 'list';
		}


		
	}

	
