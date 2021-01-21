import {BasePage} from "./base"
import {PageClassRegistry} from "../registry"

class HomePage extends BasePage{
    setup() {
        super.setup();
        console.log("Hello World");
    }
}

PageClassRegistry.register("HomePage", HomePage)

export{
    HomePage
}
