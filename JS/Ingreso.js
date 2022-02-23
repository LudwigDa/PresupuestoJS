class Ingreso extends Dato{
    static contadorIngresos = 0;

    cosntructor(desripcion, valor){
        super(descripcion, valor);
        this._id = ++Ingreso.contadorIngresos;
    }
    get id(){
        return this._id;
    }
}