<template>
	<section>
		<!--工具条-->
		<el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
			<el-form :inline="true" :model="filters">
				<el-form-item>
					<el-input v-model="filters.name" placeholder="姓名"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click="getList">查询</el-button>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleAdd">新增</el-button>
				</el-form-item>
			</el-form>
		</el-col>

		<!--列表-->
		<el-table :data="list" highlight-current-row v-loading="listLoading" @selection-change="" style="width: 100%;">
			<el-table-column type="selection">
			</el-table-column>
			<el-table-column type="index" width="55">
			</el-table-column>
			<el-table-column prop="title" label="标题" sortable>
			</el-table-column>
			<el-table-column prop="keywords" label="关键词" sortable>
			</el-table-column>
			<el-table-column prop="description" label="描述" sortable>
			</el-table-column>
			<el-table-column prop="content" label="内容" sortable>
			</el-table-column>
			<el-table-column label="操作">
				<template scope="scope">
					<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
					<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!--工具条-->
		<el-col :span="24" class="toolbar">
			<el-button type="danger" @click="" :disabled="this.sels.length===0">批量删除</el-button>
			<el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="pageInfo.pageSize" :total="pageInfo.count" style="float:right;">
			</el-pagination>
		</el-col>

	</section>
</template>

<script>
	import util from '../../common/js/util'
	import NProgress from 'nprogress'
	import {getRequest}  from '../../api/api'

	export default {
		data() {
			return {
				filters: {
					name: ''
				},
				list: [],
				pageInfo: {},
				listLoading: false,
				sels: [],//列表选中列
				editFormVisible: false,//编辑界面是否显示
				editLoading: false,
				editFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//编辑界面数据
				editForm: {
					id: 0,
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				},

				addFormVisible: false,//新增界面是否显示
				addLoading: false,
				addFormRules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					]
				},
				//新增界面数据
				addForm: {
					name: '',
					sex: -1,
					age: 0,
					birth: '',
					addr: ''
				}

			}
		},
		methods: {
			//性别显示转换
			formatSex: function (row, column) {
				return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
			},
			handleCurrentChange(val) {
				this.getList(val);
			},
			//获取用户列表
			getList(page = 1, size = 10) {
				this.listLoading = true;
				NProgress.start();
				getRequest({
					url: `article/list/${page}/${size}`,
				}).then((res) => {
					this.list = res.artData;
					this.pageInfo = res.pageInfo;
					this.listLoading = false;
					NProgress.done();
				});
			},
			handleAdd(){
				alert(222)
			}
		},
		mounted() {
			this.getList();
		}
	}

</script>

<style scoped>

</style>