const express = require('express');
const path = require('path');
const fs = require('fs');
const tar = require('tar');
const zlib = require('zlib');



const PORT = 3000;

const app = express();



app.get('/', (req, res) => {
    res.send('Hi')
})

app.get('/:name', async (req, res, next) => {
    const fileName = req.params.name

    await arhivator(fileName)
    
    const options = {
        root: path.join(__dirname, '/upload'),
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    }

    res.sendFile(fileName, options, err => {
        if (err) {
            next(err)
        } else {
            console.log('Sent: ', fileName);
        }
    })
})

app.listen(PORT, () => {
    console.log('Server has started.......');
})


//arhivator
function arhivator(name) {
    return new Promise((resolve) => {
        fs.mkdirSync(path.join(__dirname, '/upload'), {recursive: true})
        tar.c(
            {
                gzip: true,
                sync: true,
                file: path.join(__dirname, '/upload', `${name}`)
            },
            [path.join(__dirname, '/assets')]
        )
        resolve()
    })
    
}