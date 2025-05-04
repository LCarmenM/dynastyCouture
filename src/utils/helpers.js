/**
 * Format currency value to display with currency symbol
 * @param {number} value - The value to format
 * @param {string} [currency='USD'] - The currency code
 * @param {string} [locale='en-US'] - The locale for formatting
 * @returns {string} The formatted currency string
 */
export const formatCurrency = (value, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

/**
 * Truncate text to a specified length
 * @param {string} text - The text to truncate
 * @param {number} [maxLength=100] - Maximum length before truncation
 * @param {string} [suffix='...'] - Suffix to add to truncated text
 * @returns {string} The truncated text
 */
export const truncateText = (text, maxLength = 100, suffix = '...') => {
  if (!text) return '';
  if (text.length <= maxLength) return text;
  
  return text.substring(0, maxLength).trim() + suffix;
};

/**
 * Generate a unique ID
 * @param {string} [prefix=''] - Optional prefix for the ID
 * @returns {string} A unique ID
 */
export const generateId = (prefix = '') => {
  return `${prefix}${Math.random().toString(36).substring(2, 9)}`;
};

/**
 * Check if an object is empty
 * @param {Object} obj - The object to check
 * @returns {boolean} True if the object is empty
 */
export const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0;
};

/**
 * Debounce a function call
 * @param {Function} func - The function to debounce
 * @param {number} [wait=300] - Wait time in milliseconds
 * @returns {Function} The debounced function
 */
export const debounce = (func, wait = 300) => {
  let timeout;
  
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Get a random item from an array
 * @param {Array} array - The array to get a random item from
 * @returns {*} A random item from the array
 */
export const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

/**
 * Capitalize the first letter of a string
 * @param {string} string - The string to capitalize
 * @returns {string} The capitalized string
 */
export const capitalizeFirstLetter = (string) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
};