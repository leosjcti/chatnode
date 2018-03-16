//Importar as configurações do servidor
var app = require('./config/server.js');


var server = process.env.PORT || 8080;
app.listen(server);

//Parametrizar a porta de escuta
/*var server = app.listen(80, 'localhost',function(){
    console.log("servidor online");
});*/

var io = require('socket.io').listen(server);

//Cria uma variavel global para ser utilizada em outro escopo, exemplo, no controle
app.set('io', io);

//Cria conexão por websocket
io.on('connection', function(socket) {
    console.log("Usuario conectou");

    socket.on('disconnect', function(){
        console.log("Usuário saiu");
    });

    socket.on('msgParaServidor', function(data){
        //Mostra para o usuário que enviou
        socket.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        );

        //Mostra para todos os usuarios
        socket.broadcast.emit(
            'msgParaCliente',
            {apelido: data.apelido, mensagem: data.mensagem}
        );



        //Participantes
        if(parseInt(data.apelido_atualizado) == 0){
            socket.emit(
                'participantesParaCliente',
                {apelido: data.apelido}
            );

            //Mostra para todos os usuarios
            socket.broadcast.emit(
                'participantesParaCliente',
                {apelido: data.apelido}
            );
        }
        
    })

});