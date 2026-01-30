let allData = [];

// 1. Fetch the data from the JSON file
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        allData = data;
        renderItems(allData);
    })
    .catch(error => console.error('Error loading data:', error));

// 2. Function to display the items
function renderItems(items) {
    const grid = document.getElementById('content-grid');
    grid.innerHTML = ''; // Clear existing content

    items.forEach(item => {
        const card = document.createElement('a');
        card.href = item.url;
        card.className = 'card';
        card.target = '_blank'; // Open in new tab

        // Determine icon based on category
        const icon = item.category === 'watch' ? '📺 WATCH' : '📖 READ';

        card.innerHTML = `
            <div>
                <span class="card-tag">${icon}</span>
                <h2>${item.title}</h2>
            </div>
            <span class="card-date">Added: ${item.date}</span>
        `;
        grid.appendChild(card);
    });
}

// 3. Filter Logic
function filterData(category) {
    // Update button styles
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        renderItems(allData);
    } else {
        const filtered = allData.filter(item => item.category === category);
        renderItems(filtered);
    }
}
