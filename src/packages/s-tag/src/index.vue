<template>
  <transition name="sy-zoom-in-center">
    <div class="sy__tag" :class="'sy__tag--'+color">
      <span class="sy__tag--desc"><slot></slot></span>
      <i class="so-icon-close2 so__tag--close" v-if="closable" @click="hiddenTag"></i>
    </div>
  </transition>
</template>

<script>
  export default{
    name: 'SoTag',
    props: {
      closable: Boolean,
      color: {
        type: String,
        default: 'primary'
      }
    },
    data () {
      return {
        isclosed: false
      }
    },
    methods: {
      hiddenTag () {
        this.isclosed = true
        this.$emit('close')
      }
    }
  }
</script>
