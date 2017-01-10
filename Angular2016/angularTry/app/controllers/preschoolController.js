(function(){	

		
	function PreschoolController(){

			this.filtTxt='';
			$this.classRooms=[{
							listRoom:'Blue Room',
	                        teacherName:'Meera',
	                        img:'./img/IMG_0960.jpg',
	                        ageGroup:'2year-3year',
	                        description:'The Just for Twos program develops the child’s language, gross motor and small motor skills, Self-discipline, cooperation, creativity, curiosity, and independence are fostered through indoor and outdoor play activities, exploration of manipulative toys, and books.  Art and music are an integral part of the program. The three year olds’ program is designed to help the child develop concepts and language skills necessary for future learning through listening to stories, retelling events, and dramatic play with puppets, music, and movement. A variety of play and art materials give the children a chance to explore. Building with blocks, painting, collage, murals, and constructing with different materials develop the child’s small motor and problem solving skills, and enhance their sense of creativity and self-expression. Daily writing exercises introduce the three’s to creating letters.'
				},

				{ 	
							listRoom:'Green Room',
				   			teacherName:'Jessie',
	                        img:'./img/IMG_0960.jpg',
	                        ageGroup:'2year-3year',
	                        description:'The Just for Twos program develops the child’s language, gross motor and small motor skills, Self-discipline, cooperation, creativity, curiosity, and independence are fostered through indoor and outdoor play activities, exploration of manipulative toys, and books.  Art and music are an integral part of the program. The three year olds’ program is designed to help the child develop concepts and language skills necessary for future learning through listening to stories, retelling events, and dramatic play with puppets, music, and movement. A variety of play and art materials give the children a chance to explore. Building with blocks, painting, collage, murals, and constructing with different materials develop the child’s small motor and problem solving skills, and enhance their sense of creativity and self-expression. Daily writing exercises introduce the three’s to creating letters.',
	            },
	            {			listRoom:'Purple Room',
	                        teacherName:"indira",
	                        image:'',
	                        ageGroup:'4years',
	                        description:'The four year old child is ready to explore concepts in reading, math readiness, science and social studies as well as the continued growth of language and physical development skills. Our creative program gives the child a thematic hands-on approach to learning new skills and developing new awareness and abilities. Beginning phonics instruction is introduced when the child is ready for this skill. The four year olds curiosity, independence, and self-confidence is fostered through play activities. Manipulative toys, art, music, and field trips enhance the child’s understanding and enjoyment of all that they are learning.',
	            },            
	            {
	            		listRoom:'Orange Room',
	                    teacherName:"deepa",
	                    image:'',
	                    ageGroup:'4years',
	                    description:'The four year old child is ready to explore concepts in reading, math readiness, science and social studies as well as the continued growth of language and physical development skills. Our creative program gives the child a thematic hands-on approach to learning new skills and developing new awareness and abilities. Beginning phonics instruction is introduced when the child is ready for this skill. The four year olds curiosity, independence, and self-confidence is fostered through play activities. Manipulative toys, art, music, and field trips enhance the child’s understanding and enjoyment of all that they are learning.',
	            },
				{		listRoom:'Red Room',
	                    teacherName:"samjana",
	                    image:'',
	                    ageGroup:'5years',
	                    description:'The five year old child is ready to develop reading, math, and handwriting skills that will prepare them for the more formal learning environment of elementary school. Our program presents science, social studies, music, language, and physical development activities in a weekly thematic format. The reading readiness program focuses on phonic skills, followed by listening comprehension for the child who demonstrates readiness for this skill. Manipulatives are used to learn math concepts. Beginning handwriting skills are taught through a specially designed handwriting program. Creativity, curiosity, and confidence are developed through play activities. Art experiences, manipulative materials, dramatic play, books and games, enhance the child’s concept development. Field trips add to their learning experience.',

				},
				{			listRoom:'Yellow Room',
	                        teacherName:"Yogi",
	                        image:'',
	                        ageGroup:'5years',
	                        description:'The five year old child is ready to develop reading, math, and handwriting skills that will prepare them for the more formal learning environment of elementary school. Our program presents science, social studies, music, language, and physical development activities in a weekly thematic format. The reading readiness program focuses on phonic skills, followed by listening comprehension for the child who demonstrates readiness for this skill. Manipulatives are used to learn math concepts. Beginning handwriting skills are taught through a specially designed handwriting program. Creativity, curiosity, and confidence are developed through play activities. Art experiences, manipulative materials, dramatic play, books and games, enhance the child’s concept development. Field trips add to their learning experience.',

				}];

						this.classRooms=classRooms;

						this.select=function(setTab){
											
							/*switch(setTab) {
								case 1:
									this.filtTxt="Blue Room";
									break;
								case 2:
									this.filtTxt="Green Room";		
									break;
								case 3:
									this.filtTxt="Purple Room"
									break;
								case 4:
									this.filtTxt="Orange Room"
									break;
								case 3:
									this.filtTxt="Red Room"
									break;
								case 3:
									this.filtTxt="Yellow Room"
									break;
								default:
									this.filtTxt="Blue Room"		
							}*/

							if (setTab===1){
								this.filtTxt="Blue Room";
							}
							else if(setTab===2){
								this.filtTxt="Green Room";
							}
							else if (setTab===3){
								this.filtTxt="Purple Room";
							}
						    else if(setTab===4){
								this.filtTxt="Orange Room";
							}						
							else if(setTab===5){
								this.filtTxt="Red Room";
							}						
							else {
								this.filtTxt="Yellow Room";
							}
						};
			}


		PreschoolController.$inject=['this','PreschoolFactory']; // uglificationa and minification will not change the name of dependecy like scope
			angular.module("preschoolApp").controller("PreschoolController",PreschoolController);
}());
		
