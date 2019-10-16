# Proyecto Spotify Watermelon

El proyecto cuenta con: 
* Un Backend que consume la Web API de Spotify, el cual persiste registros asociados a los álbumes.
* Un Frontend que permite la búsqueda de álbumes por nombre, comunicandose directamente con el Backend.

### Desplegar Backend en modo desarrollo:
Desde una terminal ejecutar el comando `npm i` para instalar las dependencias del proyecto.

**Importante**: Se ha utilizado MongoDB para la persistencia de datos. Asegurarse que el servicio en modo local este ejecutándose, para ello ejecutar el siguiente comando desde una terminal `sudo service mongod start`.

El Backend se despliega en modo local en la ruta `http://localhost:3000/api/v1/albums`.

Desde una terminal ejecutar el siguiente comando para desplegar el backend en modo desarrollo `npm run dev`.

### Desplegar Frontend en modo desarrollo:
Desde una terminal ejecutar el comando `npm i` para instalar las dependencias del proyecto.

El Backend se despliega en modo local en la ruta `http://localhost:4200`.
