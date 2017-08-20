var app=angular.module("app",["ngRoute"]);
app.config(["$routeProvider",function($routeProvider){
	$routeProvider.when("/dj",{
		templateUrl:"./ly.html",
		controller:function($scope,$rootScope,$http){
			$http.get("http://localhost:8080/json/index.json").success(function(data){
				$scope.users=data;
			})
			
			setTimeout(function(){
				var mySwiper=new Swiper(".swiper-container",{
					autoplay:2000,
					pagination:".swiper-pagination",
				})
			},200)
			
		}
	})
	.when("/tm",{
		templateUrl:"./tm.html",
		controllerz:function($scope,$rootScope){
			
		}
	})
	.when("/wd",{
		templateUrl:"./wd.html",
		controller:function($scope,$rootScope){
			
		}
	})
	.when("/fx",{
		templateUrl:"./fx.html",
		controller:function($scope,$rootScope){
			
		}
	}).otherwise({
		redirectTo:"/"
	})
}]);
app.controller("ctrl",function($scope,$location,$rootScope){
				$rootScope.id=$location.url().slice(1);
				switch ($rootScope.id){
	                case "dj":
	                    $scope.dj=true;
	                    break;
	                case "fx":
	                    $scope.fx=true;
	                    break;
	                case "tm":
	                    $scope.tm=true;
	                    break;
	                case "wd":
	                    $scope.wd=true;
	                    break;
	                default:
	                    $scope.dj=true;
	                    break;
	            }

				//默认图片页显示且添加class名；
//				$scope.ty=true;
//				$scope.img=false;
//				$scope.cj=false;
//				$scope.qc=false;
//				$scope.js=false;
//				$scope.zb=false;
				$scope.tab=function(index){
					if(index==1){
						$scope.dj=true;
						$scope.tm=false;
						$scope.fx=false;
						$scope.wd=false;
					}
					if(index==3){
						$scope.dj=false;
						$scope.tm=true;
						$scope.fx=false;
						$scope.wd=false;
					}
					if(index==2){
						$scope.dj=false;
						$scope.tm=false;
						$scope.fx=true;
						$scope.wd=false;
					}
					if(index==4){
						$scope.dj=false;
						$scope.tm=false;
						$scope.fx=false;
						$scope.wd=true;
					}
				}
			})