const methods = {
    data: [],
    //GET KEYBOARD
    getKeyboard: async () => {
        const data = await fetch('http://localhost:3000/keyboards');
        const res = await data.json()
        console.log(res)
    },
    //GET DATA
    getData: async (container) => {
        const data = await fetch('http://localhost:3000/data');
        const res = await data.json()

        const arr = Array.from(res)
        arr.forEach((el) => {
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
            <p>price:${parseInt( price)}e</p>
            <div class="img-wrapper"><img src="${img}" /></div>
          </div> 
            `
            methods.data = res;
            container.insertAdjacentHTML('beforeend', html)
        })

    },
    //hide all filters
    hideFilters: (arr) => {
        arr.forEach((el) => el.style.display = 'none')
    }
}

//

export {
    methods
};