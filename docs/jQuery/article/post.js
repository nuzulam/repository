$(function(){
function disp(div) {var a = [];
for(var i=0;i<div.length;i++) {a.push(div[ i ].innerHTML);}
$("nav.nav li .arttoc-1").html(a.join(""));}
disp($(".section-article .content-post-view > #arttoc-1 + h2").toArray().reverse());
});
$(function(){
function disp(div) {var a = [];
for(var i=0;i<div.length;i++) {a.push(div[ i ].innerHTML);}
$("nav.nav li .arttoc-2").html(a.join(""));}
disp($(".section-article .content-post-view > #arttoc-2 + h2").toArray().reverse());
});
