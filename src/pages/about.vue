<template>
  <div class="about-container">
    <h1>测试请求数据</h1>
    <a-table :dataSource="dataSource" :columns="columns">
      <template #sex="{ text }">{{ text === 0 ? '女' : '男' }}</template>
    </a-table>
  </div>
</template>

<script>
import api from '../api/index'

export default {
  data() {
    return {
      dataSource: [],
      columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age'
        },
        {
          title: 'Sex',
          dataIndex: 'sex',
          key: 'sex',
          slots: {
            customRender: 'sex'
          }
        }
      ]
    }
  },

  async created() {
    const data = await api.getDataList(40)
    this.dataSource = data
  }
}
</script>

<style>
.about-container {
  padding: 30px;
}
</style>
