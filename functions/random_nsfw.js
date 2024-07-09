const fs = require('fs')
const path = require('path')

const jsonFiles = {
'nsfwfoot': 'nsfwfoot.json',
'nsfwloli': 'nsfwloli.json',    
}

function loadJsonData(filename) {
try {
const jsonPath = path.join(__dirname, '..', 'nsfw', filename)
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'))
return data
} catch (error) {
console.log(`Error leyendo o parseando el archivo ${filename}:`, error)
return null
}}

function getRandomImageNsfw(keyword) {
const filename = jsonFiles[keyword]
if (!filename) {
const availableKeywords = Object.keys(jsonFiles).join('\n')
console.log('Describa qué tipo de imagen desea que se muestre.\n\nDisponibles:\n' + availableKeywords)
return null
}

const data = loadJsonData(filename)
if (!data) {
console.log('No se pudo leer el archivo JSON.')
return null
}

try {
const randomIndex = Math.floor(Math.random() * data.length)
return data[randomIndex]
} catch (error) {
console.log('Ocurrió un problema al seleccionar una imagen.')
return null
}}

module.exports = getRandomImageNsfw
