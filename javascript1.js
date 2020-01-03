window.addEventListener("load",function(){
    /*
    //ex1)
    var textX=document.getElementById("text_x");
    var textY=document.getElementById("text_y");
    var btAdd=document.getElementById("bt_add");
    var textSum=document.getElementById("text_sum");
    */

    /*
    //ex2)
    var sec1 = document.getElementById("sec1");
    var inputs=sec1.getElementsByTagName("input");
    var textX = inputs[0];
    var textY = inputs[1];
    var btAdd = inputs[2];
    var textSum = inputs[3];
    btAdd.onclick=function(){
    var x= parseInt(textX.value);
    var y= parseInt(textY.value);
    textSum.value = x+y;
    */

    //ex3)
//     var sec2 = document.getElementById("sec2");
//     var textX = sec2.querySelector(".text_x");
//     var textY = sec2.querySelector(".text_y");
//     var btAdd = sec2.querySelector(".bt_add");
//     var textSum = sec2.querySelector(".text_sum");
//     btAdd.onclick=function(){
//     var x= parseInt(textX.value);
//     var y= parseInt(textY.value);
//     textSum.value = x+y;
// }

/* var section6 = document.querySelector("#section6");
var titleInput = section6.querySelector(".title-input");
var add = section6.querySelector(".add");
var del = section6.querySelector(".del");
var list = section6.querySelector(".list");

add.onclick = function(){
    title1 = titleInput.value;
list.innerHTML +='<li><a href="">'+title1+'</a></li>';
}
del.onclick=function(){
var title1 = list.children[0];
list.removeChild(title1);
} */

var section7 = document.querySelector("#section7");
var cloneButton = section7.querySelector(".clone-button");
var templateButton = section7.querySelector(".template-button");
var noticeList = section7.querySelector(".notice-list");
var tbodyNode = noticeList.querySelector("tbody");

var notices=[
    {id:5, title:"ㅁㅁ", regDate:"2019-01-26",writerId:"dd"},
    {id:6, title:"dddddㅁ", regDate:"2019-01-26",writerId:"d3d"}

];

cloneButton.onclick=function(){
    var trNode = noticeList.querySelector("tbody tr");
    var cloneNode = trNode.cloneNode(true);
    var tds = cloneNode.querySelectorAll("td");
    tds[0].textContent = notices[0].id;
    tds[1].innerHTML ='<a href="'+notices[0].id+'">'+notices[0].title+'</a>'
    tds[2].textContent = notices[0].regDate;
    tds[3].textContent = notices[0].writerId;
    tds[4].textContent = notices[0].hit;


    tbodyNode.append(cloneNode);
}
templateButton.onclick = function(){

}
});