@font-face {
    font-family: "Roboto Mono";
    src: url("../fonts/roboto-mono-medium.ttf");
}

:root {
    --font: "Roboto Mono";
    --background: #aceace;
    --foreground: #ffff4c;
    --pink: #00e1ec;
    --red: #66ffff;
    --orange: #ff8906;
    --branch: 1px solid #a7a9be;
    --search: 000000;
}

html {
    font-size: 18px;
    overflow: hidden;
}

body {
    background: url(/home/saulino/Downloads/wallpaper/1400.jpg);
    width: 100vw;
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.prompt {
    font-family: var(--font);
    color: var(--foreground);
}

.prompt~.prompt {
    padding: 1.5rem 0 0.3125rem;
}

span {
    color: var(--pink);
}

h1 {
    display: inline;
    font-family: var(--font);
    font-size: 1rem;
    font-weight: normal;
    color: var(--red);
    cursor: pointer;
}

.tree > ul {
    margin: 0;
    padding-left: 1rem;
}

ul {
    list-style: none;
    padding-left: 2.5rem;
}

li {
    position: relative;
}

li.hideChildren > ul {
    display: none;
}

li::before, li::after {
    content: "";
    position: absolute;
    left: -0.75rem;
}

li::before {
    border-top: var(--branch);
    top: 0.75rem;
    width: 0.5rem;
}

li::after {
    border-left: var(--branch);
    height: 100%;
    top: 0.25rem;
}

li:last-child::after {
    height: 0.5rem;
}

a {
    font-family: var(--font);
    font-size: 1rem;
    color: var(--foreground);
    text-decoration: none;
    outline: none;
}

a:hover,
a:focus {
    color: var(--background);
    background: var(--orange);
}

form h1 {
    padding-left: 0.125rem;
}

/* you can fill the texarea above/below? the Viewport */
#search {
    font-family: var(--font);
    font-size: 1rem;
    color: var(--search);
    background-color: url(/home/sulmona-red/Downloads/Wallpaper/wall/wp1895664.jpg);
    border: none;
    outline: none;
    position: absolute;
    width: 50vw;
    height: 3vh;
    word-break: break-all;
    resize:none;
}
