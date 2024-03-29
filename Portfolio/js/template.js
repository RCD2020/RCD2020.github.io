// shows and hides sidebar
function toggleMenu() {
    let menu = document.getElementById('sidecont');

    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = '';
    }
}

// gets urls to correct directory
function _hrefDeep(dirDeep)
{
    let href = '';
    for (var i = 0; i < dirDeep; i++)
    {
        href += '../';
    }

    return href;
}

// adds sidebar
function writeSidebar(dirDeep)
{
    let root = _hrefDeep(dirDeep);

    let text = `<i class="material-icons" onclick="toggleMenu()">menu</i>

    <h2><a href="${root}index.html">Robert Davis</a></h2>

    <div id="sidecont">
        <img src="${root}images/pfp.jpeg" alt="The man himself"><br>

        <a href="${root}index.html"><svg class="svg-inline--fa fa-user fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"></path></svg> About Me</a><br>
        <a href="${root}pages/portfolio.html"><svg class="svg-inline--fa fa-laptop-code fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="laptop-code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M64 96c0-35.3 28.7-64 64-64H512c35.3 0 64 28.7 64 64V352H512V96H128V352H64V96zM0 403.2C0 392.6 8.6 384 19.2 384H620.8c10.6 0 19.2 8.6 19.2 19.2c0 42.4-34.4 76.8-76.8 76.8H76.8C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"></path></svg> Portfolio</a><br>
        <a href="${root}pages/resume.html"><svg class="svg-inline--fa fa-file-lines fa-fw me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-lines" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM112 256H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path></svg> Resume</a><br>
        <a href="https://www.linkedin.com/in/robert-davis-8b7903218" target="_blank"><i class="devicon-linkedin-plain"></i> LinkedIn</a><br>
        <a href="https://github.com/RCD2020" target="_blank"><i class="devicon-github-original"></i> GitHub</a><br>
    </div>`;

    container = document.getElementById('sidebar');
    container.innerHTML = text;
}