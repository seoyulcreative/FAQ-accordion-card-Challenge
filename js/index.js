(() => {
    const mainElem = document.querySelector('main');
    let currentTarget;

    mainElem.addEventListener('click', (e) => {
        let targetElem = e.target;

        // deactivate
        if (currentTarget) {
            currentTarget.classList.remove('active');
        }
        // getTarget
        while(!targetElem.classList.contains('faq-item')){
            targetElem = targetElem.parentNode;

            if(targetElem.nodeName == 'BODY') {
                targetElem = null;
                return;
            }
        }
        // activate
        targetElem.classList.add('active');
        currentTarget = targetElem;
    })
})();