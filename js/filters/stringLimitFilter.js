angular.module("listaTelefonica").filter("stringLimit", function() {
    return function(input, size) {
        var limit = size || 10;
        return (input.length <= limit ? input : input.substring(0, limit) + '...');
    }
});