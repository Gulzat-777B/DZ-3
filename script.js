function MovieSearch(title){
  fetch(`http://www.omdbapi.com/?t=${title}&apikey=ae39e1a8`)
  .then(res => res.json())
  .then((data) => {
    console.log(data);
    if(data.Response === 'True'){
      const movie = `
      <h2>Название: ${data.Title}</h2> 
      <h3>Год выпуска: ${data.Year}</h3>
      <h3>Продукция: ${data.Website}</h3> 
      <h3>Время: ${data.Runtime}</h3>
      <h3>Режиссёры: ${data.Director}</h3> 
      <h3>Актеры: ${data.Actors}</h3>
           
      <h3>Сюжет: ${data.Plot}</h3>
      <img src="${data.Poster}" alt="Movie Poster">
      `
      document.getElementById("section").innerHTML += movie
    }else{
      document.getElementById("section").innerHTML += `<p>Фильм не найден, повторите еще раз</p>`
    }
  }).catch(err => console.error(err))
}

document.addEventListener('DOMContentLoaded',function(){
  document.getElementById("inputMovie").addEventListener('submit', function(e){
    e.preventDefault()
    const movieTwo = document.getElementById("input").value
    MovieSearch(movieTwo)
  })
})