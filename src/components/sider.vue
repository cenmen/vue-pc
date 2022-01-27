<template>
  <div class="sider-container">
    <div class="logo">I'm Logo</div>
    <a-menu class="menu-container" theme="dark" :mode="mode">
      <a-sub-menu v-for="menu in menus" :key="menu.title">
        <template #title>{{ menu.title }}</template>
        <a-menu-item v-for="item in menu.children" :key="item.title">
          <router-link :to="item.path">{{ item.title }}</router-link>
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
/* 定制为二层菜单 */
export default {
  props: {
    menus: {
      type: Array,
      required: true
    },
    mode: {
      type: String,
      default: 'inline'
    }
  }
}
</script>

<style>
.sider-container {
  width: 200px;
  min-height: 100vh;
  background: #001529;
  color: #ffffff;
}

.logo {
  font-weight: bold;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
}
</style>
