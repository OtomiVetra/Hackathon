import { Menu } from './core/menu'

export class ContextMenu extends Menu {
    constructor(selector) {
        super(selector)
        this.list = [] 
    }
    
    open() {
        this.menu = document.querySelector('.menu')
        window.addEventListener('contextmenu', (event) => {
            event.preventDefault()
            if (this.list.length > 0) {
            this.menu.classList.add('open')
            this.menu.style.top = `${event.clientY}px`
            this.menu.style.left = `${event.clientX}px`
            }
        })
    }
    
    close() {
        this.menu.classList.remove('open')
        this.menu.onclick = (event) => {
           this.menu.classList.remove('open')
           const selectedModule = event.target.dataset.type
           this.list.forEach((module) => { if (module.type === selectedModule) module.trigger() })
        }
    }

    add(Module) {
        this.list.push(Module)
        this.menu.innerHTML += Module.toHTML()
    }
}