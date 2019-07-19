/* eslint-disable class-methods-use-this */

import * as Comlink from 'comlink';
// import { decryptStream, getDecryptedContent } from 'src/index';

/**
 * Penumbra Worker class
 */
class PenumbraZipWorker {
  /**
   * Get the contents of an encrypted file
   *
   * @param options - FetchDecryptedContentOptions
   * @returns The file contents
   */
  // getDecryptedContent(...args) {
  //   return getDecryptedContent(...args);
  // }
  /**
   * Get the contents of an encrypted file
   *
   * @param rs ReadableStream to decode
   * @param decipher Decipher instance
   * @param contentLength Content size
   * @param url URL being requested (for progress events, not fetched )
   * @param progressEventName?: string,
   * @returns Decrypted ReadableStream
   */
  // decryptStream(...args) {
  //   return decryptStream(...args);
  // }
}

Comlink.expose(PenumbraZipWorker);
