var Checkers = {};

Checkers.ChangeBackgrnd = function (from, to) {
    to.removeClass("piece");
    to.removeClass("black");
    to.removeClass("red");

    if (from.hasClass("piece")) to.addClass("piece");
    if (from.hasClass("black")) to.addClass("black");
    if (from.hasClass("red")) to.addClass("red");

    from.removeClass("piece");
    from.removeClass("black");
    from.removeClass("red");
}

Checkers.MoveThePiece = function (piece) {
    if (!piece.hasClass("highlight-cell")) {
        Checkers.ChangeBackgrnd(Checkers.SelectedCell, piece);
    }

    Checkers.SelectedCell.removeClass("highlight-cell");
    Checkers.SelectedCell = null;
}

Checkers.SelectedPiece = function (cell) {
    if (cell.hasClass("piece")) {
        Checkers.SelectedCell = cell;
        Checkers.SelectedCell.addClass("highlight-cell");
    }
}

$(document).ready(function () {
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.addClass(isDark ? "white" : "navy");
    }

    $(".cell").click(function () {
        if (Checkers.SelectedCell != null) {
            Checkers.MoveThePiece($(this));
        }
        else {
            Checkers.SelectedPiece($(this));
        }
    });
});