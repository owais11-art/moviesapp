<template>
  <Navbar @getMovies="handleMovies" />
  <div class="main-container">
    <div class="movies" v-if="movies">
      <div class="section">
        <div class="head">
          <h3>Popular</h3>
        </div>
          <Card :movies="popular"/>
      </div>
      <div class="section">
        <div class="head">
          <h3>Kids</h3>
        </div>
          <Card :movies="kids"/>
      </div>
      <div class="section">
        <div class="head">
          <h3>Trending</h3>
        </div>
          <Card :movies="highRated"/>
      </div>
    </div>
    <div class="movies" v-else>
      <div class="section">
        <div class="head">
          <h3>Results</h3>
        </div>
          <Card :movies="results"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";
import { ref } from '@vue/reactivity';
import fetchMovies from "../composables/fetchMovies.js";
export default {
  name: 'Home',
  components: {
    Navbar,
    Card
  },
  setup() {
    let movies =  ref(true);
    let results = ref('');
    const{popular, kids, highRated} = fetchMovies();
    const handleMovies = url => {
      console.log(url);
      fetch(url)
      .then(res => res.json())
      .then(data => results.value = data.results)
      .catch(err => console.log(err));
      movies.value = false;
    }
    return { movies, popular, kids, highRated, results, handleMovies };
  }
}
</script>
<style>
  .main-container{
    width: 90%;
    margin: 0 auto;
  }
  .main-container .movies .section .head{
    background: rgb(10, 182, 10);
    color: rgb(241, 232, 232);
    letter-spacing: 1px;
    padding: 10px 7px;
  }
  .main-container .movies .section{
    margin-top: 20px;
    border: 1px solid rgb(10, 182, 10);
  }
</style>