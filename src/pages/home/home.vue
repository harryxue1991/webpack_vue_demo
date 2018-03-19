<template>
    <div>
        <Header :activeIndex="activeIndex"></Header>
        <router-view></router-view>
        <div>
            
        </div>
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
    },
    mounted() {
        this.axios.get('src/json/person.json').then((response) => {
            console.log(response.data);
        })
    }
};
</script>
<style scoped>
.hello {
    color: green;
}
</style>
