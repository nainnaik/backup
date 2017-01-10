


(function(){




    
   document.getElementById("classroom").addEventListener("click", function(e) 
    {
        console.log(e);
        console.log(e.target);



    });
        
    var classRoomMap = getClassRoomMap();
    document.getElementById("mainRoom").addEventListener("click",function(event) {  
    
        if(event.target !== event.currentTarget) {
       /*         '<div class="row">' + 
        '<div class="col-xs-12 col-md-10" padding="0px"">' +     
            
    '<p id="ageGroup"></p>'   +
        
        '</div>' +
        '</div>' +
        '<div class="row">' +
        '<div id="teachInfo">' +

            '<h3 class="col-xs-12 col-sm-10" alt="teacherName"></h3>' +
            '<img alt="teacherImg"/>' +
        '</div>' +
        '<div class="row">' +
            
            '<p id ="desc" alt="classDescription"></p>' +
        '</div>' +
    
    '</div>'; */
            //alert(event);
           // document.getElementById("headerDiv").innerHTML = "Our Classrooms";
            //document.getElementById("maincontent").innerHTML = classRoomTemplate;
            //console.log("target id : " + event.target.id);
            
                var roomColor = event.target.id;

                console.log("room color : " + roomColor);
            
                classRooms =classRoomMap.get();

                var roomName=document.getElementById("name");  
                var ageGroup=document.getElementById("ageGroup");            
                var teacherImage=document.getElementById("teachInfo");
                var teacher = document.getElementById("teachInfo");
                var rooomDescription = document.getElementById("desc");
          

                
                roomName.innerHTML="<h1>"+ classRooms.listRoom + "</h1>";
                ageGroup.innerHTML="<h3>" + classRooms.ageGroup + "</h3>";
                teacherImage.innerHTML= classRooms.image;
                teacher.innerHTML = "<h2> Teacher's Name : " + classRooms.teacherName +"</h2>"; 
                rooomDescription.innerHTML= classRooms.description ;         
            } 
            event.stopPropagation();
                }, false); 
     
}()); 






               
function getClassRoomMap() {
        var classRoomMap = new Map();
        
        classRoomMap.set("blue",{ 

                            listRoom:'Blue Room',
                            teacherName:"meera",
                            image:'',
                            ageGroup:'2year-3year',
                            description:'The “Just for Twos” program develops the child’s language, gross motor and small motor skills, Self-discipline, cooperation, creativity, curiosity, and independence are fostered through indoor and outdoor play activities, exploration of manipulative toys, and books.  Art and music are an integral part of the program. The three year olds’ program is designed to help the child develop concepts and language skills necessary for future learning through listening to stories, retelling events, and dramatic play with puppets, music, and movement. A variety of play and art materials give the children a chance to explore. Building with blocks, painting, collage, murals, and constructing with different materials develop the child’s small motor and problem solving skills, and enhance their sense of creativity and self-expression. Daily writing exercises introduce the three’s to creating letters.',
                            
                        });
        classRoomMap.set("green",{
                            listRoom:'Green Room',
                            teacherName:"jessy",
                            image:'',
                            ageGroup:'2ear-3year',
                            description:'The “Just for Twos” program develops the child’s language, gross motor and small motor skills, Self-discipline, cooperation, creativity, curiosity, and independence are fostered through indoor and outdoor play activities, exploration of manipulative toys, and books.  Art and music are an integral part of the program. The three year olds’ program is designed to help the child develop concepts and language skills necessary for future learning through listening to stories, retelling events, and dramatic play with puppets, music, and movement. A variety of play and art materials give the children a chance to explore. Building with blocks, painting, collage, murals, and constructing with different materials develop the child’s small motor and problem solving skills, and enhance their sense of creativity and self-expression. Daily writing exercises introduce the three’s to creating letters.',
                            
                        });

        classRoomMap.set("purple",{
                            listRoom:'Purple Room',
                            teacherName:"indira",
                            image:'',
                            ageGroup:'4years',
                            description:'The four year old child is ready to explore concepts in reading, math readiness, science and social studies as well as the continued growth of language and physical development skills. Our creative program gives the child a thematic hands-on approach to learning new skills and developing new awareness and abilities. Beginning phonics instruction is introduced when the child is ready for this skill. The four year olds curiosity, independence, and self-confidence is fostered through play activities. Manipulative toys, art, music, and field trips enhance the child’s understanding and enjoyment of all that they are learning.',

                        });
        classRoomMap.set("orange",{
                            listRoom:'Orange Room',
                            teacherName:"deepa",
                            image:'',
                            ageGroup:'4years',
                            description:'The four year old child is ready to explore concepts in reading, math readiness, science and social studies as well as the continued growth of language and physical development skills. Our creative program gives the child a thematic hands-on approach to learning new skills and developing new awareness and abilities. Beginning phonics instruction is introduced when the child is ready for this skill. The four year olds curiosity, independence, and self-confidence is fostered through play activities. Manipulative toys, art, music, and field trips enhance the child’s understanding and enjoyment of all that they are learning.',
                        });
        
        classRoomMap.set("red",{
                            listRoom:'Red Room',
                            teacherName:"samjana",
                            image:'',
                            ageGroup:'5years',
                            description:'The five year old child is ready to develop reading, math, and handwriting skills that will prepare them for the more formal learning environment of elementary school. Our program presents science, social studies, music, language, and physical development activities in a weekly thematic format. The reading readiness program focuses on phonic skills, followed by listening comprehension for the child who demonstrates readiness for this skill. Manipulatives are used to learn math concepts. Beginning handwriting skills are taught through a specially designed handwriting program. Creativity, curiosity, and confidence are developed through play activities. Art experiences, manipulative materials, dramatic play, books and games, enhance the child’s concept development. Field trips add to their learning experience.',
                        });

        classRoomMap.set("yellow",{
                            listRoom:'yellow Room',
                            teacherName:"yogi",
                            image:'',
                            ageGroup:'5years',
                            description:'The five year old child is ready to develop reading, math, and handwriting skills that will prepare them for the more formal learning environment of elementary school. Our program presents science, social studies, music, language, and physical development activities in a weekly thematic format. The reading readiness program focuses on phonic skills, followed by listening comprehension for the child who demonstrates readiness for this skill. Manipulatives are used to learn math concepts. Beginning handwriting skills are taught through a specially designed handwriting program. Creativity, curiosity, and confidence are developed through play activities. Art experiences, manipulative materials, dramatic play, books and games, enhance the child’s concept development. Field trips add to their learning experience.',
                        }); 
               
         return classRoomMap;   


    }


var extraClass=[
                {

                    className:"French",
                    teacherName:"Saida",
                    image:"b" ,
                    description: "bbkdbk",
                    tution:"$$",


                },
                {
                    className:"yoga",
                    teacherName:"bdjbd",
                    image:"b" ,
                    description: "bbkdbk",
                    tution:"$$",

                },
                {
                    className: "Ballet",
                    teacherName:"candie",
                    image:"djbjh" ,
                    description:"dkbkjb" ,
                    tution:"$$",

                },
                {
                    className:"Performing Art",
                    teacherName:"fbhgwhg",
                    image:"njkvbd",
                    description:"nkbdkjsk",
                    tution:"$$",

                },
                {
                    className:"Spanish",
                    teacherName:"bxjhxab",
                    image:"bjhxb",
                    description:"bjxhkj",
                    tution:"$$",
                }

                
];
                