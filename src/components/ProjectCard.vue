<template>
  <div class="projectcard">
    <div class="title">
        <img v-bind:src="this.projectData.icon" alt=""/>
            <div>
              <router-link :to="{ path: this.projectData.title, params: { data: this.projectData }}"><h3>{{ this.projectData.title }}</h3></router-link>
              <div class="block_categories_in_card">
                <div class="categories_in_card" v-for="category in this.projectData.category" :key="category">{{ category.name }}</div>
              </div>
            </div>
          </div>
          <p>{{ this.projectData.excerpt.slice(0, 110) }}</p> 
          <div class="project_social_media">
            <a target="_blank" v-if="this.projectData.website" v-bind:href="this.projectData.website"><img src="../assets/safari.png" alt=""/></a>
            <a target="_blank" v-if="this.projectData.twitter" v-bind:href="this.projectData.twitter"><img src="../assets/twitter.png" alt=""/></a>
            <a target="_blank" v-if="this.projectData.discord" v-bind:href="this.projectData.discord"><img src="../assets/discord.png" alt=""/></a>
          </div>
  </div>
</template>

<script>
export default {
    name: 'ProjectCard',
    props: ['projectData']
}
</script>

<style scoped>
.projectcard:hover {
  transform: translateY(-5px);
  background-color: rgb(251, 251, 255);
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 22px 0px;
}
.projectcard p {
  height: 5.2rem;
}
.title {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.title img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 10px 0px;
  margin-right: 5px;
}
.block_categories_in_card{
  display: -webkit-box;
  width: 100%;
}
.categories_in_card{
  font-size: 12px;
  padding: 0 2px 0 0;
  margin: 0 2px 0 0;
  border-radius: 5px;
  color: #2a2a2ac1;
}
.project_social_media img{
  margin: 0 3px;
  width: 20px;
  height: 20px;
  opacity: 0.8;
  transition: all 0.3s ease-in-out;
}
</style>