'use strict';

angular.module("indianRecipesApp",[])

    .controller("recipeController",function(){

                this.tab=1;
                this/flitText="";


                recipes=[
                    {
                        name:'Samosa',
                        image:'../app/images/uthapizza.png',
                        category:'appitizer',
                        lable:'hot',
                        ingradients:'A unique combination of indian and italian pizza', 
                        comment:'' 
                    }, 

                    {
                        name:'biryani',
                        lable:'hot',
                        category:'main',
                        ingradients:'A unique combination of indian and italian pizza', 
                        comment:''  
                    },

                    {

                        name:'kandapakoda',
                        image:'',
                        category:'appitizer',
                        lable:'chatpata',
                        ingradients:'Deep fried pakoda', 
                          
                    },
                    
                    {
                        name:'Rasmalai',
                        image:,
                        category:'dessert',
                        lable:'sweet',
                        ingradients:'sweet', 
                    }

                    ];
                    this.recipes= recipes;
                    this.select=function(setTab){
                        this.tab=setTab;
                        if(setTab===2){
                            this.filtText="appitizer";
                        }
                        else if(setTab===3){
                            this.filtText="main"; 
                        }
                        };
                        this.isSelected=function (checktab)
                        return(this.tab===checktab);
                    };
    });