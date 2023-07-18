// WE NEED TO CHECK ON THIS AS WE ARE GETTING AN ERROR CODE WHEN UPLOADING IMG TO PROFILE

async function ImagetoBase64(file){
    const reader = new FileReader()
    reader.readAsDataURL(file)

    const data = new Promise((resolve, reject) => {
        reader.onload = () => resolve(reader.result)
        reader.onerror = err => reject(err)
    })

    return data
}

export {ImagetoBase64}