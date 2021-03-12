const inputText = document.querySelector('#text-input');
const memeText = document.querySelector('#meme-text');

const addEvListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
};

const showInputTextInContainer = () => {
  memeText.textContent = inputText.value;
};

// ==========================================================================
const createTodoItem = (text) => {
  const li = document.createElement('li');
  li.innerText = text;
  li.addEventListener('dblclick', (e) => { changeLineThrough(e, 'completed'); });
  li.addEventListener('click', (e) => { changeColor(e, colorGray); });
  return li;
};

const moveTodoItem = (count) => {
  let selected;
  let insertLocal;
  let indexItem;
  let listLength;
  const listTodoItem = getAllTodoList();
  for (let index = 0; index < listTodoItem.length; index += 1) {
    const element = listTodoItem[index];
    if (element.style.backgroundColor === colorGray) {
      selected = listTodoItem[index];
      indexItem = index;
      listLength = listTodoItem.length;
      insertLocal = listTodoItem[index + count];
    }
  }
  return { selected, indexItem, listLength, insertLocal };
};

const moveDown = () => {
  const { selected, indexItem, listLength, insertLocal } = moveTodoItem(2);
  if (!selected) return;
  if (indexItem === listLength) {
    return;
  }

  const listContainer = getListContainer();
  listContainer.insertBefore(selected, insertLocal);
};

const moveUp = () => {
  const { selected, indexItem, insertLocal } = moveTodoItem(-1);
  if (!selected) return;
  if (indexItem === 0) {
    return;
  }

  const listContainer = getListContainer();
  listContainer.insertBefore(selected, insertLocal);
};

window.onload = () => {
  addEvListener('#text-input', 'keyup', showInputTextInContainer);
};
