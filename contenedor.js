const fs = require('fs')

class Contenedor{

    constructor(file){
        this.file = file
    }


    getAll(){

        const dataString = fs.readFileSync(this.file, "utf-8")
        
        const dataJSON = JSON.parse(dataString)

        return dataJSON


    }

    async save(objeto){

        const dataJSON = await this.getAll();

        const latestElement = dataJSON[dataJSON.length -1]
        const idLatestElement = latestElement.id
        const nextId = idLatestElement +1

        objeto.id = nextId;

        const newArray = dataJSON.push(objeto)

        await fs.promises.writeFile(this.file, `${JSON.stringify(dataJSON)}`)

        return dataJSON
        
    }
}

module.exports = Contenedor
