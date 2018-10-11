<template>
<button :class="['btn-'+btnShow,
        {'btnShadow':btnShadow},
        {'btnDisable':eDisable},
        {'btn-radius':radius},
        'btn',
        ]" @click="e=>!eDisable?$emit('click',e):''">
        <img v-if="icon != ''"  :src="icon" :class="['btn-icon']" />
        <img v-if="loading" :src="loadingView" :class="['btn-icon']" :style="{'transform':'rotate('+loadingRotate+'deg)'}"/>
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: {
        color: {
            type: String
        },
        btnShow: {
            type: String
        },
        btnShadow: {
            type: Boolean,
            default: false
        },
        eDisable: {
            type: Boolean,
            default: false
        },
        radius: {
            type: Boolean,
            default: false
        },
        icon: {
            type: String,
            default: ""
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            loadingView: require("../../../assets/loading.png"),
            loadingRotate: 0,
        };
    },
    created() {
        if (this.loading) {
            setInterval(() => {
                this.loadingRotate += 10;
            }, 100);
        }
    },
    methods: {},
    computed: {}
};
</script>

<style scoped>
.btn {
    display: flex;
    border-radius: 3px;
    border: none;
    outline: none;
    color: #fff;
    justify-content: center;
    width: 20%;
}

.btnDisable {
    color: #bfcbd9;
    box-shadow: 2px 2px 3px #bfcbd9;
}

.btn-shadow {
    box-shadow: 2px 2px 3px #aaaaaa;
}

.btn-radius {
    border-radius: 50%;
}

.btn-primary {
    background: #3faaf5;
}

.btn-primary:hover {
    background: rgba(63, 169, 245, 0.8);
}

.btn-secondary {
    background: #ff4081;
}

.btn-secondary:hover {
    background: rgba(255, 64, 129, 0.9);
}

.btn-success {
    background: #4caf50;
}

.btn-success:hover {
    background: rgba(76, 175, 80, 0.8);
}

.btn-warning {
    background: #fdd835;
}

.btn-warning:hover {
    background: rgba(253, 216, 53, 0.8);
}

.btn-info {
    background: #85d2ff;
}

.btn-info:hover {
    background: rgba(133, 210, 255, 0.8);
}

.btn-error {
    background: #f44336;
}

.btn-error:hover {
    background: rgba(244, 67, 54, 0.8);
}

.btn-icon {
    height: 20px;
    width: 20px;
    margin: 0px 5px 0px 5px;
}
</style>
