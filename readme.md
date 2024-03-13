# robbi

!npm version
!Licencia

## Instalación

Para instalar y utilizar **robbi**, sigue estos pasos:

    ```bash
    npm install robbi
    ```

## Uso

Aquí tienes ejemplos de cómo puedes utilizar **robbi**:

### Programación periódica

Al usar {periodic} se ejecutara la tarea proporcionada periodicamente segun el tiempo espesificado

```javascript
    const { periodic } = require('robbi');

    // Ejecuta una tarea cada 5 minutos
    periodic({ m: 5 }, () => {
    console.log('Tarea ejecutada cada 5 minutos');
    });
```

```javascript
    const { periodic } = require('robbi');

    // Ejecuta una tarea cada 5 minutos
    periodic({ s: 10 }, () => {
    console.log('Tarea ejecutada cada 10 segundos');
    });
```

```javascript
    const { spesific } = require('robbi');

    // Ejecuta una tarea cada 5 minutos
    spesific({ h: 10, m:20 }, () => {
    console.log('Tarea ejecutada cada dia a las 10 y 20 am');
    });
```

```javascript
    const { spesific } = require('robbi');

    // Ejecuta una tarea cada 5 minutos
    spesific({ w:1 }, () => {
    console.log('Tarea ejecutada cada lunes');
    });
```

## Objeto de tiempo

```javascript
{
    s => segundos (0-59),
    m => minutos (0-59),
    h => horas (0-23),
    d => dias (1 - 31),
    mm => mes (1-12),
    w => dias de la semana (0 - 7) domingo es (0 y 7)
}
```