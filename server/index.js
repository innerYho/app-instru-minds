const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const app = express()
const cors = require('cors');
app.use(cors({origin:true}));


//port
app.set('port', process.env.PORT || 9000)
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Bogota2021*',
    database: 'db_instru-minds'
}

//----middlewares
//single estrategia de coexi+on con bds para hacer pull & request
app.use(myconn(mysql, dbOptions, 'single'))

app.listen(app.get('port'), ()=>{
    console.log('el servidor corre en el puerto ', app.get('port'))
})


//-------------rutas
//require('./instrument')(app);
app.use('/rt_ins', require('./rt_ins'))

//prueba de conexión
app.get('/', (req, res)=>{
    res.send('prueba exitos de la api')
})