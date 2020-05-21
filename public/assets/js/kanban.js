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
        initializeBoard();

        $(".sortable").sortable({
            placeholder: "ui-state-highlight",
            connectWith: ".sortable",
            stop: function (event, ui) {
                alert("New Position: " + ui.item.index());
            }
        });

        $(".sortable").disableSelection();

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
    for (i = 0; i < board_content.swimlanes.length; i++) {
        console.log(i);
        console.log(board_content.swimlanes[i].title);
        var newSwimlaneDiv = $('<div class="swimlane"></div>');
        var newDragSwimlaneIcon = $('<img class="swimlane-drag-icon" src="../assets/images/material_io_drag_icon.png">');
        var newSwimlaneTitle = $('<div class="swimlane-heading clearfix"><p class="swimlane-title" contenteditable="true">' + board_content.swimlanes[i].title + '</p></div>');
        var newSortableCardDiv = $('<div class="sortable"></div>');
        var newAddCardDiv = $('<div id="add-new-card" class="button-full-width" onclick="createNewCard()"><span>+ Add Card<span></div>');

        $(newSwimlaneDiv).append(newDragSwimlaneIcon);
        $(newSwimlaneDiv).append(newSwimlaneTitle);

        for (j = 0; j < board_content.swimlanes[i].cards.length; j++) {
            var newCardDiv = $('<div class="swimlane-card ui-state-default"><span>' + board_content.swimlanes[i].cards[j].title + '</span></div>');
            $(newSortableCardDiv).append(newCardDiv);
        }

        $(newSwimlaneDiv).append(newSortableCardDiv);
        $(newSwimlaneDiv).append(newAddCardDiv);
        $("#kanban-container").append(newSwimlaneDiv);
    }

    var addColumnDiv = '<div class="add-swimlane-column"><div id="add-new-swimlane" class="button-full-width"><span>+ Add Column<span></div></div>';
    $("#kanban-container").append(addColumnDiv);
}