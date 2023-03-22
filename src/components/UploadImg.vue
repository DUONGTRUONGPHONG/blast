<script>
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
export default {
    data() {
        return {
            loading: 0,
            imageUrl: null,
        };
    },
    methods: {
        UploadImage(e) {
            const file = e.target.files[0];
            const storage = getStorage();
            const storageRef = ref(storage, 'images/' + file.name);
            const uploadTask = uploadBytesResumable(storageRef, file);
            uploadTask.on('state_changed',
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    this.loading=progress
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    switch (error.code) {
                        case 'storage/unauthorized':
                            break;
                        case 'storage/canceled':
                            break;
                        case 'storage/unknown':
                            break;
                    }
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        this.imageUrl=downloadURL
                    });
                }
            );
        }
    }
};

</script>

<template>
    <div>
        <h1>Upload Image</h1>
        <label class="cursor-pointer border inline-flex w-28 h-28 justify-center items-center relative">
            <img v-if="imageUrl" class="w-full h-full object-cover" :src="imageUrl" alt="avatar" />
            <div v-else>
                Upload
            </div>
            <input type="file" class="hidden" @change="UploadImage">
            <span v-if="!imageUrl" class="absolute bottom-0 left-0 bg-red-400 h-1 rounded-sm" :style="{ width: loading + '%' }"></span>
        </label>
            
            
    </div>
</template>

<style scoped>

</style>
