const apiKey = 'GeBZZMWXwYjyH2H5CxCKkZtXE2frfBzL';

const peticion= fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion.then (resp => {
//         //console.log(resp.json)
//         const mijson = resp.json();
        
//         mijson.then(info =>{
//             console.log(info.data.images.original.url)
//         })
   
// })
// .catch(console.warn);

//  peticion.then (resp => {
//      resp.json.then(data => {
//          console.log(resp)
//     })
    
//  })
//  .catch(console.warn);


//  peticion
//     .then(resp =>  resp.json())
//     .then( ({data}) => {
//          const {url} = data.images.original;
//          console.log('data', data.images.original.url)
//          console.log('hola',url);
//          const img = document.createElement('img');
//          img.src = url;

//          document.body.append(img);
//      })
//  .catch(console.warn);

 const getImagen = async () => {
   try {
    const apiKey = 'GeBZZMWXwYjyH2H5CxCKkZtXE2frfBzL';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const json = await resp.json();
    console.log(json)
    const {url} = json.data.images.original;


    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
   }
   catch (error) {
      console.error(error)
   }
 
   }

 getImagen();