<template>
    <tr v-if="!editable" class="person">
        <td class="person-detail">{{ who.firstname | lower | capitalize }}</td>
        <td class="person-detail">{{ who.lastname | trim | capitalize }}</td>
        <td><button @click="edit">Edit</button></td>
        <td><button @click="remove">Remove</button></td>
    </tr>
    <tr v-else>
        <td><input type="text" v-model="draft.firstname"></td>
        <td><input type="text" v-model="draft.lastname"></td>
        <td><button @click="save">Save</button></td>
    </tr>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit } from "vue-property-decorator";
import { IPerson } from "../interfaces/person.interface";

@Component({
    filters: {
        trim: (value: String): String => value ? value.charAt(0) : '',
        lower: (value: String): String => value.toLowerCase(),
        capitalize: (value: String): String => value.replace(/^\w/, c => c.toUpperCase())
    }
})
export default class Person extends Vue {

    @Prop() who!: IPerson;

    private editable: boolean = false;
    private draft: IPerson = Object.assign({}, this.who);

    constructor() {
        super();
    }

    edit(): void {
        this.editable = true;
    }

    remove(): void {
        this.$emit('remove', this.who._id);
    }

    save(): void {
        this.$emit('update', this.draft);
        this.editable = false;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.person-detail {
    text-align: left;
}
</style>
