ext = false

var $ulList = document.querySelectorAll('ul')
var $olList = document.querySelectorAll('ol')
var $dlList = document.querySelectorAll('dl')
const $button = document.getElementById('showList')
const $textHere = document.getElementById('text-here')

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

function listCounter() {
	if (ext == false) {
		$textHere.innerHTML = `<p>` + 'UL Lists: ' + $ulList.length + `</p>`
	} else if (ext == true) {
		$textHere.innerHTML = ''
	}
}

// Works here
console.log($ulList)
console.log($ulList.length)


// This works without the popup
//// browser.runtime.onConnect.addListener(addListBorders);

 
// This makes the popup work
$button.addEventListener('click', function() {
	 browser.tabs.executeScript({code: 'addListBorders()'})
	 
	 if (ext == false) {	
		$button.textContent = 'Hide Lists'
		
		// Broken - does not interact with page content
		listCounter()
		
		ext = true
		
	} else if (ext == true) {
		$button.textContent = 'Show Lists'
		
		//Broken
		listCounter()
		
		ext = false
	}
	 
})
