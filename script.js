// function that will remove an li from connection requests and change the number of
// "connection requests" and "your connections"
function connectionClick(element) {
    // parent => li tag
    var parent = element.parentElement;

    // parent => ul tag
    parent = parent.parentElement;

    // remove the li from the document
    element.parentElement.remove();

    // loop up to first sibling of parent
    while (parent.previousElementSibling) {
        parent = parent.previousElementSibling;
    }

    // use query selector to get the span that shows the connection number
    var connectionCircle = parent.querySelector("span");
    // decrement the number in the circle and if the number goes down to zero we remove the circle
    if (connectionCircle.innerHTML == 1) connectionCircle.remove();
    else connectionCircle.innerHTML--;

    // move up a level in the dom tree
    parent = parent.parentElement;

    // move parent to be the next element sibling which is the "your connections" div
    parent = parent.nextElementSibling;

    // use query selector to get the span that shows the connection number
    connectionCircle = parent.querySelector(".content-header span");

    // increase the number in connections if we clicked accept
    if (element.classList.contains("accept")) connectionCircle.innerHTML++;
}

// function to change the display name from John Doe to Zach Carrera
function changeName(element) {
    // the parent element of what was clicked
    var parent = element.parentElement;

    // move to parent's sibling that is first in the dom
    while (parent.previousElementSibling) {
        parent = parent.previousElementSibling;
    }

    // change the inner HTML
    parent.innerHTML = "Zach Carrera";
}
