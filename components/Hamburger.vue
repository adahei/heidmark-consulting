<template lang="html">
  <button
    type="button"
    class="hamburger"
    :aria-expanded="open ? 'true' : 'false'"
    aria-label="Meny"
    :aria-controls="ariaControls"
    :class="{'open': open}"
    @click="handleClick"
  >
    <span class="line"></span>
    <span class="line"></span>
    <span class="line"></span>
  </button>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    ariaControls: {
      type: String,
      required: true
    }
  },
  computed: {
    isOpen () {
      return this.open
    }
  },
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables';
$size: 2rem;
$width: 1.5rem;
$height: 2rem;
$color: $light;
.hamburger {
  position: relative;
  width: $width;
  height: $height;
  background-color: transparent;
  border: 0;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: all .6s ease-in-out;
  &:focus {
    &::before {
      content: '';
      position: absolute;
      width: $height * 1.1;
      height: $height * 1.1;
      border: 2px solid $color;
      top: 50%;
      left: 50%;
      border-radius: 100%;
      transform: translate3d(-50%, -50%, 0);
      transition: all .6s ease-in-out;
    }
  }
  &::before {
    content: '';
    position: absolute;
    width: $height * 1.1;
    height: $height * 1.1;
    border: 2px solid transparent;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    transform: translate3d(-50%, -50%, 0);
    transition: all .6s .6s ease-in-out;
  }
  .line {
    display: block;
    width: $width;
    height: 2px;
    background-color: $color;
    margin: 4px 0;
    border-radius: 3px;
    transition: all .6s ease-in-out;
  }
  &.open {
    transform: rotate(225deg);
    &::before {
      border-color: $color;
    }
    .line {
      transition: all .3s .2s ease-in-out;
      &:nth-child(1) {
        transform: translateY(6px);
      }
      &:nth-child(2) {
        opacity: 0;
      }
      &:nth-child(3) {
        transform: translateY(-6px) rotate(90deg);
      }
    }
  }
}
</style>
