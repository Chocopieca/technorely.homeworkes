const IMAGE_API_URL = 'https://picsum.photos/200/300'
const imageElement = document.getElementById('image')

function myFetch(url, metod, body) {
    return new Promise((resole,reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(metod, url);
        xhr.responseType = "arraybuffer"
        xhr.onprogress = function(event) {
            console.log(`Получил ${event.loaded} из ${event.total} байт`);
        }
        xhr.onload = () => {
            if(xhr.status >= 400){
                reject(xhr.response)
            } else {
                resole({
                    response: xhr.response,
                    json: () => JSON.stringify(xhr.response),
                    blob: () => new Blob([xhr.response], {type: "image/jpeg"})
                });
            }
        }
        
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(body);
    })
}

myFetch(IMAGE_API_URL, "GET")
    .then(response => response.blob())
    .then(blob => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onload = () => {
            insertImage(reader.result)
        }
    })
    .catch(err => console.log(err))

function insertImage(src) {
    console.log(src)
    imageElement.src = src
}