const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    //
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}

//to add any array/or object to the localStorage/session storage.:
//array should be stringify before adding.

//localStorage.setItem("friends", JSON.stringify([38,94,89]))

//adding object.
const pen = {price: 18, color: "black"}

localStorage.setItem("pen", JSON.stringify(pen) )

//to get pen.

const storPen = localStorage.getItem("pen")

const getPen = JSON.parse(storPen);


// change the storage value.
getPen.price = 50;

localStorage.setItem("pen", JSON.stringify(getPen));


