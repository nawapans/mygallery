(function() {

    var mX, mY, distance,
        $distance = $('#distance span');
    $element = $('#element');


    $(document).mousemove(function(event) {
        $("span ").text("" + event.pageX + "," + event.pageY);
    });

    function calculateDistance(elem, mouseX, mouseY) {
        return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)));
    }


    $(document).mousemove(function(e) {
        mX = e.pageX;
        mY = e.pageY;
        distance = calculateDistance($element, mX, mY);
        $distance.text(distance);
    });


})();