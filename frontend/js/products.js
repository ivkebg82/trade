import {
    methods
} from './utils.js'

let data = []

//GET DOM ELEMENTS
const container = document.querySelector('.container')
const search = document.querySelector('.search')
const filterButton = document.querySelector('.fas')
const filterMenu = document.querySelector('.filter_menu')
const mainSelect = document.getElementById('main_select')
const filters = document.querySelectorAll('.filter')
const typeFilter = document.querySelector('.type')
const allFilters = document.querySelectorAll('input')

methods.getData(container)


search.addEventListener('input', (e) => {
    let value = e.target.value
    data = methods.data;

    let filterData = data.map((el) => {
        let {
            type
        } = el
        if (type.includes(value)) {
            container.innerHTML = ''
            return el
        } else if (!type.includes(value)) {
            return
        }

    })

    filterData.forEach((el) => {
        if (el === undefined) {
            return
        } else {
            const {
                model,
                name,
                description,
                price,
                img
            } = el
            const html = `
              <div class="wrapper">
               <p>${model}</p>
               <p>${name}</p>
               <p>${description}</p>
               <p>price:${parseInt(price)}</p>
               <div class="img-wrapper"><img src="${img}" /></div>
             </div> 
               `
            container.insertAdjacentHTML('beforeend', html)
        }


    })
})

filterMenu.classList.add('hidden')
filterButton.addEventListener('click', () => {
    methods.hideFilters(filters)
    filterMenu.classList.toggle('show')
    filterMenu.classList.toggle('hidden')
})

//hide all filters when filterMenu shows up
filters.forEach(filter => filter.style.display = 'none')

//select element for selecting active filter
mainSelect.addEventListener('change', function () {
    let pickedElement = this.value
    console.log(pickedElement)
    methods.hideFilters(filters)
    let pickedFilter = document.querySelector(`.${pickedElement}`)
    pickedFilter.style.display = 'flex'
})

//type filter(checkbox)-------------

typeFilter.addEventListener('change', () => {
    data = methods.data
    const discountItems = data.filter((data) => data.discount == true)
    console.log(discountItems)
})
const filtersInput = Array.from(allFilters)

filtersInput.forEach((filter) => filter.addEventListener('click', makeFilter))

function makeFilter() {
    const {
        type
    } = this
    type === 'range' ? console.log('this is range') : console.log('kjllj')
}
console.log('change')
//adssdf