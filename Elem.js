class Elem {
    constructor(id, szulo) {
        this.id = id;
        szulo.append(`
        <div class="elem">
            <p></p>
        </div>`);

        const ELEM = $(".container div:last-child");
        this.elem = ELEM;
        ELEM.on("click", () => {    
            this.setElem('X');
            this.esemenyTrigger();
        });
    };
    setElem( tartalom) {
        this.elem.html(`
            <p>${tartalom}</p>
            `);
    }
    esemenyTrigger(){
        const esemeny = new CustomEvent("elemKattintas", { detail: this });
        window.dispatchEvent(esemeny);

    }
}

export default Elem;