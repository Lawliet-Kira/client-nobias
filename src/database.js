const {createPool} = require('mysql')

const entcode = 'RR3F3MC2'

const pool = createPool({
    host:"b2fkm7btnwzbsxqqtnid-mysql.services.clever-cloud.com",
    user:"uwgkp87cpt4x9t57",
    password:"Ij7KwdVLn75BDWy0a8HI",
    connectionLimit: 10
})

pool.query(`select chatresp.id, chatresp.type from b2fkm7btnwzbsxqqtnid.chatresp join b2fkm7btnwzbsxqqtnid.trabajadores ON chatresp.id = trabajadores.id_usuario WHERE trabajadores.entcode = '${entcode}'`, (err, res)=>{
    const data = JSON.parse(JSON.stringify(res))
    let tipos = [0,0,0,0]
    let total = 0
    for(let i = 0; i < data.length ; i++){
        tipos[data[i].type-1] += 1
        total += 1
    }
    var datos = {}
    tipos[0] = Math.round(tipos[0]*100/total)
    tipos[1] = Math.round(tipos[1]*100/total)
    tipos[2] = Math.round(tipos[2]*100/total)
    tipos[3] = Math.round(tipos[3]*100/total)
    return console.log(tipos)
})