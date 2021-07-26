# Prueba de conexión NODEJS con MySQL/MariaDB (Docker)


## Comenzando 🚀

_Clonar el repositorio y ejecutar el siguiente comando:_

```
npm install
```

## Pre-requisitos 📋

_Instalar Docker_

* [Intalación de Docker en UB```
83
​
84
```UNTU](https://docs.docker.com/engine/install/ubuntu/)


## MariaDB (Docker)

_Se crea una instancia de la imagen de MariaDB y se expone en el puerto 3307:_

```
sudo docker run --name mariadb-test -e MYSQL_ROOT_PASSWORD=123123 -p 3307:3306 --rm -d mariadb:latest
```

_Entramos al contendor:_

```
sudo docker exec -it mariadb-test bash
```

_Ahora ya dentro del contenedor, ingresamos al gestor de base de datos MariaDB:_


```
mysql -u root -p123123
```

_Copiamos y ejecutamos el siguiente script para crear la base de datos llamada @@@@ y una tabla llamada @@@@ e ingresamos unos datos de prueba:_

```
CREATE DATABASE DB_TEST;

USE MOVIES;

CREATE TABLE PERSON_TEST(
    ID_MOVIE INT PRIMARY KEY NOT NULL,
    NAME_MOVIE VARCHAR(50),
    SCORE_MOVIE INT NOT NULL
);

INSERT INTO PERSON_TEST(ID_PERSON, NAME_PER, AGE) VALUES
('1',      'PERSON01', '25'),
('2',      'PERSON02', '50'),
('3',      'PERSON03', '75');
```

_Hacemos una consulta para verificar la creación de la tabla y la inserción de los datos de prueba:_

```
SELECT * FROM PERSON_TEST
```
_Salimos del gestor de base de datos y del contenedor con:_

```
exit
```


## NODEJS

_Vamos a la carpeta donde clonamos el repositorio (testDB) y ejecutamos el siguiente comando:_

```
node index.js
```
_Ahora vamos a nuestro navegador e ingresamos a:_
```
localhost:2000/test   ó    127.0.0.0:2000/test
```
