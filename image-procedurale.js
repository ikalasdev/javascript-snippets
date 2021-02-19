return new Promise((resolve, reject)=>{
    new Jimp(20, 20, "#000000", (err, image) => {
        image.scan(0,0, image.bitmap.width, image.bitmap.height, function(x, y, idx){
            this.bitmap.data[idx] = Math.floor(Math.random() * 255 ) ;
            this.bitmap.data[idx+1] = Math.floor(Math.random() * 255 ) ;
            this.bitmap.data[idx+2] = Math.floor(Math.random() * 255 ) ;
            
        })
      image.write(outputDirectory + "/"+'image.png');
      resolve(1);
    });
})

