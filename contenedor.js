const fs = require('fs')

class Contenedor{

    constructor(file){
        this.file = file
    }


    getAll(){

        const dataString = fs.readFileSync(this.file, "utf-8")
        
        const dataJSON = JSON.parse(dataString)

        console.log('getAll1', dataJSON)
        return dataJSON
    }

    save(objeto){
        const dataJSON = this.getAll()

        const latestElement = dataJSON[dataJSON.length -1]
        const idLatestElement = latestElement.id
        const nextId = idLatestElement +1

        objeto.id = nextId;

        const newArray = dataJSON.push(objeto)

        fs.writeFileSync(this.file, `${JSON.stringify(dataJSON)}`)


        return dataJSON
        
    }

    getAll2(){

        const dataString = fs.readFileSync(this.file, "utf-8")
        
        const dataJSON = JSON.parse(dataString)

        console.log('getAll2', dataJSON)
        return dataJSON
    }


}

module.exports = Contenedor
