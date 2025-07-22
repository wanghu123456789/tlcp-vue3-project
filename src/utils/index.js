/**
 * 标准化路径
 * @param {string} path
 * @returns {string}
 */
export function getNormalPath(path) {
    if (!path) return ''
    const pathArr = path.split('/')
    const newPathArr = pathArr.filter(item => item !== '')
    return '/' + newPathArr.join('/')
}