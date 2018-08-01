<template>
  <div id="studentManage">
    <h2>学生列表</h2>
    <Tabs type="card" class="card">
      <TabPane label="在读学生">
        <span>选择创建时间范围</span>
        <DatePicker type="daterange" placement="bottom-start" placeholder="选择时间" class="date"></DatePicker>
        <span>关键字</span>
        <Input v-model="value" placeholder="输入登录名或姓名查找" clearable class="key-word"/>
        <Button shape="circle" icon="ios-search"></Button>
        <Button shape="circle" class="button-all">全部</Button>
        <div>
          <Table border ref="selection" :columns="columns4" :data="data1" class="table-content"></Table>
          <Button @click="handleSelectAll(true)">全选</Button>
          <Button @click="handleSelectAll(false)">取消全选</Button>
        </div>
      </TabPane>
      <TabPane label="毕业学生">标签二的内容</TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  data () {
    return {
			columns4: [
				{
					type: 'selection',
					maxWidth: 60,
					align: 'center'
				},
				{
					title: '序号',
					key: 'num',
					maxWidth: 70,
					align: 'center'
				},
				{
					title: '登录名',
					key: 'loginName',
					align: 'center'
				},
				{
					title: '真实姓名',
					key: 'realName',
					align: 'center'
				},
				{
					title: '性别',
					key: 'sex',
					align: 'center'
				},
				{
					title: '教师列表',
					key: 'teacher',
					align: 'center'
				},
				{
					title: '班级',
					key: 'class',
					align: 'center'
				},
				{
					title: '创建时间',
					key: 'createTime',
					align: 'center'
				},
				{
					title: '统计查询',
					key: 'search',
					align: 'center'
				},
				{
					title: '操作',
					key: 'operation',
					align: 'center'
				}
			],
			data1: [
				{
					name: 'John Brown',
					age: 18,
					address: 'New York No. 1 Lake Park',
					date: '2016-10-03'
				},
				{
					name: 'Jim Green',
					age: 24,
					address: 'London No. 1 Lake Park',
					date: '2016-10-01'
				},
				{
					name: 'Joe Black',
					age: 30,
					address: 'Sydney No. 1 Lake Park',
					date: '2016-10-02'
				},
				{
					name: 'Jon Snow',
					age: 26,
					address: 'Ottawa No. 2 Lake Park',
					date: '2016-10-04'
				}
			]
    }
  },
	methods: {
		handleSelectAll (status) {
			this.$refs.selection.selectAll(status);
		}
	}
}
</script>

<style scoped>
#studentManage{
  padding: 20px;
  margin-left: 180px;
}
.card{
  margin-top: 20px;
}
.date{
  width: 200px;
  margin: 0 20px;
}
.key-word{
  width: 200px;
  margin: 0 20px;
}
.button-all{
	margin-left: 10px;
}
.table-content{
	margin: 20px 0;
}
</style>
