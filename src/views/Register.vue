<template>
  <v-container fluid>
    <div class="container">
      <div class="row justify-content-center">
        <div class="text-center mt-5 ">
          <h1 class="font-weight-light">Register</h1>
          <v-divider class="mt-5"></v-divider>
          <br>

        </div>
        <v-container>
          <div class="card-body">
            <div v-if="error" class="alert alert-danger">{{error}}</div>
            <v-card elevation="5" width="60%" class="mx-auto rounded-xl">
              <v-container fluid>
                <form action="#" @submit.prevent="Register">
                  <v-text-field id="name" name="name" class="mx-4" variant="solo" label="Enter your name"
                    v-model="name" required>
                  </v-text-field>

                  <v-text-field id="email" class="mx-4" variant="solo" label="Enter your e-mail" v-model="email"
                    type="email" required>
                  </v-text-field>

                  <v-text-field id="password" class="mx-4" variant="solo" label="Enter your password" v-model="password"
                    type="password" required>
                  </v-text-field>

                  <div class="text-center mt-5">
                    <v-btn type="submit">Register</v-btn>
                  </div>

                </form>
              </v-container>
            </v-card>
          </div>

        </v-container>


      </div>

    </div>

  </v-container>
</template>


<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  name: "RegisterComponent",
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const error = ref(null)
    const store = useStore()
    const router = useRouter()
    const Register = async () => {
      try {
        await store.dispatch('register', {
          email: email.value,
          password: password.value,
          name: name.value
        })
        router.push('/')
      }
      catch (err) {
        error.value = err.message
      }
    }
    return { Register, name, email, password, error }
  }
};
</script>