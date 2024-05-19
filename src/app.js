import './styles.css'
import { ContextMenu } from './menu'
import { ShapeModule } from './modules/shape.module'
import { ClicksModule } from './modules/clicks.module' 
import { BackgroundModule } from './modules/background.module'



const menu = new ContextMenu('.menu')
const backgroundModule = new BackgroundModule('asd', 'asd')
const shape = new ShapeModule('shape', 'shape') 
const clicks = new ClicksModule('click' ,'click')  


menu.open()
menu.close()


menu.add(backgroundModule)
menu.add(clicks)
menu.add(shape)