<template>
    <ObjectList v-bind:objects="objects" />
</template>

<script>
import ObjectList from '../components/ObjectList.vue'
export default {
    name: 'app',

    components: {
        ObjectList
    }

}
</script>
<style>
body {
    background-color: #F5F5F5;
}
</style>















