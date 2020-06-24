<template>
  <button
    @click="$emit('click')"
    class="sy__button"
    :disabled="disabled"
    :class="[
    'sy__button--'+type,
    {'is-plain': plain, 'is-disabled': disabled, 'is-round': round},
    'sy__button--'+size
    ]"
  >
    <slot></slot>
  </button>
</template>
<script>
  export default{
    name: 'SoButton',
    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: {
        type: String,
        default: 'default'
      },
      plain:{
        type:Boolean,
        default:false
      },
      disabled:{
        type:Boolean,
        default:false
      },
      round:{
        type:Boolean,
        default:true
      }
    },
    data () {
      return {
        msg: 'button'
      }
    }
  }
</script>
