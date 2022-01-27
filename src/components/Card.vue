<template>
    <div class="cards">
        <div class="card" v-for="movie in movies" :key="movie.id">
            <router-link :to="{name: 'Details', params:{id: movie.id}}">
                <img :src="IMG_URL + movie.poster_path" alt="">
            </router-link>
            <div class="title">{{movie.title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: [ 'movies' ],
    setup() {
        const IMG_URL = 'https://image.tmdb.org/t/p/w500';
        return { IMG_URL };
    }
}
</script>

<style>
    .cards{
        margin: 7px; 
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-auto-rows: 1fr;
        gap: 5px;
    }
    .cards .card{
        border: 1px solid #fff;
        width: 295.783px;
        cursor: pointer;
        background: rgb(255, 255, 255);
    }
    .cards .card img{
        width: 100%;
    }
    .cards .card .title{
        padding: 15px 0;
        text-align: center;
    }
</style>