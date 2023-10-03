function _hrefDeep(dirDeep)
{
    let href = '';
    for (var i = 0; i < dirDeep; i++)
    {
        href = '../';
    }

    return href;
}


function navBar(dirDeep) {
    let text = '<ul class="nav">';
    text += '       <li class="navItem">';
    text += '           <a href="' + _hrefDeep(dirDeep) + 'index.html">';
    text += '               <img class="profile navPic" src="' + _hrefDeep(dirDeep) + 'images/pfp.jpeg" height="70px" width="70px"/>';
    text += '           </a>';
    text += '       </li>';
    text += '       <li class="navItem">';
    text += '           <a href="' + _hrefDeep(dirDeep) + 'index.html" class="navLink">';
    text += '               <i class="w3navIcon fa fa-home"></i>';
    text += '           </a>';
    text += '       </li>';
    text += '       <li class="navItem">';
    text += '           <a class="navLink" href="https://www.linkedin.com/in/robert-davis-8b7903218" target="_blank" rel="noopener noreferrer">';
    text += '               <i class="navIcon devicon-linkedin-plain"></i>';
    text += '           </a>';
    text += '       </li>';
    text += '       <li class="navItem">';
    text += '           <a class="navLink" href="https://github.com/RCD2020" target="_blank" rel="noopener noreferrer">';
    text += '               <i class="navIcon devicon-github-original"></i>';
    text += '           </a>';
    text += '       </li>';
    text += '   </ul>';

    return text;
}