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
const shoppyfitOptions = ['step1', 'step2', ''];

// DEFINING GLOBAL ICONS
const shoppyfitIcon = {
    trigger: '<span class="shoppyfit-icon-trigger"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-5.941 123.747c2.979 0 5.404 2.425 5.404 5.404s-2.425 5.404-5.404 5.404l-21.077-.065-.065 21.045c0 2.979-2.425 5.404-5.404 5.404s-5.404-2.425-5.404-5.404l.065-21.061-21.045-.081c-2.979 0-5.404-2.425-5.404-5.404s2.425-5.404 5.404-5.404l21.061.065.065-21.045c0-2.979 2.425-5.404 5.404-5.404s5.404 2.425 5.404 5.404l-.065 21.077 21.061.065zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.167V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.171c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.988 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg></span>',
    apple: '<span class="shoppyfit-icon-apple"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 245.657"><path d="M167.084 130.514c-.308-31.099 25.364-46.022 26.511-46.761-14.429-21.107-36.91-24.008-44.921-24.335-19.13-1.931-37.323 11.27-47.042 11.27-9.692 0-24.67-10.98-40.532-10.689-20.849.308-40.07 12.126-50.818 30.799-21.661 37.581-5.54 93.281 15.572 123.754 10.313 14.923 22.612 31.688 38.764 31.089 15.549-.612 21.433-10.073 40.242-10.073s24.086 10.073 40.546 9.751c16.737-.308 27.34-15.214 37.585-30.187 11.855-17.318 16.714-34.064 17.009-34.925-.372-.168-32.635-12.525-32.962-49.68l.045-.013zm-30.917-91.287C144.735 28.832 150.524 14.402 148.942 0c-12.344.503-27.313 8.228-36.176 18.609-7.956 9.216-14.906 23.904-13.047 38.011 13.786 1.075 27.862-7.004 36.434-17.376z"/></svg></span>',
    google: '<span class="shoppyfit-icon-google"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M152.637 47.363H47.363v105.273h105.273z" fill="#fff"/><path d="M152.637 200L200 152.637h-47.363z" fill="#f72a25"/><path d="M200 47.363h-47.363v105.273H200z" fill="#fbbc04"/><path d="M152.637 152.637H47.363V200h105.273z" fill="#34a853"/><path d="M0 152.637v31.576A15.788 15.788 0 0 0 15.788 200h31.576v-47.363z" fill="#188038"/><path d="M200 47.363V15.788A15.79 15.79 0 0 0 184.212 0h-31.575v47.363z" fill="#1967d2"/><path d="M15.788 0A15.79 15.79 0 0 0 0 15.788v136.849h47.363V47.363h105.274V0z" fill="#4285f4"/><path d="M68.962 129.02c-3.939-2.653-6.657-6.543-8.138-11.67l9.131-3.76c.83 3.158 2.279 5.599 4.346 7.341 2.051 1.742 4.557 2.588 7.471 2.588 2.995 0 5.55-.911 7.699-2.718 2.148-1.823 3.223-4.134 3.223-6.934 0-2.865-1.139-5.208-3.402-7.031s-5.111-2.718-8.496-2.718h-5.273v-9.033h4.736c2.913 0 5.387-.781 7.389-2.376 2.002-1.579 2.995-3.743 2.995-6.494 0-2.441-.895-4.395-2.686-5.859s-4.053-2.197-6.803-2.197c-2.686 0-4.818.716-6.396 2.148s-2.767 3.255-3.451 5.273l-9.033-3.76c1.204-3.402 3.402-6.396 6.624-8.984s7.34-3.89 12.337-3.89c3.695 0 7.031.716 9.977 2.148s5.257 3.418 6.934 5.941c1.676 2.539 2.507 5.387 2.507 8.545 0 3.223-.781 5.941-2.327 8.187-1.546 2.23-3.467 3.955-5.729 5.143v.537a17.39 17.39 0 0 1 7.34 5.729c1.904 2.572 2.865 5.632 2.865 9.212s-.911 6.771-2.718 9.57c-1.823 2.799-4.329 5.013-7.52 6.624s-6.787 2.425-10.775 2.425c-4.622 0-8.887-1.318-12.826-3.988zm56.087-45.312l-10.026 7.243-5.013-7.601 17.985-12.972h6.901v61.198h-9.847z" fill="#1a73e8"/></svg></span>',
    ical: '<span class="shoppyfit-icon-ical"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200.016"><path d="M132.829 7.699c0-4.248 4.199-7.699 9.391-7.699s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zm-25.228 161.263c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm-81.803-59.766c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 139.079c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.918 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM25.798 168.962c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zm40.902 0c-.553 0-.993-2.327-.993-5.208s.439-5.208.993-5.208h25.7c.553 0 .993 2.327.993 5.208s-.439 5.208-.993 5.208zM48.193 7.699C48.193 3.451 52.393 0 57.585 0s9.391 3.451 9.391 7.699v33.724c0 4.248-4.199 7.699-9.391 7.699s-9.391-3.451-9.391-7.699zM10.417 73.763h179.15V34.945c0-1.302-.537-2.49-1.4-3.369-.863-.863-2.051-1.4-3.369-1.4h-17.155c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h17.171c4.183 0 7.975 1.709 10.726 4.46S200 30.762 200 34.945v44.043 105.843c0 4.183-1.709 7.975-4.46 10.726s-6.543 4.46-10.726 4.46H15.186c-4.183 0-7.975-1.709-10.726-4.46C1.709 192.79 0 188.997 0 184.814V78.971 34.945c0-4.183 1.709-7.975 4.46-10.726s6.543-4.46 10.726-4.46h18.343c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208H15.186c-1.302 0-2.49.537-3.369 1.4-.863.863-1.4 2.051-1.4 3.369zm179.167 10.433H10.417v100.618c0 1.302.537 2.49 1.4 3.369.863.863 2.051 1.4 3.369 1.4h169.629c1.302 0 2.49-.537 3.369-1.4.863-.863 1.4-2.051 1.4-3.369zM82.08 30.176c-2.881 0-5.208-2.327-5.208-5.208s2.327-5.208 5.208-5.208h34.977c2.881 0 5.208 2.327 5.208 5.208s-2.327 5.208-5.208 5.208z"/></svg></span>',
    msteams: '<span class="shoppyfit-icon-msteams"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 186.047"><path d="M195.349 39.535a20.93 20.93 0 1 1-41.86 0 20.93 20.93 0 1 1 41.86 0zm-55.847 30.233h51.66A8.84 8.84 0 0 1 200 78.605v47.056c0 17.938-14.541 32.479-32.479 32.479h0-.154c-17.938.003-32.481-14.537-32.484-32.474v-.005-51.274a4.62 4.62 0 0 1 4.619-4.619z" fill="#5059c9"/><path d="M149.614 69.767H64.34c-4.823.119-8.637 4.122-8.526 8.944v53.67c-.673 28.941 22.223 52.957 51.163 53.665 28.94-.708 51.836-24.725 51.163-53.665v-53.67c.112-4.823-3.703-8.825-8.526-8.944zm-10.079-39.535a30.233 30.233 0 0 1-60.465 0 30.233 30.233 0 0 1 60.465 0z" fill="#7b83eb"/><path opacity=".1" d="M111.628 69.767v75.209c-.023 3.449-2.113 6.547-5.302 7.86-1.015.43-2.107.651-3.209.651H59.907l-1.628-4.651c-1.628-5.337-2.459-10.885-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M106.977 69.767v79.86a8.241 8.241 0 0 1-.651 3.209c-1.313 3.189-4.412 5.279-7.86 5.302H62.093l-2.186-4.651a46.13 46.13 0 0 1-1.628-4.651 56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".2" d="M102.326 69.767v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z"/><path opacity=".1" d="M111.628 45.721v14.651l-2.326.093c-.791 0-1.535-.046-2.326-.093-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767 25.845 25.845 0 0 1-1.488-4.651h23.209c4.693.018 8.494 3.818 8.512 8.512z"/><use xlink:href="#B" opacity=".2" transform="scale(.08973306)"/><path d="M106.977 50.372v10c-1.57-.104-3.127-.353-4.651-.744a30.233 30.233 0 0 1-20.93-17.767h17.07c4.693.018 8.494 3.818 8.512 8.512zm0 19.395v70.558a8.58 8.58 0 0 1-8.512 8.512H58.279a56.647 56.647 0 0 1-2.465-16.465V78.698c-.112-4.815 3.697-8.811 8.512-8.93z" opacity=".2"/><path opacity=".2" d="M102.326 50.372v9.256a30.233 30.233 0 0 1-20.93-17.767h12.419c4.693.018 8.494 3.818 8.512 8.512z"/><linearGradient id="A" gradientUnits="userSpaceOnUse" x1="17.776" y1="35.199" x2="84.55" y2="150.848"><stop offset="0" stop-color="#5a62c3"/><stop offset=".5" stop-color="#4d55bd"/><stop offset="1" stop-color="#3940ab"/></linearGradient><path fill="url(#A)" d="M8.526 41.86H93.8a8.53 8.53 0 0 1 8.526 8.526v85.274a8.53 8.53 0 0 1-8.526 8.526H8.526A8.53 8.53 0 0 1 0 135.66V50.386a8.53 8.53 0 0 1 8.526-8.526z"/><path fill="#fff" d="M73.6 74.316H56.553v46.419h-10.86V74.316H28.726v-9.005H73.6z"/><defs><path id="B" d="M1192.167 561.355v111.442c-17.496-1.161-34.848-3.937-51.833-8.293a336.92 336.92 0 0 1-233.25-198.003h190.228c52.304.198 94.656 42.55 94.855 94.854z"/></defs></svg></span>',
    ms365: '<span class="shoppyfit-icon-ms365"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 239.766"><path d="M200 219.785l-.021-.012V20.591L128.615 0 .322 48.172 0 48.234.016 192.257l43.78-17.134V57.943l84.819-20.279-.012 172.285L.088 192.257l128.515 47.456v.053l71.376-19.753v-.227z"/></svg></span>',
    outlookcom: '<span class="shoppyfit-icon-outlookcom"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 175"><path d="M178.725 0H71.275A8.775 8.775 0 0 0 62.5 8.775v9.975l60.563 18.75L187.5 18.75V8.775A8.775 8.775 0 0 0 178.725 0z" fill="#0364b8"/><path d="M197.813 96.281c.915-2.878 2.187-5.855 2.187-8.781-.002-1.485-.795-2.857-1.491-3.26l-68.434-38.99a9.37 9.37 0 0 0-9.244-.519c-.312.154-.614.325-.906.512l-67.737 38.6-.025.013-.075.044a4.16 4.16 0 0 0-2.088 3.6c.541 2.971 1.272 5.904 2.188 8.781l71.825 52.532z" fill="#0a2767"/><path d="M150 18.75h-43.75L93.619 37.5l12.631 18.75L150 93.75h37.5v-37.5z" fill="#28a8ea"/><path d="M150 18.75h37.5v37.5H150z" fill="#50d9ff"/><path d="M150 93.75l-43.75-37.5H62.5v37.5l43.75 37.5 67.7 11.05z" fill="#0364b8"/><path d="M106.25 56.25v37.5H150v-37.5zM150 93.75v37.5h37.5v-37.5zm-87.5-75h43.75v37.5H62.5z" fill="#0078d4"/><path d="M62.5 93.75h43.75v37.5H62.5z" fill="#064a8c"/><path d="M126.188 145.113l-73.706-53.75 3.094-5.438 68.181 38.825a3.3 3.3 0 0 0 2.625-.075l68.331-38.937 3.1 5.431z" fill="#0a2767" opacity=".5"/><path d="M197.919 91.106l-.088.05-.019.013-67.738 38.588c-2.736 1.764-6.192 1.979-9.125.569l23.588 31.631 51.588 11.257v-.001c2.434-1.761 3.876-4.583 3.875-7.587V87.5c.001 1.488-.793 2.862-2.081 3.606z" fill="#1490df"/><path d="M200 165.625v-4.613l-62.394-35.55-7.531 4.294a9.356 9.356 0 0 1-9.125.569l23.588 31.631 51.588 11.231v.025a9.362 9.362 0 0 0 3.875-7.588z" opacity=".05"/><path d="M199.688 168.019l-68.394-38.956-1.219.688c-2.734 1.766-6.19 1.984-9.125.575l23.588 31.631 51.587 11.256v.001a9.38 9.38 0 0 0 3.562-5.187z" opacity=".1"/><path d="M51.455 90.721c-.733-.467-1.468-1.795-1.455-3.221v78.125c-.007 5.181 4.194 9.382 9.375 9.375h131.25c1.395-.015 2.614-.366 3.813-.813.638-.258 1.252-.652 1.687-.974z" fill="#28a8ea"/><path d="M112.5 141.669V39.581a8.356 8.356 0 0 0-8.331-8.331H62.687v46.6l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031V150h54.169a8.356 8.356 0 0 0 8.331-8.331z" opacity=".1"/><path d="M106.25 147.919V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 68.75h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M106.25 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h47.919a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M100 135.419V45.831a8.356 8.356 0 0 0-8.331-8.331H62.687v40.35l-10.5 5.987-.031.012-.075.044A4.162 4.162 0 0 0 50 87.5v.031-.031 56.25h41.669a8.356 8.356 0 0 0 8.331-8.331z" opacity=".2"/><path d="M8.331 37.5h83.337A8.331 8.331 0 0 1 100 45.831v83.338a8.331 8.331 0 0 1-8.331 8.331H8.331A8.331 8.331 0 0 1 0 129.169V45.831A8.331 8.331 0 0 1 8.331 37.5z" fill="#0078d4"/><path d="M24.169 71.675a26.131 26.131 0 0 1 10.263-11.337 31.031 31.031 0 0 1 16.313-4.087 28.856 28.856 0 0 1 15.081 3.875 25.875 25.875 0 0 1 9.988 10.831 34.981 34.981 0 0 1 3.5 15.938 36.881 36.881 0 0 1-3.606 16.662 26.494 26.494 0 0 1-10.281 11.213 30 30 0 0 1-15.656 3.981 29.556 29.556 0 0 1-15.425-3.919 26.275 26.275 0 0 1-10.112-10.85 34.119 34.119 0 0 1-3.544-15.744 37.844 37.844 0 0 1 3.481-16.563zm10.938 26.613a16.975 16.975 0 0 0 5.769 7.463 15.069 15.069 0 0 0 9.019 2.719 15.831 15.831 0 0 0 9.631-2.806 16.269 16.269 0 0 0 5.606-7.481 28.913 28.913 0 0 0 1.787-10.406 31.644 31.644 0 0 0-1.687-10.538 16.681 16.681 0 0 0-5.413-7.75 14.919 14.919 0 0 0-9.544-2.956 15.581 15.581 0 0 0-9.231 2.744 17.131 17.131 0 0 0-5.9 7.519 29.85 29.85 0 0 0-.044 21.5z" fill="#fff"/></svg></span>',
    yahoo: '<span class="shoppyfit-icon-yahoo"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 177.803"><path d="M0 43.284h38.144l22.211 56.822 22.5-56.822h37.135L64.071 177.803H26.694l15.308-35.645L.001 43.284zm163.235 45.403H121.64L158.558 0 200 .002zm-30.699 8.488c12.762 0 23.108 10.346 23.108 23.106s-10.345 23.106-23.108 23.106a23.11 23.11 0 0 1-23.104-23.106 23.11 23.11 0 0 1 23.104-23.106z"/></svg></span>',
    close: '<span class="shoppyfit-icon-close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><path d="M2.321 13.529a7.927 7.927 0 0 1 0-11.208 7.927 7.927 0 0 1 11.208 0l86.471 86.471L186.47 2.321a7.927 7.927 0 0 1 11.209 0 7.927 7.927 0 0 1 0 11.208l-86.474 86.469 86.472 86.473a7.927 7.927 0 0 1-11.209 11.208l-86.471-86.471-86.469 86.471a7.927 7.927 0 0 1-11.208-11.208l86.471-86.473z"/></svg></span>',
    browser: '<span class="shoppyfit-icon-browser"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 245.657"><path d="M117.011 163.676q-6.283 6.218-13.623 12.419l6.087-1.009a80.373 80.373 0 0 0 11.524-3.255l.7 1.042 1.628 2.067h0 0a26.693 26.693 0 0 0 3.467 3.255 89.992 89.992 0 0 1-15.837 4.753 95.592 95.592 0 0 1-37.159 0 87.046 87.046 0 0 1-17.253-5.322.423.423 0 0 1-.228-.114 101.077 101.077 0 0 1-15.625-8.415 88.56 88.56 0 0 1-13.672-11.214 85.761 85.761 0 0 1-11.214-13.64 97.317 97.317 0 0 1-8.545-15.658 90.806 90.806 0 0 1-5.436-17.546 95.592 95.592 0 0 1 0-37.159 86.037 86.037 0 0 1 5.339-17.253.537.537 0 0 1 .098-.228 98.212 98.212 0 0 1 8.545-15.707 87.893 87.893 0 0 1 11.214-13.656 84.947 84.947 0 0 1 13.672-11.231A97.17 97.17 0 0 1 56.43 7.259a88.739 88.739 0 0 1 17.448-5.436 95.592 95.592 0 0 1 37.159 0 87.714 87.714 0 0 1 17.253 5.322.456.456 0 0 1 .212.114 100.507 100.507 0 0 1 15.756 8.545 88.56 88.56 0 0 1 13.623 11.198 85.077 85.077 0 0 1 11.214 13.688 94.713 94.713 0 0 1 8.545 15.739 88.739 88.739 0 0 1 5.436 17.481l.195.977-8.822-2.49a76.499 76.499 0 0 0-4.232-12.744 88.251 88.251 0 0 0-4.671-9.375H138.48a106.562 106.562 0 0 1 6.836 13.819l-10.026-2.702a106.985 106.985 0 0 0-6.283-11.117H96.454v5.55l-.993.358a21.941 21.941 0 0 0-7.097 4.362V50.245H55.812q-12.484 19.385-14.03 38.152H83.4q1.628 4.02 3.402 8.138H41.7c.505 12.81 4.883 25.505 12.826 38.152h33.888v-34.49l8.138 17.904v16.553h7.748l3.727 8.138H96.503v28.5a201.567 201.567 0 0 0 17.139-15.707q1.709 4.053 3.369 8.138zm69.761-4.167a7.552 7.552 0 0 1-1.904 1.286h-.13a6.738 6.738 0 0 1-7.097-.977l-18.881-16.016-6.511 15.902a21.045 21.045 0 0 1-1.937 3.662 14.812 14.812 0 0 1-2.458 2.865 7.78 7.78 0 0 1-12.207-1.335 15.105 15.105 0 0 1-1.497-2.653c-11.231-28.467-26.465-56.805-37.859-85.289a5.062 5.062 0 0 1 5.68-6.966c27.296 5.046 62.664 16.586 90.416 23.943 8.627 2.279 10.026 9.88 3.662 15.772a19.874 19.874 0 0 1-3.255 2.474c-4.883 2.767-9.766 5.973-14.649 8.903l18.799 16.114a6.917 6.917 0 0 1 1.628 2.051v.13a6.966 6.966 0 0 1 .635 2.393h0a6.934 6.934 0 0 1-.26 2.507 7.145 7.145 0 0 1-1.172 2.262 153.894 153.894 0 0 1-11.003 12.972zm-4.883-6.25l9.099-10.677c-4.004-3.434-21.159-16.748-22.933-19.955a3.923 3.923 0 0 1 1.351-5.29c5.957-3.255 13.607-7.91 19.255-11.67a13.64 13.64 0 0 0 1.986-1.449 7.194 7.194 0 0 0 1.221-1.416l.26-.488-.505-.293a6.38 6.38 0 0 0-1.237-.423l-84.589-22.494 35.531 79.982a7.813 7.813 0 0 0 .619 1.139l.358.472.456-.326a7.341 7.341 0 0 0 1.188-1.449 12.224 12.224 0 0 0 1.107-2.165c2.653-6.511 5.68-15.414 8.789-21.436l.374-.521a3.906 3.906 0 0 1 5.485-.439l22.201 18.832zM81.594 176.095a171.814 171.814 0 0 1-31.348-33.334h-25.57A83.824 83.824 0 0 0 45.2 162.292a85.956 85.956 0 0 0 14.47 7.813.22.22 0 0 0 .179.114 79.966 79.966 0 0 0 15.69 4.883 106.008 106.008 0 0 0 6.104 1.009zm-62.241-41.44h25.733a82.359 82.359 0 0 1-11.394-38.152H8.138a90.741 90.741 0 0 0 1.628 12.923 78.566 78.566 0 0 0 4.883 15.902 88.153 88.153 0 0 0 4.655 9.375zM8.138 88.397h25.635A88.511 88.511 0 0 1 46.42 50.245H19.353a88.153 88.153 0 0 0-4.704 9.375s0 .114-.114.163A81.236 81.236 0 0 0 9.652 75.49a83.759 83.759 0 0 0-1.628 12.907zm16.488-46.241h27.003A191.606 191.606 0 0 1 82.131 8.708c-2.262.277-4.492.602-6.641 1.058a78.713 78.713 0 0 0-15.87 4.883 89.911 89.911 0 0 0-14.47 7.813 83.824 83.824 0 0 0-20.525 19.532h0zm78.127-33.448a186.577 186.577 0 0 1 30.518 33.448h27.019a79.152 79.152 0 0 0-8.138-9.375 81.073 81.073 0 0 0-12.419-10.205 86.705 86.705 0 0 0-14.405-7.829s-.098 0-.163-.098a79.999 79.999 0 0 0-15.69-4.883c-2.214-.439-4.443-.781-6.657-1.058h0zm-6.25 5.274v28.175h26.84a188.286 188.286 0 0 0-26.84-28.175zm-8.138 157.279v-28.5H60.223a171.993 171.993 0 0 0 28.24 28.5zm0-129.105V13.981a189.295 189.295 0 0 0-26.807 28.175z"/></svg></span>',
    step1: '<span class="shoppyfit-icon-browser"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 245.657"><path d="M117.011 163.676q-6.283 6.218-13.623 12.419l6.087-1.009a80.373 80.373 0 0 0 11.524-3.255l.7 1.042 1.628 2.067h0 0a26.693 26.693 0 0 0 3.467 3.255 89.992 89.992 0 0 1-15.837 4.753 95.592 95.592 0 0 1-37.159 0 87.046 87.046 0 0 1-17.253-5.322.423.423 0 0 1-.228-.114 101.077 101.077 0 0 1-15.625-8.415 88.56 88.56 0 0 1-13.672-11.214 85.761 85.761 0 0 1-11.214-13.64 97.317 97.317 0 0 1-8.545-15.658 90.806 90.806 0 0 1-5.436-17.546 95.592 95.592 0 0 1 0-37.159 86.037 86.037 0 0 1 5.339-17.253.537.537 0 0 1 .098-.228 98.212 98.212 0 0 1 8.545-15.707 87.893 87.893 0 0 1 11.214-13.656 84.947 84.947 0 0 1 13.672-11.231A97.17 97.17 0 0 1 56.43 7.259a88.739 88.739 0 0 1 17.448-5.436 95.592 95.592 0 0 1 37.159 0 87.714 87.714 0 0 1 17.253 5.322.456.456 0 0 1 .212.114 100.507 100.507 0 0 1 15.756 8.545 88.56 88.56 0 0 1 13.623 11.198 85.077 85.077 0 0 1 11.214 13.688 94.713 94.713 0 0 1 8.545 15.739 88.739 88.739 0 0 1 5.436 17.481l.195.977-8.822-2.49a76.499 76.499 0 0 0-4.232-12.744 88.251 88.251 0 0 0-4.671-9.375H138.48a106.562 106.562 0 0 1 6.836 13.819l-10.026-2.702a106.985 106.985 0 0 0-6.283-11.117H96.454v5.55l-.993.358a21.941 21.941 0 0 0-7.097 4.362V50.245H55.812q-12.484 19.385-14.03 38.152H83.4q1.628 4.02 3.402 8.138H41.7c.505 12.81 4.883 25.505 12.826 38.152h33.888v-34.49l8.138 17.904v16.553h7.748l3.727 8.138H96.503v28.5a201.567 201.567 0 0 0 17.139-15.707q1.709 4.053 3.369 8.138zm69.761-4.167a7.552 7.552 0 0 1-1.904 1.286h-.13a6.738 6.738 0 0 1-7.097-.977l-18.881-16.016-6.511 15.902a21.045 21.045 0 0 1-1.937 3.662 14.812 14.812 0 0 1-2.458 2.865 7.78 7.78 0 0 1-12.207-1.335 15.105 15.105 0 0 1-1.497-2.653c-11.231-28.467-26.465-56.805-37.859-85.289a5.062 5.062 0 0 1 5.68-6.966c27.296 5.046 62.664 16.586 90.416 23.943 8.627 2.279 10.026 9.88 3.662 15.772a19.874 19.874 0 0 1-3.255 2.474c-4.883 2.767-9.766 5.973-14.649 8.903l18.799 16.114a6.917 6.917 0 0 1 1.628 2.051v.13a6.966 6.966 0 0 1 .635 2.393h0a6.934 6.934 0 0 1-.26 2.507 7.145 7.145 0 0 1-1.172 2.262 153.894 153.894 0 0 1-11.003 12.972zm-4.883-6.25l9.099-10.677c-4.004-3.434-21.159-16.748-22.933-19.955a3.923 3.923 0 0 1 1.351-5.29c5.957-3.255 13.607-7.91 19.255-11.67a13.64 13.64 0 0 0 1.986-1.449 7.194 7.194 0 0 0 1.221-1.416l.26-.488-.505-.293a6.38 6.38 0 0 0-1.237-.423l-84.589-22.494 35.531 79.982a7.813 7.813 0 0 0 .619 1.139l.358.472.456-.326a7.341 7.341 0 0 0 1.188-1.449 12.224 12.224 0 0 0 1.107-2.165c2.653-6.511 5.68-15.414 8.789-21.436l.374-.521a3.906 3.906 0 0 1 5.485-.439l22.201 18.832zM81.594 176.095a171.814 171.814 0 0 1-31.348-33.334h-25.57A83.824 83.824 0 0 0 45.2 162.292a85.956 85.956 0 0 0 14.47 7.813.22.22 0 0 0 .179.114 79.966 79.966 0 0 0 15.69 4.883 106.008 106.008 0 0 0 6.104 1.009zm-62.241-41.44h25.733a82.359 82.359 0 0 1-11.394-38.152H8.138a90.741 90.741 0 0 0 1.628 12.923 78.566 78.566 0 0 0 4.883 15.902 88.153 88.153 0 0 0 4.655 9.375zM8.138 88.397h25.635A88.511 88.511 0 0 1 46.42 50.245H19.353a88.153 88.153 0 0 0-4.704 9.375s0 .114-.114.163A81.236 81.236 0 0 0 9.652 75.49a83.759 83.759 0 0 0-1.628 12.907zm16.488-46.241h27.003A191.606 191.606 0 0 1 82.131 8.708c-2.262.277-4.492.602-6.641 1.058a78.713 78.713 0 0 0-15.87 4.883 89.911 89.911 0 0 0-14.47 7.813 83.824 83.824 0 0 0-20.525 19.532h0zm78.127-33.448a186.577 186.577 0 0 1 30.518 33.448h27.019a79.152 79.152 0 0 0-8.138-9.375 81.073 81.073 0 0 0-12.419-10.205 86.705 86.705 0 0 0-14.405-7.829s-.098 0-.163-.098a79.999 79.999 0 0 0-15.69-4.883c-2.214-.439-4.443-.781-6.657-1.058h0zm-6.25 5.274v28.175h26.84a188.286 188.286 0 0 0-26.84-28.175zm-8.138 157.279v-28.5H60.223a171.993 171.993 0 0 0 28.24 28.5zm0-129.105V13.981a189.295 189.295 0 0 0-26.807 28.175z"/></svg></span>',
    step2: '<span class="shoppyfit-icon-browser"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 245.657"><path d="M117.011 163.676q-6.283 6.218-13.623 12.419l6.087-1.009a80.373 80.373 0 0 0 11.524-3.255l.7 1.042 1.628 2.067h0 0a26.693 26.693 0 0 0 3.467 3.255 89.992 89.992 0 0 1-15.837 4.753 95.592 95.592 0 0 1-37.159 0 87.046 87.046 0 0 1-17.253-5.322.423.423 0 0 1-.228-.114 101.077 101.077 0 0 1-15.625-8.415 88.56 88.56 0 0 1-13.672-11.214 85.761 85.761 0 0 1-11.214-13.64 97.317 97.317 0 0 1-8.545-15.658 90.806 90.806 0 0 1-5.436-17.546 95.592 95.592 0 0 1 0-37.159 86.037 86.037 0 0 1 5.339-17.253.537.537 0 0 1 .098-.228 98.212 98.212 0 0 1 8.545-15.707 87.893 87.893 0 0 1 11.214-13.656 84.947 84.947 0 0 1 13.672-11.231A97.17 97.17 0 0 1 56.43 7.259a88.739 88.739 0 0 1 17.448-5.436 95.592 95.592 0 0 1 37.159 0 87.714 87.714 0 0 1 17.253 5.322.456.456 0 0 1 .212.114 100.507 100.507 0 0 1 15.756 8.545 88.56 88.56 0 0 1 13.623 11.198 85.077 85.077 0 0 1 11.214 13.688 94.713 94.713 0 0 1 8.545 15.739 88.739 88.739 0 0 1 5.436 17.481l.195.977-8.822-2.49a76.499 76.499 0 0 0-4.232-12.744 88.251 88.251 0 0 0-4.671-9.375H138.48a106.562 106.562 0 0 1 6.836 13.819l-10.026-2.702a106.985 106.985 0 0 0-6.283-11.117H96.454v5.55l-.993.358a21.941 21.941 0 0 0-7.097 4.362V50.245H55.812q-12.484 19.385-14.03 38.152H83.4q1.628 4.02 3.402 8.138H41.7c.505 12.81 4.883 25.505 12.826 38.152h33.888v-34.49l8.138 17.904v16.553h7.748l3.727 8.138H96.503v28.5a201.567 201.567 0 0 0 17.139-15.707q1.709 4.053 3.369 8.138zm69.761-4.167a7.552 7.552 0 0 1-1.904 1.286h-.13a6.738 6.738 0 0 1-7.097-.977l-18.881-16.016-6.511 15.902a21.045 21.045 0 0 1-1.937 3.662 14.812 14.812 0 0 1-2.458 2.865 7.78 7.78 0 0 1-12.207-1.335 15.105 15.105 0 0 1-1.497-2.653c-11.231-28.467-26.465-56.805-37.859-85.289a5.062 5.062 0 0 1 5.68-6.966c27.296 5.046 62.664 16.586 90.416 23.943 8.627 2.279 10.026 9.88 3.662 15.772a19.874 19.874 0 0 1-3.255 2.474c-4.883 2.767-9.766 5.973-14.649 8.903l18.799 16.114a6.917 6.917 0 0 1 1.628 2.051v.13a6.966 6.966 0 0 1 .635 2.393h0a6.934 6.934 0 0 1-.26 2.507 7.145 7.145 0 0 1-1.172 2.262 153.894 153.894 0 0 1-11.003 12.972zm-4.883-6.25l9.099-10.677c-4.004-3.434-21.159-16.748-22.933-19.955a3.923 3.923 0 0 1 1.351-5.29c5.957-3.255 13.607-7.91 19.255-11.67a13.64 13.64 0 0 0 1.986-1.449 7.194 7.194 0 0 0 1.221-1.416l.26-.488-.505-.293a6.38 6.38 0 0 0-1.237-.423l-84.589-22.494 35.531 79.982a7.813 7.813 0 0 0 .619 1.139l.358.472.456-.326a7.341 7.341 0 0 0 1.188-1.449 12.224 12.224 0 0 0 1.107-2.165c2.653-6.511 5.68-15.414 8.789-21.436l.374-.521a3.906 3.906 0 0 1 5.485-.439l22.201 18.832zM81.594 176.095a171.814 171.814 0 0 1-31.348-33.334h-25.57A83.824 83.824 0 0 0 45.2 162.292a85.956 85.956 0 0 0 14.47 7.813.22.22 0 0 0 .179.114 79.966 79.966 0 0 0 15.69 4.883 106.008 106.008 0 0 0 6.104 1.009zm-62.241-41.44h25.733a82.359 82.359 0 0 1-11.394-38.152H8.138a90.741 90.741 0 0 0 1.628 12.923 78.566 78.566 0 0 0 4.883 15.902 88.153 88.153 0 0 0 4.655 9.375zM8.138 88.397h25.635A88.511 88.511 0 0 1 46.42 50.245H19.353a88.153 88.153 0 0 0-4.704 9.375s0 .114-.114.163A81.236 81.236 0 0 0 9.652 75.49a83.759 83.759 0 0 0-1.628 12.907zm16.488-46.241h27.003A191.606 191.606 0 0 1 82.131 8.708c-2.262.277-4.492.602-6.641 1.058a78.713 78.713 0 0 0-15.87 4.883 89.911 89.911 0 0 0-14.47 7.813 83.824 83.824 0 0 0-20.525 19.532h0zm78.127-33.448a186.577 186.577 0 0 1 30.518 33.448h27.019a79.152 79.152 0 0 0-8.138-9.375 81.073 81.073 0 0 0-12.419-10.205 86.705 86.705 0 0 0-14.405-7.829s-.098 0-.163-.098a79.999 79.999 0 0 0-15.69-4.883c-2.214-.439-4.443-.781-6.657-1.058h0zm-6.25 5.274v28.175h26.84a188.286 188.286 0 0 0-26.84-28.175zm-8.138 157.279v-28.5H60.223a171.993 171.993 0 0 0 28.24 28.5zm0-129.105V13.981a189.295 189.295 0 0 0-26.807 28.175z"/></svg></span>',
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
    // format RRULE
    if (data.recurrence != null && data.recurrence != '') {
        // remove spaces and force upper case
        data.recurrence = data.recurrence.replace(/\s+/g, '').toUpperCase();
        // pre-validate
        if (!/^(RRULE:[\w=;,:+-/\\]+|daily|weekly|monthly|yearly)$/im.test(data.recurrence)) {
            data.recurrence = '!wrong rrule format!';
        } else {
            // check if RRULE already
            if (/^RRULE:/i.test(data.recurrence)) {
                // draw easy rules from RRULE if possible
                const rruleParts = data.recurrence.substr(6).split(';');
                const rruleObj = new Object();
                rruleParts.forEach(function(rule) {
                    rruleObj[rule.split('=')[0]] = rule.split('=')[1];
                });
                data.recurrence_until = rruleObj.UNTIL ? rruleObj.UNTIL : '';
                data.recurrence_count = rruleObj.COUNT ? rruleObj.COUNT : '';
                data.recurrence_byDay = rruleObj.BYDAY ? rruleObj.BYDAY : '';
                data.recurrence_byMonth = rruleObj.BYMONTH ? rruleObj.BYMONTH : '';
                data.recurrence_byMonthDay = rruleObj.BYMONTHDAY ? rruleObj.BYMONTHDAY : '';
                data.recurrence_interval = rruleObj.INTERVAL ? rruleObj.INTERVAL : 1;
                data.recurrence_frequency = rruleObj.FREQ ? rruleObj.FREQ : '';
            } else {
                // set interval if not given
                if (data.recurrence_interval == null || data.recurrence_interval == '') {
                    data.recurrence_interval = 1;
                }
                // set weekstart if not given
                if (
                    data.recurrence_weekstart == null ||
                    (data.recurrence_weekstart == '') | (data.recurrence_weekstart.length > 2)
                ) {
                    data.recurrence_weekstart = 'MO';
                }
                // save frequency before overriding the main recurrence data
                data.recurrence_frequency = data.recurrence;
                // generate the RRULE from easy rules
                data.recurrence =
                    'RRULE:FREQ=' +
                    data.recurrence +
                    ';WKST=' +
                    data.recurrence_weekstart +
                    ';INTERVAL=' +
                    data.recurrence_interval;
                // TODO: If "until" is given, translate it into a "count" and remove the "until" (here and in the above block). This would be way more stable!
                if (data.recurrence_until != null && data.recurrence_until != '') {
                    if (data.endTime != null && data.endTime != '') {
                        data.recurrence =
                            data.recurrence +
                            ';UNTIL=' +
                            data.recurrence_until.replace(/-/g, '').slice(0, 8) +
                            'T' +
                            data.endTime.replace(':', '') +
                            '00';
                    } else {
                        data.recurrence =
                            data.recurrence + ';UNTIL=' + data.recurrence_until.replace(/-/g, '').slice(0, 8);
                    }
                }
                if (data.recurrence_count != null && data.recurrence_count != '') {
                    data.recurrence = data.recurrence + ';COUNT=' + data.recurrence_count;
                }
                if (data.recurrence_byDay != null && data.recurrence_byDay != '') {
                    data.recurrence = data.recurrence + ';BYDAY=' + data.recurrence_byDay;
                }
                if (data.recurrence_byMonth != null && data.recurrence_byMonth != '') {
                    data.recurrence = data.recurrence + ';BYMONTH=' + data.recurrence_byMonth;
                }
                if (data.recurrence_byMonthDay != null && data.recurrence_byMonthDay != '') {
                    data.recurrence = data.recurrence + ';BYMONTHDAY=' + data.recurrence_byMonthDay;
                }
            }
        }
    }
    // cleanup options, standardizing names and splitting off custom labels
    data.optionLabels = [];
    for (let i = 0; i < data.options.length; i++) {
        let cleanOption = data.options[`${i}`].split('|');
        if (cleanOption[1] != null) {
            data.optionLabels[`${i}`] = cleanOption[1];
        } else {
            data.optionLabels[`${i}`] = '';
        }
    }

    // set default listStyle
    if (data.listStyle == null || data.listStyle == '') {
        data.listStyle = 'dropdown';
    }
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
    if (data.lightMode == null || data.lightMode == '') {
        data.lightMode = 'light';
    } else if (data.lightMode != null && data.lightMode != '') {
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        switch (data.lightMode) {
            case 'system':
                if (prefersDarkScheme.matches) {
                    data.lightMode = 'dark';
                } else {
                    data.lightMode = 'light';
                }
                break;
            case 'bodyScheme':
            case 'dark':
                break;
            default:
                data.lightMode = 'light';
                break;
        }
    }
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
    // decorate description
    if (data.description != null && data.description != '') {
        // store a clean description copy without the URL magic for iCal
        data.descriptionHtmlFree = shoppyfit_rewrite_html_elements(data.description, true);
        // ...and transform pseudo elements for the regular one
        data.description = shoppyfit_rewrite_html_elements(data.description);
    }
    return data;
}

// CHECK FOR REQUIRED FIELDS
function shoppyfit_check_required(data) {
    // check for at least 1 option
    if (data.options == null || data.options.length < 1) {
        console.error('Find Size button generation failed: no valid options set');
        return false;
    }
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
    // validate prefix
    if (data.identifier != null && data.identifier != '') {
        if (!/^[\w-]+$/.test(data.identifier)) {
            data.identifier = '';
            console.error('Find Size button generation: identifier invalid - using auto numbers instead');
        }
    }
    const msgPrefix = 'Find Size button generation (' + data.identifier + ')';

    // validate organizer
    if (data.organizer != null && data.organizer != '') {
        const organizerParts = data.organizer.split('|');
        if (
            organizerParts.length != 2 ||
            organizerParts[0].length > 50 ||
            organizerParts[1].length > 80 ||
            !shoppyfit_validEmail(organizerParts[1])
        ) {
            console.error(
                msgPrefix + ' failed: organizer needs to match the schema "NAME|EMAIL" with a valid email address'
            );
            return false;
        }
    }
    // validate sequence number if given and set it 0 if not
    if (data.sequence != null && data.sequence != '') {
        if (!/^\d+$/.test(data.sequence)) {
            console.log(msgPrefix + ': sequence needs to be a number. Used the default 0 instead');
            data.sequence = 0;
        }
    } else {
        data.sequence = 0;
    }
    // validate options
    if (!data.options.every(function(option) {
            if (!shoppyfitOptions.includes(option)) {
                console.error(msgPrefix + ' failed: invalid option [' + option + ']');
                return false;
            }
            return true;
        })) {
        return false;
    }

    // on passing the validation, return true
    return true;
}

// GENERATE THE ACTUAL BUTTON
// helper function to generate the labels for the button and list options
function shoppyfit_generate_label(data, parent, type, icon = false, text = '', oneOption = false) {
    let defaultTriggerText = shoppyfit_translate_hook('Find Size', data.language, data);
    // if there is only 1 option, we use the trigger text on the option label. Therefore, forcing it here
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

        case 'step1':
            parent.addEventListener(
                'click',
                shoppyfit_debounce(() => {
                    oneOption ? parent.blur() : shoppyfit_toggle('close');
                    // shoppyfit_generate_google(data);
                })
            );
            parent.id = data.identifier + '-step 1';
            text = text || 'step1';
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
        iconEl.innerHTML = shoppyfitIcon[`${type}`];
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
    // generate the label incl. eventListeners
    // if there is only 1 calendar option, we directly show this at the button, but with the trigger's label text
    if (data.options.length === 1) {
        buttonTrigger.classList.add('shoppyfit-single');
        shoppyfit_generate_label(data, buttonTrigger, data.options[0], true, data.label, true);
    } else {
        shoppyfit_generate_label(data, buttonTrigger, 'trigger', true, data.label);
        // create an empty anchor div to place the dropdown, while the position can be defined via CSS
        const buttonDropdownAnchor = document.createElement('div');
        buttonDropdownAnchor.classList.add('shoppyfit-dropdown-anchor');
        buttonTrigger.appendChild(buttonDropdownAnchor);
    }
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

// generate the dropdown list (can also appear wihtin a modal, if option is set)
function shoppyfit_generate_dropdown_list(data) {
    const optionsList = document.createElement('div');
    optionsList.classList.add('shoppyfit-list');
    optionsList.classList.add('shoppyfit-' + data.lightMode);
    if (data.rtl) {
        optionsList.classList.add('shoppyfit-rtl');
    }
    optionsList.style.fontSize = data.size + 'px';
    // generate the list items
    let listCount = 0;
    data.options.forEach(function(option) {
        const optionItem = document.createElement('div');
        optionItem.classList.add('shoppyfit-list-item');
        optionItem.tabIndex = 0;
        listCount++;
        optionItem.dataset.optionNumber = listCount;
        optionsList.appendChild(optionItem);
        // generate the label incl. individual eventListener
        shoppyfit_generate_label(data, optionItem, option, true, data.optionLabels[listCount - 1]);
    });
    // in the modal case, we also render a close option
    if (data.listStyle === 'modal') {
        const optionItem = document.createElement('div');
        optionItem.classList.add('shoppyfit-list-item', 'shoppyfit-list-item-close');
        optionItem.tabIndex = 0;
        optionsList.appendChild(optionItem);
        shoppyfit_generate_label(data, optionItem, 'close', true);
    }
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

// show the dropdown list + background overlay
function shoppyfit_open(data, button, keyboardTrigger = false, generatedButton = false) {
    // abort early if an Find Size dropdown or modal already opened
    if (document.querySelector('.shoppyfit-list') || document.querySelector('.shoppyfit-modal')) return;
    // generate list and prepare wrapper
    const list = shoppyfit_generate_dropdown_list(data);
    const listWrapper = document.createElement('div');
    listWrapper.classList.add('shoppyfit-list-wrapper');
    // set list styles, set button to shoppyfit-active and force modal listStyle if no button is set
    if (button) {
        button.classList.add('shoppyfit-active');
        if (data.listStyle === 'modal') {
            button.classList.add('shoppyfit-modal-style');
            list.classList.add('shoppyfit-modal');
        } else {
            listWrapper.appendChild(list);
            listWrapper.classList.add('shoppyfit-dropdown');
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
        document.body.classList.add('shoppyfit-modal-no-scroll');
    } else {
        document.body.appendChild(listWrapper);
        listWrapper.appendChild(list);
        listWrapper.classList.add('shoppyfit-style-' + data.buttonStyle);
        document.body.appendChild(bgOverlay);
        if (data.listStyle === 'dropdown-static') {
            // in the dropdown-static case, we do not dynamically adjust whether we show the dropdown upwards
            shoppyfit_position_list(button, listWrapper, true);
        } else {
            shoppyfit_position_list(button, listWrapper);
        }
    }
    // set overlay size just to be sure
    shoppyfit_set_fullsize(bgOverlay);
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
    document.body.classList.remove('shoppyfit-modal-no-scroll');
    // remove dropdowns, modals, and bg overlays (should only be one of each at max)
    Array.from(document.querySelectorAll('.shoppyfit-list-wrapper'))
        .concat(Array.from(document.querySelectorAll('.shoppyfit-list')))
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
    document.body.classList.add('shoppyfit-modal-no-scroll');
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
    shoppyfit_set_fullsize(bgOverlay);
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

// SHARED FUNCTION TO CALCULATE THE POSITION OF THE DROPDOWN LIST
function shoppyfit_position_list(trigger, list, blockUpwards = false, resize = false) {
    // check for position anchor
    let anchorSet = false;
    const originalTrigger = trigger;
    if (trigger.querySelector('.shoppyfit-dropdown-anchor') !== null) {
        trigger = trigger.querySelector('.shoppyfit-dropdown-anchor');
        anchorSet = true;
    }
    // calculate position
    let triggerDim = trigger.getBoundingClientRect();
    let listDim = list.getBoundingClientRect();
    const btnDim = originalTrigger.getBoundingClientRect();
    if (anchorSet === true && !list.classList.contains('shoppyfit-dropoverlay')) {
        // in the regular case, we also check for the ideal direction
        // not in the !updateDirection case and not if there is not enough space above
        const viewportHeight = document.documentElement.clientHeight;
        if (
            (list.classList.contains('shoppyfit-dropup') && resize) ||
            (!blockUpwards &&
                triggerDim.top + listDim.height > viewportHeight - 20 &&
                2 * btnDim.top + btnDim.height - triggerDim.top - listDim.height > 20)
        ) {
            originalTrigger.classList.add('shoppyfit-dropup');
            list.classList.add('shoppyfit-dropup');
            list.style.bottom =
                2 * viewportHeight -
                (viewportHeight + (btnDim.top + (btnDim.top + btnDim.height - triggerDim.top))) -
                window.scrollY +
                'px';
        } else {
            list.style.top = window.scrollY + triggerDim.top + 'px';
            if (originalTrigger.classList.contains('shoppyfit-dropup')) {
                originalTrigger.classList.remove('shoppyfit-dropup');
            }
        }
        // read trigger dimensions again, since after adjusting the top value of the list, something might have changed (e.g. re-adjustment due to missing scrollbars at this point in time)
        triggerDim = trigger.getBoundingClientRect();
        if (list.classList.contains('shoppyfit-style-round') || list.classList.contains('shoppyfit-style-text')) {
            list.style.minWidth = triggerDim.width + 'px';
        } else {
            list.style.width = triggerDim.width + 'px';
        }
        // read list dimensions again, since we altered the width in the step before
        listDim = list.getBoundingClientRect();
        list.style.left = triggerDim.left - (listDim.width - triggerDim.width) / 2 + 'px';
    } else {
        // when there is no anchor set (only the case with custom implementations) or the listStyle is set respectively (overlay), we render the modal centered above the trigger
        // make sure the trigger is not moved over it via CSS in this case!
        let listWidth = triggerDim.width + 20 + 'px';
        list.style.minWidth = listWidth;
        // read list dimensions again, since we altered the width in the step before
        listDim = list.getBoundingClientRect();
        list.style.top = window.scrollY + btnDim.top + btnDim.height / 2 - listDim.height / 2 + 'px';
        list.style.left = triggerDim.left - (listDim.width - triggerDim.width) / 2 + 'px';
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
    // global listener to arrow key optionlist navigation
    document.addEventListener('keydown', (event) => {
        if (
            document.querySelector('.shoppyfit-list') &&
            (event.key === 'ArrowDown' || event.key === 'ArrowUp' || event.key === 'Tab')
        ) {
            let targetFocus = 0;
            let currFocusOption = document.activeElement;
            const optionListCount = document.querySelectorAll('.shoppyfit-list-item').length;
            if (currFocusOption.classList.contains('shoppyfit-list-item')) {
                if (event.key === 'ArrowDown' && currFocusOption.dataset.optionNumber < optionListCount) {
                    event.preventDefault();
                    targetFocus = parseInt(currFocusOption.dataset.optionNumber) + 1;
                } else if (event.key === 'ArrowUp' && currFocusOption.dataset.optionNumber >= 1) {
                    event.preventDefault();
                    targetFocus = parseInt(currFocusOption.dataset.optionNumber) - 1;
                }
                if (targetFocus > 0) {
                    document.querySelector('.shoppyfit-list-item[data-option-number="' + targetFocus + '"]').focus();
                }
            } else {
                event.preventDefault();
                if (
                    document.querySelector('.shoppyfit-list-wrapper.shoppyfit-dropup') &&
                    (event.key === 'ArrowDown' || event.key === 'ArrowUp')
                ) {
                    document
                        .querySelector('.shoppyfit-list-item[data-option-number="' + optionListCount + '"]')
                        .focus();
                } else {
                    document.querySelector('.shoppyfit-list-item[data-option-number="1"]').focus();
                }
            }
        }
    });
    // Global listener to any screen changes
    window.addEventListener(
        'resize',
        shoppyfit_throttle(() => {
            const activeOverlay = document.getElementById('shoppyfit-bgoverlay');
            if (activeOverlay != null) {
                shoppyfit_set_fullsize(activeOverlay);
            }
            const activeButton = document.querySelector('.shoppyfit-active');
            const activeList = document.querySelector('.shoppyfit-dropdown');
            if (activeButton != null && activeList != null) {
                shoppyfit_position_list(activeButton, activeList, false, true);
            }
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
        'iCal File': 'iCal-tiedosto',
        Close: 'Sulje',
    },
    sv: {
        'Find Size': 'Lägg till i kalender',
        'iCal File': 'iCal-fil',
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
        'iCal File': 'File iCal',
        Close: 'Chiudere',
    },
    ko: {
        'Find Size': '캘린더에 추가',
        'iCal File': 'iCal 파일',
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

module.exports = { shoppyfit_action, shoppyfit_init };