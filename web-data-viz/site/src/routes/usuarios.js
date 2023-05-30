var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.put("/atualizar", function (req, res) {
    usuarioController.avaliarResultado(req, res);
});

router.get("/obter",function (req,res){
    usuarioController.obterDados(req,res);
});

router.get("/obterMedia",function(req,res){
    usuarioController.obterMedia(req,res);
});

router.get("/obterModalidade",function(req,res){
    usuarioController.obterModalidade(req,res);
});

module.exports = router;