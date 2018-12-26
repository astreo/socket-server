import { Usuario } from "./usuario";

export class UsuariosLista {
  private lista: Usuario[] = [];

  constructor() {}

  //Agregar un usuario
  public agregar(usuario: Usuario) {
    this.lista.push(usuario);
    console.log(this.lista);
    return usuario;
  }

  public actualizarNombre(id: string, nombre: string) {
      for(let usuario of this.lista) {
          if (usuario.id === id) {
              usuario.nombre = nombre;
              break;
          }
      }

      console.log('=== Actualizando usuario ===');
      console.log(this.lista);
  }

  // Obtener Lista de usuarios
  public getLista() {
      return this.lista;
  }

  // Obtener Usuario a partir del Id
  public getUsuario(id: string) {
      return this.lista.find(usuario => {
          return usuario.id === id;
      });
  }

  // Obtener usuario en una sala en particular
  public getUsuariosEnSala(sala: string) {
      return this.lista.filter(usuario => {
          return usuario.sala === sala;
      })
  }

  // Borrar usuario de la lista
  public borrarUsuario(id: string) {
      const tmpUsuario = this.getUsuario(id);
      this.lista = this.lista.filter(usuario => {
          return usuario.id !== id;
      });

      console.log(this.lista);

      return tmpUsuario;
  }


}
