let data = ['terminal command', 'data struc\nTree Map Array']

const titleEl = document.getElementById("title-el")
const textareaEl = document.getElementById("textarea-el")
const dataLocal = JSON.parse( localStorage.getItem("data") )

renderTitle()

if (dataLocal) {
    data = dataLocal
    render(data)
}

const pushData = () => {
    data.push(document.getElementById("text-field").value)
    document.getElementById("text-field").value = "";
    localStorage.setItem("data", JSON.stringify(data));

}


const deleteData = () => {
    
}

const renderArticle = () => {
    
};

function newNote() {
    titleEl.innerHTML += `
            <div  class="mt-1 pl-1 flex items-center border-b-2 py-2 hover:bg-gray-300 rounded">
                new note
            </div>
        `
};

let titles
function renderTitle(){
    titleEl.innerHTML = ``
    for (let i = 0; i < dataLocal.length; i++) {
        let title = ""
        for(let c of dataLocal[i]){
            if(c=='\n')break
            title += c
        }
        if(title.length>10)
            title = title.slice(0,10) + "..."
        titleEl.innerHTML += `
            <div  class="mt-1 pl-1 flex items-center border-b-2 py-2 hover:bg-gray-300 rounded">
                ${title}
            </div>
            `
    }
}
