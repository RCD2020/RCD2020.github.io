function devicon(tech)
{
    let text = '<div class="robtooltip">';
    switch (tech)
    {
        case 'HTML':
            text +=  '<i class="devicon-html5-plain-wordmark colored"></i>';
            break;
        case 'CSS':
            text += '<i class="devicon-css3-plain-wordmark colored"></i>';
            break;
        case 'Javascript':
            text += '<i class="devicon-javascript-plain colored"></i>';
            break;
        default:
            text += tech;
            break;
    }

    text += '<span class="robtooltiptext">';
    text += tech;
    text += '</span></div>';

    return text;
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


function writeTemplate(target, code)
{
    container = document.getElementById(target);
    container.innerHTML = code;
}