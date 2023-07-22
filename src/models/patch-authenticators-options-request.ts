import { ExternalAuthenticators } from './external-authenticators';
import { PatchAuthenticatorsAppleOptionsRequest } from './patch-authenticators-apple-options-request';
import { PatchAuthenticatorsEmailOptionsRequest } from './patch-authenticators-email-options-request';
import { PatchAuthenticatorsFacebookOptionsRequest } from './patch-authenticators-facebook-options-request';
import { PatchAuthenticatorsGoogleOptionsRequest } from './patch-authenticators-google-options-request';
import { PatchAuthenticatorsPasswordOptionsRequest } from './patch-authenticators-password-options-request';
import { PatchAuthenticatorsPhoneOptionsRequest } from './patch-authenticators-phone-options-request';

/**
 * The Patch Authenticators Options Request class
 * @export
 * @interface PatchAuthenticatorsOptionsRequest
 */
export interface PatchAuthenticatorsOptionsRequest {
  /**
   * If enabled, External SigIn Methods are shown on top and the Primary SigIn method is shown on bottom.
   * @type {boolean}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  external_sign_in_methods_first?: boolean;
  /**
   * Order of the External SigIn methods buttons
   * @type {ExternalAuthenticators[]}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  external_sign_in_methods_order?: ExternalAuthenticators[];
  /**
   * Password Authenticator Settings
   * @type {PatchAuthenticatorsPasswordOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  password?: PatchAuthenticatorsPasswordOptionsRequest;
  /**
   * Email Authenticator Settings
   * @type {PatchAuthenticatorsEmailOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  email?: PatchAuthenticatorsEmailOptionsRequest;
  /**
   * Phone Authenticator Settings
   * @type {PatchAuthenticatorsPhoneOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  phone?: PatchAuthenticatorsPhoneOptionsRequest;
  /**
   * Google Authenticator Settings
   * @type {PatchAuthenticatorsGoogleOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  google?: PatchAuthenticatorsGoogleOptionsRequest | null;
  /**
   * Apple Authenticator Settings
   * @type {PatchAuthenticatorsAppleOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  apple?: PatchAuthenticatorsAppleOptionsRequest | null;
  /**
   * Facebook Authenticator Settings
   * @type {PatchAuthenticatorsFacebookOptionsRequest}
   * @memberof PatchAuthenticatorsOptionsRequest
   */
  facebook?: PatchAuthenticatorsFacebookOptionsRequest | null;
}