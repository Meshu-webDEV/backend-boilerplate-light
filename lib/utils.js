const { customAlphabet } = require('nanoid');
const ERRORS = require('./errors');
const { v4: uuid } = require('uuid');

/**
 *
 * @returns {Promise<String>} a UUID
 */
function createUUID() {
  return new Promise((resolve, reject) => {
    try {
      resolve(uuid());
    } catch (error) {
      reject(ERRORS.INTERNAL);
    }
  });
}

/**
 *
 * @param {Number} size
 * @param {String} custom Custom alphabet
 * @default 21
 * @returns {Promise<String>} a uniqueid
 */
function createUniqueCustomId(size = 4, custom = '1234567890') {
  return new Promise((resolve, reject) => {
    try {
      const alphabeticalId = customAlphabet(custom, size)();
      resolve(alphabeticalId);
    } catch (error) {
      reject(ERRORS.INTERNAL);
    }
  });
}

function normalize(string = '') {
  return string.toString().replace(/ /g, '').toLowerCase();
}

function structureSuccessJSON(message, code, data = null) {
  return { success: true, code: code ? code : 200, message: message ? message : 'Request has been processed successfully.', data };
}

function isValidObjectId(id = '') {
  return mongoose.Types.ObjectId.isValid(id);
}

function sanitizeInteger(int) {
  return isNaN(parseInt(normalize(int))) ? 0 : parseInt(normalize(int));
}

module.exports = {
  createUUID,
  createUniqueCustomId,
  normalize,
  structureSuccessJSON,
  isValidObjectId,
  sanitizeInteger,
};
