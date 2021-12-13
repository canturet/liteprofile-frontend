<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light navbar-float">
      <div class="container">
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

        <div class="navbar-collapse collapse" id="navbarContent">
          <ul class="navbar-nav ml-lg-4 pt-3 pt-lg-0">
            <li class="nav-item active">
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

          <div class="ml-auto">
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
          <div class="ml-auto">
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
            <p>Bizlere mail üzerinden ulaşabilirsiniz.</p>

            <p><a href="#">liteprofile01@gmail.com</a></p>
          </div>
          <div class="col-lg-3 py-3">
            <h5>Linkler</h5>
            <ul class="footer-menu">
              <li><a href="#">Kayıt Ol</a></li>
              <li><a href="#">Giriş Yap</a></li>
              <li><a href="#">Profil</a></li>
              <li><a href="#">Profili Düzenle</a></li>
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

        <div class="row">
          <div class="col-sm-6 py-2">
            <p id="copyright">
              &copy; 2021 LiteProfile. Tüm haklarınız saklıdır.
            </p>
          </div>
          <div class="col-sm-6 py-2 text-right">
            <div class="d-inline-block px-3">
              <a href="#">Privacy</a>
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
</style>
