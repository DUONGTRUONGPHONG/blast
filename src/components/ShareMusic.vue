//npm install vue-social-sharing
<template>
    
    <ShareNetwork  network="facebook" url="https://soundcloud.com/nhamgiabao230803/2a-1">
        <button class="border rounded-full text-white bg-blue-800 mt-10 px-3 py-1">
            <span class="text-sm"><i class="fa-brands text-xl text-center fa-facebook"></i> Share</span>
        </button>
    </ShareNetwork>
</template>
<script>

import ShareNetwork from 'vue-social-sharing/src/share-network.js'
export default {
    components: {ShareNetwork},
    data() {
        return {
            shareUrl: 'https://soundcloud.com/nhamgiabao230803/2a-1',
        };
    },
};
</script>