<template>
    <div>
        <Header :activeIndex="activeIndex"></Header>
        <div class="hello">
            <span @click="clickme">hello world</span>
            <div class="name">{{msg}}</div>
        </div>
    </div>
</template>
<script>
import Header from 'components/Header/Header.vue'
export default {
    data:() => ({
        activeIndex:'/',
        msg: '薛辛超'
    }),
    components: {
        Header
    },
    mounted() {
    },
    methods: {
        clickme() {
            alert(1);
        }
    }
}
</script>
<style lang="scss">
    .hello {
        color: red;
        span {
            background-color: pink;
            cursor: pointer;
            font-size: 18px;
        }
        .name {
            color: black;
        }
        .img {
            width: 100px;
        }
    }
</style>

