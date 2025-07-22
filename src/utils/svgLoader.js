// src/utils/svgLoader.js
export const loadSvg = async (path) => {
    try {
        const response = await fetch(path)
        if (!response.ok) {
            throw new Error(`Failed to load SVG: ${response.status}`)
        }
        return await response.text()
    } catch (error) {
        console.error('Error loading SVG:', error)
        return ''
    }
}