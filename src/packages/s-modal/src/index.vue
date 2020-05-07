<!--Created by binnull on 2017/2/24.-->
<template>
  <transition :name="transitionName">
    <div v-if="modalShow && (type === 'modal1' || type === 'modal3' || type === 'modal4')" class="modal-wrap"   @click.self="modalClose" :style="modalPosition">
      <transition :name="type" appear>
        <div class="modal1-center" v-if="type === 'modal1' && modalShow">
          <slot></slot>
          <div class="modal-close modal1-close" v-if="type === 'modal1' && closeShow" @click="modalClose"></div>
        </div>
        <div class="modal3-right" v-else-if="type === 'modal3' && modalShow">
          <slot></slot>
          <div class="modal-close modal3-close" @click="modalClose"></div>
        </div>
        <div class="modal4-bottom" :class="{display:modalDisplay}" v-else-if="type === 'modal4' && modalShow">
          <slot></slot>
          <div class="modal-close modal4-close" @click="modalClose"></div>
        </div>
      </transition>
    </div>
    <span class="modal2-center" v-else-if="type === 'modal2' && modalShow">
      <span class="modal2-icon" :class="modal2IconClass"></span>
      <span class="modal2-text">
        <slot>
          {{placeHolder}}
        </slot>
      </span>
    </span>
  </transition>
</template>


<script>

export default {
  name:'SoModal',
  props: {
    type: {
      required: true,
      default: 'modal1'
      /*
        {
          'modal1': '自定义对话框',
          'modal2': '成功，失败，警告提示'
          'modal3': '右侧拉显示对话框'
          'modal4': '自定义tag提示'
          'modal5': '底部弹窗'
        }
      */
    },
    modalShow: {
      required: true,
      default: false
    },
    placeHolder: {
      default: '操作成功'
    },
    promptKind: {
      default: 'success'
    },
    hideTime: {
      default: 1500
    },
    position: {
      default() {
        return {
          'left': 0,
          'top': 0
        }
      }
    },
    closeShow:{
      default: true
    }
  },
  data() {
    return {
      modalPosition: {
        left: 0,
        top: 0
      },
      modalDisplay: false
    }
  },
  methods: {
    modalClose() {
      //关闭弹窗 修改bottom值
      if(this.type==='modal4'){
        this.modalDisplay=false
      }
      this.$emit('modalClose');
    }
  },
  computed: {
    modal2IconClass() {
      return {
        'modal2-icon-success': this.promptKind === 'success',
        'modal2-icon-warning': this.promptKind === 'warning',
        'modal2-icon-error': this.promptKind === 'error'
      }
    },
    transitionName() {
      return this.type === 'modal2' ? 'modal-wrap-2' : 'modal-wrap';
    }
  },
  watch: {
    modalShow(val){
      if(val && this.type === 'modal2') {
        setTimeout(() => {
          this.modalClose();
        }, this.hideTime);
      }else if(val && this.type === 'modal4'){
         setTimeout(() => {
         this.modalDisplay =true
        }, 300);
      }
    },
    position(val){
      this.modalPosition = {
        'left' : val.left + 'px',
        'top' : val.top + 'px'
      }
    }
  }
}

</script>

