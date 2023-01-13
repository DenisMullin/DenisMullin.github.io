$(document).ready(() => {

    let showFList = (e) => {
        closeAllList();
        let wrapper = $(e.target).siblings('.full-list');
        wrapper.show();
    }

    let closeAllList = (e) => {
        console.log(e);
        $('.full-list').each((a, b) => {
            $(b)
            .attr('aria-hidden', 'true')
            .hide();
        })
    }

    $('.show-list').mouseenter(showFList).mouseleave(closeAllList);

});
