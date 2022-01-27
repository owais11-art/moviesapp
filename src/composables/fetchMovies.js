import { ref } from '@vue/reactivity';
const fetchMovies = () => {
    const API_Key = '&api_key=d2aa2e9ba786466440e0d96ad81d8c58';
    const BASE_URL = 'https://api.themoviedb.org/3';
    const POPULAR = '/discover/movie?sort_by=popularity.desc';
    const KIDS = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    const HIGH_RATED = '/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc';
    let popular = ref([]);
    let kids = ref([]);
    let highRated = ref([]);
    let url1 = BASE_URL + POPULAR + API_Key;
    let url2 = BASE_URL + KIDS + API_Key;
    let url3 = BASE_URL + HIGH_RATED + API_Key;
    fetch(url1)
    .then(res => res.json())
    .then(data => popular.value = data.results)
    .catch(err => console.log(err));

    fetch(url2)
    .then(res => res.json())
    .then(data => kids.value = data.results)
    .catch(err => console.log(err));

    fetch(url3)
    .then(res => res.json())
    .then(data => highRated.value = data.results)
    .catch(err => console.log(err));
    return {
        popular,
        kids,
        highRated
    }
};

export default fetchMovies;