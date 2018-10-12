<template>
<div>
    <div class="checkbox-group" @click="proxyCheckState">
        <ECheckbox v-for="(item,index) in checkValues" :key="index" :value=item.value :checked=item.checked />
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
        }
    },
    data() {
        return {
            currentSelect: [],
        }
    },
    methods: {
        proxyCheckState(e) {
            let flag = false;
            if (this.singleSelect) {
                for (const item of checkValues) {
                    if (item.checked) {
                        if (flag) {
                            return;
                        } else {
                            break;
                        }
                    }
                }
            }
            let target = e.target;
            let nodeName = target.nodeName;
            if (nodeName !== "INPUT") {
                return;
            }
            let nodeValue = target.checked;
            let nodeKey = target.getAttribute("cvalue");
            this.$emit('change', {
                'nodeKey': nodeKey,
                'nodeValue': nodeValue
            });
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
