const userListItemTemplate = document.getElementById('userListItem')
const userListGroup = document.getElementById('userListGroup')
const cardFullname = document.getElementById('cardFullname')
const cardUsername = document.getElementById('cardUsername')
const cardAddress = document.getElementById('cardAddress')
const cardCompanyName = document.getElementById('cardCompanyName')
const cardEmailLink = document.getElementById('cardEmailLink')
const userSkeleton = document.getElementById('userSkeleton')
const userCardData = document.getElementById('userCardData')


fetchUsers()

async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', { // undefined -> {}
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const users = await response.json()
        const usersList = users.map(user => ({
            id: user.id,
            name: user.name
        }))
        userListGroup.innerHTML = ''
        renderUsersList(usersList)
    } catch (err) {
        console.error(err);
    }
}

function renderUsersList(usersList) {
    usersList.forEach(user => {
        const currentUser = JSON.parse(JSON.stringify(user))
        const userListItemClone = userListItemTemplate.content.cloneNode(true)
        const button = userListItemClone.getElementById('userButton')
        button.innerText = currentUser.name
        button.id = currentUser.id
        button.addEventListener('click', async () => {
            try {
                userSkeleton.style.display = 'block'
                userCardData.style.display = 'none'
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currentUser.id}`)
                const user = await response.json()
                renderUserCard({
                    fullname: user.name,
                    username: user.username,
                    city: user.address.city,
                    street: user.address.street,
                    suite: user.address.suite,
                    zipcode: user.address.zipcode,
                    companyName: user.company.name,
                    email: user.email
                })
            } catch(err) {
                console.error(err)
            }
            finally {
                userSkeleton.style.display = 'none'
                userCardData.style.display = 'block'
            }
        })
        userListGroup.appendChild(button)
    });
}

function renderUserCard({fullname, username, street, suite, city, zipcode, companyName, email}) {
    cardFullname.innerText = fullname
    cardUsername.innerText = username
    cardCompanyName.innerText = companyName
    cardAddress.innerText = `Street:${street}, Suite:${suite}, City:${city}, Zipcode:${zipcode}`
    cardEmailLink.href = `mailto:${email}`
}