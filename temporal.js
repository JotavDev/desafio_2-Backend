import fs from 'fs';

const path = './Usuarios.json'
export default class ManagerUsuarios {

    crearUsuario = async (usuario) => {
        const users =  await this.consultarUsuarios();
        if(users.length===0){
            usuario.id=1;
        }else{
            usuario.id = users[users.length-1].id+1;
        }
        users.push(usuario);
        await fs.promises.writeFile(path,JSON.stringify(users));
        return usuario;
    }
}