let data = ["your first note","your second note"]

const titleEl = document.getElementById("title-el")
const deleteBtn = document.getElementById("delete-btn")
const textField = document.getElementById('text-field')
const finishBtn = document.getElementById('finish-btn')
const newNote = document.getElementById("new-note")
let localData = JSON.parse(localStorage.getItem("dataSet"))

renderTitleElement()
renderArticle()


















function renderTitleElement(){  // update titals
    if (localData) {  // when localData != null update localdate to data, renderTitle()
        data = localData
        renderTitle()
    }else{  // when localData == null (first time open dunote), renderTitle()
        for(let i = 0; i < data.length; i++){
            localStorage.setItem("dataSet", JSON.stringify(data))
        }
        renderTitle()
    }
}

function renderTitle(){  // update tital
    localData = JSON.parse(localStorage.getItem("dataSet"))
    titleEl.innerHTML = ``
    for (let i = 0; i < localData.length; i++) {
        let title = ""
        for(let c of localData[i]){
            if(c ==='\n')break
            title += c
        }
        if(title.length>10) title = title.slice(0,10) + "..."
        titleEl.innerHTML += `
        <div id="${i}"  class="title cursor-pointer mt-1 pl-1 flex items-center border-b-2 py-2 hover:bg-gray-300 rounded">
            <i class="bi bi-bookmark-check-fill text-green-700 pr-1"></i> ${title}
        </div>
            `
    }
}

function renderArticle(){  // when tital be clicked show note in textArea
titleEl.addEventListener("click", (e) => {
    let indexID = e.target.closest(".title").getAttribute('id')
    console.log(indexID)
    textField.value = localData[indexID]
    })
}