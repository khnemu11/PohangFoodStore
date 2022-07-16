$(document).ready(function(){
    var url = "http://data.pohangfood.kr/openapi/service/getPHFoodList?numOfRows=12";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { 
            parseXML(this.responseXML); 
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();

    
});
function parseXML(xml){
    var row = xml.getElementsByTagName("item");
    console.log(row.length);
    var card="";
    for(i = 0; i<row.length;i++){
     card+= "<div class = \"mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--4-col-phone \"><div class=\"demo-card-wide mdl-card mdl-shadow--2dp\">;
     card+="<div class=\"mdl-card__title\" data-dataKey=\""
     card+= row[i].getElementsByTagName("dataKey")[0].childNodes[0].nodeValue;
     card+="\" style=\"background: url(\'";
     if(row[i].getElementsByTagName("thumbImg")[0].childNodes[0]) {
        card+=row[i].getElementsByTagName("thumbImg")[0].childNodes[0].nodeValue;
     }
     card+="\') center / cover\"><h2 class=\"mdl-card__title-text\">";
        if( row[i].getElementsByTagName("title")[0].childNodes[0]){
            card+=row[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        }   
        card+="</h2></div><div class=\"mdl-card__supporting-text\">"
        card+="<div class=\"address\">";
        if(row[i].getElementsByTagName("address")[0].childNodes[0]){
            card+=row[i].getElementsByTagName("address")[0].childNodes[0].nodeValue;
        }
        card+="</div><br>"; 
        if(row[i].getElementsByTagName("food")[0].childNodes[0]){
            card+="<div class=\"food\">"+row[i].getElementsByTagName("food")[0].childNodes[0].nodeValue+"</div>";
        }
        card+="</div><div class=\"mdl-card__actions mdl-card--border\"><a class=\"mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect\">"
        if(row[i].getElementsByTagName("tel")[0].childNodes[0]){
            card+=row[i].getElementsByTagName("tel")[0].childNodes[0].nodeValue;
        }
        card+="</a></div><div class=\"mdl-card__menu\"></div></div></div>"
    }
    $(".page-content").html(card);

    var totalCount = xml.getElementsByTagName("totalCount")[0].childNodes[0].nodeValue;
    var pageNo = xml.getElementsByTagName("pageNo")[0].childNodes[0].nodeValue;
    var numOfRows = 12;

    var pageNum = Number(pageNo);
    var page = "";
    var totalPage = 0;
    234
    if(pageNum>2){
        var temp = pageNum - 2 ;
        page+="<span class=\"page\">"+temp+"</span>"
        temp = pageNum - 1 ;
        page+="<span class=\"page\">"+temp+"</span>"
        totalPage=2;
    }
    else if(pageNum>1){
        var temp = pageNum - 1 ;
        page+="<span class=\"page\">"+temp+"</span>"
        totalPage=1;
    }
    for( i=0;i<(5-totalPage);i++){
        var temp = pageNum + i;
        page+="<span class=\"page\">"+temp+"</span>";
        if(temp*numOfRows>totalCount){
            break;
        }
    }

    $(".pagination").html(page);
} 
$(document).on("click",".page",function(){
    console.log("click!");
    var page =$(this).text();
    console.log(page);

    var url = "http://data.pohangfood.kr/openapi/service/getPHFoodList?numOfRows=12&pageNo="+page;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) { 
            parseXML(this.responseXML); 
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
})
$(document).on("click",".search",function(){
    console.log("search click!");
    var context =$(this).val();
    if($(this).val()){
        console.log(context);
        var url = "http://data.pohangfood.kr/openapi/service/getPHFoodList?numOfRows=12&searchKey="+context;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) { 
                parseXML(this.responseXML); 
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
})