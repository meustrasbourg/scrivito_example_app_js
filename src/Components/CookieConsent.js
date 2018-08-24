import * as React from "react";
import * as Scrivito from "scrivito";
import CookieConsent from "react-cookie-consent";

/**
 * @return {null}
 */
function CookieConsentBox() {
  const root = Scrivito.Obj.root();
  const cookieLink = root.get("cookiePrivacyPolicyLink");
  if (!cookieLink) {
    return null;
  }

  return (
    <CookieConsent
      buttonText="Accept"
      disableStyles="true"
      containerClasses="cookie-box flex-row d-flex"
      contentClasses="cookie-content flex-row d-flex"
      buttonClasses="btn btn-primary cookie-button ml-auto"
    >
      <img className="cookie-img" src="../../src/assets/images/cookie.svg" />
      <div>
        <div className="cookie-box-title">Cookies policy</div>
        <div className="cookie-box-content">
          Our website uses cookies to analyse how the site is used and to ensure
          your experience is consistent between visits.
          <a className="cookie-box-link" href={cookieLink} rel="noopener noreferrer" target="_blank">
            Learn more »
          </a>
        </div>
      </div>
    </CookieConsent>
  );
}

export default Scrivito.connect(CookieConsentBox);
