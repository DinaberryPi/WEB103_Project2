const renderFruits = async () => {
    const response = await fetch('/fruits')
    const data = await response.json()
  
    const mainContent = document.getElementById('main-content')

    if (data) {
      data.map(fruit => {
        const card = document.createElement('div')
        // classlist -> css class name
        card.classList.add('card')
  
        const topContainer = document.createElement('div')
        topContainer.classList.add('top-container')
  
        const bottomContainer = document.createElement('div')
        bottomContainer.classList.add('bottom-container')
  
        topContainer.style.backgroundImage = `url(${fruit.image})`
  
        const name = document.createElement('h3')
        name.textContent = fruit.name
        bottomContainer.appendChild(name)
  
        const PLU_Code = document.createElement('P')
        PLU_Code.textContent = "PLU Code: " + fruit.plu_code
        bottomContainer.appendChild(PLU_Code)
  
        const link = document.createElement('a')
        link.textContent = 'Read More >'
        link.setAttribute('role', 'button')
        link.href = `/fruits/${fruit.id}`
        bottomContainer.appendChild(link)
  
        card.appendChild(topContainer)
        card.appendChild(bottomContainer)
  
        mainContent.appendChild(card)
      })
    }
    else {
      const message = document.createElement('h2')
      message.textContent = 'No Fruits Available 😞'
      mainContent.appendChild(message)
    }
  }
  
  const requestedUrl = window.location.href.split('/').pop()
 
  if (requestedUrl) {
    window.location.href = '../404.html'
  }
  else {
    renderFruits()[[[]]]
  }
  