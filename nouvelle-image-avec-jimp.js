/*
https://ikalas.com/fr/app/nouvelle-image-avec-jimp
*/
return new Promise((resolve, reject)=>{
    new Jimp(256, 256, '#BFC0AF', (err, image) => {
        image.write(outputDirectory + "/"+'image.png');
        resolve(1);
    });
})

