<template>
    <tr class="person">
        <td class="person-detail">{{ who.firstname | lower | capitalize }}</td>
        <td class="person-detail">{{ who.lastname | trim | capitalize }}</td>
        <td><button>Edit</button></td>
        <td><button>Remove</button></td>
    </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IPerson } from "../interfaces/person.interface";

@Component({
    filters: {
        trim: (value: String): String => value ? value.charAt(0) : '',
        lower: (value: String): String => value.toLowerCase(),
        capitalize: (value: String): String => value.replace(/^\w/, c => c.toUpperCase())
    }
})
export default class Person extends Vue {

    @Prop({
        default: {
            _id: '',
            firstname: '',
            lastname: ''
        }
    }) who: IPerson;

    constructor() {
        super();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.person-detail {
    text-align: left;
}
</style>
