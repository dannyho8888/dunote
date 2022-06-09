let data = ["your first note"]

let localData = JSON.parse(localStorage.getItem("dataSet"))
const titleEl = document.getElementById("title-el")
const newNote = document.getElementById("new-note")
const textField = document.getElementById('text-field')
const deleteBtn = document.getElementById("delete-btn")
const copyBtn = document.getElementById("copy-btn")
const copyIcon = document.getElementById("copy-icon")
const searchBar = document.getElementById("search-bar")
let indexID = 0 

initTitle()

titleEl.addEventListener("click", function(e){  // when tital be clicked show note in textArea
    if(e.target.closest(".title") != null){
        indexID = e.target.closest(".title").getAttribute('id')
        textField.value = data[indexID]
    } 
})

newNote.addEventListener('click', function(){  // creat new note
    data.push("")
    indexID = data.length - 1
    titleEl.innerHTML += `
    <div id="${indexID}"  class="title cursor-pointer mt-1 pl-1 flex items-center border-b-2 py-2 hover:bg-gray-300 rounded">
        <i class="bi bi-bookmark-check-fill text-green-700 pr-1"></i>new note
    </div>
        `
    textField.value = data[indexID]
})

deleteBtn.addEventListener("click", function(){  // delete
    for( let i = 0; i < data.length; i++){ 
        if ( i == indexID) data.splice(i, 1)
    }
    localStorage.setItem("dataSet", JSON.stringify(data))
    renderTitle()
    if(indexID >= data.length){ indexID = data.length - 1}
    textField.value = data[indexID]
})

copyBtn.addEventListener("click", function(){  // copy
    navigator.clipboard.writeText(textField.value);  // turn icon to clipboard-check
    copyBtn.innerHTML = `
        <i class="bi bi-clipboard-check mr-3 px-2 text-green-700 hover:bg-slate-300 rounded-lg transition-all duration-500 cursor-pointer"></i>
         `
    setTimeout(function(){  // wait 3 seconds turn back
        copyBtn.innerHTML = `
        <i class="bi bi-clipboard mr-3 px-2 text-green-500 "></i> 
        `
    },3000);
})

searchBar.addEventListener("keyup", function(){
    if(searchBar.value==""){
        renderTitle()
        textField.value = data[indexID]
    }else{
        let shower = []
        for(let i = 0; i < data.length; i++){
            if(data[i].indexOf(searchBar.value)!=-1){
                shower.push(i)
            }
        }
        titleEl.innerHTML = ``
        for (let j = 0; j < shower.length; j++) {
            let title = ""
            for(let c of data[shower[j]]){
                if(c ==='\n')break
                title += c
            }
            if(title.length>15) title = title.slice(0,15) + "..."
            titleEl.innerHTML += `
            <div id="${shower[j]}"  class="title cursor-pointer mt-1 pl-1 flex items-center border-b-2 py-2 hover:bg-gray-300 rounded">
                <i class="bi bi-bookmark-check-fill text-green-700 pr-1"></i> ${title}
            </div>
                `
        }
        textField.value = data[shower[0]]
    }
})


textField.addEventListener("keyup", function(){  // save text to data and localdata
    data[indexID] = textField.value
    localStorage.setItem("dataSet", JSON.stringify(data))
    renderTitle()
})

function initTitle(){
    if (localData) {  // when localData != null update localdate to data, renderTitle()
        data = localData
        renderTitle()
        textField.value = data[indexID]
    }else{  // when localData == null (first time open dunote), renderTitle()
        localStorage.setItem("dataSet", JSON.stringify(data))
        renderTitle()
    }
}

function renderTitle(){  // update tital
    titleEl.innerHTML = ``
    for (let i = 0; i < data.length; i++) {
        let title = ""
        for(let c of data[i]){
            if(c ==='\n')break
            title += c
        }
        if(title.length>15) title = title.slice(0,15) + "..."
        titleEl.innerHTML += `
        <div id="${i}"  class="title cursor-pointer mt-1 pl-1 flex items-center border-b-2 py-2 hover:bg-gray-300 rounded">
            <i class="bi bi-bookmark-check-fill text-green-700 pr-1"></i> ${title}
        </div>
            `
    }
}
