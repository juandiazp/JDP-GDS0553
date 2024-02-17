# Practica Login

Este proyecto es una práctica con Angular, JSON Server, node.js y npm.

## Requisitos Previos

Tener instalado lo siguiente:

- Node.js y npm
- Angular CLI
- JSON Server

    **Node.js**
    Si aún no los tienes instalados, descárgalos desde [https://nodejs.org/](https://nodejs.org/) e instálalos según las instrucciones.

    Verificar la versión de Node con el comando 
    ```
    node -v
    ```

    **Angular CLI:** 
    Actualizar si se desea el programa NPM con el comando 
    ```
    npm install -g npm
    ```

    Asegúrate de tener Angular CLI instalado globalmente. Si no lo tienes, puedes instalarlo ejecutando el siguiente comando:

   ```
   npm install -g @angular/cli
   ```

    Verificar la versión de NPM con el comando 
    ```
    ng version
    ```

    **Prime ng**
    Instalar
    ```
    npm install primeng
    ```

    **JSON Server**: Necesitarás JSON Server para simular el servidor de backend. Puedes instalarlo globalmente con el siguiente comando
    ```
    npm install -g json-server
    ```

## Clonar el repositorio
```
git clone https://github.com/juandiazp/JDP-GDS0553.git
```

## Navega al directorio del proyecto
```
cd jdp-gds0553
```

## Instalar las dependencias
```
npm install
```

## Iniciar JSON Server
```
json-server --watch db.json
```

## Iniciar la Aplicación
```
ng serve
```

## Ver la aplicación en funcionamiento
Despues de iniciar la aplicacion con `ng serve` . Abre tu navegador y coloca esta URL [http://localhost:4200/](http://localhost:4200/login)
