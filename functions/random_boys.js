const fs = require('fs')
const path = require('path')

let boysData

try {
const boysJsonPath = path.join(__dirname, '../folder_bl/boys.json')
boysData = JSON.parse(fs.readFileSync(boysJsonPath, 'utf8'))
} catch (error) {
console.log('Error leyendo o parseando el archivo JSON:', error)
boysData = null
}

function getRandomImageBoys() {
if (!boysData) {
console.log('No se pudo leer el archivo JSON.')
return null
}

try {
const randomIndex = Math.floor(Math.random() * boysData.length)
return boysData[randomIndex]
} catch (error) {
console.log('Ocurrió un problema al seleccionar una imagen.')
return null
}}

module.exports = getRandomImageBoys
