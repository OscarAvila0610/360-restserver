const { response, request } = require("express");
const { getConnection } = require("../database/configuracion");
const Usuario = require("../models/usuario");

const usuariosGet = async (req = request, res = response) => {
  try {
    const pool = await getConnection();
    const resultado = await pool.request().query("exec p_obtener_usuarios");
    const usuarios = resultado.recordset;
    res.json({
      usuarios,
    });
  } catch (error) {
    console.log(error);
  }
};

const usuariosGetId = async (req = request, res = response) => {
  const id = req.params.id;
  try {
    const pool = await getConnection();
    const resultado = await pool
      .request()
      .query(`exec p_obtener_usuario_id ${id}`);
    const usuario = resultado.recordset;
    res.json({
      usuario,
    });
  } catch (error) {
    console.log(error);
  }
};

const usuariosPost = async (req, res = response) => {
  const {
    idrol,
    idestados,
    correo_electronico,
    nombre_completo,
    password,
    telefono,
    fecha_nacimiento,
    idClientes,
  } = req.body;
  const fecha_creacion = new Date()
    .toISOString()
    .slice(0, 19)
    .replace("T", " ");
  const usuario = new Usuario(
    idrol,
    idestados,
    correo_electronico,
    nombre_completo,
    password,
    telefono,
    fecha_nacimiento,
    fecha_creacion,
    idClientes
  );
  const pool = await getConnection();
  const resultado = await pool
    .request()
    .query(
      `exec p_insertar_usuarios ${usuario.idrol}, ${usuario.idestados}, '${usuario.correo_electronico}', '${usuario.nombre_completo}', '${usuario.password}', ${usuario.telefono}, '${usuario.fecha_nacimiento}', '${usuario.fecha_creacion}', ${usuario.idClientes}`
    );

  const final = resultado.recordset;

  res.json({
    usuario,
  });
};

const usuariosPut = (req, res = response) => {
  const id = req.params.id;
  res.json({
    msg: "put API - controlador",
    id,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msg: "delete API - controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosGetId,
};
