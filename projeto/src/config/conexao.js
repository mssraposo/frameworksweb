const mysql = require('mysql');
const environment = "development";
const config = require("../config/config.js")[environment];


const con = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
});

con.connect((err) => {
    if (err) {
        console.log('Erro ao conectar...', err)
        return
    } 
        console.log('Conexão realizada com sucesso!')
})

const cadastro = {
    titulo:'Saco de Ossos',
    autor: 'Stephen King',
    genero:'Suspense / Horror',
    editora: 'Ponto de Leitura',
    preco: 45.99
    }


con.query('INSERT INTO cadastro SET ? ', cadastro, (err,rows) => {
    if(err) throw err
    console.log("Registro salvo com sucesso");
})


con.query('select * from cadastro', (err,rows) => {
    if(err) throw err
    console.log('Cadastros', rows, '\n\n')
})

con.query('UPDATE cadastro SET preco = ? where ID = ? ', [41.21, '1'], (err,rows) => {
    if(err) throw err
    console.log("Preço atualizado com sucesso!");
})


con.query('DELETE FROM cadastro where ID = ? ', ['1'], (err,resultado) => {
    if(err) throw err
    console.log(`Foram excluida(s) ${resultado.affectedRows} linha(s)`);

})


con.end((err) => {
    if(err){
        console.log('Erro ao finalizar conexão...', err)
        return
    }
    console.log('Conexão encerrada...')
})