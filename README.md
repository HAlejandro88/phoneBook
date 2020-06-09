# Phonebook

Aplicación de Agenda telefónica,
los campos que se mostraran en una tabla dinamica son los siguientes **idPersona**, **NombreCompleto**,
**telefono**,
**Email**,
**FechaNacimiento**


la agenda tiene en la tabla una columna de Controles donde se elimina el contacto o se modifican el contacto

en el toolbar tiene un icono de mas, en ese boton manda a llamar al formulario para agregar contacto

los datos se guardan en *localStorage* por lo que si se recarga la pagina no se pierden los datos.


muestro la funcion de guardar en el storage
```typescript
saveLocalStorage() {
    localStorage.setItem('agenda', JSON.stringify(this.personas));
  }
```

## Visualizar la aplicacion

instalar las dependencias con 
> npm install --save

## Compilar y Mostrar en el navegador

> ng serve -o


## Autor

**Alejandro Soto**