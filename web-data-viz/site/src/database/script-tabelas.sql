-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql - banco local - ambiente de desenvolvimento
*/

create database tucunare;
use tucunare;
create table modalidade(
idModalidade int primary key auto_increment,
Tipo varchar(45)
);
create table assiduidade(
idAssiduidade int primary key auto_increment,
VezesNoAno varchar(45)
);
create table especies(
idespecie int primary key auto_increment,
NomeCientifico varchar(45),
NomePopular varchar(45),
Forca int,
Territorialismo int,
Tamanho int,
Periodicidade int,
Distribuição int,
Exuberância int,
Resistência int);
create table locais(
idLocais int primary key auto_increment,
Locais varchar(100)
);
create table ocorrencias(
fkEspecieOcorrencia int,
fkLocal int,
constraint fkEspecieOcorrencia foreign key (fkEspecieOcorrencia) references especies(idespecie),
constraint fkLocal foreign key (fkLocal) references locais(idlocais),
constraint pkAssoc primary key (fkEspecieOcorrencia, fkLocal)
);
create table trofeu(
idTrofeu int primary key auto_increment,
faixaTamanho varchar(45)
);
create table usuario(
nome varchar(45),
email varchar(45),
senha varchar(45),
fkModalidade int,
fkEspecie int,
fkAssiduidade int,
notaQuiz int,
fkTrofeu int,
constraint fkModalidade foreign key (fkModalidade) references modalidade(idModalidade),
constraint fkEspecie foreign key (fkEspecie) references especies(idEspecie),
constraint fkAssiduidade foreign key (fkAssiduidade) references assiduidade(idAssiduidade),
constraint fkTrofeu foreign key (fkTrofeu) references trofeu(idTrofeu)
);
