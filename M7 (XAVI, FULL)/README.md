# PROJECTE M6 I M7
#### PART M7 ####

- La base de datos se llama SCAMPCSHOP_DB, el usuario y contraseña son "marc" y "1234" respectivamente, tal como está configurada la conexión en los archivos.

- La base de datos debe contener las tablas USUARIO y PRODUCTO.
* TABLA USUARIO:
  id_usuario int PRIMARY KEY NOT NULL AUTO_INCREMENT;
  nombre_usuario varchar(100);
  mail_usuario varchar(100);
  password_usuario varchar(100);
  
* TABLA PRODUCTO:
 id_producto int PRIMARY KEY NOT NULL AUTO_INCREMENT;
 nombre_producto varchar(200);
 desc_producto varchar(500);

 

- Se puede crear, modificar, leer y borrar un usuario. Al logearse, el header de la página contendrá un botón de usuario, al darle, se podrá acceder a un menú de eliminación de usuario, modificación de usuario y cierre de sesión.

- Al logearse, se generará un botón en la página principal que redirigirá a un formulario de ingreso de producto.

- El módulo 'sessionGuard' permite con un 'require' comprobar si la sesión está iniciada. En caso negativo, te rebota la conexión hasta la página principal.
