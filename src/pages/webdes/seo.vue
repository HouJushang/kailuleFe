/**
* Created by hou on 2017/4/11.
*/
<template>
    <el-form ref="form" :model="form" label-width="80px" @submit.prevent="onSubmit" style="margin:20px;width:60%;min-width:600px;">
        <el-form-item label="标题">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="关键字">
            <el-input v-model="form.keywords"></el-input>
        </el-form-item>
        <el-form-item label="描述">
            <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">提交</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
    import util from '../../common/js/util'
    import NProgress from 'nprogress'
    import {postRequest, getRequest} from '../../api/api'
    export default {
        data() {
            return {
                form: {
                    title: '',
                    keywords: '',
                    description: ''
                }
            }
        },
        methods: {
            getData(){
                this.listLoading = true;
                getRequest({
                    url: 'seo/detail'
                }).then((res) => {
                    this.form = res
                    this.listLoading = false;
                    NProgress.done();
                });
            },
            onSubmit(){
                alert(1);
            }
        },
        mounted() {
            this.getData();
        },

    }

</script>

<style scoped>

</style>