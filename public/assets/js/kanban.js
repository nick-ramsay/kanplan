var board_content = {
    id: "5435345-9809-342",
    title: "Board Template!",
    swimlanes: [
        {
            id: "3584903-8785934-4534",
            title: "Dynamic Board Column 1!",
            cards: [
                { title: "Dynamic Card 1.1" },
                { title: "Dynamic Card 1.2" },
                { title: "Dynamic Card 1.3" }
            ]
        },
        {
            id: "3584903-8785934-4535",
            title: "Dynamic Board Column 2!",
            cards: [
                { title: "Dynamic Card 2.1" },
                { title: "Dynamic Card 2.2" },
                { title: "Dynamic Card 2.3" }
            ]
        }
    ]
}

$(document).ready(
    function () {
        console.log(board_content);
        initializeBoard();

        $(".sortable-cards").sortable({
            placeholder: "ui-state-highlight",
            connectWith: ".sortable-cards",
            stop: function (event, ui) {
                alert("New Position: " + ui.item.index());
            },
            update: function (event,ui) {
                $('.swimlane-card').each(function(i) {
                    console.log(i);
                })
            }
        });

        $(".sortable-cards").disableSelection();

        $("#swimlane-container").sortable({
            connectWith: "#swimlane-container",
            delay: 900, //delay for 900 milliseconds until draggable
            cancel: ".swimlane-title",
            stop: function (event, ui) {
                alert("New Position: " + ui.item.index());
            }
        });

        $("#swimlane-container").disableSelection();

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
        var newSwimlaneTitle = $('<div class="swimlane-heading clearfix"><p class="swimlane-title" contenteditable="true">' + board_content.swimlanes[i].title + '</p></div>');
        var newSortableCardDiv = $('<div class="sortable-cards"></div>');
        var newAddCardDiv = $('<div id="add-new-card" class="button-full-width" onclick="createNewCard()"><span>+ Add Card<span></div>');

        $(newSwimlaneDiv).append(newSwimlaneTitle);

        for (j = 0; j < board_content.swimlanes[i].cards.length; j++) {
            var newCardDiv = $('<div class="swimlane-card ui-state-default" data-card-order=' + j + '><span>' + board_content.swimlanes[i].cards[j].title + '</span></div>');
            $(newSortableCardDiv).append(newCardDiv);
        }

        $(newSwimlaneDiv).append(newSortableCardDiv);
        $(newSwimlaneDiv).append(newAddCardDiv);
        $("#swimlane-container").append(newSwimlaneDiv);
    }

    var addColumnDiv = '<div class="add-swimlane-column"><div id="add-new-swimlane" class="button-full-width"><span>+ Add Column<span></div></div>';
    $("#kanban-container").append(addColumnDiv);
}