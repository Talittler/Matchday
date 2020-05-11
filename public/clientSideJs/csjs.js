console.log("client side JS is loaded")

const loadFs = require('fs')

const predictionForm = document.getElementById('scoreInput')
const predictionFormElements = document.getElementById('scoreInput').elements
//const searchForm = document.querySelector('input')

const searchForm = document.querySelector('input')



const loadNotes = function() {
	try {
	const loadFile = loadFs.readFileSync('notes.json')
	const dataJson = loadFile.toString()
	return JSON.parse(dataJson)		
} catch (e) {
	return[] //this will create the file with an array that is empty so not defined to limit the file to 1 code type
	}

} 

const saveScores = function(notes) {
   const dataJson = JSON.stringify(notes)
   loadFs.writeFileSync('notes.json',dataJson)
}


const addNote = function(predictionFormElements) {
  // let predArray = []; 
   const notes = loadNotes();
   for(let i = 0; i < predictionFormElements.length-1; i++){
               console.log('{' + predictionFormElements[i].name + ':"' +predictionFormElements[i].value + '"}')
               notes.push(predictionFormElements[i].name + ':' + predictionFormElements[i].value)
            }
   
   	
   

   console.log(notes)
   saveScores(notes) 

   
}


// //add an event listener
predictionForm.addEventListener('submit',(event) => {
   
   event.preventDefault() 
   event.addNote

                                                                          
  })
 