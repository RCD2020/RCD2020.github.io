const PROJ = [
    {
        'name': 'BloomTech Projects',
        'image': 'lambda-projects.png',
        'description': `Bloom Institute of Technology (formerly Lambda)
            is a 6 month long bootcamp program, and I took the Data
            Science course where I learned many machine learning models
            as well as other important skills such as site deployment and
            Dockerfiles. This is everything that I worked on from notes
            to projects.`,
        'links': [
            ['GitHub', 'https://github.com/RCD2020/lambda-projects']
        ],
        'lang': [
            'Python'
        ],
        'tech': [
            'Scikit-learn', 'Docker', 'Heroku', 'MongoDB', 'SQLAlchemy',
            'SQLite', 'Flask', 'Numpy', 'Pandas', 'Jupyter'
        ]
    },
    {
        'name': 'Chess Move Analysis Article',
        'image': 'chess-analysis-small.jpeg',
        'description': `Conducted a comprehensive analysis of chess games
            from lichess.org, comprising over 20k games, to investigate
            the impact of playing as white or black on winning probabilities.`,
        'links': [
            ['Medium', 'https://medium.com/@dolbycavis/the-white-advantage-579b5cad1f']
        ],
        'lang': [
            'Python'
        ],
        'tech': [
            'Scikit-learn', 'Numpy', 'Pandas', 'Jupyter'
        ]
    },
    {
        'name': 'Spotify Song Recommender',
        'image': 'spotty.jpeg',
        'description': `A Heroku hosted webpage built in a team of 4, we
            utilized a NearestNeighbor model trained using a Spotify song
            dataset, and by leveraging Spotify's Search API, we recommend
            5 songs that are similar to the user submitted one.`,
        'links': [
            ['GitHub', 'https://github.com/ft-spotify-4/spotty']
        ],
        'lang': [
            'Python', 'HTML'
        ],
        'tech': [
            'Scikit-learn', 'Heroku', 'MongoDB', 'Flask',
            'Numpy', 'Pandas', 'Jupyter'
        ]
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

        card.innerHTML += '<h4>Languages<h4>';
        let langs = '<div class="tags">';
        for (let y in PROJ[x]['lang']) {
            langs += `<span
                class="${PROJ[x]['lang'][y]} tag"
                >${PROJ[x]['lang'][y]}</span>&nbsp;`;
        }
        langs += '</div';
        card.innerHTML += langs;

        card.innerHTML += '<h4>Technologies</h4>';
        let techs = '<div class="tags">';
        for (let y in PROJ[x]['tech']) {
            techs += `<span
                class="${PROJ[x]['tech'][y]} tag"
                >${PROJ[x]['tech'][y]}</span>&nbsp;`;
        }
        techs += '</div';
        card.innerHTML += techs;

        for (let y in PROJ[x]['links']) {
            card.innerHTML += `<p>Check out on <a
                href="${PROJ[x]['links'][y][1]}"
                target="_blank"
                >${PROJ[x]['links'][y][0]}</a>!</p>`;
        }

        div.appendChild(card);
    }
}