import Login from './login.js';
import Entidade from './entidade.js';

import Amizade from './amizade.js';
import MembroComunidade from './membroComunidade.js';

import Publicacao from './publicacao.js';
import LikePublicacao from './likePublicacao.js';

import Comentario from './comentario.js';

import Foto from './foto.js';
import FotoComentario from './fotoComentario.js';
import FotoPublicacao from './fotoPublicacao.js';

import ArquivoCompartilhado from './arquivoCompartilhado.js';
import ArquivoPublicacao from './arquivoPublicacao.js';
import AvaliacaoArquivo from './avaliacaoArquivo.js';

Login.belongsTo(Entidade, { foreignKey: 'id_entidade' });

Entidade.hasOne(Login, { foreignKey: 'id_entidade' });
Entidade.hasMany(ArquivoCompartilhado, { foreignKey: 'id_entidade' });
Entidade.hasMany(Publicacao, { foreignKey: 'id_entidade', as: 'publicacoes' });
Entidade.hasMany(LikePublicacao, { foreignKey: 'id_entidade', as: 'likes' });
Entidade.hasMany(Amizade, { foreignKey: 'id_entidade1', as: 'amizadesEnviadas' });
Entidade.hasMany(Amizade, { foreignKey: 'id_entidade2', as: 'amizadesRecebidas' });
Entidade.hasMany(MembroComunidade, { foreignKey: 'id_entidade', as: 'membros' });
Entidade.hasMany(MembroComunidade, { foreignKey: 'id_comunidade', as: 'comunidades' });
Entidade.hasMany(Comentario, { foreignKey: 'id_entidade', as: 'comentarios' });

Amizade.belongsTo(Entidade, { foreignKey: 'id_entidade1', as: 'entidade1' });
Amizade.belongsTo(Entidade, { foreignKey: 'id_entidade2', as: 'entidade2' });

MembroComunidade.belongsTo(Entidade, { foreignKey: 'id_entidade', as: 'entidade' });
MembroComunidade.belongsTo(Entidade, { foreignKey: 'id_comunidade', as: 'comunidade' });

Publicacao.hasMany(LikePublicacao, { foreignKey: 'id_publicacao', as: 'likes' });
Publicacao.hasMany(Comentario, { foreignKey: 'id_publicacao', as: 'comentarios' });
Publicacao.hasMany(ArquivoPublicacao, { foreignKey: 'id_publicacao', as: 'arquivos' });
Publicacao.hasMany(FotoPublicacao, { foreignKey: 'id_publicacao', as: 'foto' });
Publicacao.belongsTo(Entidade, { foreignKey: 'id_entidade', as: 'entidade' });

LikePublicacao.belongsTo(Publicacao, { foreignKey: 'id_publicacao', as: 'publicacao' });
LikePublicacao.belongsTo(Entidade, { foreignKey: 'id_entidade', as: 'entidade' });

Comentario.hasMany(FotoComentario, { foreignKey: 'id_comentario', as: 'foto' });
Comentario.belongsTo(Publicacao, { foreignKey: 'id_publicacao', as: 'publicacao' });
Comentario.belongsTo(Entidade, { foreignKey: 'id_entidade', as: 'entidade' });

Foto.hasMany(FotoComentario, { foreignKey: 'id_foto' });
Foto.hasMany(FotoPublicacao, { foreignKey: 'id_foto' });
FotoComentario.belongsTo(Foto, { foreignKey: 'id_foto' });
FotoComentario.belongsTo(Comentario, { foreignKey: 'id_comentario', as: 'comentario' });
FotoPublicacao.belongsTo(Foto, { foreignKey: 'id_foto' });
FotoPublicacao.belongsTo(Publicacao, { foreignKey: 'id_publicacao', as: 'publicacao' });

ArquivoCompartilhado.belongsTo(Entidade, { foreignKey: 'id_entidade' });
ArquivoCompartilhado.hasMany(ArquivoPublicacao, { foreignKey: 'id_arquivo_compartilhado' });
ArquivoCompartilhado.hasMany(AvaliacaoArquivo, { foreignKey: 'id_arquivo_compartilhado' });

ArquivoPublicacao.belongsTo(ArquivoCompartilhado, { foreignKey: 'id_arquivo_compartilhado' });
ArquivoPublicacao.belongsTo(Publicacao, { foreignKey: 'id_publicacao', as: 'publicacao' });

AvaliacaoArquivo.belongsTo(Entidade, { foreignKey: 'id_entidade' });
AvaliacaoArquivo.belongsTo(ArquivoCompartilhado, { foreignKey: 'id_arquivo_compartilhado' });