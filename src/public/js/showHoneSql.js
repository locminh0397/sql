const sSql = document.getElementById('sSql');
const search = document.getElementById('Search');

var searchStr = 'search';
var oldSearch = sessionStorage.getItem('search');

if(oldSearch) {
    oldSearch = JSON.parse(oldSearch);
    searchStr = oldSearch.search;
}

sSql.innerHTML = `${searchStr}`;

function handle() { 
    searchStr = search.value;
    sSql.innerHTML = `${searchStr}`;
}

search.oninput = (e) => handle();
button.onclick = (e) => sessionStorage.setItem('search', JSON.stringify({search: searchStr}));