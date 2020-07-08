numbers = "<!---->";
mainCommandList = ["kill", "gamemode", "gamerule", "attribute", "say", "me", "tellraw", "tp", "xp", "fill", "setblock", "execute", "#", "spawnpoint", "setworldspawn", "function", "give"]

function doinput(){
	//doc.get("id", "edit").value = doc.get("id", "edit").value.replace(/(^\/\/\/thank|(?!\n)\/\/\/thank)/gi, "# powered by TechPot Studio Command Online Editor Beta 1.0\n# ------------------------------------------------------------------------\n# More details at https://techpot-studio.github.io/command-online-editor.html").replace(/(^\/\/\/lock2|(?!\n)\/\/\/lock2)/gi, "gamemode adventure @a[gamemode=!adventure]").replace(/(^\/\/\/lock0|(?!\n)\/\/\/lock0)/gi, "gamemode survival @a[gamemode=!survival]").replace(/(^exprience|(?!\n)exprience)/gi, "xp").replace(/(^teleport|(?!\n)teleport)/gi, "tp")
	doc.get("id", "edit").value = doc.get("id", "edit").value.replace(/^exprience|(?!\n)exprience/gi, "xp").replace(/^teleport|(?!\n)teleport/gi, "tp")
	var s = doc.get("id", "edit").value.replace(/\r/gi, "").split("\n").length;
	for(var i = 1; i <= s; i++){
		numbers += i + "<br />";
	}
	if(doc.get("id", "number").innerHTML !== numbers) doc.get("id", "number").innerHTML = numbers;
	numbers = "<!---->";
	checkSyntax();
}

function doscroll(){
	doc.get("id", "number").scrollTop = doc.get("id", "edit").scrollTop;
}

function checkSyntax(){
	var codeList = doc.get("id", "edit").value.replace(/\r/gi, "").split("\n");
	var wrong = function() {eval(`doc.get("id", "number").innerHTML = doc.get("id", "number").innerHTML.replace(/>${i+1}</g, "><wrong>${i+1}</wrong><")`);}
	var special = function() {eval(`doc.get("id", "number").innerHTML = doc.get("id", "number").innerHTML.replace(/>${i+1}</g, "><special>${i+1}</special><")`);}
	for(var i = 0; i < codeList.length; i++){
		var line = codeList[i];
		var firstWord = line.split(" ")[0];
		//if(firstWord.match(/\/\/?\/?.*/g)) {
		//	continue;
		//}
		if(mainCommandList.indexOf(firstWord) > -1 || line == "") {
			if(firstWord === "gamemode") {
				if(line.match(/gamemode (creative|adventure|survival|speactator) .*?/g) === null){wrong();}
			}
			if(firstWord === "attribute") {
				if(line.match(/attribute .*? (generic\.attack_speed|generic\.knockback_resistance|generic\.attack_damage) \d(\.\d)*/g) === null){wrong();}
			}
		} else {
			wrong();
		}
	}
}
/*
	var code = doc.get("id", "edit").value;
	var codeList = code.replace(/\r/gi, "").split("\n");
	for(var i = 1; i <= codeList.length; i++){
		var line = codeList[i-1];
		var lineSplit = line.split(" ")
		var wrong = function() {eval(`doc.get("id", "number").innerHTML = doc.get("id", "number").innerHTML.replace(/>${i}</g, "><wrong>${i}</wrong><")`);}
		if(mainCommandList.indexOf(lineSplit[0]) > -1) {
			if(lineSplit[0] == "execute") {
				
				var executeSplit = line.split(/(?=execute)|(?= align)|(?= at)|(?= if)|(?= store)|(?= as)|(?= positioned)|(?= rotated)|(?= in)|(?= run)/g)
				for(var i = 0; i < executeSplit.length; i++) {
					var executeChildSplit = executeSplit[i].split(" ")
					console.log(`${executeSplit} and ${i}:${executeChildSplit}`)
					if(executeChildSplit[0] == "execute") continue;
					if(executeChildSplit[1] == "run") break;
					if(executeChildSplit[1] == "if") {
						if(["score", "block", "entity", "data"].indexOf(executeChildSplit[2]) == -1) {
							wrong();
							continue
						}
						if(executeChildSplit[2] == "block") {
							if(executeChildSplit[6]) {
								continue
							} else {
								wrong();
								break;
							}
						}
						if(executeChildSplit[2] == "score") {
							console.log("score")
							console.log(executeChildSplit[5])
							if(["matches", "=", "<", ">", "<=", ">=", "><"].indexOf(executeChildSplit[5]) > -1) {
								if(executeChildSplit[5] == "matches") {
									if(executeChildSplit[6] === undefined) executeChildSplit.splice(6, 0, "")
									if(executeChildSplit[6].match(/(^\d\.\.\d$)|(^\.\.\d$)|(^\d\.\.$)|(^\d$)/g) == null) {
										wrong();
										break
									}
								} else {
									continue
								}
							} else {
								wrong();
								break
							}
						}
					}
					if(executeChildSplit[1] == ""){}
				}
				
			}
			if(lineSplit[0] == "gamemode") {
				if(["creative", "adventure", "speactator", "survival"].indexOf(lineSplit[1]) == -1) {
					wrong()
				}
			}
		} else if(!!(line)) {
			wrong()
		}
	}
}*/