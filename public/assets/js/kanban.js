var board_content = {
    id: "5435345-9809-342",
    title: "Board Template!",
    swimlanes: [
        {
            id: "3584903-8785934-4534",
            title: "Dynamic Board Column!",
            cards: [
                { title: "Dynamic Card 1" },
                { title: "Dynamic Card 2" },
                { title: "Dynamic Card 3" }
            ]
        }
    ]
}

$(document).ready(
    function () {
        console.log(board_content);
        //initializeBoard();

        $(".sortable").sortable({
            placeholder: "ui-state-highlight",
            stop: function (event, ui) {
                alert("New Position: " + ui.item.index());
            }
        });

        $(".sortable").disableSelection();

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

function initializeBoard() {
    for (i=0; i < board_content.swimlanes.length;i++) {
        console.log(i);
        var swimlaneDiv = '<div class="swimlane">';
        var swimlaneTitle = 'div class="swimlane-heading clearfix"><p class="swimlane-title" contenteditable="true">New Swimlane</p></div>';
        $(swimlaneDiv).append(swimlaneTitle);
        $("#swimlane-container").append(swimlaneDiv);
    }
}