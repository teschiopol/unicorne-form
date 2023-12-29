function generateForm(fields) {

    // Check parameter
    if (!Array.isArray(fields)) {
        return 'Error: Parameter received is not an Array as expected!';
    }

    // Check content
    if (fields.length < 1) {
        return 'Info: Nothing to generate!?';
    }

    // Work
    let res = 'Success: ';
    fields.forEach(el => {
        if (typeof el.type === 'undefined') {
            res += "<input type='text' id='" + el.id + "' name='" + el.id + "'>";
        } else {
            res += "<input type='" + el.type + "' id='" + el.id + "' name='" + el.id + "'>";
        }
    });
    
    return res;
}
  
module.exports = generateForm
