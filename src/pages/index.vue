<template>
    <div>
        <div class="hello">
            <span @click="clickme">hello world</span>
            <div class="name">{{msg}}</div>
            <div>
                <img class="img" src="../images/picture.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: '薛辛超'
        }
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

