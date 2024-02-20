import HoMe from "./components/Home.vue";
import SingUp from "./components/SingUp";
import { createRouter, createWebHistory } from "vue-router";
import Login from './components/Login.vue'
import Update from './components/Update.vue'
import AboutForm from './components/AboutForm.vue'
import guideTorue from './components/guideTorue.vue'
import AddForm from './components/AddForm.vue'
import PlanTarife from './components/PlanTarife.vue'

const routes = [
  {
    name: "HoMe",
    component: HoMe,
    path: "/",
  
  },
  {
    name: "SingUp",
    component: SingUp,
    path: "/sing-up",
  },
  {
    name: "Login",
    component: Login,
    path: "/login",
  },
  {
    name: "Update",
    component: Update,
    path: "/update/:id",
  },
  {
    name: "AboutForm",
    component: AboutForm,
    path: "/AboutForm",
  },
  {
    name: "guideTorue",
    component: guideTorue,
    path: "/guideTorue",
  },
  {
    name: "AddForm",
    component: AddForm,
    path: "/AddForm",
  },
  {
    name: "PlanTarife",
    component: PlanTarife,
    path: "/PlanTarife",
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
