<template>
<div>
    <button :class="btnClass"  @click="btnClick" >
        {{btnShow}}
    </button>
</div>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
        },
        btnShow: {
            type: String,
        }
    },
    data() {
        return {};
    },
    created() {},
    methods: {
        btnClick(e) {
            this.$emit('click', e);
        }
    },
    computed: {
        btnClass() {
            return {
                'btn': true,
                'btn-primary': this.color == 'primary',
                'btn-secondary': this.color == 'secondary',
                'btn-success': this.color == 'success',
                'btn-warning': this.color == 'warning',
                'btn-info': this.color == 'info',
                'btn-error': this.color == 'error',
            }
        }
    }
};
</script>

<style scoped>
.btn {
    border-radius: 3px;
    border: none;
    width: 100%;
    height: 100%;
    box-shadow: 2px 2px 3px #aaaaaa;
    outline: none;
}

.btn :hover {
    background-color: #ff5690;
}

.btn-primary {
    background-color: #3ba2f4;
}

.btn-secondary {
    background-color: #ff4081;
}

.btn-secondary :hover {
    background-color: #ff5690;
}

.btn-success {
    background-color: #4caf50;
}

.btn-warning {
    background-color: #fdd835;
}

.btn-info {
    background-color: #2196f3;
}

.btn-error {
    background-color: #f44336;
}
</style>
