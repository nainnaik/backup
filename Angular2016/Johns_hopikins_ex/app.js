(function () {
'use strict';

  angular.module('MenuCategoriesApp',[])
  .controller('MenuCategoriesController', MenuCategoriesController)
  .service('MenuCategoriesService', MenuCategoriesService);



  MenuCategoriesController.$inject=["MenuCategoriesService"];
  function MenuCategoriesController(MenuCategoriesService){
    var menu=this;
    var promise=MenuCategoriesService.getMenuCategories();

        promise.then(function(response){ 
          menu.catergories=response.data.menu_items; 
          console.log(menu.catergories);       

        })
        .catch(function(error){
          console.log("something wrong");

        });

  }

  MenuCategoriesService.$inject=["$http"];
  function MenuCategoriesService($http){
    var service=this;
    service.getMenuCategories=function(){
      var response=$http(
                      {
                         method:"GET",
                         url:("https://davids-restaurant.herokuapp.com/menu_items.json")
                    });

    return response;
    
  };
}

})();
