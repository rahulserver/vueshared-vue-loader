<template>
    <component-a></component-a>
    <component-b></component-b>
</template>


<script>
    import ComponentA from './ComponentA.vue';
    import ComponentB from './ComponentB.vue';
    export default {
        components: {ComponentA,ComponentB},
        data: function () {
            return {
            }
        }
    }
</script>