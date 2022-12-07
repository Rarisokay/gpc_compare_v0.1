export class Compare {
    greenBits = []
    greenMnes = []
    greenObjs = []

    redBits = []
    redMnes = []
    redObjs = []

    greenInserts = []
    redInserts = []
    blackInserts = []
    blackInserts2 = []

    lengthDiffs = []

    constructor(insertData1, insertData2) {
        this.insertData1 = insertData1
        this.insertData2 = insertData2
        this.diffGreen()
        this.diffRed()
        this.removedInsert()
        this.addedInsert()
        this.intersectInsert()
        this.calcBitLengthDiff()
    } 
    diffGreen = () => {
        this.insertData1.forEach( data1 => {
            this.greenBits = []
            this.greenMnes = []
            this.insertData2.forEach( data2 => {
                if (data1.name == data2.name) {
                    data1.bits.forEach( (bit1, index1) => {
                        let greenAdded = true
                        data2.bits.forEach( (bit2, index2) => {
                            if (data2.mnemonics[index2] == data1.mnemonics[index1] && bit1 == bit2) {
                                greenAdded = false 
                            }
                        })
                        if (greenAdded) {
                            this.greenBits.push(bit1)
                            this.greenMnes.push(data1.mnemonics[index1])
                        }
                    })
                }
            })
            this.greenObjs.push({
                "name": data1.name,
                "greenBits": this.greenBits,
                "greenMnes": this.greenMnes
            })
        })
    }
    diffRed = () => {
        this.insertData2.forEach( data1 => {
            this.redBits = []
            this.redMnes = []
            this.insertData1.forEach( data2 => {
                if (data1.name == data2.name) {
                    data1.bits.forEach( (bit1, index1) => {
                        let redAdded = true
                        data2.bits.forEach( (bit2, index2) => {
                            if (data2.mnemonics[index2] == data1.mnemonics[index1] && bit1 == bit2) {
                                redAdded = false 
                            }
                        })
                        if (redAdded) {
                            this.redBits.push(bit1)
                            this.redMnes.push(data1.mnemonics[index1])
                        }
                    })
                }
            })
            this.redObjs.push({
                "name": data1.name,
                "redBits": this.redBits,
                "redMnes": this.redMnes
            })
        })
    }
    removedInsert = () => {
        this.insertData1.forEach( data1 => {
            let isRemvoed = true 
            this.insertData2.forEach( data2 => {
                if (data1.name == data2.name) {isRemvoed = false}
            })
            if (isRemvoed) {
                this.greenInserts.push(data1.name)
            }
        })
    }
    addedInsert = () => {
        this.insertData2.forEach( data2 => {
            let isAdded = true
            this.insertData1.forEach( data1 => {
                if (data2.name == data1.name) {isAdded = false}
            })
            if (isAdded) {
                this.redInserts.push(data2.name)
            }
        })
    }
    intersectInsert = () => {
        this.insertData1.forEach( data => {
            if (!this.greenInserts.includes(data.name)) {
                this.blackInserts.push(data)
            }
        })
        this.insertData2.forEach( data => {
            if (!this.redInserts.includes(data.name)) {
                this.blackInserts2.push(data)
            }
        })
    }
    calcBitLengthDiff = () => {
        this.blackInserts.forEach((data, index) => {
            this.lengthDiffs.push(data.bits.length)
        })
    }
}