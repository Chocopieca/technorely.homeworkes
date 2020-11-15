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

app.get('/:name', (req, res, next) => {
    const fileName = req.params.name

    arhivator(fileName)

    function send(req, res, name) {
        const options = {
            root: path.join(__dirname, '/upload'),
            dotfiles: 'deny',
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        }

        res.sendFile(name, options, err => {
        if(err) {
            next(err)
        } else {
            console.log('Sent: ', name);
        }
    })}
})

app.listen(PORT, () => {
    console.log('Server has started.......');
})


//arhivator
 function arhivator(name) {
    fs.mkdir(path.join(__dirname, '/upload'), () => {
        tar.c(
                {
                    gzip: true,
                    sync: true
                },
                [path.join(__dirname, '/assets')]
        )
        .pipe(fs.createWriteStream(path.join(__dirname, '/upload', `${name}`)))
    })
}