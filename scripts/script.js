$(document).ready(function() {
    console.log('ready');
    createGrid(16);
    changeColor();
});

function createGrid(pixels) {
    var container_size = parseInt($('div.container').css('width'));
    var rect_size = container_size / pixels;
    var container = $('div.container');
    for (let row_div = 0; row_div < container_size / rect_size; row_div++) {
        for (let col_div = 0; col_div < container_size / rect_size; col_div++) {
            container.append('<div class="grid_element"></div>');
        }
    }
    $('div.grid_element').css({
        width: rect_size,
        height: rect_size,
    });
}

function changeColor() {
    $('div.grid_element').hover(function() {
        // $(this).removeClass('grid_element').addClass('new_grid_element');
        let alpha_value = 0;
        if ($(this).attr('alpha')) {
            alpha_value = parseFloat($(this).attr('alpha')) + 0.1;
            $(this).attr('alpha', alpha_value);
        } else {
            alpha_value = 0.1;
            $(this).attr('alpha', alpha_value);
        }
        $(this).css('background-color', 'rgba(0, 0, 128, ' + alpha_value + ')');
    });
}

function reset_container() {
    var pixels = prompt('Please enter size of the grid..');
    if (pixels !== "" && pixels !== null) {
        $('div.container').empty();
        createGrid(pixels);
        changeColor();
    }
}