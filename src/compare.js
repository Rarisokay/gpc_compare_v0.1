export const removedGPC = (_gpcData1, _gpcData2) => {
    let removedNames = []
    _gpcData1.forEach(element1 => {
        let isRemoved = true
        _gpcData2.forEach(element2 => {
            if (element1.name == element2.name) {
                isRemoved = false
            }
        })
        if (isRemoved) {
            console.log(`${element1.name} is Removed`)
            removedNames.push(element1.name)
        }
    })
    return removedNames
}

export const bitShow = (_gpcData1, _gpcData2) => {
    let showBits = []

    _gpcData1.forEach(data1 => {
        let isRemoved = true
        _gpcData2.forEach(data2 => {
            if (data1.name == data2.name) {
                isRemoved = false
                let bitRemoved = true 
                data1.mnemonics.forEach(mne1 => {
                    data2.mnemonics.forEach(mne2 => {
                        if (mne1 == mne2) {
                            bitRemoved = false 
                        }
                    })
                    if (bitRemoved) {
                        showBits.push(data1.name)
                    }
                })
            }
        })
    })

    return showBits
}

export const diffGPC = (_gpcData1, _gpcData2) => {
    let greenBits = []

    _gpcData1.forEach(data1 => {
        _gpcData2.forEach(data2 => {
            if (data1.name == data2.name) {
                let bitRemoved = true 
                data1.mnemonics.forEach(mne1 => {
                    data2.mnemonics.forEach(mne2 => {
                        if (mne1 == mne2) {
                            bitRemoved = false 
                        }
                    })
                    if (bitRemoved) {
                        greenBits.push(mne1)
                    }
                })
            }
        })
    })
    return greenBits
}

export const diffGPCRed = (_gpcData1, _gpcData2) => {
    let redBits = []
    let redMnes = []
    let output = []
    
    _gpcData2.forEach(data2 => {
        redBits = []
        redMnes = []
        _gpcData1.forEach(data1 => {
            if (data2.name == data1.name) {
                data2.bits.forEach((bit2, index2) => {
                    let redAdded = true
                    data1.bits.forEach((bit1, index1) => {
                        if (data1.mnemonics[index1] == data2.mnemonics[index2] && bit1 == bit2) {
                            redAdded = false
                        }
                    })
                    if (redAdded) {
                        redBits.push(bit2)
                        redMnes.push(data2.mnemonics[index2])
                    }
                })
            }
        })
        output.push({
            "name": data2.name,
            "redBits": redBits,
            "redMnes": redMnes
        })
    })
    return output 
}

export const diffGPCGreen = (_gpcData2, _gpcData1) => {
    let greenBits = []
    let greenMnes = []
    let outputG = []
    
    _gpcData2.forEach(data2 => {
        greenBits = []
        greenMnes = []
        _gpcData1.forEach(data1 => {
            if (data2.name == data1.name) {
                data2.bits.forEach((bit2, index2) => {
                    let greenAdded = true
                    data1.bits.forEach((bit1, index1) => {
                        if (data1.mnemonics[index1] == data2.mnemonics[index2] && bit1 == bit2) {
                            greenAdded = false
                        }
                    })
                    if (greenAdded) {
                        greenBits.push(bit2)
                        greenMnes.push(data2.mnemonics[index2])
                    }
                })
            }
        })
        outputG.push({
            "name": data2.name,
            "greenBits": greenBits,
            "greenMnes": greenMnes
        })
    })
    return outputG 
}

