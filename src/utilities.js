import dayjs from 'dayjs';

/**
 * @param {dayjs.ConfigType} value
 * @returns {string}
 */
function formatDate(value) {
  const month = dayjs(value).format('MMM D');

  return month;
}
console.log(formatDate('2023-10-25T23:12:46.219Z'));

/**
 * @param {TemplateStringsArray} strings
 * @param {...any} values
 * @returns {string}
 */
function html(strings, ...values) {
  return strings.reduce((before, after, index) => {
    const value = values[index - 1];

    if (value === undefined) {
      return before + after;
    }

    if (Array.isArray(value)) {
      return before + value.join('') + after;
    }

    return before + value + after;
  });
}

export {html, formatDate};
