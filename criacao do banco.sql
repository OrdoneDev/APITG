/* Lógico_1_TG: */

DROP DATABASE Plataform;

CREATE DATABASE Plataform;

USE Plataform;

CREATE TABLE Entidade (
    id_entidade SERIAL PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    data_nascimento DATE,
    sexo CHAR(1),
    foto BYTEA,
    biografia VARCHAR(1200),
    cancelado BOOLEAN NOT NULL,
    tipo_entidade VARCHAR(20) CHECK (tipo_entidade IN ('Entidade', 'comunidade')) NOT NULL,
    data_criacao TIMESTAMP NOT NULL,
    data_atualizacao TIMESTAMP NOT NULL
);

CREATE INDEX idx_entidade_nome ON Entidade (nome);
CREATE INDEX idx_entidade_tipo ON Entidade (tipo_entidade);
CREATE INDEX idx_entidade_cancelado ON Entidade (cancelado);

CREATE TABLE Login (
    id_login SERIAL PRIMARY KEY,
    id_entidade INT NOT NULL,
    email VARCHAR(100) NOT NULL,
    senha VARCHAR(100) NOT NULL,
    ultimo_login TIMESTAMP NOT NULL,
    FOREIGN KEY (id_entidade) REFERENCES Entidade(id_entidade)
);

CREATE INDEX idx_login_id_entidade ON Login (id_entidade);
CREATE INDEX idx_login_email ON Login (email);
CREATE UNIQUE INDEX unique_login_email ON Login (email);
CREATE UNIQUE INDEX unique_login_id_entidade ON Login (id_entidade);

CREATE TABLE ArquivoCompartilhado (
    id_arquivo_compartilhado SERIAL PRIMARY KEY,
    id_entidade INT NOT NULL,
    titulo VARCHAR(80) NOT NULL,
    arquivo BYTEA NOT NULL,
    descricao VARCHAR(1200),
    score_medio FLOAT,
    cancelado BOOLEAN NOT NULL,
    data_publicacao TIMESTAMP NOT NULL,
    data_atualizacao TIMESTAMP NOT NULL,
    FOREIGN KEY (id_entidade) REFERENCES Entidade(id_entidade)
);

CREATE INDEX idx_arquivo_compartilhado_id_entidade ON ArquivoCompartilhado (id_entidade);
CREATE INDEX idx_arquivo_compartilhado_data_publicacao ON ArquivoCompartilhado (data_publicacao);
CREATE INDEX idx_arquivo_compartilhado_cancelado ON ArquivoCompartilhado (cancelado);

CREATE TABLE Publicacao (
    id_publicacao SERIAL PRIMARY KEY,
    id_entidade INT NOT NULL,
    descricao VARCHAR(1200) NOT NULL,
    cancelado BOOLEAN NOT NULL,
    data_publicacao TIMESTAMP NOT NULL,
    data_atualizacao TIMESTAMP NOT NULL,
    FOREIGN KEY (id_entidade) REFERENCES Entidade(id_entidade)
);

CREATE INDEX idx_publicacao_id_entidade ON Publicacao (id_entidade);
CREATE INDEX idx_publicacao_data_publicacao ON Publicacao (data_publicacao);
CREATE INDEX idx_publicacao_cancelado ON Publicacao (cancelado);

CREATE TABLE LikePublicacao (
    id_like SERIAL PRIMARY KEY,
    id_publicacao INT NOT NULL,
    id_entidade INT NOT NULL,
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao),
    FOREIGN KEY (id_entidade) REFERENCES Entidade(id_entidade)
);

CREATE INDEX idx_like_publicacao_id_publicacao ON LikePublicacao (id_publicacao);
CREATE INDEX idx_like_publicacao_id_entidade ON LikePublicacao (id_entidade);

CREATE TABLE ArquivoPublicacao (
    id_arquivo SERIAL PRIMARY KEY,
    id_publicacao INT NOT NULL,
    id_arquivo_compartilhado INT NOT NULL,
    cancelado BOOLEAN NOT NULL,
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao),
    FOREIGN KEY (id_arquivo_compartilhado) REFERENCES ArquivoCompartilhado(id_arquivo_compartilhado)
);

CREATE INDEX idx_arquivo_publicacao_id_publicacao ON ArquivoPublicacao (id_publicacao);
CREATE INDEX idx_arquivo_publicacao_id_arquivo_compartilhado ON ArquivoPublicacao (id_arquivo_compartilhado);
CREATE INDEX idx_arquivo_publicacao_cancelado ON ArquivoPublicacao (cancelado);

CREATE TABLE Amizade (
    id_amizade SERIAL PRIMARY KEY,
    id_entidade1 INT NOT NULL,
    id_entidade2 INT NOT NULL,
    status VARCHAR(20) CHECK (status IN ('pendente', 'aceito', 'recusado')) NOT NULL,
    data_solicitacao TIMESTAMP NOT NULL,
    data_resposta TIMESTAMP,
    FOREIGN KEY (id_entidade1) REFERENCES Entidade(id_entidade),
    FOREIGN KEY (id_entidade2) REFERENCES Entidade(id_entidade)
);

CREATE INDEX idx_amizade_id_entidade1 ON Amizade (id_entidade1);
CREATE INDEX idx_amizade_id_entidade2 ON Amizade (id_entidade2);

CREATE TABLE MembroComunidade (
    id_membro SERIAL PRIMARY KEY,
    id_entidade INT NOT NULL,
    id_comunidade INT NOT NULL,
    cargo SMALLINT NOT NULL,
    status VARCHAR(20) CHECK (status IN ('pendente', 'aceito', 'recusado')) NOT NULL,
    data_solicitacao TIMESTAMP NOT NULL,
    data_resposta TIMESTAMP,
    FOREIGN KEY (id_entidade) REFERENCES Entidade(id_entidade),
    FOREIGN KEY (id_comunidade) REFERENCES Entidade(id_entidade)
);

CREATE INDEX idx_membro_comunidade_id_entidade ON MembroComunidade (id_entidade);
CREATE INDEX idx_membro_comunidade_id_comunidade ON MembroComunidade (id_comunidade);

CREATE TABLE AvaliacaoArquivo (
    id_avaliacao SERIAL PRIMARY KEY,
    id_entidade INT NOT NULL,
    id_arquivo_compartilhado INT NOT NULL,
    descricao VARCHAR(1200),
    score FLOAT NOT NULL,
    cancelado BOOLEAN NOT NULL,
    data_publicacao TIMESTAMP NOT NULL,
    data_atualizacao TIMESTAMP NOT NULL,
    FOREIGN KEY (id_entidade) REFERENCES Entidade(id_entidade),
    FOREIGN KEY (id_arquivo_compartilhado) REFERENCES ArquivoCompartilhado(id_arquivo_compartilhado)
);

CREATE TABLE Comentario (
    id_comentario SERIAL PRIMARY KEY,
    id_entidade INT NOT NULL,
    id_publicacao INT NOT NULL,
    descricao VARCHAR(1200) NOT NULL,
    cancelado BOOLEAN NOT NULL,
    data_publicacao TIMESTAMP NOT NULL,
    data_atualizacao TIMESTAMP NOT NULL,
    FOREIGN KEY (id_entidade) REFERENCES Entidade(id_entidade),
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao)
);

CREATE INDEX idx_comentario_id_entidade ON Comentario (id_entidade);
CREATE INDEX idx_comentario_id_publicacao ON Comentario (id_publicacao);
CREATE INDEX idx_comentario_data_publicacao ON Comentario (data_publicacao);
CREATE INDEX idx_comentario_cancelado ON Comentario (cancelado);

CREATE TABLE Foto (
    id_foto SERIAL PRIMARY KEY,
    foto BYTEA NOT NULL,
    descricao VARCHAR(1200),
    cancelado BOOLEAN NOT NULL,
    data_publicacao TIMESTAMP NOT NULL,
    data_atualizacao TIMESTAMP NOT NULL
);

CREATE INDEX idx_foto_data_publicacao ON Foto (data_publicacao);
CREATE INDEX idx_foto_cancelado ON Foto (cancelado);

CREATE TABLE FotoComentario (
    id_foto_comentario SERIAL PRIMARY KEY,
    id_foto INT NOT NULL,
    id_comentario INT NOT NULL,
    FOREIGN KEY (id_foto) REFERENCES Foto(id_foto),
    FOREIGN KEY (id_comentario) REFERENCES Comentario(id_comentario)
);

CREATE INDEX idx_foto_comentario_id_foto ON FotoComentario (id_foto);
CREATE INDEX idx_foto_comentario_id_comentario ON FotoComentario (id_comentario);

CREATE TABLE FotoPublicacao (
    id_foto_publicacao SERIAL PRIMARY KEY,
    id_foto INT NOT NULL,
    id_publicacao INT NOT NULL,
    FOREIGN KEY (id_foto) REFERENCES Foto(id_foto),
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao)
);

CREATE INDEX idx_foto_publicacao_id_foto ON FotoPublicacao (id_foto);
CREATE INDEX idx_foto_publicacao_id_publicacao ON FotoPublicacao (id_publicacao);

/* Tabelas fora do escopo da aplicação, porém interessante de se manter no código

CREATE TABLE Tag (
    id_tag INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    UNIQUE (nome)
);

CREATE TABLE PublicacaoTag (
    id_publicacao INT NOT NULL,
    id_tag INT NOT NULL,
    FOREIGN KEY (id_publicacao) REFERENCES Publicacao(id_publicacao),
    FOREIGN KEY (id_tag) REFERENCES Tag(id_tag),
    PRIMARY KEY (id_publicacao, id_tag)
);

CREATE TABLE ArquivoTag (
    id_arquivo_compartilhado INT NOT NULL,
    id_tag INT NOT NULL,
    FOREIGN KEY (id_arquivo_compartilhado) REFERENCES ArquivoCompartilhado(id_arquivo_compartilhado),
    FOREIGN KEY (id_tag) REFERENCES Tag(id_tag),
    PRIMARY KEY (id_arquivo_compartilhado, id_tag)
);

CREATE TABLE Mensagem (
    id_mensagem INT PRIMARY KEY AUTO_INCREMENT,
    id_remetente INT NOT NULL,
    id_destinatario INT NOT NULL,
    conteudo TEXT NOT NULL,
    data_envio DATETIME NOT NULL,
    data_leitura DATETIME,
    cancelado TINYINT NOT NULL,
    lida BIT NOT NULL DEFAULT 0,
    FOREIGN KEY (id_remetente) REFERENCES Entidade(id_entidade),
    FOREIGN KEY (id_destinatario) REFERENCES Entidade(id_entidade),
    INDEX idx_mensagem_id_remetente (id_remetente),
    INDEX idx_mensagem_id_destinatario (id_destinatario)
); */

-- Criar o usuário
CREATE USER db_access WITH PASSWORD 'Ch1N3l077!';

-- Conceder permissões ao usuário no banco de dados específico
GRANT CONNECT ON DATABASE plataform TO db_access;
GRANT USAGE ON SCHEMA public TO db_access;
GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO db_access;
GRANT SELECT, USAGE ON ALL SEQUENCES IN SCHEMA public TO db_access;

-- Para garantir que futuras tabelas e sequências também tenham as permissões corretas
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, INSERT, UPDATE, DELETE ON TABLES TO db_access;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT, USAGE ON SEQUENCES TO db_access;