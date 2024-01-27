<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="card card-table">
                    <div class="card-body">
                        <div class="page-header">
                            <div class="row align-items-center">
                                <div class="col">
                                    <h3 class="page-title">Departments</h3>
                                </div>
                                <div
                                    class="col-auto text-end float-end ms-auto download-grp"
                                >
                                    <a
                                        href="#"
                                        class="btn btn-outline-primary me-2"
                                        ><i class="fas fa-download"></i>
                                        Download</a
                                    >
                                    <a
                                        href="add-department.html"
                                        class="btn btn-primary"
                                        ><i class="fas fa-plus"></i
                                    ></a>
                                </div>
                            </div>
                        </div>

                   
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log("Component mounted.");
    },
};
</script>
