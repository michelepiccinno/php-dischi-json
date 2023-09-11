Vue.createApp({
  data() {
    return {
      tracks: []
    }
  },
  mounted() {
    axios.get("api/tracks.php").then((response) => {
      this.tracks = response.data;
    })
  }
}).mount("#app");