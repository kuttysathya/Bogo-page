const radios = document.querySelectorAll('input[type="radio"]');
let Selected = {};

function updateTotal() {
let total = 0;

// Loop over each group name (option1, option2, option3)

const groups = ['option1', 'option2', 'option3'];
groups.forEach(groupName => {
    const selectedRadio = document.querySelector(`input[name="${groupName}"]:checked`);
    if (selectedRadio) {
        total += parseInt(selectedRadio.dataset.cost);
    }
});

document.getElementById('total').textContent = `Total: $${total}.00 USD`;
}

// Add event listeners to all radios

radios.forEach(radio => {
   radio.addEventListener('click', function(e) {
        const name = this.name;
        const cost = parseInt(this.dataset.cost);

        // If already selected uncheck it
        
        if (Selected[name] === this) {
            this.checked = false;
            Selected[name] = null;
        } else {
        // Select new radio in this group
        Selected[name] = this;
        }

        updateTotal();
    });
});
updateTotal();


const boxes = document.querySelectorAll('.box');

// Template for box content

const boxContentHTML = `
    <div class="box-content">
        <div class="option-section"> 
            <div class="size-section">
                <label for="size">Size</label>
                <select class="size">
                    <option value="select">Select</option>
                    <option value="s">S</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
                </select>
                <select class="size">
                    <option value="select">Select</option>
                    <option value="s">S</option>
                    <option value="M">M</option>
                    <option value="XL">XL</option>
                </select>
            </div>
            <div class="colour-section">
                <label for="Colour">Colour</label>
                <select class="colour">
                    <option value="select">Select</option>
                    <option value="black">Black</option>
                    <option value="Green">Green</option>
                    <option value="White">White</option>
                </select>
                <select class="colour">
                    <option value="select">Select</option>
                    <option value="black">Black</option>
                    <option value="Green">Green</option>
                    <option value="White">White</option>
                </select>
            </div>
        </div>
    <div/>
    `;

// Inject box-content into each box

boxes.forEach((box) => {
    box.insertAdjacentHTML('beforeend', boxContentHTML);
});

// Accordion behavior

boxes.forEach((box) => {
    box.addEventListener('click', function (e) {

// Prevent toggle when clicking inside a select

    if (e.target.tagName.toLowerCase() === 'select') return;

        boxes.forEach((b) => b.classList.remove('active'));
        this.classList.add('active');
    });
});


// Message for add to cart


function message(){

    const container = document.querySelector(".container") 

    let displayMessage = document.getElementById("Message");
    if(!displayMessage){
        const messageDiv = document.createElement("div");
        messageDiv.id = "Message";
        messageDiv.textContent = "🎉 Successfully added to cart!!";
        messageDiv.style.padding = "10px";
        messageDiv.style.marginTop = "10px";
        messageDiv.style.color = "red";

        container.appendChild(messageDiv);

        container.insertBefore(messageDiv,container.lastChild);
    }else{
        displayMessage.style.display = "block";
    }
    setTimeout(()=>{
        const msg = document.getElementById("Message");
        if(msg){
            msg.style.display = "none";
        }
    }, 2000);
}



