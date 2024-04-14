<script setup>
    import { ref, computed, onMounted } from 'vue'
    import { useRouter } from 'vue-router';

    import SectionWrapper from '@/components/SectionWrapper.vue'
    import Container from '@/components/Container.vue'
    import Row from '@/components/Row.vue'
    import Column from '@/components/Column.vue'
    import FormComponent from '@/components/UIElements/FormComponent.vue'


    //VUE PRIME
    import InputText from 'primevue/inputtext';
    import Button from 'primevue/button';

    const router = useRouter();
    const loginFn = () => {
        var expires = ""
        let days = 30
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
        document.cookie = "authToken" + "=" + ("authValue") + expires + "; path=/";

        router.push('/');
    }

    //Register
    const isRegister = ref(false)
    const register = ref(
        {
            password: ''
        }
    )
    const passwordRules = {
        minLength: ref(false),
        hasUpperCase: ref(false),
        hasLowerCase: ref(false),
        hasSpecialChar: ref(false)
    };
    const validatePassword = (password) => {
        checkMinLength(password);
        checkUpperCase(password);
        checkLowerCase(password);
        checkSpecialChar(password);
    };
    //ADD / CHANGE BELOW CONDITIONS
    const checkMinLength = (password) => {
        passwordRules.minLength = password.length >= 8;
    };
    const checkUpperCase = (password) => {
        passwordRules.hasUpperCase = /[A-Z]/.test(password);
    };
    const checkLowerCase = (password) => {
        passwordRules.hasLowerCase = /[a-z]/.test(password);
    };
    const checkSpecialChar = (password) => {
        passwordRules.hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    };


onMounted(() => {
    validatePassword(register.value.password);
});
</script>
<template>
    <SectionWrapper id="login-wrapper" additional_class="h-full">
        <Container additional_class="h-full">
            <Row additional_class="items-center h-full">
                <Column additional_class="max-w-md mx-auto">
                    <FormComponent>
                        <div v-if="!isRegister" class="my-gap-md">
                            <h2>Login</h2>
                            <div>
                                <label>Username</label>
                                <InputText class="block p-2 w-full" type="text" />
                            </div>
                            <div>
                                <label>Password</label>
                                <InputText class="block p-2 w-full" type="text" />
                            </div>
                            <p class="text-xs">Forgot password</p>
                            <div class="flex mx-gap-md">
                                <Button 
                                    class="tbs-btn-secondary" 
                                    label="Login"
                                    @click="loginFn()"
                                />
                                <Button class="tbs-btn-primary" label="Register" @click="isRegister = true" />
                            </div>
                        </div>


                        <div v-if="isRegister" class="my-gap-md">
                            <h2>Register</h2>
                            <div>
                                <label>First Name</label>
                                <InputText class="block p-2 w-full" type="text" />
                            </div>
                            <div>
                                <label>Last Name</label>
                                <InputText class="block p-2 w-full" type="text" />
                            </div>
                            <div>
                                <label>Password</label>
                                <InputText v-model="register.password" class="block p-2 w-full" type="password" @input="validatePassword(register.password)" />
                                <div class="password-rules">
                                    <div>
                                        <small>Must be 8 characters <span v-if="passwordRules.minLength">✔</span></small>
                                    </div>
                                    <div>
                                        <small>Must have at least 1 Uppercase <span  v-if="passwordRules.hasUpperCase">✔</span></small>
                                    </div>
                                    <div>
                                        <small>Must have at least 1 Lowercase <span v-if="passwordRules.hasLowerCase">✔</span></small>
                                    </div>
                                    <div>
                                        <small>Must have at least 1 Special Character <span  v-if="passwordRules.hasSpecialChar">✔</span></small>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label>Confirm Password</label>
                                <InputText class="block p-2 w-full" type="text" />
                            </div>
                            <div class="flex mx-gap-md">
                                <Button class="tbs-btn-secondary" label="Sign Up" />
                                <Button class="tbs-btn-primary" label="Cancel" @click="isRegister = false" />
                            </div>
                        </div>
                    </FormComponent>
                </Column>
            </Row>
        </Container>
    </SectionWrapper>

    <!-- BACKGROUND ANIMATION -->
    <ul class="floating-squares">
        <li v-for="n in 10" />
    </ul>
</template>