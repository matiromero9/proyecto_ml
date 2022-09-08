const express = require('express')
const path = require('path')

// Definición app

const app= express();

// Indicar que la carpeta public es de recursos estáticos

app.use(express.static(path.join(__dirname, '/public')));


// Poner a correr el servidor en el puerto 3001

app.listen(process.env.PORT || 3030, () => {
    console.log('Servidor corriendo en puerto 3030')
})

//Vista home
app.get("/",(req, res)=>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"))
})

