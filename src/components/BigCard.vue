<template>
  <div class="category">
    <h1>{{dataEl}} <span>{{this.projects.length}}</span></h1>
    <ul class="projects_in_category">
      <li class="project_in_category" v-for="project in this.projects.slice(0, this.count)" :key="project">{{project.title}}</li>
    </ul>
    <button class="add_btn" @click="addItems" v-if="this.count < this.projects.length">+{{this.countName}}</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "BigCard",
    props: ['dataEl'],
    components: {
      // ProjectCard
    },
    data() {
      return {
        projects: [],
        selectCategory: '',
        count: 10,
        countName: 10,
      }
    },
    mounted() {
      axios
      .get(process.env.VUE_APP_BASE_API_URL + `${this.dataEl.toLowerCase().replace(/ /g, "-")}/1/100`)
      .then((response) => {
        this.projects = response.data;
      })
      .catch((err) => {
        console.log(err);
      });

    },
    methods: {
      addItems() {
        this.count += 10;
        if (this.projects.length - this.count < 10) this.countName = this.projects.length - this.count;
      }
    }
}
</script>

<style scoped>
.category{
  margin: 5vw 2vw;
}
.project_in_category{
  padding-left: 8px;
  list-style: none;
  font-size: 18px;
  cursor: pointer;
}
li:hover{
  transform: none;
  background-color: none;
  box-shadow: none;
}
h1{
  position: sticky;
  top: 0vw;
  color: white;
  background: black;
  padding: 5px;
  margin: 0 0 5px;
  border-radius: 2px;
}
span{
  font-size: 14px;
  float: right;
  margin-left: 5px;
}
.add_btn{
  border: none;
  outline: none;
  width: 100%;
  color: white;
  background: black;
  padding: 5px;
  margin: 0 0 5px;
  border-radius: 2px;
}
</style>