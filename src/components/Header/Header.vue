<template>
    <div class="header">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            :router="true"
            active-text-color="#ffd04b">
            <el-menu-item index="/">首页</el-menu-item>
            <el-menu-item index="/home">home</el-menu-item>
            <div class="fr">
                <input type="text" v-model="myname" @keydown.enter="change(myname)">
                <span v-text="name"></span>
                <img src="~image/index/picture.png" alt="">
            </div>
        </el-menu>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    props: ['activeIndex'],
    data:() => ({
        myname: ''
    }),
    computed: {
        // name () {
        //     return this.$store.state.name
        // }
        ...mapState({
            name: "name"
        })
    },
    mounted(){

    },
    methods:{
        ...mapMutations({
            change: 'changeName'
        }),
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
        }
    },
}
</script>
<style lang="scss" scoped>
@import "~styles/common.scss";
@import "./style.scss";
</style>