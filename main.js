const form = {
  movie : document.getElementById('filmes'),
  descripytion : document.getElementById('infor'),
  btnClose : document.getElementById('fechar'),
}

form.btnClose.addEventListener('click',()=>{    
    form.descripytion.style.display ='none'
})
 
function clickImg(element,i){
    
    const {titulo,date,lingaguem,review,info} = createElement()
    const url =`https://image.tmdb.org/t/p/original`
    
    const imgClicada = document.createElement('img')
      
    imgClicada.src = url + element[i].backdrop_path
    titulo.innerHTML = `Titulo: ${element[i].title} ` 
    date.innerHTML = `Data: ${formatarDataBR(element[i].release_date)}` 
    lingaguem.innerHTML = `Lingague: ${element[i].original_language }`  
    review.innerHTML = `Description: ${element[i].overview}`    
           
    form.descripytion.innerHTML = ''
         
    form.descripytion.appendChild(form.btnClose)
    form.descripytion.appendChild(info)
    form.descripytion.appendChild(imgClicada)
          
    form.descripytion.style.display ='flex'
    
  }


    