<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.username}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Token:</strong>
      {{currentUser.accessToken.substring(0, 20)}} ... {{currentUser.accessToken.substr(currentUser.accessToken.length - 20)}}
    </p>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <strong>Authorities:</strong>
    <ul>
      <li v-for="(role,index) in currentUser.roles" :key="index">{{role}}</li>
    </ul>

    <div>
          <strong>{{content}}</strong> 
    </div>  
  </div>

</template>

<script>
import UserDetail from '../models/user.details';
import UserService from '../services/user.service';

export default {
  name: 'Profile',

  data: () => ({
    userDetail: new UserDetail(''),
    content: ''
  }),  

  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }

    console.log( "User ID : " + this.currentUser.id);

    UserService.getProfile(this.currentUser.id).then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response && error.response.data) &&
          error.message ||
          error.toString();

        console.log( this.content);
      }
    );
  }
};
</script>