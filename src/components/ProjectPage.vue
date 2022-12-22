<template>
  <div>

    <div class="nav">
      <div class="h" @click="$router.push('/')">
      <div class="blue">Sui</div>
      ecosystem</div>
      <div class="right">
        <button class="btn_fun" @click="$router.push('/fun')">Fun</button>
      <button class="btn_submit" @click="$router.push('/overview')">Overview</button>
      <div class="social_media">
        <a target="_blank" href="https://suiecosystem.top"><img src="../assets/safari.png" alt=""/></a>
        <a target="_blank" href="https://twitter.com/SuiEcosystem"><img src="../assets/twitter.png" alt=""/></a>
        <a target="_blank" href="#"><img src="../assets/discord.png" alt=""/></a>
    </div>
    <button class="btn_submit" onclick="location.href = `https://old.suiecosystem.top/submit-sui-project/`">Submit</button>
    </div>
  </div>
  
  <div class="main">
    <div class="main_t">
      <img class="icon" :src=this.data.icon alt="">
      <div class="title">
      <h2>{{this.data.title}}</h2>
      <p>{{this.data.excerpt}}</p>
      <p>{{ this.data.content }}</p>
    </div>
    
  </div>
      <div class="categories" v-for="category in this.data.category" :key=category>
        <span>{{category.name}}</span>
      </div>

      <div class="project_social_media">
        <a target="_blank" v-if="this.data.website" v-bind:href="this.data.website"><img src="../assets/safari.png" alt=""/></a>
        <a target="_blank" v-if="this.data.twitter" v-bind:href="this.data.twitter"><img src="../assets/twitter.png" alt=""/></a>
        <a target="_blank" v-if="this.data.discord" v-bind:href="this.data.discord"><img src="../assets/discord.png" alt=""/></a>
      </div>
    </div>
  </div>
  </template>

<script>
import axios from 'axios';

export default {
  data(){
    return {
     data: {
		"title": "",
		"excerpt": "",
		"icon": "",
		"category": [
			{
				"name": "",
			}
		],
		"website": "",
		"twitter": "",
		"discord": ""
	}
    }
  },
  mounted() {
    const urlParams = new URLSearchParams(window.location.search);
    // const index = Number(urlParams.get('index')) + 1;
    // console.log(index);
    axios
            .get(`https://old.suiecosystem.top/wp-json/api/get_custom_by_id/${urlParams.get('id')}`)
            .then((response) => {
              this.data = response.data;
              // console.log(this.data);
            });
        } 
}
</script>

<style scoped>
.main{
  display: flex;
  flex-direction: column;
  margin: 1vh 8vw;
  padding: 20px;
  background-color: rgb(188, 217, 244);
  border-radius: 25px;
  box-shadow: rgb(100 100 111 / 10%) 2px 3px 7px 3px;
}
img{
  border-radius: 50%;
}
.main_t{
  display: flex;
  flex-direction: row;
}
.icon{
  height: 180px;
}
.title{
  display: flex;
  flex-direction: column;
  padding: 0 50px;
  gap: 25px;
  margin-top: 10px;
}
.categories{
  display: flex;
  flex-direction: row;
  height: 100px;
  margin: 20px;
  gap: 10px;
}
.categories span{
  background-color: aliceblue;
  padding: 10px;
  border-radius: 25px;
  box-shadow: rgb(100 100 111 / 10%) 2px 3px 7px 3px;
}
.project_social_media img{
  height: 30px;
  border-radius: 0;
}
</style>