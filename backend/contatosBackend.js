var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var contatos = [
	{nome: "DANIEL da Silva", telefone: "(11)91234-4567", operadora: "Vivo", data: new Date() },
	{nome: "Aline DE Oliveira", telefone: "(11)94321-9876", operadora: "Oi", data: new Date() },
	{nome: "Samuel ALVES", telefone: "(11)95555-4444", operadora: "Tim", data: new Date() },
	{nome: "EMANUEL RIBEIRO", telefone: "(11)98888-9999", operadora: "Claro", data: new Date() }
];
var operadoras = [
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "Claro", codigo: 31, categoria: "Celular", preco: 4},
	{nome: "Nextel", codigo: 99, categoria: "Celular", preco: 5},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 6},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 7}
];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.get('/contatos/:id', function(req, res) {
  res.json(contatos[req.params.id]);
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});

app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});
