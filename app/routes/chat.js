//A variavel app vem do consign configurado no server.js
module.exports = function(application){

    application.get('/chat', function(req, res){
        //res.send("Pagina Inicial");
        application.app.controllers.chat.iniciaChat(application, req, res);
    });

    application.post('/chat', function(req, res){
        //res.send("Pagina Inicial");
        application.app.controllers.chat.iniciaChat(application, req, res);
    });

    
}