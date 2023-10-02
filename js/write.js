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


function h1(inner = '', h1class = null)
{
    let text = '<h1';

    if (h1class)
    {
        text += ' class="' + h1class + '" ';
    }

    text += '>';
    text += inner;
    text += '</h1>';

    return text;
}


function writeIcons(techs)
{
    let text = '';

    for (var i = 0; i < techs.length; i++)
    {
        text += devicon(techs[i]);
    }

    return text;
}


function p(inner='', pclass=null)
{
    let text = '<p';

    if (pclass)
    {
        text += ' class="' + pclass + '" ';
    }

    text += '>' + inner + '</p>';

    return text;
}


function div(inner='', divclass=null)
{
    let text = '<div';

    if (divclass)
    {
        text += ' class="' + divclass + '" ';
    }

    text += '>' + inner + '</div>';

    return text;
}


function writeProject(project)
{
    let block = a(
        href = 'projects/' + project['title'].toLowerCase() + '.html',
        inner = div(
            inner = h1(
                inner = project['title'],
                h1class = 'projCard'
            ) + writeIcons(
                project['tech']
            ) + p(
                project['description']
            ),
            divclass = 'cardContainer'
        ),
        aclass = 'cardContainer'
    );

    container = document.getElementById('projects');
    container.innerHTML += block;
}