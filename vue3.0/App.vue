<template>
  <div class="container">
    <!-- 模板内，不需要书写.value, 它会自动解套 -->
    <h4>ref: {{count}}</h4>
    <h5>computed: {{countPlus}}</h5>
    <h5>computedGet: {{countPlusGet}}</h5>
    <button class="button" @click="incre">incre</button>
    <button class="button" @click="changeName">changeName</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { 
  ref, reactive, watchEffect, toRefs, 
  computed, readonly, onMounted, 
  onUpdated, onUnmounted, watch, onRenderTriggered, onRenderTracked
} from 'vue';

export default {
  props: {
    name: String
  },
  // * setUp
  setup(props, {attrs}) {
    const color = ref('blue')
    const fontColor = ref('#ffffff')
    // * ref 对一个数值进行响应式监听，通过.value访问内部值
    const count = ref(0)
    const incre = () => count.value++

    // * reactive 对一个对象进行响应式监听
    const state = reactive({
      age: '18'
    })
    const changeName = () => {
      // props.name = 'dddd'
      state.age = '22'
      console.log(props.name)
      console.log('attrs', attrs.__vInternal)
      stop(); // 停止监听
      console.log('watchEffect 已停止监听')
    }

    // * computed 传入一个getter函数，返回一个手动更改的ref对象
    const countPlus = computed(() => count.value + 1)

    // 传入一个拥有get和set对象的函数
    const countPlusGet = computed({
      get: () => count.value + 2,
      set: (val) => {
        console.log('调用了computed的set方法', val)
        count.value = 100
      }
    })
    countPlusGet.value = 10 // 设置computed的值，触发set
  
    // * readonly 对象属性都是只读的，无法直接修改copy上的值
    const copy = readonly(count)

    // * watchEffect
    // 显式调用返回值stop以停止侦听
    const stop = watchEffect((onInvalidate) => {
      console.log('count', count.value)
      onInvalidate(() => {
        // 用于停止侦听后，处理相关异步操作（清除副作用）
        // promise.cancel()
      })
      
    }, {
      // onTrack 和 onTrigger 仅在开发模式下生效
      onTrigger(e) {
        // 依赖项变更导致副作用被触发时
      },
      onTrack(e) {
        // 当一个 reactive 对象属性或一个 ref 作为依赖被追踪时
      },
      // 默认‘post’ 在组件更新之后，执行副作用
      // 'sync' 同步运行
      // 'pre' 组件更新之前，重新运行
      flush: 'post'
    })
    
    console.log('props.name', props.name)

    // * watch 侦听特定的数据源，默认是懒执行的，指侦听的源发生变更的时候去执行
    // 可以侦听前后变化的值，明确哪些状态改变会触发侦听器重新运行副作用
    // 其他特性 与 watchEffect 共享
    // 侦听一个 getter 函数
    watch(() => state.age, (val, oldVal) => {
      console.log('watch 侦听 reactive 对象属性值', val, oldVal)
    })
    // 侦听一个 ref
    watch(count, (val, oldVal) => {
      console.log('watch 侦听 ref 值得变化', val, oldVal)
    })

    // * 生命周期钩子函数
    onMounted(() => {})
    onUpdated(() => {})
    // 同vue2.0的destoryed周期
    onUnmounted(() => {})
    // setUp() 相当于之前的 beforeCreate(), created()
    onUpdated(() => {}) // => updated()
    // 增加两个调试钩子
    onRenderTriggered(() => {}) // 依赖变更，影响副作用
    onRenderTracked(() => {}) // 依赖被追踪 

    // * 依赖注入
    // provide 和 inject 只能够在 setUp() 中调用

    // * 模板 Refs

     // ! v-for 中没有做特殊处理，需要自己自定义

    // * 响应式系统工具集
      // ! unref

      // ! toRef

      // ! toRefs

      // ! isRef

      // ! isProxy

      // ! isReactive

      // ! isReadonly

    // * 高级响应式系统API
      // ! customRef

      // ! markRaw

      // ! shallowReactive

      // ! shallowReadonly

      // ! shallowRef

      // ! toRaw

    return {
      color,
      count,
      countPlus,
      countPlusGet,
      ...toRefs(state),
      incre,
      fontColor,
      changeName
    }
  }
}

// @Options({
//   components: {
//     HelloWorld,
//   },
// })
// export default class Home extends Vue {}
</script>

<style vars="{ color, fontColor }" scoped>
.container{
  /* align-items: center; */
  text-align: center;
}
.button{
  /* height: 44px; */
  /* line-height: 44px; */
  margin-left: 10px;
  text-align: center;
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  color: var(--fontColor);
  background: var(--color);
}
</style>
