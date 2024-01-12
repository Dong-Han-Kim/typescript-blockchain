// @ts-check
// 타입스크립트가 js 파일도 검사하게 함.

// JSDoc
/**
 * Initializes the project
 * @param {object} config
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */

export function init(config) {
	return true;
}

/**
 * Exit the program
 * @param {number} code
 * @returns number
 */

export function exit(code) {
	return code + 1;
}
