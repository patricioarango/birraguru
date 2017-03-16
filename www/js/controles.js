
aplicacion.controller('beerCtrl',['$scope', function($scope){
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
      $scope.searchFish  = '';     // set the default search/filter term
      $scope.ibuMaximo = 41;
      $("#guru_nav").css("padding-bottom","0px");
      
      $http.get('birra_categorias.json').success(function(data){
        $scope.birras = data;
      });
}]);

function show_card(card){
      console.log("show_card");
      var titulo = card.name;
      var mensaje_trasero = card.description;
      
      $(".card_contenedor").append('<div class="card">'+
        '<div class="card-content teal">'+
        '<span class="card-title activator white-text">'+titulo+'<i class="material-icons right">add</i></span>'+
        '</div>'+
        '<div class="card-action teal">'+
        '<a><span style="font-size:1.1em;">ABV</span> <i class="material-icons">vertical_align_bottom</i> '+redondear(card.abvMin)+'%<i class="material-icons">vertical_align_top</i> '+redondear(card.abvMax)+'%</a>'+
        '<a><span style="font-size:1.1em;">IBU</span> <i class="material-icons">trending_down</i> '+redondear(card.ibuMin)+'<i class="material-icons">trending_up</i> '+redondear(card.ibuMax)+'</a>'+
        '</div>'+
        '<div class="card-reveal">'+
        ' <span class="card-title grey-text text-darken-4">'+titulo+'<i class="material-icons right">close</i></span>'+
        '<p>'+mensaje_trasero+'</p>'+
        '</div>'+
        '</div>');      
    } 

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });






