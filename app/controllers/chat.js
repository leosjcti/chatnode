module.exports.iniciaChat = function(application, req, res){

    //Através do middleware body-parser ele popula o body com dados do formulario
    var dadosForm = req.body;

    //Valida os campos através do middleware express-validator com a função assert    
    req.assert('apelido','Nome ou apelido é obrigatório').notEmpty();
    req.assert('apelido','Tamanho do apelido é de 3 a 15 caracteres').len(3, 15);

    var erros = req.validationErrors();

    if (erros) {
        res.render('index', {validacao : erros});
    }

    //Recupera a variavel global io criada no app.js
    application.get('io').emit(
        'msgParaCliente',
        {apelido: dadosForm.apelido, mensagem: ' acabou de entrar no chat'}
    );


    res.render('chat', {dadosForm: dadosForm});
}