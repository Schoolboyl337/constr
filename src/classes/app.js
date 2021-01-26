import {Site} from './site'
import { Sidebar } from './sidebar'
export class app {
    constructor (model) {
        this.model = model
    }

    init() {
        const site = new Site('#site')

        site.render(this.model)
        
        const updateCallback = newBlcok => {
            this.model.push(newBlcok)
            site.render(this.model)
        }
        
        new Sidebar('#panel', updateCallback)  
    }
}