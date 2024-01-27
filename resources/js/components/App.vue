<template lang="">
    <div>
        <Aside></Aside>
        <Navbar></Navbar>
        <div class="page-wrapper">
            <div class="content container-fluid">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import Aside from "./Aside.vue";
import Navbar from "./Navbar.vue";
export default {
    components: {
        Aside,
        Navbar,
    },
};
</script>
