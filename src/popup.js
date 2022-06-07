let data = ["you first note"]

const titleEl = document.getElementById("title-el")
const deleteBtn = document.getElementById("delete-btn")
const textField = document.getElementById('text-field')
const finishBtn = document.getElementById('finish-btn')
const dataLocal = JSON.parse( localStorage.getItem("dataSet") )


if (dataLocal) {
    data = dataLocal
    renderTitle();
}

const pushData = () => {
    data.push(textField.value)
    textField.value = "";
    localStorage.setItem("dataSet", JSON.stringify(data));
    renderTitle();
}
console.log(data)

const deleteCurrentPage = (index) => {
    for( let i = 0; i < data.length; i++){ 
        if ( i === index) { 
    
            data.splice(i, 1); 
        }
    }
    localStorage.setItem("dataSet", JSON.stringify(data));
    renderTitle();
    if (data[index] == null) {
        textField.value = data[index-1]
        index = index-1
    }else {
        textField.value = data[index]
    }
        
    
}

const modifyCurrentPage = (index) => {
    data[index] = textField.value;
    localStorage.setItem("dataSet", JSON.stringify(data));
    renderTitle();
}

const renderArticle = (index) => {
    textField.value = data[index];
    deleteBtn.innerHTML = `
        <i onclick="deleteCurrentPage(${index})" 
        class="bi bi-trash3 mr-3 px-2
        hover:bg-slate-200 rounded-lg
        transition-all duration-500
        cursor-pointer"></i>
    `
    
    finishBtn.innerHTML = `
        <div onclick="modifyCurrentPage(${index})" class="text-white
        bg-green-500 mx-2 px-2 py-1 rounded-full
        cursor-pointer hover:bg-green-600 duration-300
        transition-all">modify</div>
    `
};

function newNote() {
    textField.value = "";

    finishBtn.innerHTML = `
    <div onclick="pushData()" class="text-white bg-green-500 mx-2 px-2 py-1 rounded-full cursor-pointer hover:bg-green-600 duration-300 transition-all">finish</div>
    `
    titleEl.innerHTML += `
            <div  class="mt-1 pl-1 flex items-center border-b-2 py-2 hover:bg-gray-300 rounded">
                <i class="bi bi-bookmark-check-fill text-green-700 pr-1"></i> new note
            </div>
        `
};

let titles
function renderTitle(){
    titleEl.innerHTML = ``
    for (let i = 0; i < dataLocal.length; i++) {
        let title = ""
        for(let c of dataLocal[i]){
            if(c ==='\n')break
            title += c
        }
        if(title.length>10)
            title = title.slice(0,10) + "..."
        titleEl.innerHTML += `
            <div onclick="renderArticle(${i})" class="cursor-pointer mt-1 pl-1 flex items-center border-b-2 py-2 hover:bg-gray-300 rounded">
                <i class="bi bi-bookmark-check-fill text-green-700 pr-1"></i> ${title}
            </div>
            `
    }
}