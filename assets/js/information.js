// window.onload=function(){ 
//     gettime();  //js获取当前时间
//     getip();    //js获取客户端ip
//     // geturl();    //js获取客户端当前url
//     // getrefer();    //js获取客户端当前页面的上级页面的url
//     getuser_agent();       //js获取客户端类型
//     // getcookie()  //js获取客户端cookie
//     // loadXMLDoc();
// }
function gettime(){
    var nowDate = new Date();
    return nowDate.toLocaleString();
}
// function geturl(){
//     return window.location.href;
// }
function getip(){
    return returnCitySN["cip"]+','+returnCitySN["cname"];
}
// function getrefer(){
//     return document.referrer;
// }
// function getcookie(){
//     return document.cookie;
// }
function getuser_agent(){
    return navigator.userAgent;
}
// function loadXMLDoc(){  
//     var xmlhttp;  
//     if (window.XMLHttpRequest){    
//         xmlhttp=new XMLHttpRequest();  
//     }else{  
//         xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");  
//     }  
//     xmlhttp.onreadystatechange=function(){  
//         if (xmlhttp.readyState==4 && xmlhttp.status==200){  
//         }  
//     } 
//     xmlhttp.open("POST","http://analysis.wml.com:8088/log.php",true);  
//     xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");  
//     xmlhttp.send("time="+gettime()+"&ip="+getip()+"&url="+geturl()+"&refer="+getrefer()+"&user_agent="+getuser_agent()+"&cookie="+getcookie());
// }  