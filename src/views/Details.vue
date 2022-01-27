<template>
  <div class="details">
      <div class="image">
          <img :src="IMG_URL + movie.poster_path" alt="">
      </div>
      <div class="info">
          <h2>{{movie.title}}</h2>
          <small>Rating: {{movie.vote_average}}</small>
          <p>
              {{movie.overview}}
          </p>
      </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
    name: 'Details',
    props: ['id'],
    setup(props) {
        const API_Key = '?api_key=d2aa2e9ba786466440e0d96ad81d8c58';
        const BASE_URL = 'https://api.themoviedb.org/3/movie/';
        const IMG_URL = 'https://image.tmdb.org/t/p/w500';
        let movie = ref('');
        let url = BASE_URL  + props.id.toString() + API_Key;
        fetch(url)
        .then(res => res.json())
        .then(data => movie.value = data)
        .catch(err => console.log(err));
        return {IMG_URL, movie}
    }
}
</script>

<style>
    .details{
        width: 100vw;
    }
    .details .image{
        width: 400px;
        margin: 20px auto;
    }
    .details .image img{
        width: 100%;
    }
    .details .info{
        width: 60%;
        margin: auto;
        text-align: center;
        padding: 20px;
    }
    .details .info h2{
        margin-bottom: 10px;
    }
    .details .info small{
        display: inline-block;
        margin-bottom: 10px;
    }
    .details .info p{
        line-height: 20px;
    }
</style>