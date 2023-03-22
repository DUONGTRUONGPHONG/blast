<template>
    <button @click="downloadMusic">Tải nhạc về điện thoại</button>
</template>
<script>
import axios from 'axios';

export default {
    methods: {
        downloadMusic() {
            axios({
                url: 'http://example.com/song.mp3',
                method: 'GET',
                responseType: 'blob', 
            }).then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', 'song.mp3'); 
                document.body.appendChild(link);
                link.click();
            });
        },
    },
};

</script>