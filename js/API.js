class API {
    async obtenerDatos() {

        const total = 1000;
        //obtener datos desde la api
        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

        //retornar datos JSON

        const respuestaJSON = await datos.json();

        return {
            respuestaJSON
        }
    }
}