/**
 * @type {import('mongoose').Model}
 */
const Template = require('./template.model');
const ERRORS = require('../../lib/errors');

function getTemplates() {
  return new Promise(async (resolve, reject) => {
    try {
      const results = Template.find({ is_deleted: false }, { __v: 0, password: 0 });

      resolve(results);
    } catch (error) {
      reject(ERRORS.INTERNAL);
    }
  });
}

module.exports = {
  getTemplates,
};
