<template>
<div>
    <div class="btn-line">
        <EButton @click="alert" :color="'primary'" :btnShow="'primary'" class="btn-line-item"></EButton>
        <EButton @click="alert" :color="'secondary'" :btnShow="'secondary'" class="btn-line-item"></EButton>
        <EButton @click="alert" :color="'success'" :btnShow="'success'" class="btn-line-item"></EButton>
        <EButton @click="alert" :color="'warning'" :btnShow="'warning'" class="btn-line-item"></EButton>
        <EButton @click="alert" :color="'info'" :btnShow="'info'" class="btn-line-item"></EButton>
        <EButton @click="alert" :color="'error'" :btnShow="'error'" class="btn-line-item"></EButton>
    </div>
</div>
</template>

<script>
import EButton from "@/components/button/components/Button";

export default {
    components: {
        EButton,
    },
    data() {
        return {
            btnShow: '222',
            color: 'primary',
        };
    },
    methods: {
        alert(e){
            alert('Hello World');
            console.log(e);
        }
    },
    computed: {}
}
</script>

<style scoped>
.btn-line {
    display: flex;
    flex-direction: row;
    height: 50px;
}

.btn-line-item {
    flex: 1;
    height: 100%;
    margin: 5px;
}
</style>
