async function api(){
    const url = 'https://api.themoviedb.org/3/movie/top_rated'
    const method = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmYWE1Y2Y1NmI4YjliYjg1OWQ2NGI3ZWQ3MzFhZGU0YiIsInN1YiI6IjY2NTEzODk3OTBmZDNkZGJmNzIyZjNlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HyDtYrHD1hNIB0mcar5bWFQSY9bhylcV9mio9RUi32o'
  }}
  try {
    
    const apiFilmes = await fetch(url,method)
    const json = await apiFilmes.json()
    console.log(json.results);
    return json.results

  } catch (error) {
    
    console.log(error)
    
  }
}

  api()
  .then(movies => {
    const url =`https://image.tmdb.org/t/p/original`
     
    for (let i = 0; i < 20; i++) {
      
      const {img,liImg} = createElement()
      img.alt = movies.title
      img.src += url + movies[i].poster_path
      
      img.addEventListener('click',()=>{
        clickImg(movies,i)
      })
      
      liImg.appendChild(img)
      form.movie.appendChild(liImg)
    }
  })
  .catch(error => {
    console.log(error);
  })  