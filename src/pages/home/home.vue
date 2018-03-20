<template>
    <div>
        <Header :activeIndex="activeIndex"></Header>
        <router-view></router-view>
        <div class="mydemo">
            <el-button type="primary" @click="addMyGril">按我触发异步请求</el-button>
            <div v-if="!_.isEmpty(person)">
                <div v-text="person.name"></div>
                <div v-text="person.age"></div>
                <div v-text="person.girlFriend"></div>
            </div>
        </div>
    </div>
</template>
<script>
import Header from "components/Header/Header.vue";
import { mapState, mapActions} from 'vuex';
export default {
    data:() => ({
        activeIndex:'/home',
    }),
    components: {
        Header
    },
    computed: {
        ...mapState({
            person: 'person'
        })
    },
    methods: {
        ...mapActions([
            'getMsg'
        ]),
        addMyGril() {
            this.getMsg()
            // this.$store.dispatch('getMsg')
        }
    }
};
</script>
<style scoped>
    .mydemo {
        color: green;
        width: 200px;
        margin-top: 30px;
    }
</style>
