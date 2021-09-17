console.log(" Client side javascript file is loaded git")

fetch('http://puzzle.mead.io/puzzle').then((response) =>
    {
        response.json().then((data) => {
            console.log(data)
        })
    }
)

const weatherForm = document.querySelector('form')
const seacrh = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

// message1.textContent = 'message 1'
weatherForm.addEventListener('submit',(event) => {

    event.preventDefault()
    message1.textContent = 'message 1'
    message2.textContent = ''
    const loc = seacrh.value
})