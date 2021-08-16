import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import { axios } from './utils/axios'
import {response} from "express";

/* axios.get()
  .then(res => console.log(res))
  .catch(e => console.error(e)) */

// 1. Addeventlistener on form submit (if click enter)
// 2. Addeventlistener on input
// 3. get data from api


(function () {


	const getJobs = (query) => {
		//аксіос вертає проміс
		return axios.get('', {
			params: {
				search: query
			}
		})
	}

	//function which create cards with jobs




  const searchForm = document.querySelector('#id_form');
  const searchField = document.querySelector('#id_search');
  console.log(searchField);
  let searchValue = '';
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
		getJobs(searchValue)
			.then(response => {
				console.log(response)
			})
			.catch(error => console.error(error))
    /*console.log(searchValue);*/
  });
  
  searchField.addEventListener('input', function(e) {
    searchValue = e.target.value;
    console.log(searchValue);
  });
})();
