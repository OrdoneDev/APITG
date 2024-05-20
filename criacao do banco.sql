/* Lógico_1_TG: */

DROP DATABASE Plataform;

CREATE DATABASE Plataform;

USE Plataform;

CREATE TABLE Perfil (
    id_perfil int PRIMARY KEY AUTO_INCREMENT,
    nome varchar(80) NOT NULL,
    email varchar(120) NOT NULL,
    senha varchar(120) NOT NULL,
    data_nascimento date,
    sexo char(1) NOT NULL,
    foto blob,
    biografia varchar(1200),
    autenticacao varchar(1200),
    cancelado bit NOT NULL
);

CREATE TABLE LOG_Perfil (
	id_log int PRIMARY KEY AUTO_INCREMENT,
    id_perfil int NOT NULL,
    nome varchar(80) NOT NULL,
    email varchar(120) NOT NULL,
    senha varchar(120) NOT NULL,
    data_nascimento date,
    sexo char(1) NOT NULL,
    foto blob,
    biografia varchar(1200),
    autenticacao varchar(1200),
    cancelado bit NOT NULL,
    data datetime
);

DELIMITER //
CREATE TRIGGER perfil_after_insert
AFTER INSERT ON Perfil
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Perfil(id_perfil, nome, email, senha, data_nascimento, sexo, foto, biografia, autenticacao, cancelado, data)
    VALUES (NEW.id_perfil, NEW.nome, NEW.email, NEW.senha, NEW.data_nascimento, NEW.sexo, NEW.foto, NEW.biografia, NEW.autenticacao, NEW.cancelado, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER perfil_after_update
AFTER UPDATE ON Perfil
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Perfil(id_perfil, nome, email, senha, data_nascimento, sexo, foto, biografia, autenticacao, cancelado, data)
    VALUES (NEW.id_perfil, NEW.nome, NEW.email, NEW.senha, NEW.data_nascimento, NEW.sexo, NEW.foto, NEW.biografia, NEW.autenticacao, NEW.cancelado, NOW());
END;//
DELIMITER ;

CREATE TABLE Comunidade (
    id_comunidade int PRIMARY KEY AUTO_INCREMENT,
    foto blob,
    nome varchar(80) NOT NULL,
    descricao varchar(1200) NOT NULL,
    visibilidade tinyint NOT NULL,
    cancelado bit NOT NULL
);

CREATE TABLE LOG_Comunidade (
	id_log int PRIMARY KEY AUTO_INCREMENT,
    id_comunidade int NOT NULL,
    foto blob,
    nome varchar(80) NOT NULL,
    descricao varchar(1200) NOT NULL,
    visibilidade tinyint NOT NULL,
    cancelado bit NOT NULL,
    data datetime
);

DELIMITER //
CREATE TRIGGER comunidade_after_insert
AFTER INSERT ON Comunidade
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Comunidade(id_comunidade, foto, nome, descricao, visibilidade, cancelado, data)
    VALUES (NEW.id_comunidade, NEW.foto, NEW.nome, NEW.descricao, NEW.visibilidade, NEW.cancelado, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER comunidade_after_update
AFTER UPDATE ON Comunidade
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Comunidade(id_comunidade, foto, nome, descricao, visibilidade, cancelado, data)
    VALUES (NEW.id_comunidade, NEW.foto, NEW.nome, NEW.descricao, NEW.visibilidade, NEW.cancelado, NOW());
END;//
DELIMITER ;

CREATE TABLE Arquivo_compartilhado (
    id_arquivo_compartilhado int PRIMARY KEY AUTO_INCREMENT,
    id_perfil int NOT NULL,
    titulo varchar(80) NOT NULL,
    arquivo_compartilhado blob NOT NULL,
    descricao varchar(1200),
    score_medio float,
    data_publicacao datetime NOT NULL,
    cancelado bit NOT NULL,
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil)
);

CREATE TABLE LOG_Arquivo_compartilhado (
	id_log int PRIMARY KEY AUTO_INCREMENT,
    id_arquivo_compartilhado int NOT NULL,
    id_perfil int NOT NULL,
    titulo varchar(80) NOT NULL,
    arquivo_compartilhado blob NOT NULL,
    descricao varchar(1200),
    score_medio float,
    data_publicacao datetime NOT NULL,
    cancelado bit NOT NULL,
    data datetime,
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil),
    FOREIGN KEY (id_arquivo_compartilhado) REFERENCES Arquivo_compartilhado(id_arquivo_compartilhado)
);

DELIMITER //
CREATE TRIGGER arquivo_compartilhado_after_insert
AFTER INSERT ON Arquivo_compartilhado
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Arquivo_compartilhado(id_arquivo_compartilhado, id_perfil, titulo, arquivo_compartilhado, descricao, score_medio, data_publicacao, cancelado, data)
    VALUES (NEW.id_arquivo_compartilhado, NEW.id_perfil, NEW.titulo, NEW.arquivo_compartilhado, NEW.descricao, NEW.score_medio, NEW.data_publicacao, NEW.cancelado, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER arquivo_compartilhado_after_update
AFTER UPDATE ON Arquivo_compartilhado
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Arquivo_compartilhado(id_arquivo_compartilhado, id_perfil, titulo, arquivo_compartilhado, descricao, score_medio, data_publicacao, cancelado, data)
    VALUES (NEW.id_arquivo_compartilhado, NEW.id_perfil, NEW.titulo, NEW.arquivo_compartilhado, NEW.descricao, NEW.score_medio, NEW.data_publicacao, NEW.cancelado, NOW());
END;//
DELIMITER ;

CREATE TABLE Publicacao (
    id_publicacao int PRIMARY KEY AUTO_INCREMENT,
    descricao varchar(1200) NOT NULL,
    data_publicacao datetime NOT NULL,
    cancelado bit NOT NULL
);

CREATE TABLE Log_Publicacao (
    id_log int PRIMARY KEY AUTO_INCREMENT,
    id_publicacao int NOT NULL,
    descricao varchar(1200) NOT NULL,
    data_publicacao datetime NOT NULL,
    cancelado bit NOT NULL,
    data datetime,
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao)
);

CREATE TABLE Likes_publicacao (
	id_like int PRIMARY KEY AUTO_INCREMENT,
    id_publicacao int NOT NULL,
    id_perfil int NOT NULL,
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao),
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil)
);

DELIMITER //
CREATE TRIGGER Publicacao_after_insert
AFTER INSERT ON Publicacao
FOR EACH ROW
BEGIN
    INSERT INTO Log_Publicacao(id_publicacao, descricao, data_publicacao, cancelado, data)
    VALUES (NEW.id_publicacao, NEW.descricao, NEW.data_publicacao, NEW.cancelado, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER Publicacao_after_update
AFTER UPDATE ON Publicacao
FOR EACH ROW
BEGIN
    INSERT INTO Log_Publicacao(id_publicacao, descricao, data_publicacao, cancelado, data)
    VALUES (NEW.id_publicacao, NEW.descricao, NEW.data_publicacao, NEW.cancelado, NOW());
END;//
DELIMITER ;

CREATE TABLE Arquivo_publicacao (
	id_arquivo int PRIMARY KEY AUTO_INCREMENT,
    id_publicacao int NOT NULL,
    id_arquivo_compartilhado int NOT NULL,
    cancelado bit NOT NULL,
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao),
    FOREIGN KEY (id_arquivo_compartilhado) REFERENCES Arquivo_compartilhado(id_arquivo_compartilhado)
);

CREATE TABLE LOG_Arquivo_publicacao (
	id_log int PRIMARY KEY AUTO_INCREMENT,
    id_arquivo int NOT NULL,
    id_publicacao int NOT NULL,
    id_arquivo_compartilhado int NOT NULL,
    cancelado bit NOT NULL,
    data datetime,
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao),
    FOREIGN KEY (id_arquivo_compartilhado) REFERENCES Arquivo_compartilhado(id_arquivo_compartilhado)
);

DELIMITER //
CREATE TRIGGER arquivo_publicacao_insert
AFTER INSERT ON Arquivo_publicacao
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Arquivo_publicacao(id_arquivo, id_publicacao, id_arquivo_compartilhado, cancelado, data)
    VALUES (NEW.id_arquivo, NEW.id_publicacao, NEW.id_arquivo_compartilhado, NEW.cancelado, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER arquivo_publicacao_after_update
AFTER UPDATE ON Arquivo_publicacao
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Arquivo_publicacao(id_arquivo, id_publicacao, id_arquivo_compartilhado, cancelado, data)
    VALUES (NEW.id_arquivo, NEW.id_publicacao, NEW.id_arquivo_compartilhado, NEW.cancelado, NOW());
END;//
DELIMITER ;

CREATE TABLE Amizade (
	id_amizade int PRIMARY KEY AUTO_INCREMENT,
    id_perfil int NOT NULL,
    id_amigo int NOT NULL,
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil),
    FOREIGN KEY (id_amigo) REFERENCES Perfil(id_perfil)
);

CREATE TABLE LOG_Amizade (
    id_log int PRIMARY KEY AUTO_INCREMENT,
    id_amizade int NOT NULL,
    id_perfil int NOT NULL,
    id_amigo int NOT NULL,
    cancelado bit NOT NULL,
    data datetime,
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil),
    FOREIGN KEY (id_amigo) REFERENCES Perfil(id_perfil)
);

DELIMITER //
CREATE TRIGGER amizade_after_insert
AFTER INSERT ON Amizade
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Amizade(id_amizade, id_perfil, id_amigo, cancelado, data)
    VALUES (NEW.id_amizade, NEW.id_perfil, NEW.id_amigo, 0, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER amizade_after_delete
BEFORE DELETE ON Amizade
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Amizade(id_amizade, id_perfil, id_amigo, cancelado, data)
    VALUES (old.id_amizade, old.id_perfil, old.id_amigo, 1, NOW());
END;//
DELIMITER ;


CREATE TABLE Membro_comunidade (
	id_membro int PRIMARY KEY AUTO_INCREMENT,
    id_perfil int NOT NULL,
    id_comunidade int NOT NULL,
    cargo tinyint NOT NULL,
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil),
    FOREIGN KEY (id_comunidade) REFERENCES Comunidade(id_comunidade)
);

CREATE TABLE LOG_Membro_comunidade (
    id_log int PRIMARY KEY AUTO_INCREMENT,
    id_membro int NOT NULL,
    id_perfil int NOT NULL,
    id_comunidade int NOT NULL,
    cargo tinyint NOT NULL,
    cancelado bit NOT NULL,
    data datetime,
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil),
    FOREIGN KEY (id_comunidade) REFERENCES Comunidade(id_comunidade)
);

DELIMITER //
CREATE TRIGGER Membro_comunidade_After_Insert
AFTER INSERT ON Membro_comunidade
FOR EACH ROW
BEGIN
   INSERT INTO LOG_Membro_comunidade(id_membro, id_perfil, id_comunidade, cargo, cancelado, data)
   VALUES (NEW.id_membro, NEW.id_perfil, NEW.id_comunidade, NEW.cargo, 0, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER Membro_comunidade_After_Update
AFTER UPDATE ON Membro_comunidade
FOR EACH ROW
BEGIN
   INSERT INTO LOG_Membro_comunidade(id_membro, id_perfil, id_comunidade, cargo, cancelado, data)
   VALUES (NEW.id_membro, NEW.id_perfil, NEW.id_comunidade, NEW.cargo, 0, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER Membro_comunidade_After_Delete
BEFORE DELETE ON Membro_comunidade
FOR EACH ROW
BEGIN
   INSERT INTO LOG_Membro_comunidade(id_membro, id_perfil, id_comunidade, cargo, cancelado, data)
   VALUES (old.id_membro, old.id_perfil, old.id_comunidade, old.cargo, 1, NOW());
END;//
DELIMITER ;

CREATE TABLE Avaliacao_arquivo (
	id_avaliacao int PRIMARY KEY AUTO_INCREMENT,
    id_perfil int NOT NULL,
    id_arquivo_compartilhado int NOT NULL,
    descricao varchar(1200),
    score tinyint NOT NULL,
    data_publicacao datetime NOT NULL,
    cancelado bit NOT NULL,
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil),
    FOREIGN KEY (id_arquivo_compartilhado) REFERENCES Arquivo_compartilhado(id_arquivo_compartilhado)
);

CREATE TABLE LOG_Avaliacao_arquivo (
    id_log int PRIMARY KEY AUTO_INCREMENT,
    id_avaliacao int NOT NULL,
    id_perfil int NOT NULL,
    id_arquivo_compartilhado int NOT NULL,
    descricao varchar(1200),
    score tinyint NOT NULL,
    data_publicacao datetime NOT NULL,
    cancelado bit NOT NULL,
    data datetime,
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil),
    FOREIGN KEY (id_arquivo_compartilhado) REFERENCES Arquivo_compartilhado(id_arquivo_compartilhado)
);

DELIMITER //
CREATE TRIGGER Avaliacao_arquivo_After_Insert
AFTER INSERT ON Avaliacao_arquivo
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Avaliacao_arquivo(id_avaliacao, id_perfil, id_arquivo_compartilhado, descricao, score, data_publicacao, cancelado, data)
    VALUES (NEW.id_avaliacao, NEW.id_perfil, NEW.id_arquivo_compartilhado, NEW.descricao, NEW.score, NEW.data_publicacao, NEW.cancelado, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER Avaliacao_arquivo_After_Update
AFTER UPDATE ON Avaliacao_arquivo
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Avaliacao_arquivo(id_avaliacao, id_perfil, id_arquivo_compartilhado, descricao, score, data_publicacao, cancelado, data)
    VALUES (NEW.id_avaliacao, NEW.id_perfil, NEW.id_arquivo_compartilhado, NEW.descricao, NEW.score, NEW.data_publicacao, NEW.cancelado, NOW());
END;//
DELIMITER ;

CREATE TABLE Post_perfil (
	id_post int PRIMARY KEY AUTO_INCREMENT,
	id_publicacao int NOT NULL,
    id_perfil int NOT NULL,
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao),
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil)
);

CREATE TABLE LOG_Post_perfil (
    id_log int PRIMARY KEY AUTO_INCREMENT,
    id_post int NOT NULL,
	id_publicacao int NOT NULL,
    id_perfil int NOT NULL,
    cancelado bit NOT NULL,
    data datetime,
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil),
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao)
);

DELIMITER //
CREATE TRIGGER Post_perfil_After_Insert
AFTER INSERT ON Post_perfil
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Post_perfil(id_post, id_publicacao, id_perfil, cancelado, data)
    VALUES (NEW.id_post, NEW.id_publicacao, NEW.id_perfil, 0, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER Post_perfil_After_Delete
AFTER DELETE ON Post_perfil
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Post_perfil(id_post, id_publicacao, id_perfil, cancelado, data)
    VALUES (OLD.id_post, OLD.id_publicacao, OLD.id_perfil, 1, NOW());
END;//
DELIMITER ;

CREATE TABLE Post_comunidade (
	id_post int PRIMARY KEY AUTO_INCREMENT,
    id_publicacao int NOT NULL,
    id_perfil int NOT NULL,
    id_comunidade int NOT NULL,
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao),
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil),
    FOREIGN KEY (id_comunidade) REFERENCES Comunidade(id_comunidade)
);

CREATE TABLE LOG_Post_comunidade (
    id_log int PRIMARY KEY AUTO_INCREMENT,
    id_post int NOT NULL,
    id_publicacao int NOT NULL,
    id_perfil int NOT NULL,
    id_comunidade int NOT NULL,
    cancelado bit NOT NULL,
    data datetime,
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao),
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil),
    FOREIGN KEY (id_comunidade) REFERENCES Comunidade(id_comunidade)
);

DELIMITER //
CREATE TRIGGER Post_comunidade_After_Insert
AFTER INSERT ON Post_comunidade
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Post_comunidade(id_post, id_publicacao, id_perfil, id_comunidade, cancelado, data)
    VALUES (NEW.id_post, NEW.id_publicacao, NEW.id_perfil, NEW.id_comunidade, 0, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER Post_comunidade_After_Delete
AFTER DELETE ON Post_comunidade
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Post_comunidade(id_post, id_publicacao, id_perfil, id_comunidade, cancelado, data)
    VALUES (OLD.id_post, OLD.id_publicacao, OLD.id_perfil, OLD.id_comunidade, 1, NOW());
END;//
DELIMITER ;

CREATE TABLE Comentario (
    id_comentario int PRIMARY KEY AUTO_INCREMENT,
    id_perfil int NOT NULL,
    id_publicacao int NOT NULL,
    descricao varchar(1200) NOT NULL,
    data_publicacao datetime NOT NULL,
    cancelado bit NOT NULL,
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil),
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao)
);

CREATE TABLE LOG_Comentario (
    id_log int PRIMARY KEY AUTO_INCREMENT,
    id_comentario int NOT NULL,
    id_perfil int NOT NULL,
    id_publicacao int NOT NULL,
    descricao varchar(1200) NOT NULL,
    data_publicacao datetime NOT NULL,
    cancelado bit NOT NULL,
    data datetime,
    FOREIGN KEY (id_comentario) REFERENCES Comentario(id_comentario),
    FOREIGN KEY (id_perfil) REFERENCES Perfil(id_perfil),
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao)
);

DELIMITER //
CREATE TRIGGER Comentario_After_Insert
AFTER INSERT ON Comentario
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Comentario(id_comentario, id_perfil, id_publicacao, descricao, data_publicacao, cancelado, data)
    VALUES (NEW.id_comentario, NEW.id_perfil, NEW.descricao, NEW.data_publicacao, NEW.cancelado, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER Comentario_After_Update
AFTER UPDATE ON Comentario
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Comentario(id_comentario, id_perfil, id_publicacao, descricao, data_publicacao, cancelado, data)
    VALUES (NEW.id_comentario, NEW.id_perfil, NEW.descricao, NEW.data_publicacao, NEW.cancelado, NOW());
END;//
DELIMITER ;

CREATE TABLE Foto (
    id_foto int PRIMARY KEY AUTO_INCREMENT,
    foto blob NOT NULL,
    descricao varchar(1200),
    data_publicacao datetime NOT NULL,
    cancelado bit NOT NULL
);

CREATE TABLE LOG_Foto (
    id_log int PRIMARY KEY AUTO_INCREMENT,
	id_foto int NOT NULL,
    foto blob NOT NULL,
    descricao varchar(1200),
    data_publicacao datetime NOT NULL,
    cancelado bit NOT NULL,
    data datetime,
    FOREIGN KEY (id_foto) REFERENCES Foto(id_foto)
);

DELIMITER //
CREATE TRIGGER Foto_After_Insert
AFTER INSERT ON Foto
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Foto(id_foto, foto, descricao, data_publicacao, cancelado, data)
    VALUES (NEW.id_foto, NEW.foto, NEW.descricao, NEW.data_publicacao, NEW.cancelado, NOW());
END;//
DELIMITER ;

DELIMITER //
CREATE TRIGGER Foto_After_Update
AFTER UPDATE ON Foto
FOR EACH ROW
BEGIN
    INSERT INTO LOG_Foto(id_foto, foto, descricao, data_publicacao, cancelado, data)
    VALUES (NEW.id_foto, NEW.foto, NEW.descricao, NEW.data_publicacao, NEW.cancelado, NOW());
END;//
DELIMITER ;

CREATE TABLE Foto_comentario (
	id_foto_comentario int PRIMARY KEY AUTO_INCREMENT,
	id_foto int NOT NULL,
    id_comentario int NOT NULL,
    FOREIGN KEY (id_foto) REFERENCES Foto(id_foto),
    FOREIGN KEY (id_comentario) REFERENCES Comentario(id_comentario)
);

CREATE TABLE LOG_Foto_comentario (
    id_log int PRIMARY KEY AUTO_INCREMENT,
    id_foto_comentario int NOT NULL,
	id_foto int NOT NULL,
    id_comentario int NOT NULL,
    data datetime,
    FOREIGN KEY (id_foto) REFERENCES Foto(id_foto),
    FOREIGN KEY (id_comentario) REFERENCES Comentario(id_comentario)
);

DELIMITER //
CREATE TRIGGER Foto_comentario_after_insert
AFTER INSERT ON Foto_comentario
FOR EACH ROW
BEGIN
   INSERT INTO LOG_Foto_comentario(id_foto_comentario, id_foto, id_comentario, data)
   VALUES (NEW.id_foto_comentario, NEW.id_foto, NEW.id_comentario, NOW());
END; //
DELIMITER ;

DELIMITER //
CREATE TRIGGER Foto_comentario_after_update
AFTER UPDATE ON Foto_comentario
FOR EACH ROW
BEGIN
   INSERT INTO LOG_Foto_comentario(id_foto_comentario, id_foto, id_comentario, data)
   VALUES (NEW.id_foto_comentario, NEW.id_foto, NEW.id_comentario, NOW());
END; //
DELIMITER ;

CREATE TABLE Foto_publicacao (
	id_foto_publicacao int PRIMARY KEY AUTO_INCREMENT,
	id_foto int NOT NULL,
    id_publicacao int NOT NULL,
    FOREIGN KEY (id_foto) REFERENCES Foto(id_foto),
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao)
);

CREATE TABLE LOG_Foto_publicacao (
    id_log int PRIMARY KEY AUTO_INCREMENT,
	id_foto int NOT NULL,
    id_publicacao int NOT NULL,
    data datetime,
    FOREIGN KEY (id_foto) REFERENCES Foto(id_foto),
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao)
);

DELIMITER //
CREATE TRIGGER Foto_publicacao_after_insert
AFTER INSERT ON Foto_publicacao
FOR EACH ROW
BEGIN
   INSERT INTO LOG_Foto_publicacao(id_foto, id_publicacao, data)
   VALUES (NEW.id_foto, NEW.id_publicacao, NOW());
END; //
DELIMITER ;

DELIMITER //
CREATE TRIGGER Foto_publicacao_after_update
AFTER UPDATE ON Foto_publicacao
FOR EACH ROW
BEGIN
   INSERT INTO LOG_Foto_publicacao(id_foto, id_publicacao, data)
   VALUES (NEW.id_foto, NEW.id_publicacao, NOW());
END; //
DELIMITER ;