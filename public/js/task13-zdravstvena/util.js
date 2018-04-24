class Util {
    /*
    * Datum i vrijeme u formatu dd.mm.yyyy. hh:mm:ss
    */
    static getDateTimeString() {
        let d = new Date(); // current date and time
        let time = d.toTimeString().split(" ")[0]; // hh:mm:ss
        let day = d.getDate(); // day
        let month = d.getMonth() + 1; // month - january = 0
        let year = d.getFullYear();
        return "[" + day + "." + month + "." + year + ". " + time + "] ";
    }
}

export default Util;