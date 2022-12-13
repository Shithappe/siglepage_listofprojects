<template>
  <Background/>
  <div class="nav">
    <div class="h" @click="$router.push('/')">
      <div class="blue">Sui</div>
      ecosystem</div>
    <div class="right">
      <button class="btn_fun" @click="$router.push('/fun')">Fun</button>
      <div class="social_media">
        <a target="_blank" href="https://suiecosystem.top"><img src="../assets/safari.png" alt=""/></a>
        <a target="_blank" href="https://twitter.com/SuiEcosystem"><img src="../assets/twitter.png" alt=""/></a>
        <a target="_blank" href="#"><img src="../assets/discord.png" alt=""/></a>
    </div>
    <button class="btn_submit" onclick="location.href = `https://old.suiecosystem.top/submit-sui-project/`">Submit</button>
    </div>
  </div>

  <div class="cardOfCategories">
    <BigCard v-for="item in this.categories" :key="item" :dataEl="item"/>

  </div>
</template>


<script>
import BigCard from './BigCard.vue';
import Background from './Background.vue';

export default {
    name: 'CategoriesPage',
    components: {
      BigCard,
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
        // "Official Partners",
        "SocialFi",
        "Tools",
        "Wallet",
      ],
    };
  },
  
}
</script>

<style scoped>
.cardOfCategories{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* padding: 0 20vw; */
  padding: 0;
  margin: -2.5em 0;
}
</style>