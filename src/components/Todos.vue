<template>
    <div>
        <div>
            <h1>TOdos</h1>
            <div>

                <div v-for="todo in allTodos" v-bind:key="todo.key">
                    {{ todo.title }}
                    <i class="fas fas-trash-alt" v-on:click="deleteTodo(todo.id)"></i>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Todos',
    methods: {
        ...mapActions(['fetchTodos','deleteTodo'])
    },
    computed: mapGetters(['allTodos']),
    created() {
        this.fetchTodos();
    }
}
</script>