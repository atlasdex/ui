import { successMessage } from "./notification"

const copyToClipboard = (text: string) => {
    let textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove();
    successMessage("Copied to clipboard!")
}
export default copyToClipboard;