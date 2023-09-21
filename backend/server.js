const express =  require ('express');

const app = express();


//get a list of all users
app.get ('/api/users',  (req, res) => {
     res.send ( 
     [
      { id: 1, name: 'Sosa, Jeffrey', age: 100 },
      { id: 2, name: 'Castillo, Ryan', age: 90 },
      { id: 3, name: 'Arcasiteas, William', age: 80 },
      { id: 4, name: 'Rizal, Jose', age: 70 },
      { id: 5, name: 'Santos, Albert', age: 50 },
     ]

     )
    
} )


app.get ('/hi', (req, res) => {
       res.send ('<h1> nginx testing 101 </h1>');
})

app.get ('/', (req, res) => {
     res.send ('<h1> nginx root jeff 101 </h1>');
})


// process.env.PORT || 8000

const port = 8000 ;

app.listen (port, () => console.log(`listening on port ${port}`))
