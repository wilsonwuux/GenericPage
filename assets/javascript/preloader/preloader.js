export default class Preloader {
    static preloaderImages({images, completed}){
    const promises =images.map(imagesPath =>Preloader.preloaderImage({imagesPath}) )
        Promise.all(promises).then(completed)

    }
    static preloaderImage({imagesPath}){
        return new Promise((res,rej)=>{
         let image = new Image();
        image.src= imagesPath;
        image.onload = res;
        })
       
    }
}