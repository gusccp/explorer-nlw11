const form = document.querySelector('#form-habits')
const config = new NLWSetup(form)

const data = {
  run: ['02-13','02-14','02-15','02-16','02-17','02-18'],
  water: ['02-13','02-14','02-15','02-16','02-17','02-18'],
  food: ['02-13','02-14','02-15','02-16','02-17','02-18'],
  football: ['02-13','02-14','02-15','02-16','02-17','02-18']
}

config.setData(data)

config.load()
config.renderLayout()

