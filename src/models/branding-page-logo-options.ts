/**
 * The Branding Page Logo Options response class
 * @export
 * @interface BrandingPageLogoOptions
 */
export interface BrandingPageLogoOptions {
  /**
   * Specifies Uri of the project logo
   * @type {string}
   * @memberof BrandingPageLogoOptions
   */
  uri?: string | null;
  /**
   * Specifies the height (in Pixels) of the client / project logo
   * @type {number}
   * @memberof BrandingPageLogoOptions
   */
  height: number;
  /**
   * Specifies the horizontal position of the logo
   * @type {string}
   * @memberof BrandingPageLogoOptions
   */
  position: string;
}
