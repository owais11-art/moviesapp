<template>
  <nav>
      <div class="container">
          <h2>MOVIES</h2>
          <div class="form">
              <div class="form-input">
                  <input type="text" placeholder="Search Movies" v-model="search">
              </div>
              <div class="form-search">
                  <button class="search-btn" @click="handleClick"><i class="bi bi-search"></i></button>
              </div>
          </div>
      </div>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    name: 'Navbar',
    emits: ['getMovies'],
    setup(props, { emit }){
        let search = ref('');
        const API_Key = '?api_key=d2aa2e9ba786466440e0d96ad81d8c58';
        const BASE_URL = 'https://api.themoviedb.org/3/search/multi';
        const handleClick = () => {
            let q = `&language=en-US&query=${search.value}&page=1&include_adult=false`;
            let url = BASE_URL + API_Key + q;
            emit('getMovies', url);
        };
        return { search, handleClick };
    }
}
</script>

<style>
    nav{
        width: 100vw;
        background: rgb(19, 18, 18);
        color: rgb(241, 232, 232);
        padding: 10px 0;
    }
    nav .container{
        width: 90%;
        margin: 0 auto;
        padding: 10px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    nav .container .form{
        display: flex;
        align-items: center;
    }
    nav .container .form .form-input input{
        border: none;
        border-radius: 5px 0 0 5px;
        padding: 8px;
        color: rgb(26, 3, 3);
        background: rgb(241, 232, 232);
        outline: none;
        font-weight: bold;
    }
    nav .container .form .form-input input::placeholder{
        font-weight: 400;
        letter-spacing: 1px;
    }
    nav .container .form .form-search .search-btn{
        border: none;
        border-radius: 0 5px 5px 0;
        padding: 8px 9px;
        background: rgb(10, 182, 10);
        color: rgb(241, 232, 232);
        font-weight: bold;
        cursor: pointer;
    }
    nav .container .form .form-search .search-btn:hover{
        background: rgb(7, 168, 7);
    }
</style>