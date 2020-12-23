console.log(this);
var user={
firstName:"Aryan";
coursecount:4;
getCourseCount:function()
{
console.log("LINE 7",this);
function sayHello()
{
console.log("Hello");
console.log("LINE 10",this);
}
sayHello();
};
};


                          OUTPUT IN BROWSERS BE LIKE 
                          
                          
                          //Window{Parent:window,opener:null,top;
                          Window,length:0,frame:Window, }
                          LINE 7
                          >{firstName:"Aryan",CourseCount:4,getcoursecount
                          Hello
                          LINE 10
                          Window{Parent:Window,Opener:null.top:
                          Window,length:0,frames....Window.....}
