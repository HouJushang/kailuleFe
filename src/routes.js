import Login from './pages/Login.vue'
import NotFound from './pages/404.vue'
import Home from './pages/Home.vue'
import Main from './pages/Main.vue'
import listArticle from './pages/article/List.vue'
import addArticle from './pages/article/Add.vue'

import user from './pages/nav1/user.vue'
import Web from './pages/web/Web.vue'
import WebAdd from './pages/web/add.vue'
import friend from './pages/webdes/friend.vue'
import seo from './pages/webdes/seo.vue'



let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/web',
        component: Web,
        name: '',
        hidden: true
    },
    {
        path: '/webadd',
        component: WebAdd,
        name: 'webadd',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    {
        path: '/',
        component: Home,
        name: '文章管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/user', component: user, name: '采集' },
            { path: '/main', component: Main, name: '', hidden: true },
            { path: '/add', component: addArticle, name: '添加文章' },
            { path: '/list', component: listArticle, name: '文章列表' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '网站设置',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/friend', component: friend, name: '友情链接设置' },
            { path: '/seo', component: seo, name: '网站seo信息' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    }
];

export default routes;