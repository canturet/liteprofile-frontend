<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light navbar-float">
      <div class="container">
        <div class="navbar-collapse collapse" id="navbarContent">
          <a href="/HomePage" class="navbar-brand"
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
            <li class="nav-item">
              <router-link to="/HomePage" class="nav-link">
                Ana Sayfa
              </router-link>
            </li>
            <li class="nav-item">
              <a href="/UserProfile" class="nav-link">Profil</a>
            </li>
            <li class="nav-item">
              <a href="/ProfileSettings" class="nav-link">Profili Düzenle</a>
            </li>
          </ul>
          <div class="footerRight">
            <div v-if="!currentUser" class="navbar-nav">
              <li class="nav-item">
                <router-link to="/register" class="nav-link">
                  Kayıt Ol
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link">
                  Giriş Yap
                </router-link>
              </li>
            </div>
          </div>
          <div class="footerRight">
            <div v-if="currentUser" class="navbar-nav">
              <li class="nav-item">
                <router-link to="/profile" class="nav-link">
                  {{ currentUser.username }}
                </router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click.prevent="logOut">
                  <font-awesome-icon icon="sign-out-alt" /> Çıkış Yap
                </a>
              </li>
            </div>
          </div>
        </div>
      </div>
    </nav>

    <router-view />
    <footer class="page-footer">
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
              <li><a href="/register">Kayıt Ol</a></li>
              <li><a href="/login">Giriş Yap</a></li>
              <li><a href="/UserProfile">Profil</a></li>
              <li><a href="/ProfileSettings">Profili Düzenle</a></li>
              <li><a href="#">Çıkış Yap</a></li>
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
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_ADMIN");
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser["roles"]) {
        return this.currentUser["roles"].includes("ROLE_MODERATOR");
      }

      return false;
    },
  },
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    },
  },
};
</script>
<style >
body,
html {
  height: max-content;
  background-image: url("../src/assets/background_2.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.footerRight {
  position:absolute;
  right: 25%;
}

</style>
