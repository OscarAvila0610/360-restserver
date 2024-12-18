class Usuario{
    constructor(idrol, idestados, correo_electronico, nombre_completo,
        password, telefono, fecha_nacimiento, fecha_creacion,idClientes
    ){
        this.idrol = idrol;
        this.idestados = idestados;
        this.correo_electronico = correo_electronico;
        this.nombre_completo = nombre_completo;
        this.password = password;
        this.telefono = telefono;
        this.fecha_nacimiento = fecha_nacimiento;
        this.fecha_creacion = fecha_creacion;
        this.idClientes = idClientes;
    }
}

module.exports = Usuario;