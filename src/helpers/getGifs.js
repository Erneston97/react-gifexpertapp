
 export const getGif=async(category)=>{

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=c9SBtdFZct070Wq7c7dlC5JJ5nDOI10i`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img=>{

        return {
            id: img.id,
            title:img.title,
            url:img.images?.downsized_medium.url
        }
    })

    return gifs;

  
}