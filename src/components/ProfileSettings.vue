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
          <div class="col-sm-3">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <div class="card-body mr-5">
                  <div
                    class="d-flex flex-column align-items-center text-center"
                  >
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                      alt="Admin"
                      class="circular--landscape"
                      width="150"
                    />
                    <div class="mt-3">
                      <h4 class="name">John Doe</h4>
                      <b class="description">Full Stack Developer</b>
                      <div class="wrapper">
                        <div class="icon facebook">
                          <div class="tooltip">Facebook</div>
                          <a href="https:\\www.google.com"
                            ><span
                              ><i class="fa fa-facebook sociallinks"></i></span
                          ></a>
                        </div>
                        <div class="icon twitter">
                          <div class="tooltip">Twitter</div>
                          <a href="https:\\www.google.com"
                            ><span
                              ><i class="fa fa-twitter sociallinks"></i></span
                          ></a>
                        </div>
                        <div class="icon instagram">
                          <div class="tooltip">Instagram</div>
                          <a href="https:\\www.google.com"
                            ><span
                              ><i class="fa fa-instagram sociallinks"></i></span
                          ></a>
                        </div>
                        <div class="icon github">
                          <div class="tooltip">Github</div>
                          <a href="https:\\www.google.com"
                            ><span
                              ><i class="fa fa-github sociallinks"></i></span
                          ></a>
                        </div>
                        <div class="icon youtube">
                          <div class="tooltip">Youtube</div>
                          <a class="sociallinks" href="https:\\www.google.com"
                            ><span><i class="fa fa-youtube"></i></span
                          ></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="custom-btn btn-9">
                    <a
                      class="buttonlink9"
                      data-toggle="modal"
                      data-target="#customLink"
                      ><span>Create Custom Link</span></a
                    >
                  </button>
                  <button class="custom-btn btn-9">
                    <a
                      class="buttonlink9"
                      data-toggle="modal"
                      data-target="#text"
                      ><span>Create Text</span></a
                    >
                  </button>
                  <button class="custom-btn btn-9">
                    <a
                      class="buttonlink9"
                      data-toggle="modal"
                      data-target="#standartLink"
                      ><span>Create Standart Link</span></a
                    >
                  </button>
                  <button class="custom-btn btn-9">
                    <a
                      class="buttonlink9"
                      data-toggle="modal"
                      data-target="#video"
                      ><span>Create Video</span></a
                    >
                  </button>
                  <button class="custom-btn btn-9">
                    <a
                      class="buttonlink9"
                      data-toggle="modal"
                      data-target="#socialLink"
                      ><span>Manage Social Links</span></a
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-9">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <table class="table table-hover table-striped table-sm table-borderless">
                  <thead class="thead-dark">
                    <tr>
                      <th class="thcustomlink" scope="col">Custom Links</th>
                      <th class="thcustomlink" scope="col">Title</th>
                      <th class="thcustomlink" scope="col">Content</th>
                      <th class="thcustomlink" scope="col">Link</th>
                      <th class="thcustomlinkaction" scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="thcustomlink" scope="row">1</th>
                      <td class="tdcustomlink">Mark</td>
                      <td class="tdcustomlink">Otto</td>
                      <td class="tdcustomlink">@mdo</td>
                      <td class="tdcustomlinkaction">
                        <div class="actionbutton">
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#customLink"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#delete"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-trash"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th class="thcustomlink" scope="row">2</th>
                      <td class="tdcustomlink">Jacob</td>
                      <td class="tdcustomlink">Thornton</td>
                      <td class="tdcustomlink">@fat</td>
                      <td class="tdcustomlinkaction">
                        <div class="actionbutton">
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#customLink"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#delete"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-trash"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th class="thcustomlink" scope="row">3</th>
                      <td class="tdcustomlink">Larry</td>
                      <td class="tdcustomlink">the Bird</td>
                      <td class="tdcustomlink">@mdo</td>
                      <td class="tdcustomlinkaction">
                        <div class="actionbutton">
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#customLink"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#delete"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-trash"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-hover table-striped table-sm table-borderless">
                  <thead class="thead-dark">
                    <tr>
                      <th class="thtext" scope="col">Text</th>
                      <th class="thtext" scope="col">Title</th>
                      <th class="thtext" scope="col">Content</th>
                      <th class="thtextaction" scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="thtext" scope="row">1</th>
                      <td class="tdtext">asjhdlakjhsdkljah</td>
                      <td class="tdtext">
                        OtqwedsdasdasdasdasdasdtoOtqwedsdasdasdasdasdasdtoOtqwedsdasdasdasdasdasdto
                      </td>
                      <td class="tdtextaction">
                        <div class="actionbutton">
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#text"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#delete"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-trash"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th class="thtext" scope="row">2</th>
                      <td class="tdtext">Jacob</td>
                      <td class="tdtext">Thornton</td>
                      <td class="tdtextaction">
                        <div class="actionbutton">
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#text"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#delete"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-trash"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th class="thtext" scope="row">3</th>
                      <td class="tdtext">Larry</td>
                      <td class="tdtext">the Bird</td>
                      <td class="tdtextaction">
                        <div class="actionbutton">
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#text"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#delete"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-trash"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <table class="table table-hover table-striped table-sm table-borderless">
                  <thead class="thead-dark">
                    <tr>
                      <th class="thstandartlink" scope="col">Standart Links</th>
                      <th class="thstandartlink" scope="col">Title</th>
                      <th class="thstandartlink" scope="col">Link</th>
                      <th class="thstandartlinkaction" scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="thstandartlink" scope="row">1</th>
                      <td class="tdstandartlink">Mark</td>
                      <td class="tdstandartlink">Otto</td>
                      <td class="tdstandartlinkaction">
                        <div class="actionbutton">
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#standartLink"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#delete"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-trash"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th class="thstandartlink" scope="row">2</th>
                      <td class="tdstandartlink">Jacob</td>
                      <td class="tdstandartlink">Thornton</td>
                      <td class="tdstandartlinkaction">
                        <div class="actionbutton">
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#standartLink"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#delete"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-trash"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th class="thstandartlink" scope="row">3</th>
                      <td class="tdstandartlink">Larry</td>
                      <td class="tdstandartlink">the Bird</td>
                      <td class="tdstandartlinkaction">
                        <div class="actionbutton">
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#standartLink"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#delete"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-trash"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <table class="table table-hover table-striped table-sm table-borderless">
                  <thead class="thead-dark">
                    <tr>
                      <th class="thvideo" scope="col">Videos</th>
                      <th class="thvideo" scope="col">Link</th>
                      <th class="thvideoaction" scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th class="thvideo" scope="row">1</th>
                      <td class="tdvideo">Mark</td>
                      <td class="tdvideoaction">
                        <div class="actionbutton">
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#video"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#delete"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-trash"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th class="thvideo" scope="row">2</th>
                      <td class="tdvideo">Jacob</td>
                      <td class="tdvideoaction">
                        <div class="actionbutton">
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#video"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#delete"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-trash"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th class="thvideo" scope="row">3</th>
                      <td class="tdvideo">Larry</td>
                      <td class="tdvideoaction">
                        <div class="actionbutton">
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#video"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-edit"></i
                          ></a>
                          <a
                            type="button"
                            data-toggle="modal"
                            data-target="#delete"
                            class="btn btn-primary btn-sm linkbutton"
                            ><i class="fas fa-trash"></i
                          ></a>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="customLink"
            tabindex="-1"
            role="dialog"
            aria-labelledby="customLinkTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="CustomLinkLongTitle">
                    Custom Link
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Title:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Link:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label"
                        >Content:</label
                      >
                      <textarea
                        class="form-control"
                        id="message-text"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="text"
            tabindex="-1"
            role="dialog"
            aria-labelledby="textTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="textLongTitle">Text</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Title:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label"
                        >Content:</label
                      >
                      <textarea
                        class="form-control"
                        id="message-text"
                      ></textarea>
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="standartLink"
            tabindex="-1"
            role="dialog"
            aria-labelledby="standartLinkTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="standartLinkLongTitle">
                    Standart Link
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Title:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Link:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="video"
            tabindex="-1"
            role="dialog"
            aria-labelledby="videoTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="videoLongTitle">Video</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Link:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="socialLink"
            tabindex="-1"
            role="dialog"
            aria-labelledby="socialLinkTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="socialLinkLongTitle">
                    Social Links
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="sel1">Select list:</label>
                      <select class="form-control" id="sel1">
                        <option>Facebook</option>
                        <option>Instagram</option>
                        <option>Youtube</option>
                        <option>Github</option>
                        <option>Twitter</option>
                        <option>Linkedin</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Link:</label
                      >
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="delete"
            tabindex="-1"
            role="dialog"
            aria-labelledby="deleteTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="deleteLongTitle">
                    Delete
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  Are you sure to delete this?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" class="btn btn-danger">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import "@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css";
import UserProfile from "./UserProfile.vue";
export default {
  name: "ProfileSettings",
  components: UserProfile,
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

.btn-6,
.buttonlink6 {
  background: #c02e2e;
  color: rgb(255, 255, 255);
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

.btn-6 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-6:before,
.btn-6:after {
  position: absolute;
  content: "";
  height: 0%;
  width: 2px;
  background: #000;
}

.btn-6:before {
  right: 0;
  top: 0;
  transition: all 500ms ease;
}

.btn-6:after {
  left: 0;
  bottom: 0;
  transition: all 500ms ease;
}

.btn-6:hover {
  color: #000;
  background: #cead19;
}

.btn-6:hover:before {
  transition: all 500ms ease;
  height: 100%;
}

.btn-6:hover:after {
  transition: all 500ms ease;
  height: 100%;
}

.btn-6 span:before,
.btn-6 span:after {
  position: absolute;
  content: "";
  background: #000;
}

.btn-6 span:before {
  left: 0;
  top: 0;
  width: 0%;
  height: 2px;
  transition: all 500ms ease;
}

.btn-6 span:after {
  right: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  transition: all 500ms ease;
}

.btn-6 span:hover:before {
  width: 100%;
}

.btn-6 span:hover:after {
  width: 100%;
}

.btn-9,
.buttonlink9 {
  z-index: 2;
  transition: all 0.3s ease;
  overflow: hidden;
  background: rgb(36, 196, 14);
  color: rgb(255, 255, 255);
  line-height: 45px;
  height: 45px;
  width: 200px;
  padding: 0;
  border: none;
  box-shadow: 0 2px 6px 0 rgb(100 100 100 / 65%),
    0 2px 6px 0 rgb(100 100 100 / 54%);
  outline: none;
  text-decoration: none;
  text-align: center;
  margin-top: 25px;
}

.btn-9:after {
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

.btn-9:hover {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
  color: #fff;
}

.btn-9:hover:after {
  -webkit-transform: scale(2) rotate(180deg);
  transform: scale(2) rotate(180deg);
  background: rgb(101, 41, 170);
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
}

.btn-13,
.buttonlink13 {
  background: rgb(80, 78, 78);
  color: rgb(0, 183, 255);
  z-index: 1;
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

.btn-13:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #ece6e0;
  transition: all 0.3s ease;
}

.btn-13 span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-13:hover {
  color: #000;
}

.btn-13:hover:after {
  top: 0;
  height: 100%;
}

.btn-13:active {
  top: 2px;
}

.sociallinks {
  outline: none;
  text-decoration: none;
  border: none;
  color: rgb(0, 0, 0);
}
.btn-13-edit {
  background: rgb(10, 93, 202);
  color: rgb(255, 255, 255);
  z-index: 1;
  height: 50px;
  width: 100px;
  border: none;
  box-shadow: 0 2px 6px 0 rgb(100 100 100 / 65%),
    0 2px 6px 0 rgb(100 100 100 / 54%);
  outline: none;
}

.btn-13-edit:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #e0e5ec;
  transition: all 0.3s ease;
}

.btn-13-edit span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-13-edit:hover {
  color: #000;
}

.btn-13-edit:hover:after {
  top: 0;
  height: 100%;
}

.btn-13-edit:active {
  top: 2px;
}

.btn-6-create {
  background: rgb(23, 219, 33);
  color: rgb(255, 255, 255);
  z-index: 1;
  line-height: 100px;
  height: 100px;
  width: 200px;
  padding: 0;
  border: none;
  box-shadow: 0 2px 6px 0 rgb(100 100 100 / 65%),
    0 2px 6px 0 rgb(100 100 100 / 54%);
  outline: none;
  text-decoration: none;
  margin-top: 50px;
  margin-left: -110px;
}

.btn-6-create span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-6-create:before,
.btn-6-create:after {
  position: absolute;
  content: "";
  height: 0%;
  width: 2px;
  background: #000;
}

.btn-6-create:before {
  right: 0;
  top: 0;
  transition: all 500ms ease;
}

.btn-6-create:after {
  left: 0;
  bottom: 0;
  transition: all 500ms ease;
}

.btn-6-create:hover {
  color: #000;
  background: #ffffff;
}

.btn-6-create:hover:before {
  transition: all 500ms ease;
  height: 100%;
}

.btn-6-create:hover:after {
  transition: all 500ms ease;
  height: 100%;
}

.btn-6-create span:before,
.btn-6-create span:after {
  position: absolute;
  content: "";
  background: #000;
}

.btn-6-create span:before {
  left: 0;
  top: 0;
  width: 0%;
  height: 2px;
  transition: all 500ms ease;
}

.btn-6-create span:after {
  right: 0;
  bottom: 0;
  width: 0%;
  height: 2px;
  transition: all 500ms ease;
}

.btn-6-create span:hover:before {
  width: 100%;
}

.btn-6-create span:hover:after {
  width: 100%;
}

.btn-13-create {
  background: rgb(23, 115, 219);
  color: rgb(255, 255, 255);
  z-index: 1;
  line-height: 100px;
  height: 100px;
  width: 200px;
  padding: 0;
  border: none;
  box-shadow: 0 2px 6px 0 rgb(100 100 100 / 65%),
    0 2px 6px 0 rgb(100 100 100 / 54%);
  outline: none;
  text-decoration: none;
  margin-top: 50px;
  margin-left: 80px;
}

.btn-13-create:after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: #e0e5ec;
  transition: all 0.3s ease;
}

.btn-13-create span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}

.btn-13-create:hover {
  color: #000;
}

.btn-13-create:hover:after {
  top: 0;
  height: 100%;
}
#photo {
  background: #17dbcb;
  color: rgb(255, 255, 255);
}
#description {
  background: #17dbcb;
  color: rgb(255, 255, 255);
}
.tdtext,
.thtext {
  width: 196px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.thtextaction{
  width: 196px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 25px;
}
.tdtextaction{
   width: 196px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 5px;
}
.tdcustomlink,
.thcustomlink {
  width: 157px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.thcustomlinkaction{
  width: 157px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 25px;
}
.tdcustomlinkaction{
  width: 157px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 5px;
}
.tdstandartlink,
.thstandartlink {
  width: 196px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.thstandartlinkaction{
  width: 196px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 25px;
}
.tdstandartlinkaction{
  width: 196px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 5px;
}
.tdvideo,
.thvideo {
  width: 261px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
.thvideoaction{
  width: 261px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 25px;
}
.tdvideoaction{
  width: 261px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 5px;
}
.linkbutton {
  margin-right: 10px;
  background-color: rgb(0, 0, 0);
  border-color: #c02e2e;
  color: #e1306c;
}

.linkbutton:hover {
  background-color: #cead19;
  border-color: #c02e2e;
}

.linkbutton:hover:active {
  background: blueviolet;
  border-color: blueviolet;
  color: #000;
}
.name {
  color: white;
}
.description {
  color: rgb(0, 0, 0);
}
</style>
<style >
</style>
