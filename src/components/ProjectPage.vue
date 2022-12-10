<template>
  <div>{{this.$route.params.name}}</div>
  <p>{{this.$route.params.data}}</p>
</template>

<script>
export default {
    mounted() {
        console.log(this.$route);
    }
}
</script>

<style>

</style>