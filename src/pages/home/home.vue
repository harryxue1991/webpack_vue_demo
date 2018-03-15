<template>
    <div>
        <Header :activeIndex="activeIndex"></Header>
        <div class="hello">你好</div>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from "components/Header/Header.vue";
export default {
    data:() => ({
        activeIndex:'/home',
        msg: '薛辛超'
    }),
    components: {
        Header
    }
};
</script>
<style scoped>
.hello {
    color: green;
}
</style>
