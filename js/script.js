document.addEventListener('DOMContentLoaded', () => {
    console.log('start');
    openListHoverEvent();
    openListClickEvent();
    capClick();

    /*$('input[name=selectedSection]').on('change', () => {
        console.log('section changed');
        console.log($('input[name=selectedSection]').val());
    })

    const swiper = new Swiper('.swiper', {
        initialSlide: 2,
        speed: 500,
    });
    const text = ['Показать товар', 'Выбрать раздел'];
    swiper.on('slideChange', () => {
        console.log($('#select-categories'));
        console.log(text[swiper.activeIndex]);
        $('#select-categories')[0].innerHTML = text[swiper.activeIndex];
    })


    $('#select-categories').on('click', () => {
        if (swiper.activeIndex === 1) {
            swiper.slidePrev();
        } else {
            swiper.slideNext();
        }
    });*/

    $('label[for=search]').on('click', () => {

    });

    $('.cancel-search').on('click', () => {
        $('#search').val('');
        $('#search').focus();
        $('.cancel-search').addClass('hidden')
    })

    $('#search').on('input', function () {
        if ($(this).val().length) {
            $('.cancel-search').removeClass('hidden');
        } else {
            $('.cancel-search').addClass('hidden');
        }
    });

});


function openListHoverEvent () {
    $('.open-list').each((i, e) => {
        let id = $(e).data('list-id');
        let l = $(`div[data-list-id=${id}]`);
        $(e).on('mouseenter', () => {
            if ($('body').hasClass('block-opened')) return;
            if (l.length) {
                l.removeClass('hidden');
                $('#cap').removeClass('hidden');
            }
            $(e).addClass('button-select');
        })
        $(e).on('mouseleave', (event) => {
            if ($('body').hasClass('block-opened')) return;
            $(e).removeClass('button-select');
            if (!id) return;
            let n = event.relatedTarget;
            if ($(n).data('list-id') !== id) {
                l.addClass('hidden');
                $('#cap').addClass('hidden');
            } else {
                $(e).addClass('button-select');
                $(n).on('mouseleave', (ev) => {
                    if ($(ev.relatedTarget).data('list-id') !== id) {
                        $(n).addClass('hidden');
                        $(e).removeClass('button-select');
                        $('#cap').addClass('hidden');
                    }
                })
            }
        })
    })
}

function openListClickEvent () {
    $('.open-block').each((i, e) => {
        let id = $(e).data('list-id');
        $(e).on('mouseenter', () => {
            if ($('body').hasClass('block-opened')) return;
            $(e).addClass('button-select');
        });
        $(e).on('mouseleave', (event) => {
            if ($('body').hasClass('block-opened')) return;
            $(e).removeClass('button-select');
        });
        $(e).on('click', () => {
            let l = $(`div[data-list-id=${id}]`);
            if ($('body').hasClass('block-opened')) {
                if (l.length) {
                    l.addClass('hidden');
                    $('body')
                        .removeClass('block-opened')
                        .attr('data-list-id', '');
                    $('#cap').addClass('hidden');
                }
            } else {
                $(e).addClass('button-select');
                if (l.length) {
                    l.removeClass('hidden');
                    $('body')
                        .addClass('block-opened')
                        .attr('data-list-id', id);
                    $('#cap').removeClass('hidden');
                    let w = $('#select-categories-container').width();
                    $('#search').css('padding-right', w+10)
                }
            }
        })
    });
}

function capClick() {
    $('#cap').on('click', () => {
        closeBlock();
    });

    $('header').on('click', (event) => {
        if (!$(event.target).closest('.open-block').length) $('#cap').click();
    })
}

function closeBlock() {
    $('.list-container').each((i, e) => {
        $(e).addClass('hidden');
    });
    $('.button-select').each((i, e) => {
        $(e).removeClass('button-select');
    })
    $('body').attr('data-list-id', '').removeClass('block-opened');
    $('#cap').addClass('hidden');
}

