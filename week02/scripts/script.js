
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        deleteButton.textContent = '❌';
        li.textContent = input.value;
        li.append(deleteButton);
        list.append(li);

        input.value = '';
        input.focus();

        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });
    }
});


const msg = document.querySelector('span');
alert(msg);