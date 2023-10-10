<template>
  <h1>jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'JobDetail', params: { id: job.id } }"
      ><h2>{{ job.title }}</h2></router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "sofware dev", id: 1, details: "njenga" },
        { title: "unix dev", id: 2, details: "njenga" },
        { title: "vue dev", id: 3, details: "njenga" },
      ],
    };
  },
};
</script>

<style>
.job h2{
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;

}
.job h2:hover{
  background: #ddd;

}
.job a{
  text-decoration: none;
}
</style>