<template>
    <div>
        <div>
            <h1>AddTodo</h1>
            <div class="add">
                <form @submit="onSubmit">

                    <input type="text" v-model="title" placeholder="Add Todo"/>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        </div>
    </div>

</template>

<script>

import { mapActions } from 'vuex';

export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        ...mapActions(['addTodo']),
        onSubmit(event) {
            event.preventDefault();
            this.addTodo(this.title);
            this.title = '';
        }
    }
}
</script>