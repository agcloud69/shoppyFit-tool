/*!
 *  ++++++++++++++++++++++
 *  Find Size Button
 *  ++++++++++++++++++++++
 */
const shoppyfitVersion = '1.0.0';

// CHECKING FOR SPECIFIC DEVICED AND SYSTEMS
// browser
const isBrowser = new Function('try { return this===window; } catch(e) { return false; }');
// iOS
const isiOS = isBrowser() ?
    new Function(
        'if ((/iPad|iPhone|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)) { return true; } else { return false; }'
    ) :
    new Function('return false;');
// Android
const isAndroid = isBrowser() ?
    new Function(
        'if (/android/i.test(navigator.userAgent || navigator.vendor || window.opera) && !window.MSStream) { return true; } else { return false; }'
    ) :
    new Function('return false;');
// Chrome
const isChrome = isBrowser() ?
    new Function(
        'if (/chrome|chromium|crios/i.test(navigator.userAgent)) { return true; } else { return false; }'
    ) :
    new Function('return false;');
// Mobile
const isMobile = () => {
    if (isAndroid() || isiOS()) {
        return true;
    } else {
        return false;
    }
};
// WebView (iOS and Android)
const isWebView = isBrowser() ?
    new Function(
        'if (/(; ?wv|(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari))/i.test(navigator.userAgent || navigator.vendor)) { return true; } else { return false; }'
    ) :
    new Function('return false;');
// checking for problematic apps
const isProblematicWebView = isBrowser() ?
    new Function(
        'if (/(Instagram)/i.test(navigator.userAgent || navigator.vendor || window.opera)) { return true; } else { return false; }'
    ) :
    new Function('return false;');

// DEFINE GLOBAL VARIABLES
const shoppyfitDefaultTarget = isWebView() ? '_system' : '_blank';

// DEFINING GLOBAL ICONS
const shoppyfitIcon = {
    close: '<span class="shoppyfit-icon-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M2.321 13.529a7.927 7.927 0 0 1 0-11.208 7.927 7.927 0 0 1 11.208 0l86.471 86.471L186.47 2.321a7.927 7.927 0 0 1 11.209 0 7.927 7.927 0 0 1 0 11.208l-86.474 86.469 86.472 86.473a7.927 7.927 0 0 1-11.209 11.208l-86.471-86.471-86.469 86.471a7.927 7.927 0 0 1-11.208-11.208l86.471-86.473z"/></svg></span>',
    browser: '<span class="shoppyfit-icon-browser"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 245.657"><path d="M117.011 163.676q-6.283 6.218-13.623 12.419l6.087-1.009a80.373 80.373 0 0 0 11.524-3.255l.7 1.042 1.628 2.067h0 0a26.693 26.693 0 0 0 3.467 3.255 89.992 89.992 0 0 1-15.837 4.753 95.592 95.592 0 0 1-37.159 0 87.046 87.046 0 0 1-17.253-5.322.423.423 0 0 1-.228-.114 101.077 101.077 0 0 1-15.625-8.415 88.56 88.56 0 0 1-13.672-11.214 85.761 85.761 0 0 1-11.214-13.64 97.317 97.317 0 0 1-8.545-15.658 90.806 90.806 0 0 1-5.436-17.546 95.592 95.592 0 0 1 0-37.159 86.037 86.037 0 0 1 5.339-17.253.537.537 0 0 1 .098-.228 98.212 98.212 0 0 1 8.545-15.707 87.893 87.893 0 0 1 11.214-13.656 84.947 84.947 0 0 1 13.672-11.231A97.17 97.17 0 0 1 56.43 7.259a88.739 88.739 0 0 1 17.448-5.436 95.592 95.592 0 0 1 37.159 0 87.714 87.714 0 0 1 17.253 5.322.456.456 0 0 1 .212.114 100.507 100.507 0 0 1 15.756 8.545 88.56 88.56 0 0 1 13.623 11.198 85.077 85.077 0 0 1 11.214 13.688 94.713 94.713 0 0 1 8.545 15.739 88.739 88.739 0 0 1 5.436 17.481l.195.977-8.822-2.49a76.499 76.499 0 0 0-4.232-12.744 88.251 88.251 0 0 0-4.671-9.375H138.48a106.562 106.562 0 0 1 6.836 13.819l-10.026-2.702a106.985 106.985 0 0 0-6.283-11.117H96.454v5.55l-.993.358a21.941 21.941 0 0 0-7.097 4.362V50.245H55.812q-12.484 19.385-14.03 38.152H83.4q1.628 4.02 3.402 8.138H41.7c.505 12.81 4.883 25.505 12.826 38.152h33.888v-34.49l8.138 17.904v16.553h7.748l3.727 8.138H96.503v28.5a201.567 201.567 0 0 0 17.139-15.707q1.709 4.053 3.369 8.138zm69.761-4.167a7.552 7.552 0 0 1-1.904 1.286h-.13a6.738 6.738 0 0 1-7.097-.977l-18.881-16.016-6.511 15.902a21.045 21.045 0 0 1-1.937 3.662 14.812 14.812 0 0 1-2.458 2.865 7.78 7.78 0 0 1-12.207-1.335 15.105 15.105 0 0 1-1.497-2.653c-11.231-28.467-26.465-56.805-37.859-85.289a5.062 5.062 0 0 1 5.68-6.966c27.296 5.046 62.664 16.586 90.416 23.943 8.627 2.279 10.026 9.88 3.662 15.772a19.874 19.874 0 0 1-3.255 2.474c-4.883 2.767-9.766 5.973-14.649 8.903l18.799 16.114a6.917 6.917 0 0 1 1.628 2.051v.13a6.966 6.966 0 0 1 .635 2.393h0a6.934 6.934 0 0 1-.26 2.507 7.145 7.145 0 0 1-1.172 2.262 153.894 153.894 0 0 1-11.003 12.972zm-4.883-6.25l9.099-10.677c-4.004-3.434-21.159-16.748-22.933-19.955a3.923 3.923 0 0 1 1.351-5.29c5.957-3.255 13.607-7.91 19.255-11.67a13.64 13.64 0 0 0 1.986-1.449 7.194 7.194 0 0 0 1.221-1.416l.26-.488-.505-.293a6.38 6.38 0 0 0-1.237-.423l-84.589-22.494 35.531 79.982a7.813 7.813 0 0 0 .619 1.139l.358.472.456-.326a7.341 7.341 0 0 0 1.188-1.449 12.224 12.224 0 0 0 1.107-2.165c2.653-6.511 5.68-15.414 8.789-21.436l.374-.521a3.906 3.906 0 0 1 5.485-.439l22.201 18.832zM81.594 176.095a171.814 171.814 0 0 1-31.348-33.334h-25.57A83.824 83.824 0 0 0 45.2 162.292a85.956 85.956 0 0 0 14.47 7.813.22.22 0 0 0 .179.114 79.966 79.966 0 0 0 15.69 4.883 106.008 106.008 0 0 0 6.104 1.009zm-62.241-41.44h25.733a82.359 82.359 0 0 1-11.394-38.152H8.138a90.741 90.741 0 0 0 1.628 12.923 78.566 78.566 0 0 0 4.883 15.902 88.153 88.153 0 0 0 4.655 9.375zM8.138 88.397h25.635A88.511 88.511 0 0 1 46.42 50.245H19.353a88.153 88.153 0 0 0-4.704 9.375s0 .114-.114.163A81.236 81.236 0 0 0 9.652 75.49a83.759 83.759 0 0 0-1.628 12.907zm16.488-46.241h27.003A191.606 191.606 0 0 1 82.131 8.708c-2.262.277-4.492.602-6.641 1.058a78.713 78.713 0 0 0-15.87 4.883 89.911 89.911 0 0 0-14.47 7.813 83.824 83.824 0 0 0-20.525 19.532h0zm78.127-33.448a186.577 186.577 0 0 1 30.518 33.448h27.019a79.152 79.152 0 0 0-8.138-9.375 81.073 81.073 0 0 0-12.419-10.205 86.705 86.705 0 0 0-14.405-7.829s-.098 0-.163-.098a79.999 79.999 0 0 0-15.69-4.883c-2.214-.439-4.443-.781-6.657-1.058h0zm-6.25 5.274v28.175h26.84a188.286 188.286 0 0 0-26.84-28.175zm-8.138 157.279v-28.5H60.223a171.993 171.993 0 0 0 28.24 28.5zm0-129.105V13.981a189.295 189.295 0 0 0-26.807 28.175z"/></svg></span>',
    shoppyFit: '<span class="shoppyFit-icon"><img src="../assets/img/shoppyfit logo1.png" style="height:25px;margin-top:-2px;"></span>',
};

// INITIALIZE THE SCRIPT AND FUNCTIONALITY
function shoppyfit_init() {
    // let's get started
    console.log('Find Size button initialized (version ' + shoppyfitVersion + ')');
    console.log('See https://github.com/agcloud69/shoppyfit-tool for details');
    // abort if not in a browser
    if (!isBrowser()) {
        console.error('no further initialization due to wrong environment (no browser)');
        return;
    }
    // get all placeholders
    const shoppyfitButtons = document.querySelectorAll('.shoppyfit');
    // if there are some, move on
    if (shoppyfitButtons.length > 0) {
        // get the amount of already initialized ones first
        const shoppyfitButtonsInitialized = document.querySelectorAll('.shoppyfit-initialized');
        // generate the buttons one by one
        for (let i = 0; i < shoppyfitButtons.length; i++) {
            // skip already initialized ones
            if (shoppyfitButtons[parseInt(i)].classList.contains('shoppyfit-initialized')) {
                continue;
            }
            // get JSON from HTML block, but remove real code line breaks before parsing.
            // use <br> or \n explicitely in the description to create a line break.
            const shoppyfitJsonInput = (function() {
                try {
                    return JSON.parse(
                        shoppyfit_secure_content(
                            shoppyfitButtons[parseInt(i)].innerHTML.replace(/(\r\n|\n|\r)/g, ''),
                            false
                        )
                    );
                } catch (e) {
                    console.error(
                        'Find Size button generation failed: JSON content provided, but badly formatted (in doubt, try some tool like https://jsonformatter.org/ to validate).\r\nError message: ' +
                        e
                    );
                    return '';
                }
            })();
            if (shoppyfitJsonInput === '') {
                continue;
            }
            // rewrite config for backwards compatibility
            const shoppyfitJsonInputPatched = shoppyfit_patch_config(shoppyfitJsonInput);
            // check, if all required data is available
            if (shoppyfit_check_required(shoppyfitJsonInputPatched)) {
                // Rewrite dynamic dates, standardize line breaks and transform urls in the description
                const shoppyfitConfig = shoppyfit_decorate_data(shoppyfitJsonInputPatched);
                // set identifier
                if (shoppyfitConfig.identifier == null || shoppyfitConfig.identifier == '') {
                    shoppyfitConfig.identifier = 'shoppyfit-btn-' + (i + shoppyfitButtonsInitialized.length + 1);
                }
                // validate the config (JSON iput) ...
                if (shoppyfit_validate(shoppyfitConfig)) {
                    // ... and generate the button on success
                    shoppyfit_generate(shoppyfitButtons[parseInt(i)], shoppyfitConfig);
                }
            }
        }
    }
}

// BACKWARDS COMPATIBILITY REWRITE
function shoppyfit_patch_config(configData) {
    // you can remove this, if you did not use this script before v1.10.0
    // adjusts any old schema.org structure
    if (configData.event != null) {
        Object.keys(configData.event).forEach((key) => {
            // move entries one level up, but skip schema types
            if (key.charAt(0) !== '@') {
                configData[`${key}`] = configData.event[`${key}`];
            }
        });
        delete configData.event;
    }
    // adjust deprecated config options
    const keyChanges = {
        title: 'name',
    };
    Object.keys(keyChanges).forEach((key) => {
        if (configData[keyChanges[`${key}`]] == null && configData[`${key}`] != null) {
            configData[keyChanges[`${key}`]] = configData[`${key}`];
        }
    });
    return configData;
}

// CLEAN DATA BEFORE FURTHER VALIDATION (CONSIDERING SPECIAL RULES AND SCHEMES)
function shoppyfit_decorate_data(data) {
    // cleanup options, standardizing names and splitting off custom labels

    // force click trigger on modal style
    if (data.listStyle === 'modal') {
        data.trigger = 'click';
    }
    // set button style and force click on styles, where the dropdown is not attached to the button
    if (data.buttonStyle != null && data.buttonStyle != '' && data.buttonStyle != 'default') {
        if (data.buttonStyle == 'round' || data.buttonStyle == 'text') {
            data.trigger = 'click';
        }
    } else {
        data.buttonStyle = '';
    }
    // set size
    if (data.size != null && data.size != '' && data.size >= 0 && data.size < 11) {
        data.size = 10 + parseInt(data.size);
    } else {
        data.size = 16;
    }
    // determine dark mode
    // if (data.lightMode == null || data.lightMode == '') {
    //     data.lightMode = 'light';
    // } else if (data.lightMode != null && data.lightMode != '') {
    //     const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    //     switch (data.lightMode) {
    //         case 'system':
    //             if (prefersDarkScheme.matches) {
    //                 data.lightMode = 'dark';
    //             } else {
    //                 data.lightMode = 'light';
    //             }
    //             break;
    //         case 'bodyScheme':
    //         case 'dark':
    //             break;
    //         default:
    //             data.lightMode = 'light';
    //             break;
    //     }
    // }
    // set language if not set
    if (data.language == null || data.language == '') {
        data.language = 'en';
    }
    // set right-to-left for relevant languages
    if (data.language == 'ar') {
        data.rtl = true;
    } else {
        data.rtl = false;
    }

    return data;
}

// CHECK FOR REQUIRED FIELDS
function shoppyfit_check_required(data) {
    // check for min required data (without "options")
    const requiredField = ['name'];
    return requiredField.every(function(field) {
        if (data[`${field}`] == null || data[`${field}`] == '') {
            console.error('Find Size button generation failed: required setting missing [' + field + ']');
            return false;
        }
        return true;
    });
}

// VALIDATE THE INPUT DATA
function shoppyfit_validate(data) {
    // validate options
    // if (!data.options.every(function(option) {
    //         if (!shoppyfitOptions.includes(option)) {
    //             console.error(msgPrefix + ' failed: invalid option [' + option + ']');
    //             return false;
    //         }
    //         return true;
    //     })) {
    //     return false;
    // }

    // on passing the validation, return true
    return true;
}

// GENERATE THE ACTUAL BUTTON
// helper function to generate the labels for the button and list options
function shoppyfit_generate_label(data, parent, type, icon = false, text = '', oneOption = false) {
    let defaultTriggerText = shoppyfit_translate_hook('Find Size', data.language, data);
    if (oneOption && text == '') {
        text = defaultTriggerText;
    }
    switch (type) {
        case 'trigger':
        default:
            if (data.trigger === 'click') {
                parent.addEventListener('click', (event) => {
                    event.preventDefault();
                    shoppyfit_toggle('auto', data, parent, false, true);
                });
            } else {
                parent.addEventListener('touchend', (event) => {
                    event.preventDefault();
                    shoppyfit_toggle('auto', data, parent, false, true);
                });
                parent.addEventListener(
                    'mouseenter',
                    shoppyfit_debounce_leading((event) => {
                        event.preventDefault();
                        shoppyfit_toggle('open', data, parent, false, true);
                    })
                );
            }
            parent.id = data.identifier;
            text = text || defaultTriggerText;
            break;
        case 'apple':
            parent.addEventListener(
                'click',
                shoppyfit_debounce(() => {
                    oneOption ? parent.blur() : shoppyfit_toggle('close');
                    // shoppyfit_generate_ical(data);
                })
            );
            parent.id = data.identifier + '-apple';
            text = text || 'Apple';
            break;

        case 'close':
            parent.addEventListener(
                'click',
                shoppyfit_debounce(() => {
                    oneOption ? parent.blur() : shoppyfit_toggle('close');
                })
            );
            parent.addEventListener(
                'focus',
                shoppyfit_debounce(() => shoppyfit_close(false))
            );
            parent.id = data.identifier + '-close';
            text = shoppyfit_translate_hook('Close', data.language, data);
            break;
    }
    // override the id for the oneOption button, since the button always needs to have the button id
    if (oneOption) {
        parent.id = data.identifier;
    }
    // support keyboard input
    if (!oneOption && type === 'trigger') {
        parent.addEventListener(
            'keyup',
            shoppyfit_debounce_leading((event) => {
                if (event.key == 'Enter') {
                    event.preventDefault();
                    shoppyfit_toggle('auto', data, parent, true, true);
                }
            })
        );
    } else {
        parent.addEventListener(
            'keyup',
            shoppyfit_debounce_leading((event) => {
                if (event.key == 'Enter') {
                    event.preventDefault();
                    parent.click();
                }
            })
        );
    }
    // add icon and text label
    if (icon) {
        const iconEl = document.createElement('span');
        iconEl.classList.add('shoppyfit-icon');
        iconEl.innerHTML = shoppyfitIcon['shoppyFit'];
        parent.appendChild(iconEl);
    }
    const textEl = document.createElement('span');
    textEl.classList.add('shoppyfit-text');
    textEl.textContent = text;
    parent.appendChild(textEl);
}

// generate the triggering button
function shoppyfit_generate(button, data) {
    // clean the placeholder
    button.textContent = '';

    // generate the wrapper div
    const buttonTriggerWrapper = document.createElement('div');
    buttonTriggerWrapper.classList.add('shoppyfit-button-wrapper');
    buttonTriggerWrapper.classList.add('shoppyfit-' + data.lightMode);
    if (data.rtl) {
        buttonTriggerWrapper.classList.add('shoppyfit-rtl');
    }
    buttonTriggerWrapper.style.fontSize = data.size + 'px';
    button.appendChild(buttonTriggerWrapper);
    // generate the button trigger div
    const buttonTrigger = document.createElement('button');
    buttonTrigger.classList.add('shoppyfit-button');
    if (data.trigger === 'click') {
        buttonTrigger.classList.add('shoppyfit-click');
    }
    if (data.listStyle === 'overlay') {
        buttonTrigger.classList.add('shoppyfit-dropoverlay');
    }
    buttonTrigger.type = 'button';
    buttonTriggerWrapper.appendChild(buttonTrigger);
    shoppyfit_generate_label(data, buttonTrigger, 'trigger', true, data.label);
    // create an empty anchor div to place the dropdown, while the position can be defined via CSS

    // update the placeholder class to prevent multiple initializations
    button.classList.remove('shoppyfit');
    button.classList.add('shoppyfit-initialized');
    // show the placeholder div
    if (data.inline) {
        button.style.display = 'inline-block';
    } else {
        button.style.display = 'block';
    }
    // console log
    console.log('Find Size button "' + data.identifier + '" created');
}

// generate the  list (can also appear wihtin a modal, if option is set)
function shoppyfit_generate_list(data) {
    const optionsList = document.createElement('iframe');
    optionsList.setAttribute("id","shoppyFit-iframe")
    optionsList.classList.add('shoppyfit-list');
    optionsList.classList.add('shoppyfit-' + data.lightMode);
    if (data.rtl) {
        optionsList.classList.add('shoppyfit-rtl');
    }
    optionsList.setAttribute("src","http://localhost:3000/");

    optionsList.style.fontSize = data.size + 'px';

    return optionsList;
}

// create the background overlay, which also acts as trigger to close any dropdowns
function shoppyfit_generate_bg_overlay(
    listStyle = 'dropdown',
    trigger = '',
    lightMode = 'light',
    darken = true
) {
    const bgOverlay = document.createElement('div');
    bgOverlay.id = 'shoppyfit-bgoverlay';
    if (listStyle !== 'modal' && darken) {
        bgOverlay.classList.add('shoppyfit-animate-bg');
    }
    if (!darken) {
        bgOverlay.classList.add('shoppyfit-no-bg');
    }
    bgOverlay.classList.add('shoppyfit-' + lightMode);
    bgOverlay.tabIndex = 0;
    bgOverlay.addEventListener(
        'click',
        shoppyfit_debounce((e) => {
            if (e.target !== e.currentTarget) return;
            shoppyfit_toggle('close');
        })
    );
    let fingerMoved = false;
    bgOverlay.addEventListener(
        'touchstart',
        shoppyfit_debounce_leading(() => (fingerMoved = false)), { passive: true }
    );
    bgOverlay.addEventListener(
        'touchmove',
        shoppyfit_debounce_leading(() => (fingerMoved = true)), { passive: true }
    );
    bgOverlay.addEventListener(
        'touchend',
        shoppyfit_debounce((e) => {
            if (fingerMoved !== false || e.target !== e.currentTarget) return;
            shoppyfit_toggle('close');
        }), { passive: true }
    );
    bgOverlay.addEventListener(
        'focus',
        shoppyfit_debounce_leading((e) => {
            if (e.target !== e.currentTarget) return;
            shoppyfit_toggle('close');
        })
    );
    if (trigger !== 'click') {
        bgOverlay.addEventListener(
            'mousemove',
            shoppyfit_debounce_leading((e) => {
                if (e.target !== e.currentTarget) return;
                shoppyfit_toggle('close');
            })
        );
    } else {
        // if trigger is not set to 'click', we render a close icon, when hovering over the background
        bgOverlay.classList.add('shoppyfit-click');
    }
    return bgOverlay;
}

// FUNCTIONS TO CONTROL THE INTERACTION
function shoppyfit_toggle(action, data = '', button = '', keyboardTrigger = false, generatedButton = false) {
    // check for state and adjust accordingly
    // action can be 'open', 'close', or 'auto'
    if (action == 'open') {
        shoppyfit_open(data, button, keyboardTrigger, generatedButton);
    } else if (
        action == 'close' ||
        button.classList.contains('shoppyfit-active') ||
        document.querySelector('.shoppyfit-active-modal')
    ) {
        shoppyfit_close(keyboardTrigger);
    } else {
        shoppyfit_open(data, button, keyboardTrigger, generatedButton);
    }
}

// show the modal list + background overlay
function shoppyfit_open(data, button, keyboardTrigger = false, generatedButton = false) {
    // abort early if an Find Size  modal already opened
    if (document.querySelector('.shoppyfit-modal')) return;
    // generate list and prepare wrapper
    const list = shoppyfit_generate_list(data);

    const listWrapper = document.createElement('div');
    listWrapper.classList.add('shoppyfit-list-wrapper');
    // set list styles, set button to shoppyfit-active and force modal listStyle if no button is set
    if (button) {
        button.classList.add('shoppyfit-active');
        if (data.listStyle === 'modal') {
            button.classList.add('shoppyfit-modal-style');
            list.classList.add('shoppyfit-modal');
        } else {
            if (data.listStyle === 'overlay') {
                listWrapper.classList.add('shoppyfit-dropoverlay');
            }
        }
        if (generatedButton) {
            list.classList.add('shoppyfit-generated-button'); // if the button has been generated by the script, we add some more specifics
        }
    } else {
        list.classList.add('shoppyfit-modal');
    }
    // define background overlay
    const bgOverlay = shoppyfit_generate_bg_overlay(
        data.listStyle,
        data.trigger,
        data.lightMode,
        data.background
    );
    // render the items depending on the liststyle
    if (data.listStyle === 'modal') {
        document.body.appendChild(bgOverlay);
        bgOverlay.appendChild(list);
        // document.body.classList.add('shoppyfit-modal-no-scroll');
    } else {
        document.body.appendChild(listWrapper);
        listWrapper.appendChild(list);
        listWrapper.classList.add('shoppyfit-style-' + data.buttonStyle);
        document.body.appendChild(bgOverlay);
    }
    // give keyboard focus to first item in list, if not blocked, because there is definitely no keyboard trigger
    if (keyboardTrigger) {
        list.firstChild.focus();
    } else {
        list.firstChild.focus({ preventScroll: true });
    }
    list.firstChild.blur();
}

function shoppyfit_close(keyboardTrigger = false) {
    // focus triggering button if available - especially relevant for keyboard navigation
    const newFocusEl = document.querySelector('.shoppyfit-active, .shoppyfit-active-modal');
    if (newFocusEl) {
        newFocusEl.focus({ preventScroll: true });
        if (!keyboardTrigger) {
            newFocusEl.blur();
        }
    }
    // inactivate all buttons
    Array.from(document.querySelectorAll('.shoppyfit-active')).forEach((button) => {
        button.classList.remove('shoppyfit-active');
    });
    Array.from(document.querySelectorAll('.shoppyfit-active-modal')).forEach((button) => {
        button.classList.remove('shoppyfit-active-modal');
    });
    // make body scrollable again
    // document.body.classList.remove('shoppyfit-modal-no-scroll');
    // remove dropdowns, modals, and bg overlays (should only be one of each at max)
    Array.from(document.querySelectorAll('.shoppyfit-list-wrapper'))
        .concat(Array.from(document.querySelectorAll('.shoppyfit-info-modal')))
        .concat(Array.from(document.querySelectorAll('#shoppyfit-bgoverlay')))
        .forEach((el) => el.remove());
}

// prepare data when not using the init function
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function shoppyfit_action(data, triggerElement, keyboardTrigger = true) {
    data = shoppyfit_secure_content(data);
    // decorate & validate data
    if (!shoppyfit_check_required(data)) {
        throw new Error('Find Size button generation failed: required data missing; see console logs');
    }
    data = shoppyfit_decorate_data(data);
    if (triggerElement) {
        data.identifier = triggerElement.id;
        // if listStyle some dropdown one, force overlay
        if (data.listStyle != 'modal') {
            data.listStyle = 'overlay';
        }
    } else {
        data.identifier = 'shoppyfit-btn-custom';
        // if no button is defined, fallback to listStyle "modal" and "click" trigger
        data.listStyle = 'modal';
        data.trigger = 'click';
    }
    if (!shoppyfit_validate(data)) {
        throw new Error(
            'Find Size button generation (' + data.identifier + ') failed: invalid data; see console logs'
        );
    }
    // if all is fine, open the options list
    shoppyfit_toggle('open', data, triggerElement, keyboardTrigger);
}

// SHARED FUNCTION TO SECURE DATA
function shoppyfit_secure_content(data, isJSON = true) {
    // strip HTML tags (especially since stupid Safari adds stuff) - except for <br>
    const toClean = isJSON ? JSON.stringify(data) : data;
    const cleanedUp = toClean.replace(/(<(?!br)([^>]+)>)/gi, '');
    if (isJSON) {
        return JSON.parse(cleanedUp);
    } else {
        return cleanedUp;
    }
}

// SHARED FUNCTION TO SECURE URLS
function shoppyfit_secure_url(url, throwError = true) {
    if (
        url.match(
            /((\.\.\/)|(\.\.\\)|(%2e%2e%2f)|(%252e%252e%252f)|(%2e%2e\/)|(%252e%252e\/)|(\.\.%2f)|(\.\.%252f)|(%2e%2e%5c)|(%252e%252e%255c)|(%2e%2e\\)|(%252e%252e\\)|(\.\.%5c)|(\.\.%255c)|(\.\.%c0%af)|(\.\.%25c0%25af)|(\.\.%c1%9c)|(\.\.%25c1%259c))/gi
        )
    ) {
        if (throwError) {
            console.error(
                'Seems like the generated URL includes at least one security issue and got blocked. Please check the calendar button parameters!'
            );
        }
        return false;
    } else {
        return true;
    }
}

// SHARED FUNCTION TO VALIDATE EMAIL ADDRESSES
function shoppyfit_validEmail(email, mx = false) {
    // rough format check first
    if (!/^.{0,70}@.{1,30}\.[\w.]{2,9}$/.test(email)) {
        return false;
    }
    // testing for mx records second, if activated
    if (mx) {
        // TODO: call external service to validate email address
    }
    return true;
}

// SHARED FUNCTION TO REPLACE HTML PSEUDO ELEMENTS
function shoppyfit_rewrite_html_elements(content, clear = false) {
    // standardize any line breaks
    content = content.replace(/<br\s*\/?>/gi, '\n');
    // remove any pseudo elements, if necessary
    if (clear) {
        content = content.replace(/\[(|\/)(url|br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]|((\|.*)\[\/url\])/gi, '');
        // and build html for the rest
        // supporting: br, hr, p, strong, u, i, em, li, ul, ol, h (like h1, h2, h3, ...), url (= a)
    } else {
        content = content.replace(/\[(\/|)(br|hr|p|b|strong|u|i|em|li|ul|ol|h\d)\]/gi, '<$1$2>');
        content = content.replace(/\[url\]([\w&$+.,:;=~!*'?@^%#|\s\-()/]*)\[\/url\]/gi, function(match, p1) {
            const urlText = p1.split('|');
            const text = (function() {
                if (urlText.length > 1 && urlText[1] != '') {
                    return urlText[1];
                } else {
                    return urlText[0];
                }
            })();
            return (
                '<a href="' + urlText[0] + '" target="' + shoppyfitDefaultTarget + '" rel="noopener">' + text + '</a>'
            );
        });
    }
    return content;
}

// SHARED FUNCTION TO CREATE INFO MODALS
function shoppyfit_create_modal(data, icon = '', headline, content, buttons) {
    // setting the stage
    const bgOverlay = shoppyfit_generate_bg_overlay('modal', 'click', data.lightMode);
    const infoModalWrapper = document.createElement('div');
    infoModalWrapper.classList.add('shoppyfit-modal', 'shoppyfit-info-modal');
    infoModalWrapper.tabIndex = 0;
    bgOverlay.appendChild(infoModalWrapper);
    document.body.appendChild(bgOverlay);
    // document.body.classList.add('shoppyfit-modal-no-scroll');
    const parentButton = document.getElementById(data.identifier);
    if (parentButton != null) {
        parentButton.classList.add('shoppyfit-active-modal');
    }
    const infoModal = document.createElement('div');
    infoModal.classList.add('shoppyfit-modal-box');
    infoModal.classList.add('shoppyfit-' + data.lightMode);
    if (data.rtl) {
        infoModal.classList.add('shoppyfit-rtl');
    }
    infoModal.style.fontSize = data.size + 'px';
    infoModalWrapper.appendChild(infoModal);
    // set overlay size just to be sure
    // shoppyfit_set_fullsize(bgOverlay);
    // adding closing button
    const infoModalClose = document.createElement('div');
    infoModalClose.classList.add('shoppyfit-modal-close');
    infoModalClose.innerHTML = shoppyfitIcon.close;
    infoModal.appendChild(infoModalClose);
    infoModalClose.addEventListener(
        'click',
        shoppyfit_debounce(() => shoppyfit_close())
    );
    infoModalClose.addEventListener(
        'keyup',
        shoppyfit_debounce_leading((event) => {
            if (event.key == 'Enter') {
                event.preventDefault();
                shoppyfit_toggle('close', '', '', true);
            }
        })
    );
    if (buttons == null || buttons.length == 0) {
        infoModalClose.tabIndex = 0;
        infoModalClose.focus();
    }
    // adding headline (incl. icon)
    const infoModalHeadline = document.createElement('div');
    infoModalHeadline.classList.add('shoppyfit-modal-headline');
    infoModal.appendChild(infoModalHeadline);
    if (icon != '') {
        const infoModalHeadlineIcon = document.createElement('span');
        infoModalHeadlineIcon.classList.add('shoppyfit-modal-headline-icon');
        infoModalHeadlineIcon.innerHTML = shoppyfitIcon[`${icon}`];
        infoModalHeadline.appendChild(infoModalHeadlineIcon);
    }
    let infoModalHeadlineText = document.createTextNode(headline);
    infoModalHeadline.appendChild(infoModalHeadlineText);
    // and text content
    const infoModalContent = document.createElement('div');
    infoModalContent.classList.add('shoppyfit-modal-content');
    infoModalContent.innerHTML = content;
    infoModal.appendChild(infoModalContent);
    // and buttons (array of objects; attributes: href, type, label, primary(boolean))
    if (buttons != null && buttons.length > 0) {
        const infoModalButtons = document.createElement('div');
        infoModalButtons.classList.add('shoppyfit-modal-buttons');
        infoModal.appendChild(infoModalButtons);
        buttons.forEach((button, index) => {
            let infoModalButton;
            if (button.href != null && button.href != '') {
                infoModalButton = document.createElement('a');
                infoModalButton.setAttribute('target', shoppyfitDefaultTarget);
                infoModalButton.setAttribute('href', button.href);
                infoModalButton.setAttribute('rel', 'noopener');
            } else {
                infoModalButton = document.createElement('button');
                infoModalButton.type = 'button';
            }
            infoModalButton.classList.add('shoppyfit-modal-btn');
            if (button.primary) {
                infoModalButton.classList.add('shoppyfit-modal-btn-primary');
            }
            if (button.label == null || button.label == '') {
                button.label = shoppyfit_translate_hook('Click me', data.language, data);
            }
            infoModalButton.textContent = button.label;
            infoModalButtons.appendChild(infoModalButton);
            if (index == 0) {
                infoModalButton.focus();
            }
            switch (button.type) {
                default:
                    case 'close':
                    infoModalButton.addEventListener(
                    'click',
                    shoppyfit_debounce(() => shoppyfit_close())
                );
                infoModalButton.addEventListener(
                    'keyup',
                    shoppyfit_debounce((event) => {
                        if (event.key == 'Enter') {
                            shoppyfit_toggle('close', '', '', true);
                        }
                    })
                );
                break;
            }
        });
    }
}

// SHARED FUNCTION TO DEFINE WIDTH AND HEIGHT FOR "FULLSCREEN" FULLSIZE ELEMENTS
function shoppyfit_set_fullsize(el) {
    el.style.width = window.innerWidth + 'px';
    el.style.height = window.innerHeight + 100 + 'px';
}

// SHARED DEBOUNCE AND THROTTLE FUNCTIONS
// going for last call debounce
function shoppyfit_debounce(func, timeout = 200) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}
// dropping subsequent calls debounce
function shoppyfit_debounce_leading(func, timeout = 300) {
    let timer;
    return (...args) => {
        if (!timer) {
            func.apply(this, args);
        }
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = undefined;
        }, timeout);
    };
}
// throttle
function shoppyfit_throttle(func, delay = 10) {
    let result;
    let timeout = null;
    let previous = 0;
    let later = (...args) => {
        previous = Date.now();
        timeout = null;
        result = func.apply(this, args);
    };
    return (...args) => {
        let now = Date.now();
        let remaining = delay - (now - previous);
        if (remaining <= 0 || remaining > delay) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(this, args);
        } else if (!timeout) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}

// GLOBAL KEYBOARD AND DEVICE LISTENERS
if (isBrowser()) {
    // global listener to ESC key to close dropdown
    document.addEventListener(
        'keyup',
        shoppyfit_debounce_leading((event) => {
            if (event.key === 'Escape') {
                shoppyfit_toggle('close', '', '', true);
            }
        })
    );

    // Global listener to any screen changes
    window.addEventListener(
        'resize',
        shoppyfit_throttle(() => {
            const activeOverlay = document.getElementById('shoppyfit-bgoverlay');

            const activeButton = document.querySelector('.shoppyfit-active');
        })
    );
}

// TRANSLATIONS
// the database object
const i18nStrings = {
    en: {
        'Find Size': 'Find Size',
        Close: 'Close',
    },
    de: {
        'Find Size': 'Im Kalender speichern',
        Close: 'Schließen',
    },
    es: {
        'Find Size': 'Añadir al Calendario',
        Close: 'Ciérralo',
    },
    pt: {
        'Find Size': 'Incluir no Calendário',
        Close: 'Fechar',
    },
    fr: {
        'Find Size': 'Ajout au Calendrier',
        Close: 'Fermez',
    },
    nl: {
        'Find Size': 'Opslaan in Kalender',
        'iCal File': 'iCal File',
        Close: 'Sluiten',
    },
    tr: {
        'Find Size': 'Takvime Ekle',
        Close: 'Kapat',
    },
    zh: {
        'Find Size': '添加到日历',
        Close: '关',
    },
    ar: {
        'Find Size': 'إضافة إلى التقويم',
        Close: 'قريب',
    },
    hi: {
        'Find Size': 'कैलेंडर में जोड़ें',
        Close: 'बंद करना',
    },
    pl: {
        'Find Size': 'Dodaj do kalendarza',
        'iCal File': 'Plik iCal',
        Close: 'Zamknij',
    },
    id: {
        'Find Size': 'Tambahkan ke Kalender',
        'iCal File': 'File iCal',
        Close: 'Tutup',
    },
    no: {
        'Find Size': 'Legg til i kalenderen',
        Close: 'Lukk',
    },
    fi: {
        'Find Size': 'Lisää kalenteriin',
        Close: 'Sulje',
    },
    sv: {
        'Find Size': 'Lägg till i kalender',
        Close: 'Stäng',
    },
    cs: {
        'Find Size': 'Přidat do kalendáře',
        Close: 'Zavřít',
    },
    ja: {
        'Find Size': 'カレンダーに追加',
        Close: '閉じる',
    },
    it: {
        'Find Size': 'Aggiungi al calendario',
        Close: 'Chiudere',
    },
    ko: {
        'Find Size': '캘린더에 추가',
        Close: '닫다',
    },
    vi: {
        'Find Size': 'Thêm vào Lịch',
        Close: 'Đóng',
    },
};

// hook, which can be used to override all potential "hard" strings by setting customLabel_ + the key (without spaces) as option key and the intended string as value
function shoppyfit_translate_hook(identifier, language, data) {
    const searchKey = identifier.replace(/\s+/g, '').toLowerCase();
    if (
        data.customLabels != null &&
        data.customLabels[`${searchKey}`] != null &&
        data.customLabels[`${searchKey}`] != ''
    ) {
        return shoppyfit_rewrite_html_elements(data.customLabels[`${searchKey}`]);
    } else {
        return shoppyfit_translate(identifier, language);
    }
}

function shoppyfit_translate(identifier, language) {
    // set default language
    if (!language) {
        language = 'en';
    }
    // return string, if available
    if (i18nStrings[`${language}`][`${identifier}`]) {
        return i18nStrings[`${language}`][`${identifier}`];
    }
    // if nothing found, return the original identifier
    return identifier;
}

// START INIT
if (isBrowser()) {
    if (document.readyState !== 'loading') {
        // if the script is loaded after the page has been loaded, run the initilization
        shoppyfit_init();
    } else {
        // otherwise, init the magic as soon as the DOM has been loaded
        document.addEventListener('DOMContentLoaded', shoppyfit_init, false);
    }
}
// END INIT