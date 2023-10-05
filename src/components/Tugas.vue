<template>
    <div>
        <b-container>
            <div class="float-start">
                <router-link to="/Home">
                    <b-button class="btn btn-sm" variant="success">Back</b-button>
                </router-link>
            </div>&nbsp;
            <div class="float-end">
                <b-button class="btn-sm" @click="showCreateModal" variant="primary">Create Item</b-button>
            </div>
        </b-container>

        <b-container>
            <b-table :items="data" :fields="fields_table">
                <template v-slot:cell(no)="row">
                    <p>{{ ++row.index }}</p>
                </template>
                <template v-slot:cell(actions)="row">
                    <!-- <b-button @click="editItem(row.item)" variant="info">Edit</b-button> -->
                    <b-button size="sm" @click="seeDetail(row.item)" variant="info">Detail</b-button> &nbsp;
                    <b-button size="sm" @click="deleteItem(row.item)" variant="danger">Delete</b-button>
                </template>
            </b-table>
        </b-container>
        <b-container>
            <div class="float-end">
                <p>Total Employee : {{ total_data }}</p>
            </div>
        </b-container>

        <b-modal v-model="createModal" title="Create Item">
            <template #modal-footer>
                <div>
                    <b-button size="sm" @click="createItem" variant="primary">Create</b-button>&nbsp;
                    <b-button size="sm" @click="createModal = false" variant="secondary">Cancel</b-button>
                </div>
            </template>

            <template>
                <!-- <b-alert show variant="danger" v-if="!this.isNameValid">Danger Alert</b-alert> -->
                <form @submit.stop.prevent="createItem">
                    <b-form-group label="Name">
                        <b-form-input v-model="newItem.name" :state="validateItem('name')"></b-form-input>
                        <div class="invalid-feedback" :state="validateItem('name')">Name is
                            required.</div>
                    </b-form-group>
                    <b-form-group label="Age">
                        <b-form-input v-model="newItem.age" type="number" :state="validateItem('age')"></b-form-input>
                        <div class="invalid-feedback" :state="validateItem('age')">Age is
                            required.</div>
                    </b-form-group>
                    <b-form-group label="Job Description">
                        <b-form-input v-model="newItem.jobDescription" :state="validateItem('job')"></b-form-input>
                        <div class="invalid-feedback" :state="validateItem('job')">Job Description is
                            required.</div>
                    </b-form-group>
                </form>
            </template>
        </b-modal>

        <b-modal v-model="detailModal" title="Detail">
            <template>
                <div>
                    <p><strong>Name:</strong> {{ detailItem.name }}</p>
                    <p><strong>Age:</strong> {{ detailItem.age }}</p>
                    <p><strong>Job Description:</strong> {{ detailItem.jobDescription }}</p>
                </div>
            </template>
            <template #modal-footer>
                <div>
                    <b-button class="mt-3" block @click="detailModal = false" variant="primary">Ok</b-button>
                </div>
            </template>
        </b-modal>
    </div>
</template>
<script>
export default {
    name: 'TestPage',
    data() {
        return {
            data: [
                {
                    name: 'John Doe',
                    age: 34,
                    jobDescription: 'Gardener',
                },
                {
                    name: 'Emily',
                    age: 30,
                    jobDescription: 'Data Analyst',
                },
            ],
            newItem: {
                name: '',
                age: 0,
                jobDescription: '',
            },
            isNameValid: false,
            isAgeValid: false,
            isJobDescriptionValid: false,
            isAllValidated: false,
            createModal: false,
            detailModal: false,
            detailItem: {},
            fields_table: [
                { key: 'no', label: 'No' },
                { key: 'name', label: 'Name' },
                { key: 'age', label: 'Age' },
                { key: 'jobDescription', label: 'Job Description' },
                { key: 'actions', label: 'Actions' },
            ],
        };
    },
    methods: {
        showCreateModal() {
            this.createModal = true;
        },
        validateItem(key) {
            this.isAllValidated = false;
            if (this.isNameValid && this.isAgeValid && this.isJobDescriptionValid) {
                this.isAllValidated = true;
            }

            if (key == 'name') {
                this.isNameValid = !!this.newItem.name;
                return this.isNameValid;
            } else if (key == 'age') {
                this.isAgeValid = !!this.newItem.age;
                return this.isAgeValid;
            } else if (key == 'job') {
                this.isJobDescriptionValid = !!this.newItem.jobDescription;
                return this.isJobDescriptionValid;
            } else {
                return false;
            }
        },
        createItem() {

            if (this.isAllValidated) {
                this.data.push({ ...this.newItem });
                this.newItem = { name: '', age: '', jobDescription: '' };
                this.createModal = false;
            }
        },
        deleteItem(item) {
            const index = this.data.indexOf(item);
            if (index !== -1) {
                this.data.splice(index, 1);
            }
        },
        seeDetail(item) {
            this.detailItem = { ...item };
            this.detailModal = true;
        }
    }, watch: {
        detailItem: function (detail_newItem, detail_oldItem) {
            console.log('Nilai baru:', detail_newItem);
            console.log('Nilai lama:', detail_oldItem);
        }
    },
    computed: {
        total_data() {
            return this.data.length;
        }
    }

};
</script>