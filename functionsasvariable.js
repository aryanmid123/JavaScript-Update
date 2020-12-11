/*
Define a function that can answer the role of a user.
A user can be on following roles;
admin-with all access 
subadmin-with access to create/delete courses
testprep-with access to create/delete tests
user-consume all content
other-trial user
Input:getUserRole(name,role)(we are passing 2 things)




function.getUserRole(name,role)
{
switch(role)
{
case "admin";
return '${name} is admin with all access';
break; //this is not necessary
case "subadmin";
return '${name} is subadmin with access to create/delete courses';
break; //this is not necessary
case "testprep";
return '${name} is testprep with  access to create/delete tests';
break; //this is not necessary
case "user";
return '${name} is user to consume all the content';
break; //this is not necessary
default:
return '${name} is a trial user'
break;
}
}
getUserRole("Aryan","testprep");
