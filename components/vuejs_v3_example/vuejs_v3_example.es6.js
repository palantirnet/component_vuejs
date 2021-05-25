// The example is written in es6 and compiled down with Gulp.
const MyVueApp = {
  data() {
    return {
      greeting: 'Hello,',
      name: 'Ken'
    }
  },
  mounted: function() {
    this.getConfiguration();
  },
  methods: {
    getConfiguration() {
      // Config is in the bounding class made by Component.
      const config = document.querySelector('.vuejs_v3_example').dataset;
      this.name = config.name;
      if (config.greeting !== undefined) {
        this.greeting = config.greeting;
      }
    },
  },
}

Vue.createApp(MyVueApp).mount('.my-vue-app');
