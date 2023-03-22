<template>
    <div>
        <div>
            <div class="flex justify-center mb-3"><a-button @click="showModal"> Sửa,Thêm</a-button></div>
        <a-modal v-model="visible" :footer="null" title="Sửa hoặc Thêm tên người dùng ">
                <div>
                    <a-form-model layout="inline" :model="Form" @submit="UpdateUser" @submit.native.prevent>
                        <a-form-model-item>
                            <a-input v-model="Form.name" placeholder="Name"></a-input>
                        </a-form-model-item>
                            <a-button type="primary" html-type="submit" :disabled="Form.name === null ">
                                Submit
                            </a-button>
                    </a-form-model>
                </div>
            </a-modal>
        </div>
        <div class="text-left mx-auto w-[30%]">
            <span>Tên người dùng:</span><span  class="font-bold"> {{ name || "Bạn chưa có tên người dùng!!"}}</span> <br> 
        <span>Email:</span> <span class="font-bold">{{ email }}</span> <br>
        </div>
        <!-- <form @submit.prevent="UpdateUser" class="flex items-center justify-center flex-col gap-4">
            <a-input placeholder="Name" type="text" v-model="nameUpdate" required />
            <button type="submit">Update User</button>
        </form> -->
        
        <button v-if="show" @click="GetUrl">
            Bạn muốn có source code của dự án này.
            <span class="hover:text-red-500 font-bold">Click vào đây</span>
        </button>
        <a :href="url" @click="Show" :class="{ hidden: show }" download="">Tải</a>
        <div class="flex gap-3">
            <!-- <img class="w-56 h-56" v-for="(item,index) in imgs" :key="index" :src="item" alt=""> -->
            
                
        </div>
        
    </div>
</template>

<script>
import { getAuth, updateProfile } from "@firebase/auth";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
export default {
    data() {
        return {
            show: true,
            name: null,
            email: null,
            visible: false,
            url: null,
            nameImg: null,
            Form: {
                name: null,
            },
            loading:false
        };
    },
    mounted() {
        const auth = getAuth();
        const user = auth.currentUser;
        console.log(user)
        if (user !== null) {
            this.name = user.displayName;
            this.email=user.email
        }
    },
    methods: {
        async UpdateUser() {
            try {
                const auth = getAuth();
                await updateProfile(auth.currentUser, {
                    displayName: this.Form.name,
                });
                const user = auth.currentUser;
                this.name = user.displayName;
                this.visible=false
            } catch (error) {
                console.log(error);
            }
        },
        Show() {
            this.show = !this.show;
        },
        showModal() {
            this.visible = true;
        },
        GetUrl() {
            this.show = !this.show;
            const storage = getStorage();
            const starsRef = ref(storage, "images/blast-vue.zip");
            // Get the download URL
            getDownloadURL(starsRef)
                .then((url) => {
                    this.url = url;
                    console.log(url);
                })
                .catch((error) => {
                    switch (error.code) {
                        case "storage/object-not-found":
                            break;
                        case "storage/unauthorized":
                            break;
                        case "storage/canceled":
                            break;
                        case "storage/unknown":
                            break;
                    }
                });
        },
        
    },
    props: [],
};
</script>

<style scoped></style>
