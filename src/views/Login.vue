<template>
  <v-app>
    <v-card>
      <v-card-title> 
        <h1 class="display-1"> Login </h1>
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Username"
            prepend-icon="mdi-account-circle" 
          />
          <v-text-field
            type="password"
            label="Password"
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn> Register </v-btn>
        <v-btn> Login </v-btn>
      </v-card-actions>
    </v-card>
  </v-app>
</template>
