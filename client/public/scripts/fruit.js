const renderFruit = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
  
    const response = await fetch('/fruits')
    const data = await response.json()
  
    const fruitContent = document.getElementById('fruit-content')
  
    let fruit
  
    fruit = data.find(fruit => fruit.id === requestedID)
  
    if (fruit) {
      document.getElementById('image').src = fruit.image
      document.getElementById('name').textContent = fruit.name
      document.getElementById('PLU_Code').textContent = fruit.plu_code
      document.getElementById('description').textContent = fruit.description
      document.title = `FruitNoteBook - ${fruit.name}`
    }
    else {
      const message = document.createElement('h2')
      message.textContent = 'No Fruits Available 😞'
      fruitContent.appendChild(message)   
    }
  }
  
  renderFruit()
  