'use strict';

function sortList() {
  const list = document.querySelector('ul');
  const items = Array.from(list.querySelectorAll('li'));

  items.sort((a, b) => {
    return (
      Number(b.getAttribute('data-salary').slice(1).replaceAll(',', '')) -
      Number(a.getAttribute('data-salary').slice(1).replaceAll(',', ''))
    );
  });

  list.innerHTML = '';
  items.forEach((item) => list.appendChild(item));
}

sortList();
