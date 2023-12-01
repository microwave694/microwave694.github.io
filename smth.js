let x = 0
function loadcredits(){
	document.getElementsByClassName('textarea')[0].innerHTML = "<h2>Credits!</h2>Page exclusively made by microwave4.<br><br>Huge thanks goes to cutepuppy and granddom for creating the various pins found in all channels.<br><br>Thanks to the entire helper team for creating guides."
}
function load1(){
	document.getElementsByClassName('textarea')[0].innerHTML = "<h2>This section covers everything up until AGHGS30!</h2><br><br>Full early game guide:<br><a href='https://docs.google.com/document/d/1T8WXqSAovEo8_5RtoWslPwyVl9N8TYR-Kep8VrN296s/'>Early game guide</a> Last updated: V0.8.1<br><br>Frequently Asked Questions (FAQ):	<br><br>When do I galactic?<br>Usually just getting more stars than your last one is better until you have hit AGHGS 18+. By then you should have a good feel for when you would want a galactic. If you still struggle with knowing, then potentially set a goal for yourself on how many stars you want. Don't stay too long for your first 3 galactics, your first one should be at 10, the next two should be done quickly to unlock the ability to AGH.<br><br>Where do I spend stars?<br>Stars are best spent in the speed tree first on charge upgrades due to the main issue before AGHGS milestones being charge. Progression mainly serves as a boost to getting Astral and making Autocut better. Automation is good for QOL and takes less than 100k stars to get all the Factory+ Automation which helps a lot. Overall, its best to go for Speed then Automation then Progression.<br><br>When do I get the Star Accumulator. <br>Ignore it until you have gotten steel generation. It takes way too long without steel generation as your steel eventually softcaps before the accumulator cost. Steel generation allows you to sit on the max amount for a while to generate the steel to make up the deficit as well as maxed faster foundry allows for a quick max foundry bonus.<br><br>How do I get AGH milestones fast?<br><br>My recommendation is after your 3rd galactic (Doing an AGH milestone on your 3rd does not count) that you go for AGH 19 for more stars, then a star run (A run getting full grasshops and grass skips trying to get a lot of stars) AGH 13, star run, AGH 7, then AGHGS 6 (AGHGS 6 is easier than AGH 7 because of accomplishments no longer resetting on GH/Steelie)."
}
function load2(){
	document.getElementsByClassName('textarea')[0].innerHTML = "<h2>This section covers everything up until your 1st Supernova!</h2><br><br>Constellation guide:<br><a href='https://docs.google.com/document/d/12ndIb4bepgpUlKYK3qsIHMPDu2M-1BlU5GQMDQ9YuQA/edit#heading=h.p42wg1fjvv0x'>Constellation guide</a> Last updated: V0.8.1 (partially)"
}
function load3(){
	document.getElementsByClassName('textarea')[0].innerHTML = "<h2>This section covers everything up until your 1st Singularity!</h2><br><br>Pushing Persistant Constellations:<br><a href='https://docs.google.com/document/d/1c_94t3AA2-iZ5_cPQoBfRdlM5BMFFc9QqQZD9T5601E/edit?usp=sharing'>Pushing Persistants</a> Last updated: V0.8.1<br><br>Full Supernova Guide (OUTDATED):<br><a href='https://docs.google.com/document/d/1BAFXQ5pLjPNQm4SqnRwXLBdLhAe82NCp_kxcSrXfEg4'>Supernova Guide</a> Last updated V0.6(?)"
}
function load4(){
	document.getElementsByClassName('textarea')[0].innerHTML = "<h2>This section covers everything up until Stage 1000!</h2><br><br>If you have access to the Lethal Games discord server, <a href='https://discord.com/channels/973766909847810098/1055705992173731930/1153598398130303017'>This pin</a> and <a href='https://discord.com/channels/973766909847810098/1093173965226254486/1149579548208414752'>This pin</a> will cover most of this page. <br><br>"
}
function load5(){
	document.getElementsByClassName('textarea')[0].innerHTML = "<h2>This section covers everything up until 1st Super Mega Loop!</h2><br><br>Loop guide (1/2): <br> <a href='https://docs.google.com/document/d/1bwWmN_vIcwApIv20isA4ikQQ1p3Jo5zZ0Zqe7WWJ8kM'>Loop & Mega loop</a> Last updated V0.8.1"
}
function load6(){
	document.getElementsByClassName('textarea')[0].innerHTML = "<h2>This section covers everything up until the end(?) of u1!</h2><br><br>Loop guide (2/2): <br> <a href='https://docs.google.com/document/d/1bCH1Xw36NUKSfzwaGb4xeRIC2rjVxeUEy83gvEmcR5o'>Super mega loop & Super ultra mega loop</a> Last updated V0.8.1"
}
function load7(){
	document.getElementsByClassName('textarea')[0].innerHTML = "<h2>This section covers everything up until the current end of u2 (As of v0.8.1)</h2><br><br>Full U2 guide: <br> <a href='https://docs.google.com/document/d/1y96bNkHLVWIvS3daqwsj8F9MWeps00CcJAgldhNgcaw'>great googly moogly</a> Last updated V0.8.1"
}



function loadbutton1(){
	document.getElementById("buttonrow1").hidden = false
	document.getElementById("buttonrow2").hidden = true
}

function loadbutton2(){
	document.getElementById("buttonrow1").hidden = true
	document.getElementById("buttonrow2").hidden = false
}

function darkmode() {
	if (x == 0) {
		x = 1
		document.body.style.background = "#333333";
		document.getElementsByClassName('die')[0].style = "color:#ffffff"
		document.getElementsByClassName('die')[1].style = "color:#ffffff"
		document.getElementsByClassName('textarea')[0].style.color = "#ffffff"
		document.getElementsByClassName('textarea')[0].style.background = "#1a1a1a"
		document.getElementsByClassName('textarea')[0].style.border.color = "#8c8c8c"
		} else {
			x = 0
		document.body.style.background = "#d9d9d9";
		document.getElementsByClassName('die')[0].style = "color:#000000";
		document.getElementsByClassName('die')[1].style = "color:#000000"
		document.getElementsByClassName('textarea')[0].style.color = "#000000"
		document.getElementsByClassName('textarea')[0].style.background = "#b3b3b3"
		document.getElementsByClassName('textarea')[0].style.border.color = "#8c8c8c"
		}
	
}