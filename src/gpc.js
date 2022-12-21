import { open } from '@tauri-apps/api/dialog'
import { readTextFile } from '@tauri-apps/api/fs'

// Open File Dialog to Choose GPC File
export const openGPCFile = async () => {
    try {
        let fileName
        const selectedFileName = await open({
            multiple: false,
            title: "Open GPC File",
            filters: [{
                name: 'GPC',
                extensions: ['gpc']
            }]
        })
        if(selectedFileName !== null)
            fileName = selectedFileName
        return fileName
    } catch (error) {
        console.log(error)
        return false
    }
}

// Extract Data from GPC File to JS Object
export const readGPCFile = async (_filePath) => {
    try {
        let data = []
        let name 
        let order
        let blockOrder
        let xOrigin
        let yOrigin
        let dk
        let behaviorOrder
        let numBit
        let bits
        let mnemonics

        let onInsertion = false

        const result = await readTextFile(_filePath)
        result.split(/\r?\n/).forEach(line => {   
            if (line == "")
                onInsertion = false
            if (onInsertion) {
                let onOrder = false
                let onBlockOrder = false
                let onXOrigin = false
                let onYOrigin = false
                let onDK = false
                let onBehaviorOrder = false
                let onNumBit = false
                let onBits = false

                let lastIndex = 0
                bits = []
                mnemonics = []

                for (let i = 0; i < line.length; i ++) { 
                    if (line[i] == " " && line[i+1] == '0' && line[i+5] == '0' && onBits) {
                        const bitLine = line.slice(lastIndex, i)
                        bitLine.split(" ").forEach(item => {
                            if (item !== "") {
                                if (item[item.length-1] == 'M' && item[item.length-2] == ',') {
                                    bits.push(item.slice(0, -2))
                                } else {
                                    mnemonics.push(item)
                                } 
                            }
                        })
                        onBits = false
                        lastIndex = i
                    }
                    if (line[i] == " " && onNumBit) {
                        onNumBit = false
                        numBit = line.slice(lastIndex , i)
                        onBits = true
                        lastIndex = i
                    }
                    if (line[i] == " " && onBehaviorOrder) {
                        onBehaviorOrder = false
                        behaviorOrder = line.slice(lastIndex , i)
                        onNumBit = true
                        lastIndex = i
                    }
                    if (line[i] == " " && onDK) {
                        onDK = false
                        dk = line.slice(lastIndex , i)
                        onBehaviorOrder = true
                        lastIndex = i
                    }
                    if (line[i] == " " && onYOrigin) {
                        onYOrigin = false
                        yOrigin = line.slice(lastIndex , i)
                        onDK = true
                        lastIndex = i
                    }
                    if (line[i] == " " && onXOrigin) {
                        onXOrigin = false
                        xOrigin = line.slice(lastIndex , i)
                        onYOrigin = true
                        lastIndex = i
                    }
                    if (line[i] == " " && onBlockOrder) {
                        onBlockOrder = false
                        blockOrder = line.slice(lastIndex , i)
                        onXOrigin = true
                        lastIndex = i
                    }
                    if (line[i] == " " && onOrder) {
                        onOrder = false
                        order = line.slice(lastIndex + 1, i)
                        onBlockOrder = true
                        lastIndex = i
                    }
                    if (line[i] == "=") {
                        name = line.slice(0, i)
                        onOrder = true
                        lastIndex = i 
                    }
                }
                data.push({
                    "name": name,
                    "order": order,
                    "blockOrder": blockOrder,
                    "xOrigin": xOrigin,
                    "yOrigin": yOrigin,
                    "dk": dk,
                    "behaviorOrder": behaviorOrder,
                    "numBit": numBit,
                    "bits": bits,
                    "mnemonics": mnemonics
                }) 
            } 
            if (line == "[Insertions]") {
                onInsertion = true
            }
        })
        return data
    } catch (error) {
        console.log(error)
        return false
    }
}

export const myFunction = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };
