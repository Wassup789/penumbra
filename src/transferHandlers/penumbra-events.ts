/* eslint-disable @typescript-eslint/no-explicit-any */
import { transferHandlers } from 'comlink';
import { PenumbraEvent } from '../event';

/** TODO: abstract this into a re-usable event registration & serialization helper */

transferHandlers.set('penumbra-progress', {
  /**
   * Checks if object is a penumbra-progress event
   *
   * @param object Object being passed through Comlink.transfer()
   * @returns true if the object is a penumbra-progress PenumbraEvent
   */
  canHandle(object: any) {
    return (
      object instanceof PenumbraEvent && object.type === 'penumbra-progress'
    );
  },
  /**
   * Serialize penumbra-progress event down to just ProgressDetails
   *
   * @param object Reference to the penumbra-progress PenumbraEvent
   * @returns [Clonables (structured-clone-compatible objects), [Transferables]]
   */
  serialize(object: any) {
    return [object.detail, []];
  },
  /**
   * Re-create PenumbraEvent for re-dispatch in current context
   *
   * @param detail Structured-clone data from serialize()
   * @returns A re-created penumbra-progress PenumbraEvent
   */
  deserialize(detail: any) {
    return new PenumbraEvent('penumbra-progress', { detail });
  },
});

transferHandlers.set('penumbra-encryption-complete', {
  /**
   * Checks if object is a penumbra-encryption-complete event
   *
   * @param object Object being passed through Comlink.transfer()
   * @returns true if the object is a penumbra-progress PenumbraEvent
   */
  canHandle(object: any) {
    return (
      object instanceof PenumbraEvent &&
      object.type === 'penumbra-encryption-complete'
    );
  },
  /**
   * Serialize penumbra-encryption-complete event down to just EncryptionCompletion
   *
   * @param object Reference to the penumbra-encryption-complete PenumbraEvent
   * @returns [Clonables (structured-clone-compatible objects), [Transferables]]
   */
  serialize(object: any) {
    return [object.detail, []];
  },
  /**
   * Re-create PenumbraEvent for re-dispatch in current context
   *
   * @param detail Structured-clone data from serialize()
   * @returns A re-created penumbra-encryption-complete PenumbraEvent
   */
  deserialize(detail: any) {
    return new PenumbraEvent('penumbra-encryption-complete', {
      detail,
    });
  },
});

transferHandlers.set('penumbra-error', {
  /**
   * Checks if object is a penumbra-progress event
   *
   * @param object Object being passed through Comlink.transfer()
   * @returns true if the object is a penumbra-progress PenumbraEvent
   */
  canHandle(object: any) {
    return object instanceof PenumbraEvent && object.type === 'penumbra-error';
  },
  /**
   * Serialize penumbra-progress event down to just ProgressDetails
   *
   * @param object Reference to the penumbra-progress PenumbraEvent
   * @returns [Clonables (structured-clone-compatible objects), [Transferables]]
   */
  serialize(object: any) {
    return [object.detail, []];
  },
  /**
   * Re-create PenumbraEvent for re-dispatch in current context
   *
   * @param detail Structured-clone data from serialize()
   * @returns A re-created penumbra-progress PenumbraEvent
   */
  deserialize(detail: any) {
    return new PenumbraEvent('penumbra-error', { detail });
  },
});

transferHandlers.set('error', {
  /**
   * Checks if object is a penumbra-progress event
   *
   * @param object Object being passed through Comlink.transfer()
   * @returns true if the object is a penumbra-progress PenumbraEvent
   */
  canHandle(object: any) {
    return object instanceof ErrorEvent && object.type === 'error';
  },
  /**
   * Serialize penumbra-progress event down to just ProgressDetails
   *
   * @param object Reference to the penumbra-progress PenumbraEvent
   * @returns [Clonables (structured-clone-compatible objects), [Transferables]]
   */
  serialize(object: any) {
    return [object, []];
  },
  /**
   * Re-create PenumbraEvent for re-dispatch in current context
   *
   * @param detail Structured-clone data from serialize()
   * @returns A re-created penumbra-progress PenumbraEvent
   */
  deserialize(detail: any) {
    const event = new ErrorEvent('error', detail);
    if (detail) {
      Object.keys(detail).forEach((key) => {
        (event as any)[key] = detail[key];
      });
    }
    return event;
  },
});
