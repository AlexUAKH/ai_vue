<template>
  <!-- Navigation -->
  <div
    class="d-flex align-items-center justify-content-between fixed-top navigation"
  >
    <a class="navbar-brand my-0 mr-xs-auto" href="#"
      ><img src="@/assets/images/logo-white.png" alt="AI通訳"
    /></a>
    <button
      class="navbar-toggler collapsed"
      type="button"
      data-toggle="collapse"
      data-target="#navbarCollapse"
      aria-controls="navbarCollapse"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <nav class="navbar navbar-expand-md">
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav d-flex align-items-center">
          <li class="nav-item">
            <a class="nav-link navbar_upgrade" href="#"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                /></svg
              >アップグレード</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">お試しプラン</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="account_dropdown"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              @click.prevent="accountMenu = !accountMenu"
              ><img src="@/assets/images/avatar.jpg" class="name"
            /></a>
            <div
              class="dropdown-menu account_dropdown"
              aria-labelledby="account_dropdown"
            >
              <div class="profile">
                <img src="@/assets/images/avatar.jpg" alt="米倉豪志" />
                <p class="name">
                  米倉豪志<span class="email en">goushi@alt.ai</span>
                </p>
              </div>
              <ul class="list">
                <li>
                  <a class="dropdown-item settings" href="#">
                    <span class="ic"
                      ><img src="@/assets/images/ic_settings.svg" alt="Settings"
                    /></span>
                    <span class="en">Settings</span></a
                  >
                </li>
                <li>
                  <a class="dropdown-item sendInvitation" href="#">
                    <span class="ic"
                      ><img
                        src="@/assets/images/ic_sendInvitation.svg"
                        alt="Send Invitation"
                    /></span>
                    <span class="en">Send Invitation</span></a
                  >
                </li>
                <li>
                  <a class="dropdown-item help" href="#">
                    <span class="ic"
                      ><img src="@/assets/images/ic_help.svg" alt="Help"
                    /></span>
                    <span class="en">Help</span></a
                  >
                </li>
                <li>
                  <a class="dropdown-item logout" href="#">
                    <span class="ic"
                      ><img src="@/assets/images/ic_logout.svg" alt="Logout"
                    /></span>
                    <span class="en">Logout</span></a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <!-- /END Navigation -->
</template>

<script>
export default {
  data: () => ({
    accountMenu: false
  })
};
</script>
