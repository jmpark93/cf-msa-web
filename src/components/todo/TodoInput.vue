<template>
    <div>
        <v-text-field
            v-model="task"
            filled
            append-icon="mdi-plus-circle"
            clear-icon="mdi-close-circle"
            clearable
            label="할 일을 입력하세요 !!!"
            type="text"
            @click:append="createTask"
            @click:clear="clearTask"
            @keypress.enter="createTask" > 
        </v-text-field>
    </div>  
</template>

<script>
export default {
    data: () => ({
      task: ''
    }),

    methods: {

        createTask() {
            if( this.task !== "") {
                var value = this.task && this.task.trim();
                this.$store.dispatch( 'addTodo', value );
                this.clearTask();
            }
        },

        clearTask() {
            this.task = '';
        }   
    }
}
</script>

