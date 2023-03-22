<template>
  <div>
    <div>
  <input type="range" ref="seekbar" min="0" :max="duration" v-model="currentTime" @input="seek" step="0.2"/>
</div>
<audio ref="audio" src="path/to/audio.mp3"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: 0,
      duration: 0
    }
  },
  mounted() {
    const audio = this.$refs.audio;
    audio.addEventListener('loadedmetadata', this.updateDuration);
  },
  methods: {
    updateDuration() {
      this.duration = this.$refs.audio.duration;
    },
    seek() {
      this.$refs.audio.currentTime = this.currentTime;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}</style>
