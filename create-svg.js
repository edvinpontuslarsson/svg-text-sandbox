/**
 * @param {string} text
 * @param {number | undefined} width
 * @param {number | undefined} height
 * @param {number | undefined} fontSize
 */
function getSvg(text = "", width = 200, height = 44, fontSize = 22) {
  return `
    <svg width="${width}px" height="${height}px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <defs>
            <filter id="rounded-corners-2" primitiveUnits="objectBoundingBox">
                <feImage preserveAspectRatio="none" width="110%" height="110%" x="-5%" y="0%"
                    xlink:href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' viewBox='0 0 400 40' height='40' width='400'%3E%3Crect fill='rgb(28, 28, 28)' x='0' y='0' rx='10' ry='10' width='400' height='40'/%3E%3C/svg%3E" />
                <feComposite operator="over" in="SourceGraphic" />
            </filter>
        </defs>
        <text fill="white" filter="url(#rounded-corners-2)" x="20" y="4">${text}</text>

        <style>
            <![CDATA[
            text {
                dominant-baseline: hanging;
                font: ${fontSize}px Verdana, Helvetica, Arial, sans-serif;
            }
            ]]>
        </style>
    </svg>
`;
}
