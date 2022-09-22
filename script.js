//COOKIES
// A cookie is an amount of information that persists between a server-side and a client-side.

// A web browser stores this information at the time of browsing.

//JavaScript ile cookie oluşturmak için document nesnesi kullanılır.

document.cookie ="name=Senanur"

//Tarayıcı kapatıldında silinir.

//JavaScript çerez oluşturma sırasında belirli bir saat ve tarihe kadar çerezin aktif kalması için "express" kullanılır.
//JavaScript çerez oluşturma sırasında belirli bir süre aktif kalması için "max-age" kullanılır.

document.cookie = "name=Senanur; expires=Friday, 23 September 2022 12:00: UTC;";

document.cookie = "name=Senanur; max-age="+60*60*24*2;

//JavaScript Cookie Oluşturma, Düzenleme ve Silme Fonksiyonu SET

function setCookie(cname, cvalue, exdays) {
   var exdate=new Date();
   exdate.seTime(exdate.getTime() + exdays);
   var cvalue=escape(value) + ((exdays==null) ? "" : "; path=/; experis="+exdate.toUTCString());
   document.cookie=cname + "=" + cvalue;
   }
   
//JavaScript Cookie Okuma Fonksiyonu GET
 
 function getCookie(cname){
         var i,x,y,ARRcookies=document.cookie.split(";");
         for(i=0;i<ARRcookies.lenght;i++)}
              x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
              y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
              x=x.replace(/^s+|s+$/g,"");
              if(x==cname){
                    return unescape(y);
                    
 //SESSIONSTORAGE
 
 //The sessionStorage object stores data only for a session.
 
 //It means that the data stored in the sessionStorage will be deleted when the browser is closed.


sessionStorage.setItem(key, value)
sessionStorage.setItem("name", "Senanur");

sessionStorage.getItem(key);
output: Senanur;

sessionStorage.clearItem();
output:


