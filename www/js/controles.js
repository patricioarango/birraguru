
aplicacion.controller('beerCtrl',['$scope','$location','$http', function($scope,$location,$http){
    console.log('beerCtrl');
    $scope.random_beer = function(){
      console.log("random_beer");
      $('#big_engine').fadeOut('slow',"easeInOutQuad", function() {
        $scope.traer_data();
        Materialize.fadeInImage('#small_engine');
      });
    }
      $scope.random_beer_small = function(){
        $scope.traer_data();
      }

      $scope.traer_data = function(){
        console.log("traer data");
        var number = $scope.generar_random();
        console.log(number);
        $(".card_contenedor").html("");
        db.ref('/data/' + number).once('value').then(function(snapshot) {
          var birra = snapshot.val();
          show_card(birra);
          console.log(birra);
        });
      }
    $scope.generar_random = function(){
      console.log("generar_random");
      return Math.floor(Math.random() * 169) + 0;  
    }
    
  }]);

aplicacion.controller('beerRangeCtrl',['$scope','$http', function($scope,$http){
       //$scope.ventasActuales = registroCantidadVentas.list();
       console.log('beerRangeCtrl');
        /*
        //$(".card_contenedor").html("");
        db.ref('/data').once('value').then(function(snapshot) {
          $scope.birras = snapshot.val();
          
        });*/
      $http.get('birra_categorias.json').success(function(data){
        console.log(data);
        $scope.birras = data;
      });
          
}]);

function show_card(card){
      console.log("show_card");
      var titulo = card.name;
      var mensaje_trasero = card.description;
      
      $(".card_contenedor").append('<div class="card">'+
        '<div class="card-content brown lighten-2">'+
        '<span class="card-title activator white-text">'+titulo+'<i class="material-icons right">more_vert</i></span>'+
        '<p class="white-text">ABV</p>'+
        '<p class="white-text"><i class="material-icons">vertical_align_bottom</i> '+redondear(card.abvMin)+'% &nbsp;&nbsp;&nbsp;<i class="material-icons">vertical_align_top</i> '+redondear(card.abvMax)+'%</p>'+
        '<p class="white-text">IBU</p>'+
        '<p class="white-text"><i class="material-icons">trending_down</i> '+redondear(card.ibuMin)+' &nbsp;&nbsp;&nbsp;<i class="material-icons">trending_up</i> '+redondear(card.ibuMax)+'</p>'+

        '</div>'+
        '<div class="card-reveal">'+
        ' <span class="card-title grey-text text-darken-4">'+titulo+'<i class="material-icons right">close</i></span>'+
        '<p>'+mensaje_trasero+'</p>'+
        '</div>'+
        '</div>');      
    } 









