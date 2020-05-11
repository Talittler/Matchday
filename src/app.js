const loadPath = require('path')
const loadExpress = require('express') //http requests to get pages
const loadHbs = require('hbs') //handlebars
const loadFs = require('fs') //file system for writing to server
//const loadFunctions = require('./utils/functions.js')


const app = loadExpress() //called app in notes
app.use(loadExpress.static(loadPath.join(__dirname,'../public'))); //create the public directory and in the server, you can serve static files such as images, fonts, CSS files, and JavaScript files, use the express.static built-in middleware function in Express. Now you can load files in the public directory
//define paths for express.config
const fileDirectory = '/Users/timothylittler/GoogleDrive/TALITTLERLTD/Javascript/Matchday_Web/public'

const port = process.env.PORT || 3000 

/********************************************* */
/********** set up handlebars.config ***********/
/********************************************* */

app.set('view engine', 'hbs') //install handlebers npm package (i hbs) which is an extension for express. This line loads hbs in. Syntax must be exact match
//it expects all the files to live in a folder "views" saved at the root folder. So for this it is webServer as the root
//app.set('views', loadPath.join(__dirname,'../views') //default is views but can set this to be any location for the handlebars docs
app.set('views', loadPath.join(__dirname,'../handle_bar/views')) //changing the location for handlbars
const partialsPath = loadPath.join(__dirname,'../handle_bar/partials')
loadHbs.registerPartials(partialsPath)

//get the handlebars page:
app.get('', (req, res) => { 
    res.render('index', { //render allows us to render the handlebars template. index is the name of the file
    //the second argument injects data into the html doc utilising handlbars
                            title: 'This is Matchday'
                        ,	name: 'Talfie'
                        })
} ) 


app.get('/predictions', (req, res) => { 
    res.render('predictions', { 
                            title: 'Enter your predictions'
                        ,	name: 'Talfie'
                        })
} ) 

app.get('/fixtures', (req, res) => { 
    res.render('fixtures', { 
                            title: 'Pick you gameweek fixtures'
                        ,	name: 'Talfie'
                        })
} ) 

app.get('/live_scores', (req, res) => { 
    res.render('live_scores', { 
                            title: 'Active game week results'
                        ,	name: 'Talfie'
                        })
} ) 


//putting in a 404 page not found display. Using * as a wild card character. Has to come last so every other search for a directoy has been completed
app.get('*',(req,res) =>{
	res.render('404', { title: 'Page not found. Options below:'
					,	name: 'Talfie'
					,	msg: 'URL not found, please navigate using the search bar above'
					})
})



app.listen(port, () => {
	console.log("Server is up on port " + port)
}) //starts up the server and lists on a specific port. port 3000 works on local machine
