let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let count = 1;

btn.addEventListener('click', function () {
    let newItem = document.createElement('li');
    newItem.innerHTML = `List Item ${count++}
    <button class="delete-btn" title="delete">❌</button>`;

    newItem.querySelector('.delete-btn').addEventListener('click', () => {
        ul.removeChild(newItem);
    });

    ul.appendChild(newItem);
});