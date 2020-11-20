function getRandomImg(arr){
    let ranIndex = Math.floor(Math.random() * arr.length)

    return arr[ranIndex].images.original.url
}

async function getGif(term){
    try{
    const res = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`);
    let giphys = res.data.data;
    return getRandomImg(giphys)
    }catch(err){
        console.log(err)
    }
    

}



const form = $('#giph-search')
let input = $('#term')

form.on('click', '#search', async function(){
    let term = await getGif(input.val())
    $('.row').append(`<div class="col-3">
    <img class="img-thumbnail d-inline" src="${term}">
  </div>`)
})

form.on('click', "#delete", function(){
    $('.row').remove()
})