const searchInput = document.getElementById('searchInput');
const conspectBlocks = document.querySelectorAll('.conspect-block');

searchInput.addEventListener('input', filterTopics);
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        filterTopics();
    }
});

function filterTopics() {
    const searchTerm = searchInput.value.toLowerCase();
    let found = false; // Флаг, показывающий, найдены ли результаты
    const noResultsMessage = document.getElementById('noResults');


    conspectBlocks.forEach(block => {
        const h1 = block.querySelector('header h1');
        const headerTextCyr = h1.textContent.toLowerCase();
        const headerTextLat = h1.dataset.search.toLowerCase();

        if (headerTextCyr.includes(searchTerm) || headerTextLat.includes(searchTerm)) {
            block.style.display = 'block';
            found = true; // Устанавливаем флаг, если найден хотя бы один результат
        } else {
            block.style.display = 'none';
        }
    });

    if (!found) {
        if (!noResultsMessage) {
            const message = document.createElement('p');
            message.textContent = 'По вашему запросу ничего не найдено.';
            message.id = 'noResults';
            document.getElementById('content').appendChild(message);
        }
    } else {
        if (noResultsMessage) {
            noResultsMessage.remove();
        }
    }
}