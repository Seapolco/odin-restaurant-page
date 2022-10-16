function clearPage() {
    console.log(document.body.children);
    while(document.body.firstChild) {
        document.body.removeChild(document.body.firstChild)
    }
}

export default clearPage