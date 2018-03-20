<template>
    <div>
        <Header :activeIndex="activeIndex"></Header>
        <div>{{count}}</div>
        <button @click="change">按我加1</button>
    </div>
</template>
<script>
import Header from "components/Header/Header.vue";
import { mapState, mapMutations} from 'vuex';
export default {
    data:() => ({
        activeIndex:'/page',
    }),
    components: {
        Header
    },
    computed: {
        ...mapState('second',{
                count: state => state.count,
        }),
    },
    methods: {
        ...mapMutations('second',{
            change: 'increment'
        }),
    }
};
</script>
<style scoped>

</style>
