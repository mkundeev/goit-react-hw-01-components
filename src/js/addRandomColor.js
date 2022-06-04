import data from '../components/Statistics/data.json'


const newData = [...data ]

for (let item of newData) {
  item.color = getRandomHexColor()
}

export default newData

 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
