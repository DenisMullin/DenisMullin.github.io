document.addEventListener('DOMContentLoaded', () => {
    console.log('start');
    openListHoverEvent();
});


function openListHoverEvent () {
    $('.open-list').each((i, e) => {
        let id = $(e).data('list-id');
        let l = $(`div[data-list-id=${id}]`);
        $(e).on('mouseenter', () => {
            if (l.length) {
                l.removeClass('hidden');
            }
            $(e).addClass('button-select');
        })
        $(e).on('mouseleave', (event) => {
            let n = event.relatedTarget;
            if ($(n).data('list-id') !== id) {
                l.addClass('hidden');
                $(e).removeClass('button-select');
            } else {
                $(n).on('mouseleave', (ev) => {
                    if ($(ev.relatedTarget).data('list-id') !== id) {
                        $(n).addClass('hidden');
                        $(e).removeClass('button-select');
                    }
                })
            }
        })
    })
}

function openListClickEvent () {
    let el = document.querySelectorAll('.open-block');
}


