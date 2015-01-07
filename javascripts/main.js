function displayArticle(title, body){

var template="<article><h3>%title%</h3><span>%body%</span></article>".replace('%title%', title).replace('%body%', body);


document.getElementById("main-content").innerHTML += template;



}

displayArticle("Hello World!","Hmmm... This is interesting");
