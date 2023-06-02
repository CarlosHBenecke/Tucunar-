var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function avaliarResultado(id,fkModalidade,fkEspecie,fkAssiduidade,notaQuiz,fkTrofeu){
    var instrucao =`
        update usuario set fkModalidade='${fkModalidade}',fkEspecie='${fkEspecie}',fkAssiduidade='${fkAssiduidade}',notaQuiz='${notaQuiz}',fkTrofeu='${fkTrofeu}' where id='${id}';
    `;
    return database.executar(instrucao);
}

function obterDados(){
    var instrucao=`
    select distinct especies.nomePopular, count(fkEspecie) as votos from usuario join especies on usuario.fkEspecie=especies.idespecie group by fkEspecie order by votos desc limit 5 ;
    `
    return database.executar(instrucao);
}

function obterMedia(){
    var instrucao=`
    select truncate(avg(notaQuiz),2) as mediaNotaQuiz from usuario;
    `
    return database.executar(instrucao);
}

function obterModalidade(){
    var instrucao=`
    select distinct Modalidade.tipo, count(fkModalidade) as contagem from Modalidade join usuario on fkModalidade=idModalidade group by fkModalidade;
    `
    return database.executar(instrucao);
}

function obterAssiduidade(){
    var instrucao=`
    select distinct Assiduidade.vezesNoAno, count(fkAssiduidade) as pescarias from usuario join assiduidade on usuario.fkAssiduidade=assiduidade.idAssiduidade group by fkAssiduidade order by pescarias desc;
    `
    return database.executar(instrucao);
}

function obterTrofeu(){
    var instrucao=`
    select distinct trofeu.faixaTamanho, count(fktrofeu) as trofeu from usuario join trofeu on usuario.fktrofeu=trofeu.idtrofeu group by fktrofeu order by trofeu desc;
    `
    return database.executar(instrucao);
}
function userData(id){
    var instrucao=`
    select assiduidade.vezesNoAno, especies.NomePopular, modalidade.tipo, trofeu.faixaTamanho, usuario.notaQuiz from usuario 
join assiduidade on fkassiduidade=idassiduidade
join especies on fkespecie=idespecie
join modalidade on fkmodalidade=idmodalidade
join trofeu on fktrofeu=idtrofeu
where usuario.id='${id}';
    `
    return database.executar(instrucao);
}
module.exports = {
    entrar,
    cadastrar,
    listar,
    avaliarResultado,
    obterDados,
    obterMedia,
    obterModalidade,
    obterAssiduidade,
    obterTrofeu,
    userData
};