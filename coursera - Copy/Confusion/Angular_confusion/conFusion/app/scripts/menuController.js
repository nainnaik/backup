
    

var app= angular.module("confusionApp",[]);

    app.controller("menuController",function(){

                dishes=[
                    {
                        name:'Uthapizza',
                        image:'../app/images/uthapizza.png',
                        category:'mains',
                        lable:'hot',
                        price:'4.99',
                        description:'A unique combination of indian and italian pizza', 
                        comment:'' 
                    }, 

                    {
                        name:'Vadonut',
                        image:'app/images/vadonut.png',
                        category:'mains',
                        lable:'',
                        price:'4.99',
                        description:'A unique combination of indian and italian pizza', 
                        comment:''  
                    },

                    {

                        name:'Zucchipakoda',
                        image:'../images/zucchipakoda.png',
                        category:'appitizer',
                        lable:'New',
                        price:'1.99',
                        description:'Deep fried pakoda', 
                        comment:''   
                    },
                    
                    {
                        name:'Elaicheesecake',
                        image:'../images/elaicheesecake.png',
                        category:'dessert',
                        lable:'sweet',
                        price:'4.99',
                        description:'sweet', 
                    }

                    ];
                    this.dishes= dishes;
    });