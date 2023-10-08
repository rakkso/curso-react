export const getGifs =async() => {
    const url = 'https://api.giphy.com/v1/gifs/search?api_key=GeBZZMWXwYjyH2H5CxCKkZtXE2frfBzL&q=$ {category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips'
    const resp = await fetch (url);
    const { data } = await resp.json();

    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.fixed_height_small.url
        }
            ));

            
    console.log(gifs);
    return gifs;
  }