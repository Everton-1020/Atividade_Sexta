const searchInput = document.getElementById('searchInput');
const contactList = document.getElementById('contactList');
const contacts = contactList.getElementsByTagName('li');

searchInput.addEventListener('input', function () {
    const filter = this.value.toLowerCase();

    for (let i = 0; i < contacts.length; i++) {
        const name = contacts[i].getElementsByTagName('span')[0].textContent.toLowerCase();
        const email = contacts[i].getElementsByTagName('span')[1].textContent.toLowerCase();

        if (name.includes(filter) || email.includes(filter)) {
            contacts[i].classList.remove('hidden');
        } else {
            contacts[i].classList.add('hidden');
        }
    }
});
