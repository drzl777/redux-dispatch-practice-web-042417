

export let state

export function managePets (state = {pets: []}, action) {
  switch (action.type) {
    case 'ADD_PET':
      const newPet = {...action.pet}
      return {...state, pets: [...state.pets, newPet]}
    case 'REMOVE_PET':
      const removedPetList = [...state.pets].filter(pet => pet.id !== action.id)
      return {...state, pets: removedPetList}
    default:
      return state
  }
}

export function dispatch (action) {
  state = managePets(state, action)
  render()
}

export function render () {
  const petList = state.pets.map(p => `<li>${p.name}</li>`)
  let container = document.getElementById('container')
  container.innerHTML =   `<ul>${petList.join('')}</ul>`

}
