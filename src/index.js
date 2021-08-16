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
	const getJobs = (query) => {
		//аксіос вертає проміс
		return axios.get('', {
			params: {
				search: query
			}
		})
	}

	const cardTarget = document.querySelector('#search-target')

	//function which create cards with jobs
  const createCardItem = (item) => {
	  const div = document.createElement('div')
    return div
  }

  const appendDiv = (nodes) => {
    cardTarget.append(nodes)
  }

  const searchForm = document.querySelector('#id_form');
  const searchField = document.querySelector('#id_search');
  let searchValue = '';
  const jobArray = []

  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
		getJobs(searchValue)
			.then(response => {
        response.data.results.forEach(el => {
          jobArray.push(createCardItem(el))
        })
			})
			.catch(error => console.error(error))
      .finally(() => {
        if (jobArray.length) {
          console.log(jobArray)
        }
      })
  });

  searchField.addEventListener('input', function(e) {
    searchValue = e.target.value;
    console.log(searchValue);
  });
})();
