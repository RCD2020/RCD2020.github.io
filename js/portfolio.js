const PROJ = [
    {
        'name': 'Spotify Song Recommender',
        'image': 'spotty.jpeg',
        'description': `A Heroku hosted webpage built in a team of 4, we
            utilized a NearestNeighbor model trained using a Spotify song
            dataset, and by leveraging Spotify's Search API, we recommend
            5 songs that are similar to the user submitted one.`
    }
];

function write() {
    let div = document.getElementById('projects');

    for (let x in PROJ) {
        let card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML += `<img
            src="../images/projects/${PROJ[x]['image']}"
            alt="${PROJ[x]['name']} thumbnail">`
        card.innerHTML += `<h3>${PROJ[x]['name']}</h3>`;
        card.innerHTML += `<p>${PROJ[x]['description']}</p>`;

        div.appendChild(card);
    }
}