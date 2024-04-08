const contacts = [];

const contactForm = document.getElementById('contactForm');
const contactList = document.getElementById('contactList');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;
    const email = document.getElementById('email').value;

    const contact = { nome, telefone, email };
    contacts.push(contact);
    displayContacts();
    contactForm.reset();
});

function displayContacts() {
    contactList.innerHTML = '';
    contacts.forEach(function(contact, index) {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${contact.nome}</strong><br>
            Phone: ${contact.telefone}<br>
            Email: ${contact.email}<br>
            <button onclick="deleteContact(${index})">Delete</button>
        `;
        contactList.appendChild(li);
    });
}

function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

displayContacts();