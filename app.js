let allData = [];

// 1. Fetch the data
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        allData = data;
        // On load, show everything EXCEPT archived items
        filterData('all');
    })
    .catch(error => console.error('Error loading data:', error));

// 2. Render Function (No changes here, but included for completeness)
function renderItems(items) {
    const grid = document.getElementById('content-grid');
    grid.innerHTML = ''; 

    if (items.length === 0) {
        grid.innerHTML = '<p style="text-align:center; width:100%; color:#666;">Nothing to see here.</p>';
        return;
    }

    items.forEach(item => {
        const card = document.createElement('a');
        card.href = item.url;
        card.className = 'card';
        card.target = '_blank';

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

// 3. New Filter Logic
function filterData(category) {
    // Update button styles
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    
    // Find the button that was clicked. 
    // Note: This matches the button text to the category for simplicity, 
    // or checks the onclick attribute. 
    // Let's just find the button that called this function:
    const buttons = Array.from(document.querySelectorAll('.filter-btn'));
    const activeButton = buttons.find(b => b.getAttribute('onclick').includes(`'${category}'`));
    if (activeButton) activeButton.classList.add('active');

    if (category === 'archived') {
        // CASE A: Show ONLY archived items
        const archivedItems = allData.filter(item => item.status === 'archived');
        renderItems(archivedItems);
    } else {
        // CASE B: Show active items (exclude archived)
        const activeItems = allData.filter(item => item.status !== 'archived');

        if (category === 'all') {
            renderItems(activeItems);
        } else {
            // Filter active items by read/watch
            const filtered = activeItems.filter(item => item.category === category);
            renderItems(filtered);
        }
    }
}
