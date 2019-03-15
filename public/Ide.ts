class Ide {
    public genLine = (isOverflow: boolean, content: string, isFirstTime: boolean): string => {
        let result = ''
        if (isOverflow) {
            result = (isFirstTime ? '' : '<br>' ) + '<span style="color: #f00;" onkeyup="update()" contenteditable="true">' + 'WH' + content + '</span>'
        } else {
            result = (isFirstTime ? '' : '<br>' ) + '<span style="color: #000;" onkeyup="update()" contenteditable="true">' + 'wh' + content + '</span>'
        }
        return result
    }
}
