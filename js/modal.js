export const modal = {
    wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.title-result'),
    buttonClose: document.querySelector('.close'),

    open(){
        modal.wrapper.classList.add('open')
        modal.wrapper.classList.add('animation')
    },
    close(){
        modal.wrapper.classList.remove('animation')
        modal.wrapper.classList.remove('open')
    }
} 

modal.buttonClose.onclick = () => modal.close()

//fechar com o ESC
window.addEventListener('keydown', handleKeyDown)
function handleKeyDown(event){
    if(event.key === 'Escape'){
        modal.close()
    }
}