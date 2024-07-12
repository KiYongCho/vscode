// usejquery.js

const {JSDOM} = require('jsdom');
const {window} = new JSDOM();
const {document} = new JSDOM('').window;
global.document = document;

const $ = require('jquery')(window);

$.ajax({
  url: 'https://jsonplaceholder.typicode.com/todos/1',
  type: 'GET',
  success: function(data) {
    console.log(data);
  },
});