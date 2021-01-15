var mongoose = require('mongoose');
var dbURI = 'mongodb+srv://mekan32:basket215@mekan32.p6erm.mongodb.net/mekan32?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true});


mongoose.connection.on('connected', function () {
    console.log('mongoose ' + dbURI+ ' adresindeki veritabanina baglanildi\n');
});


mongoose.connection.on('error',function (err) {
    console.log('mongoose baglanti hatasi\n: ' + err);
});


mongoose.connection.on('diconnected', function () {
    console.log('mongoose baglantisi kesildi\n');
});

kapat = function(msg, callback) {
    mongoose.connection.close(function(){
        console.log('mongoose kapatildi\n ' + msg);
        callback();
    });
};


process.once('SIGUSR2', function(){
    kapat('nodemon kapatildi\n', function(){
        process.kill(process.pid, 'SIGUSR2');
    });
});

process.on('SIGINT', function() {
    kapat('Uygulama kapatildi\n', function() {
        process.exit(0);
    });
});

process.on('SIGTERM', function() {
    kapat('heroku kapatildi\n', function() {
        process.exit(0);
    });
});
require('./mekansema');
