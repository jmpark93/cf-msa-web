<template>
    <div>
          <v-text-field
            v-model="todoItem"
            :append-icon="'mdi-map-marker'"
            filled
            clear-icon="mdi-close-circle"
            clearable
            label="할 일을 입력하세요"
            type="text"
            @click:clear="clearMessage"
          ></v-text-field>
    </div>  
</template>

<script>
export default {
    data: () => ({
      todoItem: '',
      rules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }),

    methods: {

        addTodo() {
            if( this.todoItem !== "") {
                var value = this.todoItem && this.todoItem.trim();
                // this.$store.commit( 'ADD_TODO', value );
                this.$store.dispatch( 'addTodo', value );
                this.clearInput();
            } else {
                this.$bvModal.show('warning-modal');
            }
        },
        clearMessage() {
            this.todoItem = '';
        }
    }
}
</script>

