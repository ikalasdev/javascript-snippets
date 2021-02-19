return new Promise((resolve, reject)=>{
    new Jimp(256, 256, '#BFC0AF', (err, image) => {
        image.scan(0,0, image.bitmap.width, image.bitmap.height, function(x, y, idx){
            this.bitmap.data[idx] = Math.floor(Math.random() * 100 ) ;
            this.bitmap.data[idx+1] = Math.floor(Math.random() * 100 ) ;
            this.bitmap.data[idx+2] = Math.floor(Math.random() * 100 ) ;
            
        })
      image.write(outputDirectory + "/"+'image.png');
      resolve(1);
    });
})

