<template>
  <Background/>
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
    <div class="categories">
      <button  @click="selectCategoryHandler" v-for="item in this.categories" :key="item"> {{ item }} </button>
    </div>
    <div class="projects">
      <ul class="ul_in_main">
        <ProjectCard class="project_mp" v-for="(project, index) in this.projects" :key="project.id" :projectData="project" :index="index"/>
      </ul>
    </div>
    <button v-show="this.showScrollBtn" onclick="window.scrollTo(0, 0)" class="scrollToTop"><img src="../assets/double-arrow-top-icon.png" alt=""></button>
  </div>
</template>

<script>
import axios from "axios";
import ProjectCard from "./ProjectCard.vue";
import Background from "./Background.vue";

export default {
    name: "MainPage",
    components: {
      ProjectCard,
      Background
    },
    data() {
    return {
      categories: [
        "NFT",
        "Bridge",
        "DeFi",
        "Dex",
        "GameFi",
        "Infrastructure",
        "Launchpad",
        "Name Service",
        "NFT Market",
        "Official Partners",
        "SocialFi",
        "Tools",
        "Wallet",
      ],
      projects: [],
      selectCategory: "all",
      page: 1,
      scroll: 0,
      arr: [],
      stopLoad: false,
      showScrollBtn: false,
      mainPage: true
    };
  },
  mounted() {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 20 ? this.showScrollBtn = true : this.showScrollBtn = false;
      if (document.documentElement.scrollHeight - 20 <= document.documentElement.scrollTop +document.documentElement.clientHeight){
        this.page += 1;
        if (!this.stopLoad) {
          this.stopLoad = true;
          axios
            .get(process.env.VUE_APP_BASE_API_URL + `${this.selectCategory}/${this.page}/18`)
            .then((response) => {
              let arr = [...Array.from(this.projects), ...response.data];
              this.projects = arr;
              if (response.data) setTimeout((this.stopLoad = false), 2000);
            });
        }
      }
    });
    
    axios
      .get(process.env.VUE_APP_BASE_API_URL + `${this.selectCategory}/${this.page}/18`)
      .then((response) => {
        this.projects = response.data;
      });
  },
  methods: {
    selectCategoryHandler(e) {
      this.selectCategory = e.path[0].innerText.toLowerCase().replace(/ /g, "-");
      this.page = 1;
      this.stopLoad = false;
      window.scrollTo(0, 0);

      axios
        .get(process.env.VUE_APP_BASE_API_URL + `${this.selectCategory}/1/18`)
        .then((response) => {
          this.projects = response.data;
        });
    },
  },
}
</script>

<style >

.h{
  display: flex;
  font-size: 2em;
  font-weight: 800;
  letter-spacing: 1px;
  cursor: pointer;
}
.blue{
  padding: 0 5px 2px;
  margin: 1px;
  border-radius: 15px;
  background: #2a2a2a;
  color: white;
}
.nav{
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 8vw .5em;
}
.right{
  display: flex;
  flex-direction: row;
  align-items: center;
}


.btn_fun {
  margin: 0 20px;
  position: relative;
  display: inline-block;
  width: 90px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: rgb(246, 249, 255);
  font-size: 20px;
  text-decoration: none;
  letter-spacing: 2px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 30px;
  z-index: 1;
}
.btn_fun:hover {
  animation: animate 8s linear infinite;
}
 
@keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}
.btn_fun:before {
  content: "";
  position: absolute;
  top: -5px;
  right: -5px;
  bottom: -5px;
  left: -5px;
  z-index: -1;
  background: linear-gradient(90deg, #03a9f4, #f441a5, #ffeb3b, #03a9f4);
  background-size: 400%;
  border-radius: 40px;
  opacity: 0;
  transition: .5s;
}
.btn_fun:hover:before {
  filter: blur(20px);
  opacity: 1;
  animation: animate 8s linear infinite;
}

.ul_in_main {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}

.project_mp {
  width: 15rem;
  min-height: 10rem;
  height: 10rem;
  display: inline-block;
  margin: 15px;
  padding: 10px 20px 10px;
  background-color: rgb(248, 248, 255);
  border: 0.05rem solid #eee;
  box-shadow: rgba(100, 100, 111, 0.1) 2px 3px 7px 3px;
  border-radius: 20px;
  transition: all 0.2s ease-in-out;
  font-size: 15px;
}
li:hover {
  transform: translateY(-5px);
  background-color: rgb(251, 251, 255);
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 22px 0px;
}
li p {
  height: 5.2rem;
}

.main {
  display: flex;
  padding: 0 8vw;
}

.categories {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 20vw;
  height: 50vh;
}

.projects {
  width: 80vw;
  display: inline-block;
}

.categories button{
  height: 2.5em;
  border: none;
  margin: 0 0 15px 0em;
  padding: 3px 0px;
  font-size: 1.2em;
  color: rgb(53, 53, 53);
  background-color: rgba(255, 255, 255, 0);
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
}
.categories button::after{
  opacity: 0;
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
  height: 1px;
	background-color: rgba(43, 43, 43, 0.862);
  transition: opacity .2s, transform .2s;
	transform: translate3d(-1em, 0, 0);
}

.btn_submit::after{
  opacity: 0;
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 110%;
  height: 2px;
	background-color: rgba(43, 43, 43, 0.862);
  transition: opacity .2s, transform .2s;
	transform: translate3d(0, .7rem, 0);
  margin: -5px;
}
.categories button:hover, .btn_submit:hover, .btn_fun:hover{
  transform: scale(1.05);
  color: #000;
}
.btn_submit:hover::after,
.categories button:hover::after {
	opacity: 1;
	transform: translate3d(0, 0, 0);
}

.btn_submit, .btn_fun{
  margin: 0 50px;
  outline: none;
  border: none;
  background: none;
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 2px;
  color: #2a2a2ac1;
  transition: all 0.2s ease-in-out;
  text-align: center;
}
.btn_fun{
  font-size: 1.1em;
}

.scrollToTop{
  display: block;
  text-align: justify;
  outline: none;
  border: none;
  margin: 0 0 10px 2em;
  padding: 23px 15px;
  transition: all 0.2s ease-in-out;
}


.scrollToTop{
  position: fixed;
  width: 1em;
  height: 1em;
  font-size: 2em;
  padding: 2px 0 0 14px;
  outline: none;
  border: none;
  background: none;
  
  bottom: 1.5em;
  right: 1.5em;
}
.scrollToTop img{
  transition: all 0.2s ease-in-out;
  width: 40px;
  height: 40px;
  opacity: .2;
}
.scrollToTop:hover img{
  opacity: .5;
}


.social_media {
  display: flex;
  position: relative;
  gap: 5px;
  margin: 10px;
  padding: 10px;
  border-radius: 15px;
  box-shadow: rgba(100, 100, 111, 0.1) 1px 2px 5px 2px;
}
.social_media img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}

@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');
* {
  margin: 0px;
  padding: 0px;
  font-family: 'Inter', sans-serif;
}

body{
  background-image: radial-gradient(circle 200px at left 10vw top 300px, #d6e4ff 20%, rgb(246, 249, 255) 80%);
  background-size: 600%;
  height: 100vh;
}


@media screen and (max-width: 500px) {
  body{
    height: auto;
  }
  .main {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  .nav{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    padding: .4em 8vw;
    box-shadow: rgba(100, 100, 111, 0.5) 0px 7px 29px 0px;
    backdrop-filter: blur(10px);
  }
  .right{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }


  .categories{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    height: fit-content;
    margin: 1em 1px 5px;
    gap: 5px;
  }

  .categories button, .btn_submit, .scrollToTop{
    width: fit-content;
    height: 2em;
    margin: 0 5px;
    padding: 2px 5px;
    font-size: 1.2em;
    font-weight: 600;
    letter-spacing: 2px;
    color: #2a2a2ac1;
  }

  .projects {
    width: auto;
    display: block;
    margin-top: 1em;
  }
}


</style>