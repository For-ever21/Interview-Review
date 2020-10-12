// Composition API 语法糖 （<script setup>）

// 状态驱动的 CSS 变量 (<style vars>)

// <style scoped> 现在可以包含全局规则或只针对插槽内容的规则

// 全局 API
  // ! Vue 2 没有"app"的概念

  import { valueOf } from 'core-js/fn/_'
import { createApp } from 'vue'
  const app = createApp({})


// **** 模板指令 *****

// * v-model
// modelValue 代替了之前的 value

// update:modelValue 代替了之前的 $emit('input')

// * <template v-for> 和非 v-for 节点上 key 用法已更改
// 条件分支中 key 将不再是必须的，如果手动提供key，则必须唯一
// <template v-for> 的 key 应该设置在 template 标签上 ，不设置到它的子节点中去

// key: 提示 Vue 的虚拟 DOM 算法来保持对节点身份的持续跟踪。这样 Vue 可以知道何时能够重用和修补现有节点，以及何时需要对它们重新排序或重新创建
// 高效更新虚拟 DOM

// * 同一元素上使用的 v-if 和 v-for 优先级已更改

// 2.x 版本中，v-for 会优先作用

// 3.x 版本中， v-if 会优先作用

// 比起在模板页面管理相关逻辑，更好的办法是通过创建计算属性筛选出列表的方式更好

// * v-bind="object" 现在排序敏感

// <!-- template -->
// ? <div id="red" v-bind="{ id: 'blue' }"></div>
// <!-- result -->
// ? <div id="red"></div>

// 在3.x 版本中，后面声明的会覆盖前面的

// * v-for 中的 ref 不再注册 ref 数组
// 在 3.x 版本中，通过一个函数，传入el，通过data操作
//  


// **** 组件 *****



// **** 渲染函数 *****



// **** 小改变 *****




