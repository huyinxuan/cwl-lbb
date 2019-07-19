<template>
    <div class="content">
        <header><img src="@/assets/home-logo2.svg" alt="CCW LLB"></header>
        <router-view />
        <van-tabbar v-model="active">
            <van-tabbar-item icon="home-o" replace to="/">首页</van-tabbar-item>
            <van-tabbar-item icon="search" replace to="/market">行情</van-tabbar-item>
            <van-tabbar-item icon="friends-o" replace to="/trade">币币交易</van-tabbar-item>
            <van-tabbar-item icon="setting-o" replace to="/margin">杠杆交易</van-tabbar-item>
            <van-tabbar-item icon="cash-on-deliver" replace to="/finance">资产</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    name:'index',
    props: {

    },
    data() {
        return {
            active:0
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {
        onChange(event) {
            console.log(event);
            this.active = event;
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
    .content{
        *{
            box-sizing: border-box;
            font-size: 0.32rem;
        }
        header {
            height: 0.8rem;
            background-color: #1d2243;
            line-height: 0.8rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            img {
                transform: translate(-20%, 0px) scale(0.5);
            }
        }
        .van-tabbar{
            /deep/ .van-tabbar-item__text{
                font-size: 0.24rem;
            }
        }
    }
</style>
