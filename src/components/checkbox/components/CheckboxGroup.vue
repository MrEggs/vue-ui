<template>
<div>
    <div class="checkbox-group" @click="proxyCheckState">
        <ECheckbox v-for="(item,index) in checkValues" :key="index" :ekey="index" :value="item.value" :checked="item.checked" :withParent=true ref="echeckbox" />
    </div>
</div>
</template>

<script>
import ECheckbox from "@/components/checkbox/components/Checkbox";

export default {
    components: {
        ECheckbox,
    },
    props: {
        checkValues: {
            type: Array,
            default: []
        },
        singleSelect: {
            type: Boolean,
            default: false,
        },
        // min: {
        //     type: Number,
        //     default: 0,
        // },
        // max: {
        //     type: Number,
        //     default: 0,
        // }
    },
    created() {
        // this.checkValues.forEach((item, index) => {
        // this.currentValue.push(item.value);
        // this.currentSelect.push(item.checked);
        // if (this.currentIndex < 0) {
        //     this.currentIndex = item.index;
        // }
        // });
    },
    data() {
        return {
            currentValue: [],
            currentSelect: [],
            currentIndex: -1,
        }
    },
    methods: {
        proxyCheckState(e) {
            let flag = false;
            let target = e.target;
            let nodeName = target.nodeName;
            if (nodeName !== "INPUT") {
                return;
            }

            let itemKey = target.getAttribute("ekey");
            let nodeKey = target.getAttribute("cvalue");
            let nodeValue = this.$refs.echeckbox[itemKey].popUpCheckedState();

            if (this.singleSelect) {
                this.singleSelectSet(itemKey);
            } else {
                this.$refs.echeckbox[itemKey].changeCheckedState(!nodeValue);
            }

            this.$emit('change', {
                'index': itemKey,
                'Key': nodeKey,
                'Value': !nodeValue
            });
        },
        singleSelectSet(selectIndex) {
            let echeckbox = this.$refs.echeckbox;
            echeckbox.forEach(item => {
                item.changeCheckedState(false);
            });
            echeckbox[selectIndex].changeCheckedState(true);
        }
    }
}
</script>

<style scoped>
.checkbox-group {
    display: flex;
    flex-direction: row;
}
</style>
