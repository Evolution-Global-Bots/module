# 🌱 module-gatadios

Este módulo ofrece funciones para obtener información de imágenes de manera aleatoria, centrándose principalmente en contenido relacionado con Yaoi. Sin embargo, este proyecto está abierto a modificaciones y a la incorporación de nuevas ideas.

## 💥 Requisitos
> Este módulo requiere Node.js y npm instalados en su entorno de desarrollo.

## 💻 Instalación
> Puede instalar este módulo en tu proyecto utilizando el siguiente comando:
```bash
npm i module-gatadios
```

## 📁 Agregar a package.json
```json
"dependencies": {
  "module-gatadios": "^1.0.5"
}
```

### 💫 Información de imagen
| Categoría   | Parámetros             | Campos                               | Archivo                                                                                  | 
|-------------|-------------           |--------------------------            |--------------------------                                                                |
| yaoi-info   | `getRandomImage()`     | `link` `author` `name` `description` | [`Aquí`](https://github.com/GataNina-Li/module/blob/main/images/category/yaoi-info.json) |

## 🖥️ Documentación 
<details>
<summary><b>Objeto JSON</b></summary>
  
```js
const yaoiImages = require('module-gatadios')

const resultJson = yaoiImages.getRandomImage()

const link = resultFields.link
const author = resultFields.author
const name = resultFields.name
const description = resultFields.description

console.log('Link: ', link)
console.log('Author: ', author)
console.log('Name: ', name)
console.log('Description: ', description)

```
> **NOTA:** Si el código arroja un error o advertencia, exponga el caso midiande un `issue.` Si cree saber la solución no dude hacer un `pull request.`
</details>

<details>
<summary><b>Cadena JSON</b></summary>
  
```js
const yaoiImages = require('module-gatadios')

const resultJson = yaoiImages.getRandomImage()
const jsonText = JSON.stringify(resultJson, null, 2)

console.log(jsonText)  
```
</details>

-----

## Contribuye al Proyecto

#### 😸 ¿Cómo Puedes Contribuir?
Contribuir es fácil y no importa si eres un desarrollador experimentado o si estás dando tus primeros pasos. Aquí te dejo algunas formas en las que puedes ayudar:

#### 🤔 Encuentra un Problema
Si encuentras un error, un problema o simplemente tienes una idea para mejorar, ¡haznoslo saber! Abre un `issue` y describe lo que estás experimentando.

#### 🛠 Realiza Cambios
`¿Tienes la solución para un problema o una nueva característica que te gustaría agregar?` ¡Perfecto! Haz un `fork` del repositorio, realiza tus cambios y envíanos un `pull request`. Estaré encantada de revisar y fusionar las contribuciones.

#### 🌐 Mejora la Documentación
La documentación clara es esencial. Si encuentras partes confusas o tienes ideas para mejorarla, ¡estamos abiertos a sugerencias! Realiza cambios en la documentación y envía un `pull request`.

#### ¿Por Qué Contribuir?
🤝 Formar parte de una comunidad activa y amigable.

🚀 Aprender y mejorar.

🌍 Colaborar ea ayudar a personas de todo el mundo.

**✨ ¡Esperamos tus pull requests! ✨**

-----

### 🌟 CREADORA 
[![GataNina-Li](https://github.com/GataNina-Li.png?size=100)](https://github.com/GataNina-Li) 
> Este proyecto está bajo la Licencia MIT - vea el archivo **[LICENSE](LICENSE)** para más detalles.
