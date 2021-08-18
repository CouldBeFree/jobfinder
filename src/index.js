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
	/*(3) launch axios query with search parameter*/
	const getJobs = (query) => {
		/*(3.1) axios returns promise*/
		return axios.get('', {
			params: {
				search: query
			}
		})
	}

	const cardTarget = document.querySelector('#search-target')

	// (5) function which create cards with jobs. It is launched from the inside of submit function
  const createCardItem = (item) => {

	  const div = document.createElement('div');
		div.classList.add("job-item");
		//h4 - console - append - spread
		console.log(item.role);
		searchResults.appendChild(div);
		/*return div*/
  }

  const appendDiv = (nodes) => {
    cardTarget.append(...nodes)
  }


  const searchForm = document.querySelector('#id_form');
  const searchField = document.querySelector('#id_search');
  let searchValue = '';
  const jobArray = [];
  /*I created variable to push inside of the dom of search-results block jobs our jobs*/
	const searchResults = document.querySelector('.search-results');

	/* (2) on submit we use var from search value as a parameter to launch getJobs function*/
  searchForm.addEventListener('submit', function(e) {
    e.preventDefault();
		/*(2.1)*/
		getJobs(searchValue)
			/*(4) after axios promise we process response*/
			.then(response => {
				/*(4.1) we use forEach method to push all elements to array of jobs*/
        response.data.results.forEach(el => {
        	console.log(el);
        	let dateDay = el.date_posted.slice(0, 10);
        	/*(4.2) we launch here createCardItem function to push */
					// =============
					/*Comment the call of the function and change it*/
          /*jobArray.push(createCardItem(el));*/
					// =============
					const div = document.createElement('div');
					div.classList.add('job-item');
					div.innerHTML = `
					<div class="row">
						<a href="#" class="col-9 row">
							<div class="col-2 d-flex align-items-center justify-content-center">
								<img class="job-img" src="${el.logo}" alt="${el.company_name}">
							</div>
							<div class="col-10">
								<h4 class="mb-2 text-dark">${el.role}, <span class="text-danger">${el.company_name}</span></h4>
							</div>
						</a>
						<div class="col-3">
							<div class="d-flex justify-content-md-end flex-wrap mt-0 mb-3">
								${el.keywords.map(keyword => `
									<a class="badge-box" href="#">
										<span class="badge badge-primary mr-1">${keyword}</span>
									</a>
								`).join(' ')}
							</div>
							<small class="float-right mb-0 mr-1">
								${dateDay}
							</small>
						</div>
					</div>
				`;
					searchResults.appendChild(div);
        })
				/*console.log(jobArray);*/
			})
			.catch(error => console.error(error))
  });

  /*this function watches value of the input field (1) */
  searchField.addEventListener('input', function(e) {
    searchValue = e.target.value;
    console.log(searchValue);
  });
})();
