## 此模板为 vue-cli3 项目配置模板，可以直接使用，免去再写配置文件

#### 项目结构说明

```
src                         // 文件主目录
  api                       // 接口
  assets                    // 资源文件
  components                // 公共组件
  config                    // 全局配置目录
    --axios.js              // axios 配置
    --global.js             // 全局配置
  mixins                    // 全局混入目录
  plugins                   // 第三方插件，组件库目录
  router                    // 路由目录
    --routes                // 路由 routes 配置目录
    --beforeEachHooks.js    // 路由守卫钩子 beforeEach 配置文件
    --commonRoutes.js       // 路由 routes 通用配置文件
    --index.js              // 路由出口
  store                     // vuex 配置目录
    --modules               // vuex 模块化目录
      --demo                // 模块式示例
    --indes.js              // vuex 出口
  utils                     // 工具库
  views                     // 业务组件
  App.vue                   // vue 根组件
  main.js                   // 项目入口文件
```

### vuex 模块化组件内部使用示例

```javascript
import { mapState, mapGetters } from "vuex";
export default {
  computed: {
    ...mapState("demo", {
      a: "defaultField"
    }),
    ...mapGetters("demo", {
      c: "defaultField"
    })
  }
};
```
