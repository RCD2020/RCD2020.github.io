function devicon(tech)
{
    let text = '<div class="robtooltip">';
    switch (tech)
    {
        case 'C':
            text += '<i class="techs devicon-c-plain colored"></i>';
            break;
        case 'Chromium':
            text += '<i class="techs devicon-chrome-plain"></i>';
            break;
        case 'CSS':
            text += '<i class="techs devicon-css3-plain colored"></i>';
            break;
        case 'Docker':
            text += '<i class="techs devicon-docker-plain colored"></i>';
            break;
        case 'Flask':
            text += '<i class="techs devicon-flask-original"></i>';
            break;
        case 'Heroku':
            text += '<i class="techs devicon-heroku-original colored"></i>';
            break;
        case 'HTML':
            text +=  '<i class="techs devicon-html5-plain colored"></i>';
            break;
        case 'iOS':
            text += '<i class="techs devicon-apple-original"></i>';
            break;
        case 'Java':
            text += '<i class="techs devicon-java-plain colored"></i>';
            break;
        case 'Javascript':
            text += '<i class="techs devicon-javascript-plain colored"></i>';
            break;
        case 'Jupyter':
            text += '<i class="techs devicon-jupyter-plain colored"></i>';
            break;
        case 'MongoDB':
            text += '<i class="techs devicon-mongodb-plain colored"></i>';
            break;
        case 'Numpy':
            text += '<i class="techs devicon-numpy-original colored"></i>';
            break;
        case 'Pandas':
            text += '<i class="techs devicon-pandas-original"></i>';
            break;
        case 'Python':
            text += '<i class="techs devicon-python-plain colored"></i>';
            break;
        case 'SQLAlchemy':
            text += '<i class="techs devicon-sqlalchemy-plain"></i>';
            break;
        case 'SQLite':
            text += '<i class="techs devicon-sqlite-plain colored"></i>';
            break;
        case 'Swift':
            text += '<i class="techs devicon-swift-plain colored"></i>';
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


function a(href, inner='', aclass = null, isOutside = false)
{
    let text = '<a href="' + href + '" ';

    if (aclass)
    {
        text += 'class="' + aclass + '" ';
    }

    if (isOutside)
    {
        text += 'target="_blank" rel="noopener noreferrer" '
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


function hrefDeep(dirDeep)
{
    let href = '';
    for (var i = 0; i < dirDeep; i++)
    {
        href = '../';
    }

    return href;
}


function writeProject(project, dirDeep = 0)
{
    let href = hrefDeep(dirDeep);

    let block = a(
        // href = href + 'projects/' + project['file'] + '.html',
        href = project['github'],
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
        aclass = 'cardContainer',
        isOutside = true
    );

    container = document.getElementById('projects');
    container.innerHTML += block;
}


function writeTemplate(target, code)
{
    container = document.getElementById(target);
    container.innerHTML = code;
}