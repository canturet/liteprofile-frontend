<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light navbar-float" style="background-color:white;">
      <div class="container">
        <div class="navbar-collapse collapse" id="navbarContent">
          <a href="/" class="navbar-brand"
            >Lite<span class="text-primary">Profile</span></a
          >

          <button
            class="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <ul class="navbar-nav ml-lg-4 pt-3 pt-lg-0">
        
            <li class="nav-item" v-show="isAuthenticated">
              <a :href=profileLink class="nav-link" >Profil</a>
            </li>
            <li class="nav-item" v-show="isAuthenticated">
              <a :href=profileSettingsLink class="nav-link" >Profili Düzenle</a>
            </li>
          </ul>
             
             
          <div class="footerRight">
            <div v-if="!currentUser" class="navbar-nav">
              <li class="nav-item" v-show="!isAuthenticated">
                <a class="nav-link" href="/register">Kayıt Ol</a>
              </li>
              <li  class="nav-item" v-show="!isAuthenticated">
               <a class="nav-link" href="/login">Giriş Yap</a>
              </li>
             <li class="nav-item" v-show="isAuthenticated">
                <a class="nav-link" @click="logout" href="/">
                  <font-awesome-icon icon="sign-out-alt" /> Çıkış Yap
                </a>
              </li>
            </div>
          </div>
          <div class="footerRight">
            <div v-if="currentUser" class="navbar-nav">
              <li class="nav-item" v-show="isAuthenticated">
                <router-link to="/profile" class="nav-link">
                  {{ currentUser.username }}
                </router-link>
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <router-view />
    <footer class="page-footer mt-1" style="background-color:white;">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-3 py-3">
            <h3>Lite<span class="text-primary">Profile</span></h3>
            <p>Bizlere E-mail üzerinden ulaşabilirsiniz.</p>
            <p><a href="#">liteprofile01@gmail.com</a></p>
          </div>
          <div class="col-lg-3 py-3">
            <h5>Linkler</h5>
            <ul class="footer-menu">
              <li v-show="!isAuthenticated"><a href="/register">Kayıt Ol</a></li>
              <li v-show="!isAuthenticated"><a href="/login">Giriş Yap</a></li>
              <li v-show="isAuthenticated"><a :href=profileLink>Profil</a></li>
              <li v-show="isAuthenticated"><a :href=profileSettingsLink>Profili Düzenle</a></li>
              <li v-show="isAuthenticated"><a href="#">Çıkış Yap</a></li>
            </ul>
          </div>

          <div class="col-lg-3 py-3">
            <h5>Sosyal Medya Hesaplarımız</h5>

            <div class="sosmed-button mt-4">
              <a href="#"><span class="mai-logo-facebook-f"></span></a>
              <a href="#" class="ml-2"
                ><span class="mai-logo-twitter"></span
              ></a>
              <a href="#" class="ml-2"><span class="mai-logo-google"></span></a>
              <a href="#" class="ml-2"
                ><span class="mai-logo-linkedin"></span
              ></a>
            </div>
          </div>
        </div>
      </div>
      <!-- .container -->
    </footer>
    <!-- .page-footer -->
  </div>
</template>

<script>
export default {
  data(){
    return {
      isAuthenticated : false,
      username : "",
      profileLink : "",
      profileSettingsLink : "",
    }
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
  created : function() {
    this.username = localStorage.getItem('username');
    this.profileLink = "/UserProfile/"+this.username;
    this.profileSettingsLink =  "/ProfileSettings/"+this.username;
    if(localStorage.getItem('token')){
      this.isAuthenticated=true;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
     
      this.$router.push("/");
    },
  },
};
</script>
<style >
body,
html {
  height: max-content;
  background-image: url("../src/assets/blue-background.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.footerRight {
  position:absolute;
  right: 25%;
}

</style>
