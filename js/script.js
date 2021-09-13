const methods = document.querySelectorAll('[data-tag]');
const fullBar = document.querySelector('.bottom');

let storageSpace = () => {
    methods.forEach(method => {
        method.addEventListener("click", () => {
            if (method.classList.contains('storage')) {
                method.classList.remove('storage');
            } else {
                const methodWithStorage = document.querySelectorAll(".storage");
                methodWithStorage.forEach((methodWithStorage) => {
                    methodWithStorage.classList.remove('storage');
                })
                method.classList.add('storage');
            }
})
})}
storageSpace();