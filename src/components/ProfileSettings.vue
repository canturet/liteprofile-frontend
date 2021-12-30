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
  <div class="containermain mb-4">
    <div class="container">
      <div class="main-body">
        <div class="row row-no-gutters">
          <div class="col-sm-2">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <div class="card-body mr-5">
                  <div class="card">
                    <div class="card-body links">
                      <div
                        class="
                          d-flex
                          flex-column
                          align-items-center
                          text-center
                        "
                      >
                        <h4>Oluşturma Menüsü</h4>
                        <button class="custom-btn btn-9">
                          <a
                            class="buttonlink9"
                            data-toggle="modal"
                            data-target="#name"
                            ><span>Biyografi Bilgileri</span></a
                          >
                        </button>

                        <button class="custom-btn btn-9">
                          <a
                            class="buttonlink9"
                            data-toggle="modal"
                            data-target="#customLinkCreate"
                            ><span>Özelleştirilmiş Bağlantı</span></a
                          >
                        </button>
                        <button class="custom-btn btn-9">
                          <a
                            class="buttonlink9"
                            data-toggle="modal"
                            data-target="#textCreate"
                            ><span>Yazı</span></a
                          >
                        </button>
                        <button class="custom-btn btn-9">
                          <a
                            class="buttonlink9"
                            data-toggle="modal"
                            data-target="#videoCreate"
                            ><span>Video</span></a
                          >
                        </button>
                        <button class="custom-btn btn-9">
                          <a
                            class="buttonlink9"
                            data-toggle="modal"
                            data-target="#socialLinkCreate"
                            ><span>Sosyal Medya Linki</span></a
                          >
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-10">
            <div class="card-body">
              <div class="d-flex flex-column align-items-center text-center">
                <div class="card-body">
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="
                          d-flex
                          flex-column
                          align-items-center
                          text-center
                        "
                      >
                        <div class="table-responsive text-nowrap">
                          <h5 class="mt-2">Özelleştirilmiş Bağlantılar</h5>
                          <table class="table table-hover mt-3 table-sm">
                            <thead class="thead-light">
                              <tr>
                                <th class="thcustomlink" scope="col">Başlık</th>
                                <th class="thcustomlink" scope="col">
                                  Oluşturulma Tarihi
                                </th>
                                <th class="thcustomlink" scope="col">
                                  Güncellenme Tarihi
                                </th>
                                <th class="thcustomlinkaction" scope="col">
                                  İşlemler
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="customLink in customLinks"
                                :key="customLink.id"
                              >
                                <td class="tdcustomlink">
                                  {{ customLink.title }}
                                </td>
                                <td class="tdcustomlink">
                                  {{ customLink.createdDate }}
                                </td>
                                <td class="tdcustomlink">
                                  {{ customLink.updatedDate }}
                                </td>
                                <td class="tdcustomlinkaction">
                                  <div class="actionbutton">
                                    <a
                                      type="button"
                                      data-toggle="modal"
                                      data-target="#customLinkEdit"
                                      class="
                                        btn btn-primary btn-sm
                                        linkbutton-edit
                                      "
                                      @click="
                                        getCustomLinkDatasForUpdate(customLink)
                                      "
                                      ><i class="fas fa-edit"></i
                                    ></a>
                                    <a
                                      type="button"
                                      data-toggle="modal"
                                      data-target="#deleteCustomLink"
                                      class="
                                        btn btn-primary btn-sm
                                        linkbutton-delete
                                      "
                                      @click="
                                        getCustomLinkDataForDelete(customLink)
                                      "
                                      ><i class="fas fa-trash"></i
                                    ></a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <hr />
                          </table>
                        </div>
                        <div class="table-responsive text-nowrap">
                          <h5 class="mt-2">Yazılar</h5>
                          <table class="table table-hover table-sm mt-3">
                            <thead class="thead-light">
                              <tr>
                                <th class="thtext" scope="col">Başlık</th>
                                <th class="thtext" scope="col">
                                  Oluşturulma Tarihi
                                </th>
                                <th class="thtext" scope="col">
                                  Güncellenme Tarihi
                                </th>
                                <th class="thtextaction" scope="col">
                                  İşlemler
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="text in texts" :key="text.id">
                                <td class="tdtext">{{ text.title }}</td>
                                <td class="tdtext">{{ text.createdDate }}</td>
                                <td class="tdtext">{{ text.updatedDate }}</td>
                                <td class="tdtextaction">
                                  <div class="actionbutton">
                                    <a
                                      type="button"
                                      data-toggle="modal"
                                      data-target="#textEdit"
                                      class="
                                        btn btn-primary btn-sm
                                        linkbutton-edit
                                      "
                                      @click="getTextDatasForUpdate(text)"
                                      ><i class="fas fa-edit"></i
                                    ></a>
                                    <a
                                      type="button"
                                      data-toggle="modal"
                                      data-target="#deleteText"
                                      class="
                                        btn btn-primary btn-sm
                                        linkbutton-delete
                                      "
                                      @click="getTextDataForDelete(text)"
                                      ><i class="fas fa-trash"></i
                                    ></a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <hr />
                          </table>
                        </div>
                        <div class="table-responsive text-nowrap">
                          <h5 class="mt-2">Videolar</h5>
                          <table class="table table-hover table-sm mt-3">
                            <thead class="thead-light">
                              <tr>
                                <th class="thvideo" scope="col">Link</th>
                                <th class="thvideo" scope="col">
                                  Oluşturulma Tarihi
                                </th>
                                <th class="thvideo" scope="col">
                                  Güncellenme Tarihi
                                </th>
                                <th class="thvideoaction" scope="col">
                                  İşlemler
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="video in videos" :key="video.id">
                                <td class="tdvideo">{{ video.url }}</td>
                                <td class="tdtext">{{ video.createdDate }}</td>
                                <td class="tdtext">{{ video.updatedDate }}</td>
                                <td class="tdvideoaction">
                                  <div class="actionbutton">
                                    <a
                                      type="button"
                                      data-toggle="modal"
                                      data-target="#videoEdit"
                                      class="
                                        btn btn-primary btn-sm
                                        linkbutton-edit
                                      "
                                      @click="getVideoDatasForUpdate(video)"
                                      ><i class="fas fa-edit"></i
                                    ></a>
                                    <a
                                      type="button"
                                      data-toggle="modal"
                                      data-target="#deleteVideo"
                                      class="
                                        btn btn-primary btn-sm
                                        linkbutton-delete
                                      "
                                      @click="getVideoDataForDelete(video)"
                                      ><i class="fas fa-trash"></i
                                    ></a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <hr />
                          </table>
                        </div>
                        <div class="table-responsive text-nowrap">
                          <h5 class="mt-2">Sosyal Medya Hesapları</h5>
                          <table class="table table-hover table-sm mt-3">
                            <thead class="thead-light">
                              <tr>
                                <th class="thsociallink" scope="col">
                                  Platform
                                </th>
                                <th class="thvideo" scope="col">
                                  Oluşturulma Tarihi
                                </th>
                                <th class="thvideo" scope="col">
                                  Güncellenme Tarihi
                                </th>
                                <th class="thvideoaction" scope="col">
                                  İşlemler
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr
                                v-for="socialLink in socialLinks"
                                :key="socialLink.platformId"
                              >
                                <td
                                  class="tdsociallink"
                                  v-if="socialLink.platformId == 1"
                                >
                                  Facebook
                                </td>
                                <td
                                  class="tdsociallink"
                                  v-if="socialLink.platformId == 2"
                                >
                                  Instagram
                                </td>
                                <td
                                  class="tdsociallink"
                                  v-if="socialLink.platformId == 3"
                                >
                                  Linkedin
                                </td>
                                <td class="tdtext">
                                  {{ socialLink.createdDate }}
                                </td>
                                <td class="tdtext">
                                  {{ socialLink.updatedDate }}
                                </td>
                                <td class="tdsociallinkaction">
                                  <div class="actionbutton">
                                    <a
                                      type="button"
                                      data-toggle="modal"
                                      data-target="#socialLinkEdit"
                                      class="
                                        btn btn-primary btn-sm
                                        linkbutton-edit
                                      "
                                      @click="
                                        getSocialLinkDatasForUpdate(socialLink)
                                      "
                                      ><i class="fas fa-edit"></i
                                    ></a>
                                    <a
                                      type="button"
                                      data-toggle="modal"
                                      data-target="#deleteSocialLink"
                                      class="
                                        btn btn-primary btn-sm
                                        linkbutton-delete
                                      "
                                      @click="
                                        getSocialLinkDataForDelete(socialLink)
                                      "
                                      ><i class="fas fa-trash"></i
                                    ></a>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                            <hr />
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="customLinkEdit"
            tabindex="-1"
            role="dialog"
            aria-labelledby="customLinkEditTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="CustomLinkEditLongTitle">
                    Özelleştirilmiş Bağlantı Bilgilerini Güncelle
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
                        >Başlık</label
                      >
                      <input
                        v-model="customLinkTitleUpdate"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Bağlantı</label
                      >
                      <input
                        v-model="customLinkLinkUpdate"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label"
                        >Açıklama</label
                      >
                      <textarea
                        v-model="customLinkContentUpdate"
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
                    Kapat
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="updateCustomLink"
                    data-dismiss="modal"
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="customLinkCreate"
            tabindex="-1"
            role="dialog"
            aria-labelledby="customLinkCreateTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="CustomLinkCreateLongTitle">
                    Özelleştirilmiş Bağlantı Oluştur
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
                        >Başlık</label
                      >
                      <input
                        v-model="customLinkTitleCreate"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Bağlantı</label
                      >
                      <input
                        v-model="customLinkLinkCreate"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label"
                        >İçerik:</label
                      >
                      <textarea
                        v-model="customLinkContentCreate"
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
                    Kapat
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    data-dismiss="modal"
                    @click="createCustomLink"
                  >
                    Oluştur
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="textEdit"
            tabindex="-1"
            role="dialog"
            aria-labelledby="textEditTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="textEditLongTitle">
                    Yazı Bilgilerini Güncelle
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
                        >Başlık</label
                      >

                      <input
                        v-model="textTitleForUpdate"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label"
                        >Açıklama</label
                      >
                      <textarea
                        v-model="textDescriptionForUpdate"
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
                    Kapat
                  </button>
                  <button
                    data-dismiss="modal"
                    type="button"
                    class="btn btn-primary"
                    @click="updateText"
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="textCreate"
            tabindex="-1"
            role="dialog"
            aria-labelledby="textCreateTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="textCreateLongTitle">
                    Yazı Oluştur
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
                        >Başlık</label
                      >
                      <input
                        v-model="textTitleCreate"
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label"
                        >İçerik</label
                      >
                      <textarea
                        v-model="textContentCreate"
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
                    Kapat
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="createText"
                    data-dismiss="modal"
                  >
                    Oluştur
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="videoEdit"
            tabindex="-1"
            role="dialog"
            aria-labelledby="videoEditTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="videoEditLongTitle">
                    Video Bilgilerini Güncelle
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
                        >Bağlantı</label
                      >
                      <input
                        v-model="videoLinkForUpdate"
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
                    Kapat
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                    @click="updateVideo"
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="videoCreate"
            tabindex="-1"
            role="dialog"
            aria-labelledby="videoCreateTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="videoCreateLongTitle">
                    Video Oluştur
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
                        >Bağlantı</label
                      >
                      <input
                        v-model="videoLinkCreate"
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
                    Kapat
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    @click="createVideo"
                    data-dismiss="modal"
                  >
                    Oluştur
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="socialLinkEdit"
            tabindex="-1"
            role="dialog"
            aria-labelledby="socialLinkEditTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="socialLinkEditLongTitle">
                    Sosyal Medya Hesabı Linklerini Güncelle
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
                      <label for="sel1">Platform</label>
                      <select
                        class="form-control"
                        id="sel1"
                        v-model="socialLinkPlatformForUpdate"
                      >
                        <option>Facebook</option>
                        <option>Instagram</option>
                        <option>Linkedin</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Bağlantı</label
                      >
                      <input
                        v-model="socialLinkLinkForUpdate"
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
                    Kapat
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                    @click="updateSocialLink"
                  >
                    Kaydet
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            class="modal fade"
            id="socialLinkCreate"
            tabindex="-1"
            role="dialog"
            aria-labelledby="socialLinkCreateTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="socialLinkCreateLongTitle">
                    Sosyal Medya Hesabı Linki Oluştur
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
                      <label for="sel1">Platform</label>
                      <select
                        class="form-control"
                        id="sel1"
                        v-model="socialLinkPlatformCreate"
                      >
                        <option>Facebook</option>
                        <option>Instagram</option>
                        <option>Linkedin</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label"
                        >Bağlantı</label
                      >
                      <input
                        v-model="socialLinkLinkCreate"
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
                    Kapat
                  </button>
                  <button
                    type="button"
                    class="btn btn-success"
                    data-dismiss="modal"
                    @click="createSocialLink"
                  >
                    Oluştur
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="deleteCustomLink"
            tabindex="-1"
            role="dialog"
            aria-labelledby="deleteTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="deleteLongTitle">
                    Özelleştirilmiş Bağlantıyı Sil
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
                  Seçilen özelleştirilmiş bağlantıyı silmek istediğinize emin
                  misiniz ?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Kapat
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deleteCustomLink"
                    data-dismiss="modal"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="deleteText"
            tabindex="-1"
            role="dialog"
            aria-labelledby="deleteTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="deleteLongTitle">Yazıyı Sil</h5>
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
                  Seçilen yazıyı silmek istediğinize emin misiniz ?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Kapat
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deleteText"
                    data-dismiss="modal"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="deleteVideo"
            tabindex="-1"
            role="dialog"
            aria-labelledby="deleteTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="deleteLongTitle">Videoyu Sil</h5>
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
                  Seçilen videoyu silmek istediğinize emin misiniz ?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Kapat
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deleteVideo"
                    data-dismiss="modal"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="deleteSocialLink"
            tabindex="-1"
            role="dialog"
            aria-labelledby="deleteTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="deleteLongTitle">
                    Sosyal Medya Hesabı Linkini Sil
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
                  Seçilen sosyal medya hesabı linkini silmek istediğinize emin
                  misiniz ?
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Kapat
                  </button>
                  <button
                    type="button"
                    class="btn btn-danger"
                    @click="deleteSocialLink"
                    data-dismiss="modal"
                  >
                    Sil
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div
            class="modal fade"
            id="name"
            tabindex="-1"
            role="dialog"
            aria-labelledby="nameTitle"
            aria-hidden="true"
          >
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="nameLongTitle">
                    Biyografi Bilgilerini Güncelle
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
                  <div class="form-group">
                    <label for="message-text" class="col-form-label"
                      >Açıklama</label
                    >
                    <textarea
                      v-model="biographyDescription"
                      class="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Kapat
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    data-dismiss="modal"
                    @click="updateBiography"
                  >
                    Kaydet
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
import axios from "axios";
import "@dafcoe/vue-collapsible-panel/dist/vue-collapsible-panel.css";
import UserProfile from "./UserProfile.vue";
export default {
  name: "ProfileSettings",
  components: UserProfile,
  data: function () {
    return {
      biographyDescription: "",
      biograpyIdForUpdate: "",
      customLinks: [],
      texts: [],
      videos: [],
      socialLinks: [],
      username: "",
      customLinkTitleCreate: "",
      customLinkLinkCreate: "",
      customLinkContentCreate: "",
      textTitleCreate: "",
      textContentCreate: "",
      videoLinkCreate: "",
      socialLinkPlatformCreate: "",
      socialLinkLinkCreate: "",
      userId: "",
      platformId: "",
      customLinkTitleUpdate: "",
      customLinkLinkUpdate: "",
      customLinkContentUpdate: "",
      customLinkIdForUpdate: "",
      customLinkIdForDelete: "",

      textTitleForUpdate: "",
      textDescriptionForUpdate: "",
      textIdForUpdate: "",
      textIdForDelete: "",

      videoLinkForUpdate: "",
      videoIdForUpdate: "",
      videoIdForDelete: "",

      socialLinkPlatformForUpdate: "",
      socialLinkLinkForUpdate: "",
      socialLinkIdForUpdate: "",
      socialLinkIdForDelete: "",
    };
  },
  created: function () {
    this.username = this.$route.params.username;
    const vm1 = this;
    axios
      .get("http://localhost:8081/api/user/" + this.$route.params.username)
      .then(function (response) {
        let data = response.data.body;
        vm1.biographyDescription = data.biography.description;
        vm1.biograpyIdForUpdate = data.biography.id;
        data.customLinks.forEach((value) => {
          vm1.customLinks.push(value);
        });
        data.socialLinks.forEach((value) => {
          vm1.socialLinks.push(value);
        });
        data.texts.forEach((value) => {
          vm1.texts.push(value);
        });

        data.videos.forEach((value) => {
          vm1.videos.push(value);
        });
      })
      .catch(function () {});

    const vm2 = this;
    axios
      .get(
        "http://localhost:8081/api/user/getUser/" + this.$route.params.username
      )
      .then(function (response) {
        vm2.userId = response.data.id;
      })
      .catch(function () {});
  },
  methods: {
    createCustomLink: function () {
      const vm3 = this;
      axios
        .post("http://localhost:8081/api/post/createCustomLink", {
          userId: this.userId,
          url: this.customLinkLinkCreate,
          title: this.customLinkTitleCreate,
          description: this.customLinkContentCreate,
        })
        .then(function () {
          vm3.$router.go(0);
        })
        .catch(function () {});
    },
    createSocialLink: function () {
      const vm4 = this;
      axios
        .post("http://localhost:8081/api/post/createSocialLink", {
          userId: this.userId,
          url: this.socialLinkLinkCreate,
          platformName: this.socialLinkPlatformCreate,
        })
        .then(function () {
          vm4.$router.go(0);
        })
        .catch(function () {});
    },
    createText: function () {
      const vm5 = this;
      axios
        .post("http://localhost:8081/api/post/createText", {
          userId: this.userId,
          title: this.textTitleCreate,
          message: this.textContentCreate,
        })
        .then(function () {
          vm5.$router.go(0);
        })
        .catch(function () {});
    },
    createVideo: function () {
      const vm6 = this;
      axios
        .post("http://localhost:8081/api/post/createVideo", {
          userId: this.userId,
          url: this.videoLinkCreate,
        })
        .then(function () {
          vm6.$router.go(0);
        })
        .catch(function () {});
    },

    getCustomLinkDatasForUpdate: function (val) {
      this.customLinkTitleUpdate = val.title;
      this.customLinkLinkUpdate = val.url;
      this.customLinkContentUpdate = val.description;
      this.customLinkIdForUpdate = val.id;
    },
    getCustomLinkDataForDelete: function (val) {
      this.customLinkIdForDelete = val.id;
    },

    getTextDatasForUpdate: function (val) {
      this.textTitleForUpdate = val.title;
      this.textDescriptionForUpdate = val.message;
      this.textIdForUpdate = val.id;
    },
    getTextDataForDelete: function (val) {
      this.textIdForDelete = val.id;
    },

    getVideoDatasForUpdate: function (val) {
      this.videoLinkForUpdate = val.url;

      this.videoIdForUpdate = val.id;
    },
    getVideoDataForDelete: function (val) {
      this.videoIdForDelete = val.id;
    },

    getSocialLinkDatasForUpdate: function (val) {
      this.socialLinkPlatformForUpdate = val.platform;
      this.socialLinkLinkForUpdate = val.url;
      this.socialLinkIdForUpdate = val.id;
    },
    getSocialLinkDataForDelete: function (val) {
      this.socialLinkIdForDelete = val.id;
    },
    updateBiography: function () {
      const vm0 = this;
      axios
        .put(
          "http://localhost:8081/api/post/updateBiography/" +
            this.biograpyIdForUpdate,
          {
            description: this.biographyDescription,
          }
        )
        .then(function () {
          vm0.$router.go(0);
        })
        .catch(function () {});
    },
    updateCustomLink: function () {
      const vm7 = this;
      axios
        .put(
          "http://localhost:8081/api/post/updateCustomLink/" +
            this.customLinkIdForUpdate,
          {
            url: this.customLinkLinkUpdate,
            title: this.customLinkTitleUpdate,
            description: this.customLinkContentUpdate,
          }
        )
        .then(function () {
          vm7.$router.go(0);
        })
        .catch(function () {});
    },
    deleteCustomLink: function () {
      const vm8 = this;
      axios
        .delete(
          "http://localhost:8081/api/post/deleteCustomLink/" +
            this.customLinkIdForDelete,
          {}
        )
        .then(function () {
          vm8.$router.go(0);
        })
        .catch(function () {});
    },

    updateText: function () {
      const vm9 = this;
      axios
        .put(
          "http://localhost:8081/api/post/updateText/" + this.textIdForUpdate,
          {
            title: this.textTitleForUpdate,
            message: this.textDescriptionForUpdate,
          }
        )
        .then(function () {
          vm9.$router.go(0);
        })
        .catch(function () {});
    },
    deleteText: function () {
      const vm10 = this;
      axios
        .delete(
          "http://localhost:8081/api/post/deleteText/" + this.textIdForDelete,
          {}
        )
        .then(function () {
          vm10.$router.go(0);
        })
        .catch(function () {});
    },
    updateVideo: function () {
      const vm10 = this;
      axios
        .put(
          "http://localhost:8081/api/post/updateVideo/" + this.videoIdForUpdate,
          {
            url: this.videoLinkForUpdate,
          }
        )
        .then(function () {
          vm10.$router.go(0);
        })
        .catch(function () {});
    },
    deleteVideo: function () {
      const vm11 = this;
      axios
        .delete(
          "http://localhost:8081/api/post/deleteVideo/" + this.videoIdForDelete,
          {}
        )
        .then(function () {
          vm11.$router.go(0);
        })
        .catch(function () {});
    },
    updateSocialLink: function () {
      const vm12 = this;
      axios
        .put(
          "http://localhost:8081/api/post/updateSocialLink/" +
            this.socialLinkIdForUpdate,
          {
            url: this.socialLinkLinkForUpdate,
            platformName: this.socialLinkPlatformForUpdate,
          }
        )
        .then(function () {
          vm12.$router.go(0);
        })
        .catch(function () {});
    },
    deleteSocialLink: function () {
      const vm13 = this;
      axios
        .delete(
          "http://localhost:8081/api/post/deleteSocialLink/" +
            this.socialLinkIdForDelete,
          {}
        )
        .then(function () {
          vm13.$router.go(0);
        })
        .catch(function () {});
    },
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
  background: #3c66a5;
  color: #ffffff;
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

.btn-9:hover,
.buttonlink9:hover {
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
  color: #3c66a5;
}

.btn-9:hover:after {
  -webkit-transform: scale(2) rotate(180deg);
  transform: scale(2) rotate(180deg);
  background: #ffffff;
  box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.5),
    -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
    inset -4px -4px 6px 0 rgba(255, 255, 255, 0.5),
    inset 4px 4px 6px 0 rgba(116, 125, 136, 0.3);
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
  width: 200px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  color: rgb(0, 0, 0);
}
.thtextaction {
  width: 200px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 25px;
}
.tdtextaction {
  width: 200px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 5px;
}
.tdcustomlink,
.thcustomlink {
  width: 200px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  color: rgb(0, 0, 0);
}
.thcustomlinkaction {
  width: 200px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 25px;
}
.tdcustomlinkaction {
  width: 200px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 5px;
}
.tdsociallink,
.thsociallink {
  width: 200px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  color: rgb(0, 0, 0);
}
.thsociallinkaction {
  width: 200px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 25px;
}
.tdsociallinkaction {
  width: 200px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 5px;
}
.tdvideo,
.thvideo {
  width: 200px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
  color: rgb(0, 0, 0);
}

.thvideoaction {
  width: 200px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 25px;
}
.tdvideoaction {
  width: 200px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
  padding-right: 5px;
}
table {
  background-color: #ffffff;
}
thead {
  background-color: rgb(90, 90, 90);
}
.linkbutton-edit {
  margin-right: 10px;
  background-color: #ffffff;
  border-color: #2ec535;
  color: #2ec535;
}

.linkbutton-edit:hover {
  background-color: #2ec535;
  border-color: #ffffff;
  color: #ffffff;
}

.linkbutton-delete {
  margin-right: 10px;
  background-color: #ffffff;
  border-color: #ca2b2b;
  color: #ca2b2b;
}

.linkbutton-delete:hover {
  background-color: #ce2519;
  border-color: #ffffff;
  color: #ffffff;
}

.name {
  color: white;
}
.description {
  color: rgb(0, 0, 0);
}
.tableheader {
  color: #000000;
  background-color: rgb(255, 255, 255);
}
.links {
  padding: 40px;
  padding-bottom: 50px;
  padding-top: 30px;
}
</style>
<style >
</style>
