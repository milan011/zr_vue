<template>
    <div>
        <h1>Hello, Larvuent!</h1>
        <p id="hh">{{ msg }}</p>
        <p>{{ msg1 }}</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Vue能成功吗?',
            msg1: '可以监听,可以吗?',
        }
    }
}
</script>

<style >
    #hh{
        color:red;
    }
</style>