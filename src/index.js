const titleEl = document.getElementById("title-el")
const testEl = document.getElementById("test-id")
console.log(titleEl);

const data = ['terminal command', 'data struc\nTree Map Array']


const deleteData = () => {
    
};

const renderArticle = () => {
    
};
let titles = "";

function renderTitle() {
    console.log('hi')
    for (let i = 0; i < data.length; i++) {
        console.log(data[0])
        titles += `
            <div id=""class="mt-1 pl-1 flex items-center border-b-2 py-2 hover:bg-gray-300 rounded">
                <i class="bi bi-bookmark-check-fill text-green-700 pr-1"></i> 
                ${data[0]}
            </div>    
        `
    }
    titleEl.innerHTML = titles;
};


