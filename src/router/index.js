import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import HomePage from "@/components/HomePage";
import Header from "@/components/Header";
import Carouse from "@/components/Carouse";
import MovieList from "@/components/MovieList";
import MoviePage from "@/components/MoviePage";
import MovieDetail from "@/components/MovieDetail";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      alias: "/home",
      components: {
        default: HomePage,
        carouse: Carouse,
        movieList: MovieList
      },
      beforeLeave(to, form, next) {
        var anwser = window.confirm("确定要离开吗");
        if (anwser) {
          next();
        } else {
          next(false);
        }
      }
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/moviePage",
      name: "moviePage",
      component: MoviePage
    },
    {
      path: "/movieDetail",
      name: "movieDetail",
      component: MovieDetail
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 100 };
    }
  }
});
