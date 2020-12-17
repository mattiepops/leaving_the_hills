const body = document.body;
const textarea = document.querySelector('#textArea');
const result = document.querySelector('#result');
const raw = document.querySelector('#raw');


let pattern = [
    {
        regex: /^# (.*$)/gim,
        replace: '<h1>$1</h1>',
        raw: '&lt;h1&gt;$1&lt;/h1&gt;'
    },
    {
        regex: /^## (.*$)/gim,
        replace: '<h2>$1</h2>',
        raw: '&lt;h2&gt;$1&lt;/h2&gt;'

    },
    {
        regex: /^### (.*$)/gim,
        replace: '<h3>$1</h3>',
        raw: '&lt;h2&gt;$1&lt;/h2&gt;'

    },
    {
        regex: /^\> (.*$)/gim,
        replace: '<blockquote>$1</blockquote>',
        raw: '&lt;h2&gt;$1&lt;/h2&gt;'

    },
    {
        regex: /\*\*(.*)\*\*/gim,
        replace: '<b>$1</b>',
        raw: '&lt;h2&gt;$1&lt;/h2&gt;'

    },
    {
        regex: /\*(.*)\*/gim,
        replace: '<i>$1</i>',
        raw: '&lt;h2&gt;$1&lt;/h2&gt;'

    },
    {
        regex: /\*\*\*(.*)\*\*\*/gim,
        replace: '<b><i>$1</i></b>',
        raw: '&lt;h2&gt;$1&lt;/h2&gt;'

    },
    {
        regex: /!\[(.*?)\]\((.*?)\)/gim,
        replace: "<img alt='$1' src='$2' />",
        raw: '&lt;h2&gt;$1&lt;/h2&gt;'

    },
    {
        regex: /\[(.*?)\]\((.*?)\)/gim,
        replace: "<a href='$2'>$1</a>",
        raw: '&lt;h2&gt;$1&lt;/h2&gt;'

    },
    {
        regex: /\n/gim,
        replace: "<br />",
        raw: '&lt;h2&gt;$1&lt;/h2&gt;'

    },
    {
        regex: /(_{3,}|-{3,})/gim,
        replace: "<hr>",
        raw: '&lt;h2&gt;$1&lt;/h2&gt;'

    },
]

textarea.addEventListener('keyup', e =>{
    let {bloop} = e.target;
    let {value} = e.target;
    for(let element of pattern){
        value = value.replace(element.regex, element.replace);
        bloop = bloop.replace(element.regex, element.raw);
    }
    result.innerHTML = value;
    raw.innerHTML = bloop;
})
