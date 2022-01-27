<template>
  <div class="app-container">
    <sider class="sider" :menus="menus"></sider>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sider from './components/sider'
import {menus} from './router/routes'

export default {
  name: 'App',
  
  components: {
    Sider
  },

  data() {
    return {
      menus: menus
    }
  }
}
</script>

<style>
.app-container {
  width: 100%;
  display: flex;
  background: #f0f0f0;
}

.content {
  margin: 10px;
  background: #ffffff;
  flex: 1;
}

</style>
