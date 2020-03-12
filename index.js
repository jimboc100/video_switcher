document.addEventListener('DOMContentLoaded', function(){
    const wrapper = document.getElementById('video_wrapper');


    let player = document.getElementById('youtube_iframe');

    console.log(player);

    player.setAttribute('src', 'https://www.youtube.com/embed/6TaQ7KV0KuI');

    let button = document.getElementById('yt_button');
    button.addEventListener('click', function () {
        let video1 = '6TaQ7KV0KuI';
        let video2 = 'AbDtYkmFzzU';
        let player = document.getElementById('youtube_iframe');
        console.log(player.getAttribute('src').indexOf(video1) === -1);
        if (player.getAttribute('src').indexOf(video1) === -1){
            player.setAttribute('src', 'https://www.youtube.com/embed/' + video1);
        }else{
            player.setAttribute('src', 'https://www.youtube.com/embed/' + video2);
        }
    });



});
