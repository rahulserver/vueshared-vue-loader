<template>
    <input type="text" v-model="localvarB" placeholder="localvarB">
    <label>{{localvarB}}</label>
    <div>
        thisdiv2
        <input type="text" v-model="sharedvar" placeholder="sharedvar">
    </div>

</template>


<script>
    import remoteservice from '../services/applications'
    export default {
        data: function () {
            return {
                localvarB: 'localvalB',
                sharedvar: remoteservice.sharedvar
            }
        }
    }
</script>