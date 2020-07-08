(function (){
	var bar=document.createElement("div");bar.id="topbar";bar.innerHTML=`<ul><li><a href="index.html" class="n-a logo">TechPot Studio</a></li><li><a href="discord.html" class="n-a">社区</a></li><li><a href="command-online-editor.html" class="n-a">指令</a></li></ul>`;document.body.appendChild(bar);
})();

doc = {
	get: function(method, key){
		if(method=="id") return document.getElementById(key);
		if(method=="cls") return document.getElementsByClassName(key);
		if(method=="tag") return document.getElementsByTagName(key);
	},
	loc: function(target="_self", site=""){
		var c=document.createElement("a");c.setAttribute("target", target);c.setAttribute("href", site);document.body.appendChild(c);c.click();document.body.removeChild(c);
	},
	download: function(filename, text) {
	  var c = document.createElement('a');c.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));c.setAttribute('download', filename); c.style.display = 'none';document.body.appendChild(c);c.click();document.body.removeChild(c);
	}
}
