//A variavel application vem do consign configurado no server.js com nome de app
module.exports = function(application){
    application.get('/', function(req, res){
        //res.send("Pagina Inicial");
        //Executa a função home associada ao arquivo index do controle que a exporta.
        application.app.controllers.index.home(application, req, res);
    });
}