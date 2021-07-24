const express = require('express');
const rt_ins = express.Router()


//---------Leer todo ok
rt_ins.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM tbl_instruments', (err, rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })

    })
})

//filtrar
rt_ins.get('/:ins_id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('SELECT * FROM tbl_instruments WHERE ins_id = ?', [req.params.ins_id], (err, row)=>{
            if(err) return res.send(err)
            console.log(res.json)
            res.json(row)
        })
    })
})

//crear
rt_ins.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO tbl_instruments set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.send('ins fue agregado!!')
        })
    })
})



//actualizar
rt_ins.put('/:ins_id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE tbl_instruments set ? WHERE ins_id = ?', [req.body, req.params.ins_id], (err, rows)=>{
            if(err) return res.send(err)
            res.send('ins fue actualizado!!')
        })
    })
})



module.exports = rt_ins