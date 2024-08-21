const searchInput = document.querySelector('.search-input')
const headerSearch = document.querySelector('.header-search')

// header bg color
const headerSearchBg = headerSearch.style.backgroundColor;

searchInput.addEventListener('focus', (function () {
    headerSearch.classList.add('active')
}))

searchInput.addEventListener('blur',(function () {
    headerSearch.classList.remove('active')
}))




// Main Content Body Top
const topItems = document.querySelectorAll('.main-content-body .top-item')

for (let i = 0; i < topItems.length; i++){
    let eachItem = topItems[i]

    eachItem.addEventListener('click', () => {
        topItems.forEach(item => item.classList.remove('active'))

        eachItem.classList.add('active')
    })
}


// Profile Dropdown
const profileBtn = document.getElementById('profile-btn')
const profileDrop = document.getElementById('profile-dropdown')
const closeBtn = profileDrop.querySelector('.close-btn')

profileBtn.addEventListener('click', () => {
    profileDrop.classList.toggle('active')
})

closeBtn.addEventListener('click', () => {
    profileDrop.classList.remove('active')
})





// search dropdown
const searchDropdownBtn = document.getElementById('search-btn')
const searchDropdown = document.getElementById('search-dropdown')


searchDropdownBtn.addEventListener('click', () => {
    searchDropdown.classList.add('active')
})





// Gooogle App Gropdown
const googleAppDropdown = document.getElementById('google-app-drop')
const googleAppBtn = document.getElementById('google-app-btn')

googleAppBtn.addEventListener('click', () => {
    googleAppDropdown.classList.toggle('active')
})





// Setting Dropdown
const settingDropBtn = document.getElementById('setting-dropdown-btn')
const settingDropdown = document.getElementById('setting-dropdown')
const closeSettingDropdownBtn = document.getElementById('close-setting-dropdown')

settingDropBtn.addEventListener('click', () => {
    settingDropdown.classList.toggle('active')
})

closeSettingDropdownBtn.addEventListener('click', () => {
    settingDropdown.classList.remove('active')
})




// Help Dropdown
const helpBtn = document.getElementById('help-btn')
const helpDropdown = document.getElementById('help-dropdown')

helpBtn.addEventListener('click', () => {
    helpDropdown.classList.toggle('active')
})


document.addEventListener('click', (event) => {
    if (!profileDrop.contains(event.target) && !profileBtn.contains(event.target)) {
        profileDrop.classList.remove('active')
    }

    if (!googleAppDropdown.contains(event.target) && !googleAppBtn.contains(event.target)) {
        googleAppDropdown.classList.remove('active')
    }

    if (!helpDropdown.contains(event.target) && !helpBtn.contains(event.target)) {
        helpDropdown.classList.remove('active')
    }

    if (!searchDropdownBtn.contains(event.target) && !searchDropdown.contains(event.target)) {
        searchDropdown.classList.remove('active')
    }
})





// compose mail
const composeMail = document.getElementById('compose-mail')
const composeBtn = document.getElementById('compose-btn')
const composeClose = document.getElementById('compose-close-btn')

const composeMailInput = document.getElementById('compose-input-name')
const composeSubInput = document.getElementById('compose-input-sub')


composeBtn.addEventListener('click', () => {
    composeMail.classList.add('active')
})

composeClose.addEventListener('click', () => {
    composeMail.classList.remove('active')
})

composeMailInput.addEventListener('focus', function() {
    this.placeholder = 'To'
    document.getElementById('cc').style.display='inline-block'
})

composeMailInput.addEventListener('blur', function() {
    this.placeholder = 'Recipients';
    document.getElementById('cc').style.display='none'
});





// More Btn in Sidebar left
const moreBtn = document.getElementById('more-btn')
const moreLeftItems = document.getElementById('more-sidebar-left-items')
const moreText = document.getElementById('more-text')
const moreBtnIcon = document.getElementById('more-icon')

moreBtn.addEventListener('click', () => {
    moreLeftItems.classList.toggle('active')

    if (moreLeftItems.classList.contains('active')) {
        moreText.innerText = "Less";
        moreBtnIcon.style.transition ='.3s'
        moreBtnIcon.style.transform = 'rotate(180deg)'
    }
    else {
        moreText.innerText = 'More'
            moreBtnIcon.style.transform = 'rotate(0deg)'
    }
})


// Left Sidebar Added a active class
const sidebarLeftItems = document.querySelectorAll('.sidebar-left-body-item')

sidebarLeftItems.forEach((each) => {
    each.addEventListener('click', () => {
        sidebarLeftItems.forEach((perItem) => {
            perItem.classList.remove('active')
        })
        each.classList.add('active')
    })
})
