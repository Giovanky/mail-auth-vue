<template>
  <Particles
    id="tsparticles"
    :options="options"
  />
  <router-view/>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      options: {
        fpsLimit: 60,
        particles: {
          move: {
            bounce: false,
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: .25,
            straight: false
          },
          number: { density: { enable: true, area: 800 }, value: 24 },
          opacity: {
            value: .25
          },
          shape: {
            type: "circle"
          },
          size: {
            value: { min: 1, max: 4 }
          },
          line_linked: {
            "enable": true,
            "distance": 192.40944730386272,
            "color": "#d0d0d0",
            "opacity": .4,
            "width": 1
          },
        },
        themes: [
          {
            name: "light",
            default: {
              value: true,
              mode: "light"
            },
            options: {
              background: {
                color: "#ffffff"
              },
              particles: {
                color: {
                  value: "#000"
                }
              }
            }
          },
          {
            name: "dark",
            default: {
              value: false,
              mode: "dark"
            },
            options: {
              background: {
                color: "#000"
              },
              particles: {
                color: {
                  value: "#fff"
                }
              }
            }
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
#tsparticles {
  position: absolute;
  z-index: -1;
}
</style>
