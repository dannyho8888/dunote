const titleEl = document.getElementById("title-el")
const testEl = document.getElementById("test-id")
console.log(titleEl)

const data = ['terminal command', 'data struc\nTree Map Array']


const deleteData = () => {
    
}

const renderArticle = () => {
    
}
let titles = ""

function newNote() {
    titles += `
        <div id=""class="mt-1 pl-1 flex items-center border-b-2 py-2 hover:bg-gray-300 rounded">
        new note
        </div>    
    `
    titleEl.innerHTML += titles
    titles = ""
}


