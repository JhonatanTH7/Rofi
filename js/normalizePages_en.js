/* Selector Skeleton */
let header;

/* Skeleton */
while (!header) {
  header = document.querySelector("header");

  if (header) {
    const menu_left = document.createElement("div");
    menu_left.classList = "menu-left";
    document.body.appendChild(menu_left);

    header.innerHTML = `
    <!-- Left side icons -->
      <div class="navBar_icons_leftSide">
        <!-- Left side menu  -->
        <div>
          <button
          class="navBar_infoButton_leftSide"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
          >
          <div class="flip-container">
            <div class="card-flip-animation">
              <div class="front-flip">
                <img src="../../media/icons/info.svg" alt="Menu" />
              </div>
              <div class="back-flip">
                <img class="back-flip-imagen" src="../../media/icons/info-ligthMode.svg" alt="Menu" />
              </div>
            </div>
          </div> 
          </button>
          
          </div>
          <!-- Logo -->
          <a href="../../index_${document.querySelector("html").lang}.html">
          <img class="icon-logo-index" src="../../media/icons/logo_final_ligthmode.svg" alt="logo" />
          </a>
          <!-- Page name -->
          <!-- <h6 class="m-0">Ruta 57</h6> -->
          </div>
          
          <!-- Input search bar -->
          <!-- <div class="navBar_searchBar">
          <input
          type="search"
          id="search_bar"
          class="border-0"
          placeholder="Search"
          />
          <label for="search_bar"><img src="../../media/icons/search.svg" /></label>
          </div> -->
          
          <!-- Right side icons -->
          <div class="navBar_icons_rigthSide">
          <!-- DropDown SOS-->
          <li class="nav-item dropdown navBar_helpDropdown">
          <button
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            <img src="../../media/icons/sos.svg" alt="SOS" />
            <img
            src="../media/icons/arrow down.png"
            class="arrow_down_dropdownMenu"
            />
            </button>
            <ul class="dropdown-menu">
            <li>
            <a class="dropdown-item" href="../${
              document.querySelector("html").lang
            }/aboutUs.html">
            <img src="../../media/icons/about us.svg" alt="icon" />
            <p
            class="d-flex justify-content-center align-content-center m-0"
            >
            About Us
            </p>
            </a>
            </li>
            <li>
            <a class="dropdown-item" href="../${
              document.querySelector("html").lang
            }/contactUs.html">
            <img src="../../media/icons/phone.svg" alt="icon" />
            <p
            class="d-flex justify-content-center align-content-center m-0"
            >
            Contact Us
            </p>
            </a>
            </li>
            </ul>
            </li>

            <!-- Notifications -->
            <li class="nav-item dropdown navBar_helpDropdown">
          <button
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            <div class="bellIcon">
            <img src="../../media/icons/notification.svg" alt="Bell" />
            <span class="contadorNoti"></span>
            </div>
            <img
            src="../../media/icons/arrow down.png"
            class="arrow_down_dropdownMenu"
            />
            </button>
            <ul class="dropdown-menu">
            <li>
            <section class="notification container_noti_noSee">
                <p class="notification_Title"> There are no pending notifications </p>
            </section>
            </li>
              </ul>
            </li>
            
            
            <!-- DropDown language-->
            <li class="nav-item dropdown navBar_languageDropdown">
            <button
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            >
            <img src="../../media/icons/language.svg" alt="Language" />
            <img
            src="../../media/icons/arrow down.png"
            class="arrow_down_dropdownMenu"
            />
            </button>
            <ul class="dropdown-menu">
            <li>
            <a class="dropdown-item" href="../es/${document.querySelector("html").id}"
            ><img
            src="../../media/icons/Spain-Flag.png"
            class="navBar_languageDropdown_flag"
            />
            <p
            class="d-flex justify-content-center align-content-center m-0"
            >
            Spanish
            </p></a
            >
            </li>
            <li>
            <a class="dropdown-item" href="../en/${document.querySelector("html").id}"
            ><img
            src="../../media/icons/USA-Flag.png"
            class="navBar_languageDropdown_flag"
            />
            <p
            class="d-flex justify-content-center align-content-center m-0"
            >
            English
            </p></a
            >
            </li>
            </ul>
        </li>

        <!-- DropDown user-->
        <li class="nav-item dropdown">
          <button
            class="nav-link dropdown-toggle"
            href="#"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src="../../media/icons/user nav.svg" alt="User" />
            <img
            src="../../media/icons/arrow down.png"
            class="arrow_down_dropdownMenu"
            />
            </button>
          <ul class="dropdown-menu userlogin">
            <li>
            <button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="../../media/icons/sign in.svg" alt="Icon" />
            <p
            class="d-flex justify-content-center align-content-center m-0"
            >
            Sign In
            </p>
            </button>
            </li>
            <li>
            
            <p
            class="d-flex justify-content-center align-content-center m-0 d-none">
            Name
            </p>
            </li>
            <li>
            <a class="dropdown-item" href="../${
              document.querySelector("html").lang
            }/signUp.html">
            <img src="../../media/icons/sign up.svg" alt="Icon" />
            <p
            class="d-flex justify-content-center align-content-center m-0"
            >
            Sign Up
            </p>
            </a>
            </li>
            
            </ul>
            </li>
            </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                
                <div class="modal-content signIn">
                  <div class="signIn_Title">
                    <h1>Welcome back!</h1>
                  </div>
                <section class="signIn_Form">
                  <form class="form" id="form">
                    <div class="signIn_Subtitle">
                      <label>Username</label>
                    </div>
                    <div class="signIn_Form_Option">
                      <label for="Username">
                        <img
                          src="../../media/icons/user input.svg"
                          alt="user_input"
                          class="signIn_Form_User_Icon"
                        />
                      </label>
                      <input
                        id="Username"
                        class="signIn_Form_Username"
                        type="text"
                        placeholder="Usuername"
                        required
                      />
                    </div>
                    <div class="signIn_Subtitle">
                      <label>Contraseña</label>
                    </div>
                    <div class="signIn_Form_Option">
                      <label for="password">
                        <img
                          id="Key_Icon"
                          src="../../media/icons/key input.svg"
                          alt="key_input"
                          class="signIn_Form_Key_Icon"
                        />
                      </label>
                      <input
                        id="Password"
                        class="signIn_Form_password"
                        type="password"
                        placeholder="********"
                        required
                      />
                      <img
                        id="Eye_Icon"
                        src="../../media/icons/eye input.svg"
                        alt="eye_input"
                        class="signIn_Form_Eye_Icon"
                      />

                      <img
                        id="Eye_Icon_Show"
                        src="../../media/icons/ojo.png"
                        alt="eye_input"
                        class="signIn_Form_Eye_Icon"
                      />
                    </div>
          
                    <div class="signIn_Checkbox">
                      <div>
                        <input
                          class="signIn_Checkbox_Remember"
                          type="checkbox"
                          id="remember"
                        />
                        <label for="remember">Remember me</label>
                      </div>
                      <a href="../forgetPassword.html">forget your password?</a>
                    </div>
          
                    <button class="signIn_Button" type="submit">Sign In</button>
                  </form>
          
                  <div class="SignIn_Continue">
                    <div class="SignIn_Continue"></div>
                    <p>Or Sign In With</p>
                  </div>
          
                  <div class="SignIn_SocialMedia">
                    <!-- reviar los href -->
                    <div class="SocialMedia_Google">
                      <a href="https://www.gmail.com">
                        <img
                          class="signIn_SocialMedia_Google"
                          src="../../media/icons/google.svg"
                          alt="Aconunt Google"
                        />
                      </a>
                    </div>
                    <div class="SocialMedia_Whatsapp">
                      <a href="https://web.whatsapp.com">
                        <img
                          class="signIn_SocialMedia_Whatsapp"
                          src="../../media/icons/whatsapp.svg"
                          alt="Aconunt whatsapp"
                        />
                      </a>
                    </div>
                    <div class="SocialMedia_Facebook">
                      <a href="https://facebook.com">
                        <img
                          class="signIn_SocialMedia_Facebook"
                          src="../../media/icons/facebook.svg"
                          alt="Aconunt facebook"
                        />
                      </a>
                    </div>
                  </div>
                  <div class="signIn_CreateAccount">
                    <label for="don't have">You do not have an account?</label>
                    <a href="../${
                      document.querySelector("html").lang
                    }/signUp.html">Sing Up</a>
                  </div>
                </section>
                  </div>
                </div>
              
            </div>
            `;
    document.querySelector(".menu-left").innerHTML = `
          <div class="offcanvas offcanvas-start menu-left" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" data-bs-backdrop="false">
            
            <div class="offcanvas-body">
              <div class="Item-menuLeft service">
                  <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#service-Menu" aria-expanded="false" aria-controls="service-Menu">
                    <div class="d-flex">
                      <img src="../../media/icons/service.svg" alt="Service-IconMenuLeft" />  
                      <span>Service</span>
                    </div>
                    <img src="../../media/icons/arrow down.png" class="arrow_down_dropdownMenu"/>
                  </button>

                <div class="collapse" id="service-Menu">
                  <div class="card card-body">
                    <a class="dropdown-item" href="../${
                      document.querySelector("html").lang
                    }/updateRoadStatus.html"><span class="itemList">-</span> Update Road Status</a>
                    <a class="dropdown-item" href="../${
                      document.querySelector("html").lang
                    }/gasStation.html"><span class="itemList">-</span> Service Station, Availability and Price</a>
                    <a class="dropdown-item" href="../${
                      document.querySelector("html").lang
                    }/mechanic.html"><span class="itemList">-</span> Mechanics</a>
                  </div>
                </div>
              </div>

              <div class="Item-menuLeft history d-none">
                <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#history" aria-expanded="false" aria-controls="history">
                    <div class="d-flex">    
                      <img src="../../media/icons/map.svg" alt="Service-IconMenuLeft" />  
                      <span>History</span>
                    </div>
                    <img src="../../media/icons/arrow down.png" class="arrow_down_dropdownMenu"/>
                </button>
                
                <div class="collapse" id="history">
                  <div class="card card-body">
                    <a class="dropdown-item" href="../${
                      document.querySelector("html").lang
                    }/savesMaps.html"><span class="itemList">-</span> Saved Maps</a>
                    <a class="dropdown-item" href="../${
                      document.querySelector("html").lang
                    }/mapHistory.html"><span class="itemList">-</span> Map History</a>
                  </div>
                </div>
              </div>

              <div class="Item-menuLeft your_Route">
              <button class="btn d-flex" type="button">
                <img src="../media/icons/route.svg" alt="Service-IconMenuLeft" />  
                <a class="dropdown-item" href="../${
                  document.querySelector("html").lang
                }/yourRoute.html">Your Route</a>
              </button>
              </div>

              <div class="Item-menuLeft your_Report d-none">
              <button class="btn d-flex" type="button">
                <img src="../media/icons/report.svg" alt="Service-IconMenuLeft" />  
                <a class="dropdown-item" href="../${
                  document.querySelector("html").lang
                }/yourReport.html">Your Report</a> 
              </button>
              </div>

              <div class="Item-menuLeft Setting">
                  <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#setting" aria-expanded="false" aria-controls="setting">
                    <div class="d-flex">
                      <img src="../../media/icons/settings.svg" alt="Service-IconMenuLeft" />  
                      <span>Setting</span>
                    </div>
                    <img src="../../media/icons/arrow down.png" class="arrow_down_dropdownMenu"/>
                  </button>
                
                <div class="collapse" id="setting">
                  <div class="card card-body">
                    <a class="dropdown-item" href="#" data-bs-toggle="collapse" data-bs-target="#languaje" aria-expanded="false" aria-controls="languaje"><span class="itemList">-</span> Language
                    <img src="../../media/icons/arrow down.png" class="arrow_down_dropdownMenu"/>
                    </a>
                    <div class="collapse" id="languaje">
                    <a class="dropdown-item" href="../es/${document.querySelector("html").id}"
                    ><img
                    src="../../media/icons/Spain-Flag.png"
                    class="navBar_languageDropdown_flag"
                    />
                    
                    <p
                    class="d-flex justify-content-center align-content-center m-0"
                    >
                    Spanish
                    </p></a
                    >

                    <a class="dropdown-item" href="../en/${document.querySelector("html").id}"
                    ><img
                    src="../../media/icons/USA-Flag.png"
                    class="navBar_languageDropdown_flag"
                    />
                    <p
                    class="d-flex justify-content-center align-content-center m-0"
                    >
                    English
                    </p></a
                    >
                    </div>
                    
                    <a class="dropdown-item" href="#"><span class="itemList">-</span> 
                    <div class="form-check form-switch form-check-reverse">
                    <input class="form-check-input inputDarkMode" type="checkbox" id="flexSwitchCheckReverse">
                    <label class="form-check-label" for="flexSwitchCheckReverse"> Dark Mode</label>
                    </div>
                    </a>
                  </div>
                </div>
              </div>

              <div class="log_out d-none">
              <button type="button" class="btn btn-danger">Log Out</button>
              </div>

            </div>
          </div>
        `;
  } else {
    document.body.prepend(document.createElement("header"));
  }
}
