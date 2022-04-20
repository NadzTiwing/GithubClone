class Utils{
    hide(element){
        return element.classList.add("hide");
    }

    show(element){
        return element.classList.remove("hide");
    }

    disable(elementName){
        let el = document.querySelector("#"+elementName);
        return el.setAttribute("disabled", true);
    }

    able(elementName){
        let el = document.querySelector("#"+elementName);
        return el.removeAttribute("disabled");
    }
}

