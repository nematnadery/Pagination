const users = [
    { id: 1, firstName: 'Hossein', lastName: 'Amini' },
    { id: 2, firstName: 'Melika', lastName: 'Ehsani' },
    { id: 3, firstName: 'Qadir', lastName: 'Yolme' },
    { id: 4, firstName: 'Fatemeh', lastName: 'Alilou' },
    { id: 5, firstName: 'Ehsan', lastName: 'Tayyebi' },

    { id: 6, firstName: 'Zahra', lastName: 'Rahimi' },
    { id: 7, firstName: 'Ali', lastName: 'Karimi' },
    { id: 8, firstName: 'Maryam', lastName: 'Sadeghi' },
    { id: 9, firstName: 'Reza', lastName: 'Noori' },
    { id: 10, firstName: 'Sara', lastName: 'Hashemi' },

    { id: 11, firstName: 'Mohammad', lastName: 'Rezaei' },
    { id: 12, firstName: 'Narges', lastName: 'Hosseini' },
    { id: 13, firstName: 'Ahmad', lastName: 'Faizi' },
    { id: 14, firstName: 'Laila', lastName: 'Popal' },
    { id: 15, firstName: 'Omid', lastName: 'Zazai' },

    { id: 16, firstName: 'Shabnam', lastName: 'Safi' },
    { id: 17, firstName: 'Nasir', lastName: 'Ahmadi' },
    { id: 18, firstName: 'Farida', lastName: 'Wardak' },
    { id: 19, firstName: 'Javad', lastName: 'Mohseni' },
    { id: 20, firstName: 'Samira', lastName: 'Azizi' },

    { id: 21, firstName: 'Bilal', lastName: 'Stanikzai' },
    { id: 22, firstName: 'Roya', lastName: 'Mirzaei' },
    { id: 23, firstName: 'Karim', lastName: 'Nazari' },
    { id: 24, firstName: 'Hamid', lastName: 'Sultani' },
    { id: 25, firstName: 'Parisa', lastName: 'Jafari' },

    { id: 26, firstName: 'Farhad', lastName: 'Ghafari' },
    { id: 27, firstName: 'Zarmina', lastName: 'Barakzai' },
]

let userListContainer = document.getElementById('user-list')
let paginationContainer = document.getElementById('page-numbers')

let correntPage = 1
let rowsCount = 5

function displayUsersList (allusersArray, usersContainer, rowCount, currentPage){
    usersContainer.innerHTML = ''

    let endIndex = rowCount * currentPage
    let starteIndex = endIndex - rowCount

    let paginatedUsers = allusersArray.slice(starteIndex, endIndex)
    
    paginatedUsers.forEach(function(item){
        let liElem = document.createElement('li')
        liElem.classList.add('user-item')

        let spanAvatarElem = document.createElement('span')
        spanAvatarElem.classList.add('avatar')
        spanAvatarElem.textContent = item.firstName.charAt(0) + item.lastName.charAt(0).toUpperCase()

        let divUserInfoElem = document.createElement('div')
        divUserInfoElem.classList.add('user-info')

        let spanUserNameElem = document.createElement('span')
        spanUserNameElem.classList.add('user-name')
        spanUserNameElem.innerHTML = item.firstName + ' ' + item.lastName
        divUserInfoElem.append(spanUserNameElem)



        liElem.append(spanAvatarElem, divUserInfoElem)

        usersContainer.append(liElem)
    })
    
}

displayUsersList(users, userListContainer, rowsCount, correntPage)