import { Cordova, Plugin } from './plugin';
/**
 * @name Base64 To Gallery
 * @description This plugin allows you to save base64 data as a png image into the device
 * @usage
 * ```typescript
 * import { Base64ToGallery } from 'ionic-native';
 *
 *
 * Base64ToGallery.base64ToGallery(base64Data, 'img_').then(
 *   res => console.log('Saved image to gallery ', res),
 *   err => console.log('Error saving image to gallery ', err)
 * );
 * ```
 */
@Plugin({
  plugin: 'cordova-base64-to-gallery',
  pluginRef: 'cordova',
  repo: 'https://github.com/Nexxa/cordova-base64-to-gallery',
  platforms: ['Android', 'iOS', 'Windows Phone 8']
})
export class Base64ToGallery {

  /**
   * Converts a base64 string to an image file in the device gallery
   * @param {string} data The actual base64 string that you want to save
   * @param {any} options (optional) An object with properties: prefix, mediaScanner
   * @returns {Promise} returns a promise that resolves when the image is saved.
   */
  @Cordova()
  static base64ToGallery(data: string, options?: {prefix?: string; mediaScanner?: boolean}): Promise<any> {
    return;
  }

}
