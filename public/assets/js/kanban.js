$(document).ready(
    function () {
        console.log("Testing kanban!");
        
        $("#sortable").sortable({
            placeholder: "ui-state-highlight"
        });
        
        $("#sortable").disableSelection();
        
        console.log(Date.now());
    }
);

function createNewCard() {
    var uuid1 = Date.now();
    var uuid2 = Math.floor(Math.random() * 100000);
    var uuid3 = Math.floor(Math.random() * 100000);

    var unique_id = uuid1 + "-" + uuid2 + "-" + uuid3;

    console.log(unique_id);
}