
function createElement(){
    const img = document.createElement('img')
    const titulo = document.createElement('p')
    const date = document.createElement('p')
    const lingaguem = document.createElement('p')
    const review = document.createElement('p')
    const liImg = document.createElement('div')
    const info = document.createElement('div')
       
    info.classList.add('descripion')
    liImg.classList.add('img')
        
    info.appendChild(titulo)
    info.appendChild(date)
    info.appendChild(lingaguem)
    info.appendChild(review)
  
      return {img,titulo,date,lingaguem,review,liImg,info}
  }
  