<template>
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
    integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
    crossorigin="anonymous"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500&display=swap"
    rel="stylesheet"
  />
  <div class="containermain">
    <div class="container">
      <div class="main-body">
        <div class="row row-no-gutters">
          <div class="col-sm-2"></div>
          <div class="col-sm-8">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <div class="mt-5 mb-3">
                  <h4 class="name">{{ username }}</h4>
                  <b class="description">{{ biographyDescription }}</b>
                </div>
                <div class="wrapper">
                  <div v-for="socialLink in socialLinks" :key="socialLink.id">
                    <div
                      class="icon facebook"
                      v-if="socialLink.platformId == 1"
                    >
                      <div class="tooltip">Facebook</div>
                      <a :href="socialLink.url"
                        ><span><i class="fa fa-facebook sociallinks"></i></span
                      ></a>
                    </div>
                    <div
                      class="icon instagram"
                      v-if="socialLink.platformId == 2"
                    >
                      <div class="tooltip">Instagram</div>
                      <a :href="socialLink.url"
                        ><span><i class="fa fa-instagram sociallinks"></i></span
                      ></a>
                    </div>
                    <div class="icon github" v-if="socialLink.platformId == 3">
                      <div class="tooltip">Github</div>
                      <a :href="socialLink.url"
                        ><span><i class="fa fa-github sociallinks"></i></span
                      ></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <vue-collapsible-panel-group
              class="collapsecontainer card"
              base-color="#ffffff"
              v-for="text in texts"
              :key="text.id"
            >
              <vue-collapsible-panel :expanded="false">
                <template #title> {{ text.title }} </template>
                <template #content>
                  <div class="accordioncontent">
                    <div class="accordiontext">{{ text.message }}</div>

                    <hr />
                    <div class="accordionbottom">
                      <div class="username">{{ username }}</div>
                      <div class="date">{{ text.createdDate }}</div>
                    </div>
                    <br /></div
                ></template>
              </vue-collapsible-panel>
            </vue-collapsible-panel-group>
            <div v-for="customLink in customLinks" :key="customLink.id">
              <vue-collapsible-panel-group
                v-if="customLink.description"
                class="collapsecontainer card"
                base-color="#ffffff"
              >
                <vue-collapsible-panel :expanded="false">
                  <template #title
                    ><a
                      type="button"
                      class="btn btn-primary btn-sm linkbutton"
                      :href="customLink.url"
                      ><i class="fas fa-link"></i
                    ></a>
                    {{ customLink.title }}
                  </template>
                  <template #content>
                    <div class="accordioncontent">
                      <div class="accordiontext">
                        {{ customLink.description }}
                      </div>

                      <hr />
                      <div class="accordionbottom">
                        <div class="username">{{ username }}</div>
                        <div class="date">{{ customLink.createdDate }}</div>
                      </div>
                      <br />
                    </div>
                  </template>
                </vue-collapsible-panel>
              </vue-collapsible-panel-group>

              <button class="custom-btn btn-9" v-if="!customLink.description">
                <a class="buttonlink9" :href="customLink.url"
                  ><span>{{ customLink.title }}</span></a
                >
              </button>
            </div>
            <div
              class="embed-responsive embed-responsive-16by9 video mb-5"
              v-for="video in videos"
              :key="video.url"
            >
              <iframe class="embed-responsive-item" :src="video.url"></iframe>
            </div>
          </div>
          <div class="col-sm-2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css";
import axios from "axios";
export default {
  name: "UserProfile",
  data: function () {
    return {
      biographyDescription: "",
      customLinks: [],
      texts: [],
      videos: [],
      socialLinks: [],
      username: "",
      x: "",
    };
  },
  created: function () {
    this.username = this.$route.params.username;
    const vm = this;
    console.log(vm);
    axios
      .get("http://localhost:8081/api/user/" + this.$route.params.username)
      .then(function (response) {
        let data = response.data.body;
        vm.biographyDescription = data.biography.description;

        data.customLinks.forEach((value) => {
          vm.customLinks.push(value);
        });
        data.socialLinks.forEach((value) => {
          vm.socialLinks.push(value);
        });
        data.texts.forEach((value) => {
          vm.texts.push(value);
        });

        data.videos.forEach((value) => {
          vm.videos.push(value);
        });
      })
      .catch(function () {});
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent;
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 6px 0 rgb(100 100 100 / 65%),
    0 2px 6px 0 rgb(100 100 100 / 54%);
}
.me-2 {
  margin-right: 0.5rem !important;
}

.collapsecontainer {
  margin-bottom: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid transparent;

  margin-bottom: 1.5rem;
  box-shadow: 0 2px 6px 0 rgb(100 100 100 / 65%),
    0 2px 6px 0 rgb(100 100 100 / 54%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:focus,
*:active {
  outline: none !important;
  -webkit-tap-highlight-color: transparent;
}

body,
html {
  display: grid;
  height: 100%;
  width: 100%;
  font-family: "Poppins", sans-serif;
  place-items: center;
  background: linear-gradient(315deg, #ffffff, #d7e1ec);
}

.wrapper {
  display: inline-flex;
}

.wrapper .icon {
  position: relative;
  background-color: #ffffff;
  border-radius: 50%;
  padding: 15px;
  margin: 10px;
  width: 50px;
  height: 50px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip {
  position: absolute;
  top: 0;
  font-size: 14px;
  background-color: #ffffff;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .tooltip::before {
  position: absolute;
  content: "";
  height: 8px;
  width: 8px;
  background-color: #ffffff;
  bottom: -3px;
  left: 50%;
  transform: translate(-50%) rotate(45deg);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.wrapper .icon:hover .tooltip {
  top: -45px;
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}

.wrapper .icon:hover span,
.wrapper .icon:hover .tooltip {
  text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
}

.wrapper .facebook:hover,
.wrapper .facebook:hover .tooltip,
.wrapper .facebook:hover .tooltip::before {
  background-color: #3b5999;
  color: #ffffff;
}

.wrapper .twitter:hover,
.wrapper .twitter:hover .tooltip,
.wrapper .twitter:hover .tooltip::before {
  background-color: #46c1f6;
  color: #ffffff;
}

.wrapper .instagram:hover,
.wrapper .instagram:hover .tooltip,
.wrapper .instagram:hover .tooltip::before {
  background-color: #e1306c;
  color: #ffffff;
}

.wrapper .github:hover,
.wrapper .github:hover .tooltip,
.wrapper .github:hover .tooltip::before {
  background-color: #333333;
  color: #ffffff;
}

.wrapper .youtube:hover,
.wrapper .youtube:hover .tooltip,
.wrapper .youtube:hover .tooltip::before {
  background-color: #de463b;
  color: #ffffff;
}
.circular--landscape {
  display: inline-block;
  position: relative;
  width: 175px;
  height: 175px;
  overflow: hidden;
  border-radius: 50%;
}

.circular--landscape img {
  width: auto;
  height: 100%;
  margin-left: -50px;
}

.custom-btn {
  width: 130px;
  height: 40px;
  padding: 10px 25px;
  border: 2px solid #000;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

.btn-9,
.buttonlink9 {
  z-index: 2;
  transition: all 0.3s ease;
  overflow: hidden;
  background: #ffffff;
  color: #000000;
  line-height: 50px;
  height: 50px;
  width: 730px;
  padding: 0;
  border: none;
  box-shadow: 0 2px 6px 0 rgb(100 100 100 / 65%),
    0 2px 6px 0 rgb(100 100 100 / 54%);
  outline: none;
  text-decoration: none;
  margin-bottom: 25px;
}

.btn-9:after,
.buttonlink9:after {
  position: absolute;
  content: " ";
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
}

.btn-9 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-9:hover,
.buttonlink9:hover {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);

  color: #ffffff;
}

.btn-9:hover:after,
.buttonlink9:hover:after {
  -webkit-transform: scale(2) rotate(180deg);
  transform: scale(2) rotate(180deg);
  background: #3c66a5;
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
}

.sociallinks {
  outline: none;
  text-decoration: none;
  border: none;
  color: #3c66a5;
}

.linkbutton {
  margin-right: 10px;
  background-color: #ffffff;
  border-color: #3c66a5;
  color: #3c66a5;
}

.linkbutton:hover {
  background-color: #3c66a5;
  border-color: #3c66a5;
  color: #ffffff;
}

.linkbutton:hover:active {
  background: blueviolet;
  border-color: blueviolet;
  color: #000;
}
.date {
  position: absolute;
  bottom: -0px;
  right: 0px;
  font-size: 16px;
}
.accordioncontent {
  position: relative;
}
.accordiontext {
  margin-bottom: 5px;
}
.username {
  position: absolute;
  bottom: -0px;
  left: 0px;
  font-size: 16px;
}
.accordionbottom {
  margin-top: 5px;
}
.video {
  margin-bottom: 25px;
  box-shadow: 0 2px 6px 0 rgb(100 100 100 / 65%),
    0 2px 6px 0 rgb(100 100 100 / 54%);
}
.name {
  color: #000000;
}
.description {
  color: rgb(255, 255, 255);
}
.containermain {
  margin-bottom: 100px;
  margin-top: 35px;
}
</style>