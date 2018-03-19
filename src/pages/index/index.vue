<template>
    <div>
        <Header :activeIndex="activeIndex"></Header>
        <div class="hello">
            <div class="name">{{msg}}喜欢吃</div>
            <div class="clearfix">
                <div v-for="(item , index) in like" :key="index" class="fruit">
                    {{item.Fruit}}
                </div>
            </div>
            <div class="name2">{{msg2}}喜欢吃</div>
            <div class="fruit" v-text="doneLike(3).Fruit"></div>
        </div>
    </div>
</template>
<script>
import Header from 'components/Header/Header.vue'
import { mapState, mapGetters } from 'vuex';
export default {
    data:() => ({
        activeIndex:'/',
        msg: '薛辛超',
        msg2: '小葱'
    }),
    components: {
        Header
    },
    computed: {
        ...mapState({
            like: "like"
        }),
        ...mapGetters([
            'doneLike',
        ])
    },
    mounted() {

    },
    methods: {

    }
}
</script>
<style lang="scss">
    .hello {
        color: red;
        .name {
            color: peru;
        }
        .name2 {
            color: plum;
            margin-top: 30px;
        }
        .fruit {
            float: left;
            margin-right: 30px;
        }
    }
</style>

