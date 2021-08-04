import 'bootstrap/dist/css/bootstrap.min.css';
import './style.scss'
import { axios } from './utils/axios'

axios.get()
  .then(res => console.log(res))
  .catch(e => console.error(e))
