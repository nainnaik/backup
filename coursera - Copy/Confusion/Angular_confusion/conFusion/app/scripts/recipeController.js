var app= angular.module("indianRecipesApp",[]);

    app.controller("recipeController",function(){

               var recipes=[
                    {
                        name:'Samosa',
                        image:'../app/images/uthapizza.png',
                        category:'appitizer',
                        lable:'hot',
                        price:'4.99',
                        ingradients:'A unique combination of indian and italian pizza', 
                        comment:'' 
                    }, 

                    {
                        name:'Vadonut',
                        image:'app/images/vadonut.png',
                        category:'mains',
                        lable:'',
                        price:'4.99',
                        ingradients:'A unique combination of indian and italian pizza', 
                        comment:''  
                    },

                    {

                        name:'Zucchipakoda',
                        image:'../images/zucchipakoda.png',
                        category:'appitizer',
                        lable:'New',
                        price:'1.99',
                        ingradients:'Deep fried pakoda', 
                        comment:''   
                    },
                    
                    {
                        name:'Elaicheesecake',
                        image:'../images/elaicheesecake.png',
                        category:'dessert',
                        lable:'sweet',
                        price:'4.99',
                        ingradients:'sweet', 
                    }

                    ];
                    this.recipes= recipes;
    });