const fs = require('fs')
const path = require('path')
let moduleUrl = 'https://github.com/GataNina-Li/module'
let fileError = `Categoría no encontrada:\n\nVisite ${moduleUrl} para conocer las categorías disponibles.`
let fullError = `Ah surgido un error inesperado. Comuníquese con el proyecto encargado:\n\n${moduleUrl}`
let categoryFolder

function getRandomImage() {
try {
categoryFolder = path.join(__dirname, '..', 'images', 'category', 'yaoi-info.json')
if (!fs.existsSync(categoryFolder)) {
return fileError
}
const fileContent = require(categoryFolder)
const randomItem = fileContent[Math.floor(Math.random() * fileContent.length)]
return randomItem
} catch (error) {
return fullError
}}

module.exports = getRandomImage

