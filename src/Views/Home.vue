<template>
    <ObjectList v-bind:objects="objects" />
</template>

<script>
import ObjectList from '../components/ObjectList.vue'
export default {
    name: 'app',
    data() {
        return {
            objects: [
                { name: 'foo1', value: 'bar1', color: '#F4E0F9' },
                { name: 'foo2', value: 'bar2', color: '#E3E0F9' },
                { name: 'foo3', value: 'bar3', color: '#E0EAF9' },
                { name: 'foo4', value: 'bar4', color: '#E0F4F9' },
                { name: 'foo5', value: 'bar5', color: '#E0F9F0' },
                { name: 'foo6', value: 'bar6', color: '#E0F9E2' },
                { name: 'foo7', value: 'bar7', color: '#F1F9E0' },
                { name: 'foo8', value: 'bar8', color: '#F8F9E0' },
                { name: 'foo9', value: 'bar9', color: '#F9F3E0' },
                { name: 'foo10', value: 'bar10', color: '#F9ECE0' },
                { name: 'foo11', value: 'bar11', color: '#F9E4E0' },
                { name: 'foo12', value: 'bar12', color: '#F9E0E0' },
                { name: 'foo13', value: 'bar13', color: '#F4E0F9' },
                { name: 'foo14', value: 'bar14', color: '#E3E0F9' },
                { name: 'foo15', value: 'bar15', color: '#E0EAF9' },
                { name: 'foo16', value: 'bar16', color: '#E0F4F9' },
                { name: 'foo17', value: 'bar17', color: '#E0F9F0' },
                { name: 'foo18', value: 'bar18', color: '#E0F9E2' },
                { name: 'foo19', value: 'bar19', color: '#F1F9E0' },
                { name: 'foo20', value: 'bar20', color: '#F8F9E0' }
            ]
        }
    },
    components: {
        ObjectList
    }

}
</script>

E0F4F9















