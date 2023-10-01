function devicon(tech)
{
    switch (tech)
    {
        case 'HTML':
            return '<i class="devicon-html5-plain-wordmark colored"></i>';
        case 'CSS':
            return '<i class="devicon-css3-plain-wordmark colored"></i>';
        case 'Javascript':
            return '<i class="devicon-javascript-plain colored"></i>';
        default:
            return;
    }
}


function a(href, inner='', aclass = null)
{
    let text = '<a href="' + href + '" ';

    if (aclass)
    {
        text += 'class="' + aclass + '" ';
    }

    text += '>' + inner + '</a>';

    return text;
}


function writeProject(project)
{
    let block = a(
        href = 'projects/' + project['title'].toLowerCase() + '.html',
        inner = project['title'],
        aclass = 'cardContainer'
    );

    container = document.getElementById('projects');
    container.innerHTML += block;
}