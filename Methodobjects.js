var user={
         firstName:"Aryan";
         lastName:"Middlagajani";
         role:"Admin";
         loginCount:32;
         facebookSignedIn:true;
         courseList:[],
         buyCourse:function(courseName){
         this.courseList.push(courseName);//We are using thiis keyword instead of variable user
         };
         getCourseCount:function(){
         return '${this.firstName} is enrolled in total of $ {this.courseList.length} courses;
         };
         };
