ext = false;

var $ulList = document.querySelectorAll('ul')
var $olList = document.querySelectorAll('ol')
var $dlList = document.querySelectorAll('dl')

function addListBorders() {
    if (ext == false) { 
		
		for (let $ul of $ulList) {
			$ul.style.border = "5px solid pink"
		}
		for (let $ol of $olList) {
			$ol.style.border = "5px solid pink"
		}
		for (let $dl of $dlList) {
			$dl.style.border = "5px solid hotpink"
		}
		
		ext = true
		
	} else { 
		
		for (let $ul of $ulList) {
			$ul.style.border = "none"
		}
		for (let $ol of $olList) {
			$ol.style.border = "none"
		}
		for (let $dl of $dlList) {
			$dl.style.border = "none"
		}
		
		ext = false
	}
} 

// This works without the popup
 //browser.runtime.onConnect.addListener(addListBorders);

// This make the popup work
const $button = document.getElementById('showList')

$button.addEventListener('click', function() {
	 browser.tabs.executeScript({code: 'addListBorders()'});
})
