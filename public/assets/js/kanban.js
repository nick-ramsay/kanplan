$(document).ready(
    function () {
        console.log("Testing kanban!");
        $(".swimlane-card").draggable();
        $(".swimlane").sortable();
        $(".swimlane").disableSelection();
    }   
);