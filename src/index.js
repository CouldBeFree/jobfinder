import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import { axios } from './utils/axios'

/* axios.get()
  .then(res => console.log(res))
  .catch(e => console.error(e)) */

// 1. Addeventlistener on form submit (if click enter)
// 2. Addeventlistener on input
// 3. get data from api


(function () {
  
  const searchForm = document.querySelector('#id_form');
  const searchField = document.querySelector('#id_search');
  console.log(searchField);
  let searchValue = '';
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log(searchValue);
  });
  
  searchField.addEventListener('input', function(e) {
    searchValue = e.target.value;
    console.log(searchValue);
  });
})();
