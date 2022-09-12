const addForm = document.getElementById('add-card-form');
const cardHolder = document.getElementById('card-holder');

const addCard = ({ cardNumber, owner, cvv, expiration }) => {
    const divCard = document.createElement('div');
    divCard.className = 'card mb-2 bg-light';
    divCard.style.width = '19rem';

    const divCardBody = document.createElement('div');
    divCardBody.className = 'card-body';

    const cardNumberHeading = document.createElement('h5');
    cardNumberHeading.className = 'card-title';
    cardNumberHeading.innerText = cardNumber;

    const ownerHeading = document.createElement('h6');
    ownerHeading.className = 'card-subtitle mb-2 text-muted text-wrap';
    ownerHeading.innerText = owner;

    const cvvHeading = document.createElement('p');
    cvvHeading.innerText = cvv;

    const expirationHeading = document.createElement('p');
    expirationHeading.innerText = expiration;

    divCard.appendChild(divCardBody);

    divCardBody.appendChild(cardNumberHeading);
    divCardBody.appendChild(ownerHeading);
    divCardBody.appendChild(cvvHeading);
    divCardBody.appendChild(expirationHeading);

    cardHolder.appendChild(divCard);
}

const clearForm = () => addForm.reset();

const addFormHandler = (event) => {
    event.preventDefault();

    const { cardNumber, owner, cvv, expiration } = event.target.elements;

    const card = {
        cardNumber: cardNumber.value,
        owner: owner.value,
        cvv: cvv.value,
        expiration: expiration.value
    }

    addCard(card);

    clearForm();
}

addForm.addEventListener('submit', addFormHandler);