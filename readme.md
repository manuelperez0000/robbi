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

    // Ejecuta una tarea cada 10 segundos
    periodic({ s: 10 }, () => {
    console.log('Tarea ejecutada cada 10 segundos');
    });
```
### Programación espesifica

Al usar {spesific} se ejecutara la tarea a la hora o dia espesificado

```javascript
    const { spesific } = require('robbi');

    // Ejecuta una tarea cada dia a las 10 y 20 am
    spesific({ h: 10, m:20 }, () => {
    console.log('Tarea ejecutada cada dia a las 10 y 20 am');
    });
```

```javascript
    const { spesific } = require('robbi');

    // Ejecuta una tarea cada lunes
    spesific({ w:1 }, () => {
    console.log('Tarea ejecutada cada lunes');
    });
```

## Objeto de tiempo

para usar las tareas de robbi se le deben pasar 2 parametros, un objeto de tiempo y un callback, 
dentro de tu callback deberas colocar la tarea que quieres realizar

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