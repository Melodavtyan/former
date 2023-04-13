let tarack = [{
        id: 1,
        name: 'շիրակ',
        city1: 'գյումրի',
        city2: 'արթիկ'


    },
    {
        id: 2,
        name: 'կոտայք',
        city1: 'ծաղկաձոր',
        city2: 'աբովյան'
    },
    {
        id: 3,
        name: 'լոռի',
        city1: 'վանաձոր',
        city2: 'սպիտակ'
    },
    {
        id: 4,
        name: 'գեղարքունիկ',
        city1: 'սևան',
        city2: 'վարդենիս'
    },
    {
        id: 5,
        name: 'արմավիր',
        city1: 'արմավիր',
        city2: 'մեծամոր'
    },
    {
        id: 6,
        name: 'արարատ',
        city1: 'արտաշատ',
        city2: 'մասիս'
    },
     {
        id: 7,
        name: 'տավուշ',
        city1: 'իջևան',
        city2: 'դիլիջան'
    },
    {
        id: 8,
        name: 'արագածոտն',
        city1: 'աշտարակ',
        city2: 'ապարան'
    },
     {
        id: 9,
        name: 'վայոց ձոր',
        city1: 'եղեգնաձոր',
        city2: 'ջերմուկ'
    },
     {
        id: 10,
        name: 'սյունիք',
        city1: 'կապան ',
        city2: 'գորիս'
    },
     {
        id: 11,
        name: 'երևան',
        city1: 'երևան',
        city2: 'երևան'
    }
]
// ----------------marzeri u qaxaqneri mas@----------
let selectReg = document.forms.reg.region
for (const item of tarack) {
    selectReg.options.add(new Option(item.name,item.id))

}
let selectCity = document.forms.city.qaxaq

selectReg.addEventListener('change', function () {
    selectCity.options.add(new Option(tarack[this.value - 1].city1))
    selectCity.options.add(new Option(tarack[this.value - 1].city2))
});

// -----------------anuni u azganuni mas@--------------
let selectName = document.forms.person.name

selectName.onblur = function () {
    if (this.value.length < 3 || this.value.includes('@')) {
        selectName.classList.add('invalidName')
    }

}
selectName.onfocus = function () {
    if (this.value.length > 3) {
        selectName.classList.remove('invalidName')

    }
}

let selectSurname = document.forms.person.surName

selectSurname.onblur = function () {
    if (!this.value.includes('yan')) {
        this.value += 'yan'
    }

}
// ֊֊֊֊֊֊֊֊֊֊֊֊֊֊֊֊֊֊knopki mas@-------------
let glavDiv2 = document.createElement('div')
glavDiv2.classList.add('glavDiv2')
document.body.append(glavDiv2)

let button = document.getElementById('button')
button.addEventListener('click', () => {
    let zangvac = []
  
    if (selectName.value && selectSurname.value && selectReg.value && selectCity.value) {
       
       
        zangvac.push(selectName.value, selectSurname.value, selectReg.value, selectCity.value)
        let mejidiv = document.createElement('div')
        mejidiv.classList.add('mejidiv')
        glavDiv2.append(mejidiv)
        for (let i = 0; i < zangvac.length; i++) {
        
            let p = document.createElement('p')
            p.innerHTML = zangvac[i]
            mejidiv.append(p) 
           
        }
        

        let hide = document.createElement('button')
        hide.innerHTML = 'x'
        hide.classList.add('hide')
        mejidiv.append(hide)

        hide.addEventListener('click', () => {
            mejidiv.classList.remove('mejidiv')
            mejidiv.innerHTML = ''
        })


    } else {
        alert('պետք է լռացնել բոլոր դաշտերը')
    }


})